import monsterPrototype from "./assets/monster_prototype.png";
import akaManto from "./assets/aka_manto_portrait.png";
import akakuchi from "./assets/akakuchi.png";
import nekomata from "./assets/nekomata.png";
import nureOnna from "./assets/nureOnna.png";
import tsuchigumo from "./assets/tsuchigumo.png";
import ushiOni from "./assets/ushiOni.png";
import yamaUba from "./assets/yamaUba.png";
import yumeNoSeirei from "./assets/yumeNoSeirei.png";
import yurei from "./assets/yurei.png";
import akakuchiPortrait from "./assets/akakuchi_portrait.png";
import nekomataPortrait from "./assets/nekomata_portrait.png";
import nureOnnaPortrait from "./assets/nureOnna_portrait.png";
import tsuchigumoPortrait from "./assets/tsuchigumo_portrait.png";
import ushiOniPortrait from "./assets/ushiOni_portrait.png";
import yamaUbaPortrait from "./assets/yamaUba_portrait.png";
import yumeNoSeireiPortrait from "./assets/yumeNoSeirei_portrait.png";
import yureiPortrait from "./assets/yurei_portrait.png";

const spells = {
  roku: {
    name: "roku",
    level: 1,
    displayName: "Roku",
    damage: 15,
    special: "",
    condition: "fire",
    description: "Small yet damaging sparks emanate from the monk",
  },
  odan_roku: {
    name: "odan_roku",
    level: 2,
    displayName: "Odan Roku",
    damage: 37,
    special: "",
    condition: "fire",
    description: "A burst of fire emanates from the monk",
  },
  odan_roku_goten: {
    name: "odan_roku_goten",
    level: 3,
    displayName: "Odan Roku Goten",
    damage: 72,
    special: "",
    condition: "fire",
    description: "The king of all flames erupts from the monk",
  },
  mamoku: {
    name: "mamoku",
    level: 1,
    displayName: "Mamoku",
    damage: 0,
    special: "defense_response",
    condition: "defense",
    description: "A simple ward protects the monk",
  },
  shime_mamoku: {
    name: "shime_mamoku",
    level: 2,
    displayName: "Shime Mamoku",
    damage: 0,
    special: "defense_response",
    condition: "defense",
    description: "A ward made of many sacred words protects the monk",
  },
  odan_shime_mamoku: {
    name: "odan_shime_mamoku",
    level: 3,
    displayName: "Odan Shime Mamoku",
    damage: 0,
    special: "defense_response",
    condition: "defense",
    description:
      "A grand sacred ward protects the monk from the most powerful of magics",
  },
  katara: {
    name: "katara",
    level: 1,
    displayName: "Katara",
    damage: 12,
    special: "",
    condition: "water",
    description: "Magically imbued water drops emanate from the monk",
  },
  odan_katara: {
    name: "odan_katara",
    level: 2,
    displayName: "Odan Katara",
    damage: 30,
    special: "",
    condition: "water",
    description: "A powerful stream of water emanates from the monk",
  },
  odan_katara_goten: {
    name: "odan_katara_goten",
    level: 3,
    displayName: "Odan Katara Goten",
    damage: 64,
    special: "",
    condition: "water",
    description:
      "A single droplet of water with the strength of a tremendous wave emanates from the monk",
  },
  watama: {
    name: "watama",
    level: 1,
    displayName: "Watama",
    damage: 13,
    special: "",
    condition: "psi",
    description: "A spirit of headache infiltrates the monster's thoughts",
  },
  iteru_watama: {
    name: "iteru_watama",
    level: 2,
    displayName: "Iteru Watama",
    damage: 33,
    special: "",
    condition: "psi",
    description: "An evil spirit of migraine infiltrates the monster's mind",
  },
  gomoku_iteru_watama: {
    name: "gomoku_iteru_watama",
    level: 3,
    displayName: "Gomoku Iteru Watama",
    damage: 59,
    special: "",
    condition: "psi",
    description:
      "A sealed demon infiltrates the monster's mind, causing excruciating pain",
  },
  osumaki: {
    name: "osumaki",
    level: 1,
    displayName: "Osumaki",
    damage: 7,
    special: "push",
    condition: "kinetic",
    description:
      "The monk imbues the air with some energy, pushing the monster back",
  },
  torane_osumaki: {
    name: "torane_osumaki",
    level: 2,
    displayName: "Torane Osumaki",
    damage: 18,
    special: "push",
    condition: "kinetic",
    description:
      "The monk imbues the air with plenty of energy, pushing the monster back",
  },
  torane_osumaki_tsuyi: {
    name: "torane_osumaki_tsuyi",
    level: 3,
    displayName: "Torane Osumaki Tsuyi",
    damage: 30,
    special: "push",
    condition: "kinetic",
    description:
      "The monk imbues the air with a huge amount of energy, pushing the monster back",
  },
  himaki: {
    name: "himaki",
    level: 1,
    displayName: "Himaki",
    damage: 7,
    special: "pull",
    condition: "kinetic",
    description:
      "The monk slightly pulls the strings of fate, pulling the monster closer",
  },
  robae_himaki: {
    name: "robae_himaki",
    level: 2,
    displayName: "Robae Himaki",
    damage: 18,
    special: "pull",
    condition: "kinetic",
    description:
      "The monk strongly pulls the strings of fate, pulling the monster closer",
  },
  robae_himaki_tsuyi: {
    name: "robae_himaki_tsuyi",
    level: 3,
    displayName: "Robae Himaki Tsuyi",
    damage: 30,
    special: "pull",
    condition: "kinetic",
    description:
      "The monk pulls the strings of fate with all his might, pulling the monster closer",
  },
  nakae: {
    name: "nakae",
    level: 1,
    displayName: "Nakae",
    damage: 9,
    special: "",
    condition: "kinetic",
    description:
      "The monk imbues the air with some power, releasing it suddenly in the form of a spiritual punch",
  },
  odan_nakae: {
    name: "odan_nakae",
    level: 2,
    displayName: "Odan Nakae",
    damage: 23,
    special: "",
    condition: "kinetic",
    description:
      "The monk imbues the air with a fair amount of power, releasing it suddenly in the form of a strong spiritual punch",
  },
  odan_nakae_tsuyi: {
    name: "odan_nakae_tsuyi",
    level: 3,
    displayName: "Odan Nakae Tsuyi",
    damage: 50,
    special: "",
    condition: "kinetic",
    description:
      "The monk imbues the air with a huge amount of power, releasing it suddenly in the form of an extremely powerful spiritual punch",
  },
  kurae: {
    name: "kurae",
    level: 1,
    displayName: "Kurae",
    damage: 15,
    special: "",
    condition: "cutting",
    description:
      "The monk shapes some of energy in an edge shaped form, causing cuts in the monster",
  },
  odan_kurae: {
    name: "odan_kurae",
    level: 2,
    displayName: "Odan Kurae",
    damage: 35,
    special: "",
    condition: "cutting",
    description:
      "The monk shapes a fair amount of energy in an edge shaped form, causing serious cuts in the monster",
  },
  odan_kurae_tsuyi: {
    name: "odan_kurae_tsuyi",
    level: 3,
    displayName: "Odan Kurae Tsuyi",
    damage: 64,
    special: "",
    condition: "cutting",
    description:
      "The monk shapes a huge amount of energy in an edge shaped form, causing terrible cuts in the monster",
  },
  tagasu: {
    name: "tagasu",
    level: 1,
    displayName: "Tagasu",
    damage: 0,
    special: "",
    condition: "boost",
    description:
      "The monk sets a small amount of spiritual energy aside to supplement his next spell",
  },
  shime_tagasu: {
    name: "shime_tagasu",
    level: 2,
    displayName: "Shime Tagasu",
    damage: 0,
    special: "",
    condition: "boost",
    description:
      "The monk sets a fair amount of spiritual energy aside to supplement his next spell",
  },
  odan_shime_tagasu: {
    name: "odan_shime_tagasu",
    level: 3,
    displayName: "Odan Shime Tagasu",
    damage: 0,
    special: "",
    condition: "boost",
    description:
      "The monk sets a huge amount of spiritual energy aside to supplement his next spell",
  },
  gisoku: {
    name: "gisoku",
    level: 1,
    displayName: "Gisoku",
    damage: 0,
    special: "defense_mirror",
    condition: "mirror",
    description:
      "The monk exposes a small fraction of his soul, binding it with the monster's. Their pain is briefly one and the same",
  },
  odan_gisoku: {
    name: "odan_gisoku",
    level: 2,
    displayName: "Odan Gisoku",
    damage: 0,
    special: "defense_mirror",
    condition: "mirror",
    description:
      "The monk exposes a fair fraction of his soul, binding it with the monster's. Their pain is briefly one and the same",
  },
  odan_shime_gisoku: {
    name: "odan_shime_gisoku",
    level: 3,
    displayName: "Odan Shime Gisoku",
    damage: 0,
    special: "defense_mirror",
    condition: "mirror",
    description:
      "The monk exposes a large fraction of his soul, binding it with the monster's. Their pain is briefly one and the same",
  },
  chisayu: {
    name: "chisayu",
    level: 1,
    displayName: "Chisayu",
    damage: 0,
    special: "self_heal",
    condition: "heal",
    description:
      "The monk calls upon a few friendly spirits, asking them to heal his wounds",
  },
  odan_chisayu: {
    name: "odan_chisayu",
    level: 2,
    displayName: "Odan Chisayu",
    damage: 0,
    special: "self_heal",
    condition: "heal",
    description:
      "The monk calls upon a considerable amount of friendly spirits, asking them to heal his wounds",
  },
  odan_chisayu_goten: {
    name: "odan_chisayu_goten",
    level: 3,
    displayName: "Odan Chisayu Goten",
    damage: 0,
    special: "self_heal",
    condition: "heal",
    description:
      "The monk calls upon a huge amount of friendly spirits, asking them to heal his wounds",
  },
  itochi_nio_sasu_yosu_itsuio: {
    name: "itochi_nio_sasu_yosu_itsuio",
    level: 3,
    displayName: "Itochi Nio Sasu Yosu Itsuio",
    damage: 0,
    special: "seal_monster",
    condition: "seal",
    description:
      "The monk fills the seal with spiritual power, preparing it to chain the monster within it",
  },
};

const items = {
  watama_kimono: {
    name: "watama_kimono",
    displayName: "Watama kimono",
    spell: spells.iteru_watama,
  },
  odan_kurae_tsuyi_scroll: {
    name: "odan_kurae_tsuyi_scroll",
    displayName: "Odan kurae tsuyi scroll",
    spell: spells.odan_kurae_tsuyi,
  },
};

const monsters = {
  monster_prototype: {
    name: "monster_prototype",
    displayName: "Monster Prototype",
    speed: 0.026,
    hp: 40,
    attackchance: 0.15,
    msperkeystroke: 750,
    spells: [{ spell: spells.roku, chances: 1 }],
    sprite: monsterPrototype,
  },
  aka_manto: {
    name: "aka_manto",
    displayName: "Aka Manto",
    speed: 0.045,
    hp: 400,
    attackchance: 0.13,
    msperkeystroke: 250,
    spells: [
      { spell: spells.odan_nakae, chances: 0.7 },
      { spell: spells.odan_kurae_tsuyi, chances: 0.3 },
    ],
    sprite: monsterPrototype,
  },
  akakuchi: {
    name: "akakuchi",
    displayName: "Akakuchi",
    speed: 0.055,
    hp: 650,
    attackchance: 0.1,
    msperkeystroke: 300,
    spells: [
      { spell: spells.odan_nakae, chances: 0.7 },
      { spell: spells.odan_nakae_tsuyi, chances: 0.3 },
    ],
    sprite: akakuchi,
  },
  nekomata: {
    name: "nekomata",
    displayName: "Nekomata",
    speed: 0.04,
    hp: 350,
    attackchance: 0.13,
    msperkeystroke: 250,
    spells: [
      { spell: spells.odan_roku, chances: 0.8 },
      { spell: spells.odan_roku_goten, chances: 0.2 },
    ],
    sprite: nekomata,
  },
  nure_onna: {
    name: "nure_onna",
    displayName: "Nure Onna",
    speed: 0.015,
    hp: 750,
    attackchance: 0.13,
    msperkeystroke: 375,
    spells: [
      { spell: spells.kurae, chances: 0.9 },
      { spell: spells.odan_kurae_tsuyi, chances: 0.1 },
    ],
    sprite: nureOnna,
  },
  tsuchigumo: {
    name: "tsuchigumo",
    displayName: "Tsuchigumo",
    speed: 0.03,
    hp: 500,
    attackchance: 0.1,
    msperkeystroke: 200,
    spells: [
      { spell: spells.odan_shime_tagasu, chances: 0.1 },
      { spell: spells.odan_kurae_tsuyi, chances: 0.9 },
    ],
    sprite: tsuchigumo,
  },
  ushi_oni: {
    name: "ushi_oni",
    displayName: "Ushi Oni",
    speed: 0.028,
    hp: 575,
    attackchance: 0.14,
    msperkeystroke: 300,
    spells: [
      { spell: spells.odan_katara, chances: 0.55 },
      { spell: spells.iteru_watama, chances: 0.45 },
    ],
    sprite: ushiOni,
  },
  yama_uba: {
    name: "yama_uba",
    displayName: "Yama Uba",
    speed: 0.07,
    hp: 325,
    attackchance: 0.21,
    msperkeystroke: 330,
    spells: [
      { spell: spells.kurae, chances: 0.8 },
      { spell: spells.tagasu, chances: 0.2 },
    ],
    sprite: yamaUba,
  },
  yume_no_seirei: {
    name: "yume_no_seirei",
    displayName: "Yume no Seirei",
    speed: 0.09,
    hp: 950,
    attackchance: 0.1,
    msperkeystroke: 350,
    spells: [
      { spell: spells.odan_roku, chances: 0.32 },
      { spell: spells.odan_kurae, chances: 0.33 },
      { spell: spells.odan_katara, chances: 0.35 },
    ],
    sprite: yumeNoSeirei,
  },
  yurei: {
    name: "yurei",
    displayName: "Yurei",
    speed: 0.055,
    hp: 425,
    attackchance: 0.12,
    msperkeystroke: 225,
    spells: [
      { spell: spells.odan_katara_goten, chances: 0.4 },
      { spell: spells.gomoku_iteru_watama, chances: 0.6 },
    ],
    sprite: yurei,
  },
};

const utils = {
  minStartingDistance: 4,
  maxStartingDistance: 7,
  defenseMultiplier: 0.3,
  mirrorMultiplier: 0.6,
  healAmount: 100,
};

const missionPool = {
  0: {
    name: 0,
    unlockedBy: [],
    monster: monsters.monster_prototype,
    image: akaManto,
    title: "A monster is roaming my house",
    description: "A monster has settled in my living room! Please take care of not burning my house to the ground",
    displayObjective: "House",
    conditions: ["fire"],
    objectiveHP: 800,
    type: "protect",
    rewards: { 
        spells: [spells.odan_roku],
    },
    },
    
    1: {
    name: 1,
    unlockedBy: [0],
    monster: monsters.tsuchigumo,
    image: tsuchigumoPortrait,
    title: "Something has vandalized my shop!",
    description: "Some sort of monster is making a mess in my shop every day. Please take care of not making too much noise, my customers are nearby!",
    displayObjective: "Noise",
    conditions: ["kinetic"],
    objectiveHP: 450,
    type: "protect",
    rewards: { 
        spells: [spells.shime_mamoku],
    },
    },
    
    2: {
    name: 2,
    unlockedBy: [0],
    monster: monsters.ushi_oni,
    image: ushiOniPortrait,
    title: "Local widow acting strangely",
    description: "A widow has been acting strangely, maybe demons are behind this. Please take care of not upseting her, she's been through enough already",
    displayObjective: "Window",
    conditions: ["psi", "cutting", "fire"],
    objectiveHP: 750,
    type: "protect",
    rewards: { 
        spells: [spells.watama],
    },
    },
    
    3: {
    name: 3,
    unlockedBy: [0],
    monster: monsters.nure_onna,
    image: nureOnnaPortrait,
    title: "Local widow acting strangely",
    description: "A widow has been acting strangely, maybe demons are behind this. Please take care of not upseting her, she's been through enough already",
    displayObjective: "Window",
    conditions: ["psi", "cutting", "fire"],
    objectiveHP: 750,
    type: "protect",
    rewards: { 
        spells: [spells.katara],
    },
    },
    
    4: {
    name: 4,
    unlockedBy: [1, 2, 3],
    monster: monsters.monster_prototype,
    image: akaManto,
    title: "Save my child!",
    description: "My child has been possessed by a demon! Please take care of not harming the possessed body",
    displayObjective: "Possessed",
    conditions: ["fire", "cutting"],
    objectiveHP: 500,
    type: "protect",
    rewards: { 
        spells: [spells.odan_shime_mamoku],
    },
    },
    
    5: {
    name: 5,
    unlockedBy: [1, 2, 3],
    monster: monsters.nure_onna,
    image: nureOnnaPortrait,
    title: "Something has vandalized my shop!",
    description: "Some sort of monster is making a mess in my shop every day. Please take care of not making too much noise, my customers are nearby!",
    displayObjective: "Noise",
    conditions: ["kinetic"],
    objectiveHP: 450,
    type: "protect",
    rewards: { 
        spells: [spells.nakae],
    },
    },
    
    6: {
    name: 6,
    unlockedBy: [1, 2, 3],
    monster: monsters.yurei,
    image: yureiPortrait,
    title: "The library must be saved",
    description: "The library is being haunted by a demon! Kill the demon while taking care of not destroying the library",
    displayObjective: "Books",
    conditions: ["fire", "water"],
    objectiveHP: 650,
    type: "protect",
    rewards: { 
        spells: [spells.tagasu],
    },
    },
    
    7: {
    name: 7,
    unlockedBy: [4, 5, 6],
    monster: monsters.monster_prototype,
    image: akaManto,
    title: "Local widow acting strangely",
    description: "A widow has been acting strangely, maybe demons are behind this. Please take care of not upseting her, she's been through enough already",
    displayObjective: "Window",
    conditions: ["psi", "cutting", "fire"],
    objectiveHP: 750,
    type: "protect",
    rewards: { 
        spells: [spells.kurae],
    },
    },
    
    8: {
    name: 8,
    unlockedBy: [4, 5, 6],
    monster: monsters.nekomata,
    image: nekomataPortrait,
    title: "A monster is roaming my house",
    description: "A monster has settled in my living room! Please take care of not burning my house to the ground",
    displayObjective: "House",
    conditions: ["fire"],
    objectiveHP: 800,
    type: "protect",
    rewards: { 
        spells: [spells.himaki],
    },
    },
    
    9: {
    name: 9,
    unlockedBy: [4, 5, 6],
    monster: monsters.ushi_oni,
    image: ushiOniPortrait,
    title: "Local widow acting strangely",
    description: "A widow has been acting strangely, maybe demons are behind this. Please take care of not upseting her, she's been through enough already",
    displayObjective: "Window",
    conditions: ["psi", "cutting", "fire"],
    objectiveHP: 750,
    type: "protect",
    rewards: { 
        spells: [spells.chisayu],
    },
    },
    
    10: {
    name: 10,
    unlockedBy: [7, 8, 9],
    monster: monsters.nure_onna,
    image: nureOnnaPortrait,
    title: "Save my child!",
    description: "My child has been possessed by a demon! Please take care of not harming the possessed body",
    displayObjective: "Possessed",
    conditions: ["fire", "cutting"],
    objectiveHP: 500,
    type: "protect",
    rewards: { 
        spells: [spells.gisoku],
    },
    },
    
    11: {
    name: 11,
    unlockedBy: [7, 8, 9],
    monster: monsters.monster_prototype,
    image: akaManto,
    title: "A monster is roaming my house",
    description: "A monster has settled in my living room! Please take care of not burning my house to the ground",
    displayObjective: "House",
    conditions: ["fire"],
    objectiveHP: 800,
    type: "protect",
    rewards: { 
        spells: [spells.odan_katara],
    },
    },
    
    12: {
    name: 12,
    unlockedBy: [7, 8, 9],
    monster: monsters.monster_prototype,
    image: akaManto,
    title: "The library must be saved",
    description: "The library is being haunted by a demon! Kill the demon while taking care of not destroying the library",
    displayObjective: "Books",
    conditions: ["fire", "water"],
    objectiveHP: 650,
    type: "protect",
    rewards: { 
        spells: [spells.iteru_watama],
    },
    },
    
    13: {
    name: 13,
    unlockedBy: [10, 11, 12],
    monster: monsters.akakuchi,
    image: akakuchiPortrait,
    title: "A monster is roaming my house",
    description: "A monster has settled in my living room! Please take care of not burning my house to the ground",
    displayObjective: "House",
    conditions: ["fire"],
    objectiveHP: 800,
    type: "protect",
    rewards: { 
        spells: [spells.robae_himaki],
    },
    },
    
    14: {
    name: 14,
    unlockedBy: [10, 11, 12],
    monster: monsters.yume_no_seirei,
    image: yumeNoSeireiPortrait,
    title: "The library must be saved",
    description: "The library is being haunted by a demon! Kill the demon while taking care of not destroying the library",
    displayObjective: "Books",
    conditions: ["fire", "water"],
    objectiveHP: 650,
    type: "protect",
    rewards: { 
        spells: [spells.odan_chisayu],
    },
    },
    
    15: {
    name: 15,
    unlockedBy: [10, 11, 12],
    monster: monsters.nure_onna,
    image: nureOnnaPortrait,
    title: "A monster is roaming my house",
    description: "A monster has settled in my living room! Please take care of not burning my house to the ground",
    displayObjective: "House",
    conditions: ["fire"],
    objectiveHP: 800,
    type: "protect",
    rewards: { 
        spells: [spells.odan_kurae],
    },
    },
    
    16: {
    name: 16,
    unlockedBy: [13, 14, 15],
    monster: monsters.nekomata,
    image: nekomataPortrait,
    title: "Something has vandalized my shop!",
    description: "Some sort of monster is making a mess in my shop every day. Please take care of not making too much noise, my customers are nearby!",
    displayObjective: "Noise",
    conditions: ["kinetic"],
    objectiveHP: 450,
    type: "protect",
    rewards: { 
        spells: [spells.shime_tagasu],
    },
    },
    
    17: {
    name: 17,
    unlockedBy: [13, 14, 15],
    monster: monsters.tsuchigumo,
    image: tsuchigumoPortrait,
    title: "Something has vandalized my shop!",
    description: "Some sort of monster is making a mess in my shop every day. Please take care of not making too much noise, my customers are nearby!",
    displayObjective: "Noise",
    conditions: ["kinetic"],
    objectiveHP: 450,
    type: "protect",
    rewards: { 
        spells: [spells.odan_nakae],
    },
    },
    
    18: {
    name: 18,
    unlockedBy: [13, 14, 15],
    monster: monsters.yama_uba,
    image: yamaUbaPortrait,
    title: "A monster is roaming my house",
    description: "A monster has settled in my living room! Please take care of not burning my house to the ground",
    displayObjective: "House",
    conditions: ["fire"],
    objectiveHP: 800,
    type: "protect",
    rewards: { 
        spells: [spells.torane_osumaki],
    },
    },
    
    19: {
    name: 19,
    unlockedBy: [16, 17, 18],
    monster: monsters.akakuchi,
    image: akakuchiPortrait,
    title: "Save my child!",
    description: "My child has been possessed by a demon! Please take care of not harming the possessed body",
    displayObjective: "Possessed",
    conditions: ["fire", "cutting"],
    objectiveHP: 500,
    type: "protect",
    rewards: { 
        spells: [spells.odan_gisoku],
    },
    },
    
    20: {
    name: 20,
    unlockedBy: [16, 17, 18],
    monster: monsters.yume_no_seirei,
    image: yumeNoSeireiPortrait,
    title: "A monster is roaming my house",
    description: "A monster has settled in my living room! Please take care of not burning my house to the ground",
    displayObjective: "House",
    conditions: ["fire"],
    objectiveHP: 800,
    type: "protect",
    rewards: { 
        spells: [spells.odan_roku_goten],
    },
    },
    
    21: {
    name: 21,
    unlockedBy: [16, 17, 18],
    monster: monsters.nure_onna,
    image: nureOnnaPortrait,
    title: "The library must be saved",
    description: "The library is being haunted by a demon! Kill the demon while taking care of not destroying the library",
    displayObjective: "Books",
    conditions: ["fire", "water"],
    objectiveHP: 650,
    type: "protect",
    rewards: { 
        spells: [spells.itochi_nio_sasu_yosu_itsuio],
    },
    },
    
    22: {
    name: 22,
    unlockedBy: [19, 20, 21],
    monster: monsters.monster_prototype,
    image: akaManto,
    title: "Save my child!",
    description: "My child has been possessed by a demon! Please take care of not harming the possessed body",
    displayObjective: "Possessed",
    conditions: ["fire", "cutting"],
    objectiveHP: 500,
    type: "protect",
    rewards: { 
        spells: [spells.odan_shime_gisoku],
    },
    },
    
    23: {
    name: 23,
    unlockedBy: [19, 20, 21],
    monster: monsters.yurei,
    image: yureiPortrait,
    title: "Local widow acting strangely",
    description: "A widow has been acting strangely, maybe demons are behind this. Please take care of not upseting her, she's been through enough already",
    displayObjective: "Window",
    conditions: ["psi", "cutting", "fire"],
    objectiveHP: 750,
    type: "protect",
    rewards: { 
        spells: [spells.torane_osumaki_tsuyi],
    },
    },
    
    24: {
    name: 24,
    unlockedBy: [19, 20, 21],
    monster: monsters.monster_prototype,
    image: akaManto,
    title: "Something has vandalized my shop!",
    description: "Some sort of monster is making a mess in my shop every day. Please take care of not making too much noise, my customers are nearby!",
    displayObjective: "Noise",
    conditions: ["kinetic"],
    objectiveHP: 450,
    type: "protect",
    rewards: { 
        spells: [spells.gomoku_iteru_watama],
    },
    },
    
    25: {
    name: 25,
    unlockedBy: [22, 23, 24],
    monster: monsters.tsuchigumo,
    image: tsuchigumoPortrait,
    title: "Something has vandalized my shop!",
    description: "Some sort of monster is making a mess in my shop every day. Please take care of not making too much noise, my customers are nearby!",
    displayObjective: "Noise",
    conditions: ["kinetic"],
    objectiveHP: 450,
    type: "protect",
    rewards: { 
        spells: [spells.odan_katara_goten],
    },
    },
    
    26: {
    name: 26,
    unlockedBy: [22, 23, 24],
    monster: monsters.yama_uba,
    image: yamaUbaPortrait,
    title: "The library must be saved",
    description: "The library is being haunted by a demon! Kill the demon while taking care of not destroying the library",
    displayObjective: "Books",
    conditions: ["fire", "water"],
    objectiveHP: 650,
    type: "protect",
    rewards: { 
        spells: [spells.odan_kurae_tsuyi],
    },
    },
    
    27: {
    name: 27,
    unlockedBy: [22, 23, 24],
    monster: monsters.tsuchigumo,
    image: tsuchigumoPortrait,
    title: "Something has vandalized my shop!",
    description: "Some sort of monster is making a mess in my shop every day. Please take care of not making too much noise, my customers are nearby!",
    displayObjective: "Noise",
    conditions: ["kinetic"],
    objectiveHP: 450,
    type: "protect",
    rewards: { 
        spells: [spells.odan_shime_tagasu],
    },
    },
    
    28: {
    name: 28,
    unlockedBy: [25, 26, 27],
    monster: monsters.ushi_oni,
    image: ushiOniPortrait,
    title: "A monster is roaming my house",
    description: "A monster has settled in my living room! Please take care of not burning my house to the ground",
    displayObjective: "House",
    conditions: ["fire"],
    objectiveHP: 800,
    type: "protect",
    rewards: { 
        spells: [spells.odan_nakae_tsuyi],
    },
    },
    
    29: {
    name: 29,
    unlockedBy: [25, 26, 27],
    monster: monsters.yurei,
    image: yureiPortrait,
    title: "Something has vandalized my shop!",
    description: "Some sort of monster is making a mess in my shop every day. Please take care of not making too much noise, my customers are nearby!",
    displayObjective: "Noise",
    conditions: ["kinetic"],
    objectiveHP: 450,
    type: "protect",
    rewards: { 
        spells: [spells.robae_himaki_tsuyi],
    },
    },
    
    30: {
    name: 30,
    unlockedBy: [25, 26, 27],
    monster: monsters.yume_no_seirei,
    image: yumeNoSeireiPortrait,
    title: "Save my child!",
    description: "My child has been possessed by a demon! Please take care of not harming the possessed body",
    displayObjective: "Possessed",
    conditions: ["fire", "cutting"],
    objectiveHP: 500,
    type: "protect",
    rewards: { 
        spells: [spells.odan_chisayu_goten],
    },
    },
}

const missions = [
  missionPool['0'],
];

const monk = {
  hp: 1000,
  spells: [spells.roku, spells.osumaki, spells.mamoku],
  items: [items.watama_kimono],
  missionBeaten: [],
};

export default {
  missionPool,
  monsters,
  missions,
  spells,
  utils,
  monk,
  spellList: Object.values(spells),
};
