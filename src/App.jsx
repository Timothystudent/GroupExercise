import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/headerr'
import Logo from './components/logo'
import Generation from './components/Generation'
import Gensatu from './components/Generation/Gen1'
import Gendua from './components/Generation/Gen2'
import Gentiga from './components/Generation/Gen3'
import Genempat from './components/Generation/Gen4'


const App = () => {
  return (
    <>

    <Header/>
    <Logo/>
    <Generation/>
    <Gensatu/>
    <Gendua/>
    <Gentiga/>
    <Genempat/>
    
    </>
  )
}

export default App
