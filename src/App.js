import React, { useState, useEffect } from 'react'
import Router from './Router'
import FlashCardsContext from './contexts/FlashCardsContext'

const App = () => {

  const [flashCards, setFlashCards] = useState([])
  
  useEffect(() => {
    const localStorageFlashCards = JSON.parse(localStorage.getItem('flashCards'))
    setFlashCards(localStorageFlashCards || [])
  }, [])

  return (
    <FlashCardsContext.Provider value={{ flashCards, setFlashCards }}>
      <Router />
    </FlashCardsContext.Provider>
  );
}

export default App;
