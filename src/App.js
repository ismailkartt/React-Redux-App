import React from 'react'
import { useSelector } from 'react-redux'
import DarkModeSwitcher from './components/dark-mode/dark-mode-switcher'
import LangSwitcher from './components/lang-switcher/lang-switcher'
import "./App.css"
import { $t } from './helpers/locale-helper'


const App = () => {

  const darkMode = useSelector(state=>state.theme.darkMode)

  // Tüm app'i re-render etmek için yazdık. Aslında burada currentLang'e ihtiyacımız yok.Merkezi state'teki
  // lang değişince useSelector'den dolayı APP componenti re-render olacak.
  const currentLang = useSelector(state=>state.locale.lang)

  return (
    <div className={darkMode ? "dark" : ""}>
      <DarkModeSwitcher/>   
      <LangSwitcher/>

      <h1>{$t("hello-world")}</h1>
    </div>
  )
}

export default App