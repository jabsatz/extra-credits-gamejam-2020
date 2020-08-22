import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Dropdown.scss";

export default function Dropdown({ title, options = [] }) {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(null);
  const disabled = options.length === 0;

  const buttonRef = useRef(null);
  const boundingRect = buttonRef.current
    ? buttonRef.current.getBoundingClientRect()
    : {};

  const subMenuItem = document.getElementById(subMenu);
  const subMenuBoundingRect = subMenuItem
    ? subMenuItem.getBoundingClientRect()
    : {};
  const subMenuData = options.find((option) => option.name === subMenu);

  return (
    <button
      ref={buttonRef}
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
      disabled={disabled}
      className="dropdown-button"
    >
      <span>{title}</span>
      {open &&
        createPortal(
          <>
            <div
              className="dropdown-portal"
              style={{
                top: boundingRect.bottom + window.scrollY,
                left: boundingRect.left + window.scrollX,
              }}
            >
              <ul className="dropdown-portal__list">
                {options.map((option) => (
                  <li
                    key={option.name}
                    id={option.name}
                    className="dropdown-portal__list__item"
                    onMouseOver={() => setSubMenu(option.name)}
                  >
                    {option.displayName}
                  </li>
                ))}
              </ul>
            </div>
            {subMenuItem && (
              <div
                className="dropdown-portal__submenu"
                style={{
                  position: "absolute",
                  top: subMenuBoundingRect.top + window.scrollY,
                  left: subMenuBoundingRect.right + window.scrollX + 21,
                }}
              >
                {subMenuData.description}
              </div>
            )}
          </>,
          document.getElementById("portal-root")
        )}
    </button>
  );
}
