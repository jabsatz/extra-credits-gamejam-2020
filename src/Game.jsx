import React, { useState, useEffect, useCallback } from "react";
import Menu from "./Menu/Menu";
import data from "./data";
import Intro from "./Intro/Intro";
import BattleWrapper from "./Battle/BattleWrapper";
import { Howler } from "howler";

export function useTransitionState(initialState) {
  const [state, setState] = useState(initialState);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    let id1;
    if (transition) {
      id1 = setTimeout(() => {
        setTransition(false);
      }, 1000);
    }
    return () => {
      clearTimeout(id1);
    };
  }, [transition]);

  const transitionTo = useCallback(
    (newState) =>
      new Promise((resolve) => {
        if (!transition) setTransition(true);
        setTimeout(() => {
          setState(newState);
          resolve();
        }, 500);
      }),
    [transition]
  );

  return [state, transitionTo, transition];
}

const useLocalStorageObjectState = (key, initialState = {}) => {
  const valueString = window.localStorage.getItem(key);
  const valueArray = valueString ? JSON.parse(valueString) : initialState;
  const [valueState, setValueState] = useState(valueArray);

  useEffect(() => {
    if (valueState.length === 0) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, JSON.stringify(valueState));
  }, [key, valueState]);

  return [valueState, setValueState];
};

const useLocalStorageArrayState = (key, initialState) => {
  const valueString = window.localStorage.getItem(key);
  const valueArray = valueString ? valueString.split(";") : initialState;
  const [valueState, setValueState] = useState(valueArray);

  useEffect(() => {
    if (valueState.length === 0) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, valueState.join(";"));
  }, [key, valueState]);

  return [valueState, setValueState];
};

function Game() {
  const [monk, setMonk] = useLocalStorageObjectState("monk", data.monk);
  const [
    availableMissionIds,
    setAvailableMissionIds,
  ] = useLocalStorageArrayState("missions", [0]);
  const [gameScreen, setGameScreen, transition] = useTransitionState({
    type: "intro",
  });
  const [muted, setMuted] = useState(localStorage.getItem("muted") === "true");
  const missions = availableMissionIds.map((id) => data.missionPool[id]);

  useEffect(() => {
    if (muted) {
      Howler.volume(0);
      localStorage.setItem("muted", "true");
    } else {
      Howler.volume(1);
      localStorage.setItem("muted", "false");
    }
  }, [muted]);

  let currentScreen;

  switch (gameScreen.type) {
    case "intro":
      currentScreen = (
        <Intro
          onIntroEnd={() => {
            localStorage.setItem("introComplete", "true");
            setGameScreen({ type: "menu" });
          }}
        />
      );
      break;
    case "mission":
      currentScreen = (
        <BattleWrapper
          monk={monk}
          mission={gameScreen.mission}
          onMissionEnd={(results) => {
            setGameScreen({ type: "menu" });
            if (results.monkDead) {
              return;
            }
            let newItems = [];
            let newSpells = [];
            let finalItems = [...monk.items];
            let finalSpells = [...monk.spells];
            let finalMissionsBeaten = [...monk.missionBeaten];

            if (results.usedItems) {
              let oldItems = monk.items;
              let usedItems = [];
              let used;
              results.usedItems.forEach(function (item) {
                usedItems.push(item);
              });
              for (let i = 0; i < oldItems.length; i++) {
                used = false;
                for (let j = 0; j < usedItems.length; j++) {
                  if (usedItems[j].name === oldItems[i].name) {
                    used = true;
                    break;
                  }
                }
                if (!used) {
                  newItems.push(oldItems[i]);
                }
              }
              if (results.rewards?.items) {
                finalItems = [...newItems, ...results.rewards.items];
              } else {
                finalItems = newItems;
              }
            } else {
              if (results.rewards?.items) {
                finalItems = [...monk.items, ...results.rewards.items];
              }
            }
            if (
              results.rewards &&
              (results.mission.type !== "protect" ||
                (results.mission.type === "protect" &&
                  results.missionObjectivePassed > 0))
            ) {
              if (results.rewards.spells) {
                // here we check if the monk already has these spells
                newSpells = [];
                results.rewards.spells.forEach((spell) => {
                  let monkHasIt = false;
                  monk.spells.forEach((monkSpell) => {
                    if (monkSpell.name === spell.name) {
                      monkHasIt = true;
                    }
                  });
                  if (!monkHasIt) newSpells.push(spell);
                });
                finalSpells = [...monk.spells, ...newSpells];
              }
            }
            // beating the mission may unlock others
            finalMissionsBeaten = [...monk.missionBeaten, results.mission.name];
            let missionsNumber = Object.keys(data.missionPool).length;
            let newAvailableMissionIds = [];
            for (let i = 0; i < missionsNumber; i++) {
              if (!finalMissionsBeaten.includes(i)) {
                // Not beaten yet
                let unlocked = true;
                if (data.missionPool[i].unlockedBy) {
                  data.missionPool[i].unlockedBy.forEach(function (
                    missionUnlocker
                  ) {
                    if (!finalMissionsBeaten.includes(missionUnlocker)) {
                      unlocked = false;
                    }
                  });
                  if (unlocked) newAvailableMissionIds.push(i);
                }
              }
            }
            setAvailableMissionIds([...newAvailableMissionIds]);
            setMonk({
              ...monk,
              spells: [...finalSpells],
              items: [...finalItems],
              missionBeaten: [...finalMissionsBeaten],
            });
          }}
        />
      );
      break;
    case "menu":
    default:
      currentScreen = (
        <Menu
          onMissionStart={(mission) => {
            setGameScreen({ type: "mission", mission });
          }}
          missions={missions}
          monk={monk}
        />
      );
      break;
  }

  return (
    <>
      <div className="game-app">
        {transition && <div className="transition" />}
        {currentScreen}
      </div>
      <div id="portal-root">
        <button className="mute-button" onClick={() => setMuted(!muted)}>
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
    </>
  );
}

export default Game;
