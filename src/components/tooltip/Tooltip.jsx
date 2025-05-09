import { useState } from "react";
import { RiInboxLine } from "react-icons/ri";
import './Tooltip.css'

export default function Tooltip({ title, style, color, children }) {
  const [show, setShow] = useState(true)
  const colorMap = {
    default: {
      light: {
        primary: "#FFFFFF",
        secondary: "#111827",
        tertiary: "#6B7280",
      },
      bold: {
        primary: "#262626",
        secondary: "#FFFFFF",
        tertiary: "#C7C7C7",
      },
    },
    blue: {
      light: {
        primary: "#E0E7FF",
        secondary: "#1E40AF",
        tertiary: "#1C51B9",
      },
      bold: {
        primary: "#1E40AF",
        secondary: "#FFFFFF",
        tertiary: "#E8EDFF",
      },
    },
    pink: {
      light: {
        primary: "#FFF3FC",
        secondary: "#A9229B",
        tertiary: "#C7369E",
      },
      bold: {
        primary: "#A9229B",
        secondary: "#FFFFFF",
        tertiary: "#FFE9FD",
      },
    },
    green: {
      light: {
        primary: "#E7FFF3",
        secondary: "#137A2A",
        tertiary: "#3C8C4E",
      },
      bold: {
        primary: "#47AA5D",
        secondary: "#FFFFFF",
        tertiary: "#E3FFE9",
      },
    },
  };
  const scheme = resolveScheme(color, style)
  const colors = {
    "--primary": scheme.primary,
    "--secondary": scheme.secondary,
    "--tertiary": scheme.tertiary
  }

  function resolveScheme(color, style) {
    const base = colorMap[color] || colorMap.default;
    const variant = style && base[style] ? style : 'light';
    return base[variant];
  }

  return (
    <>
      {show && 
        <div className="tooltip-container" style={colors}>
          <RiInboxLine className="icon"/>
          <h2 className="title">{title}</h2>
          <button className="close-btn" onClick={() => setShow(false)}>X</button>
          <span className="content">{children}</span>
        </div>
      }
    </>
  )
}