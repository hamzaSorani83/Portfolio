import React, { useContext } from 'react'
import "./Toggle.css"

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

import {ThemeContext} from '../../Context'
import { AppContextInterface } from '../../Context'

const Toggle: React.FC = () => {
  const { darkMode, setDarkModeHandler } = useContext(ThemeContext)  as AppContextInterface;
  return (
    <div className="toggle"  onClick={setDarkModeHandler}>
      <Moon></Moon>
      <Sun></Sun>
      <div className={["t-button", darkMode ? "dark": ''].join(" ")}></div>
    </div>
  )
}

export default Toggle