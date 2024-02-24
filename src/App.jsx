import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,trending,comedy,horror,romance} from './urls'

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost title={'Netflix Originals'} url={originals} />
      <RowPost title={'Action'} url={action} isSmall />
      <RowPost title={'Trending'} url={trending} isSmall />
      <RowPost title={'Comedy'} url={comedy} isSmall />
      <RowPost title={'Horror'} url={horror} isSmall />
      <RowPost title={'Romance'} url={romance} isSmall />
    </>
  )
}

export default App
