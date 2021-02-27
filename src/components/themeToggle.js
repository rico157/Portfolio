import DarkModeToggle from "react-dark-mode-toggle"
import Context from "../context"
import React, { useContext } from "react"

const ThemeToggle = () => {
  const { state, setState } = useContext(Context)
  const { darkMode } = useContext(Context).state

  return (
    <DarkModeToggle
      className="thm-toggle"
      onChange={() => setState({ ...state, darkMode: !darkMode })}
      checked={darkMode}
      size={80}
    />
  )
}

export default ThemeToggle
