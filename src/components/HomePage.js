import React, { useContext, useState } from 'react'
import { Route } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'
import CreateCard from './CreateCard'
import FlashCards from './FlashCards'
import FlashCardsContext from '../contexts/FlashCardsContext'

const HomePage = () => {

    const [searchResults, setSearchResults] = useState(null)
    const { flashCards } = useContext(FlashCardsContext)

    const getSearchResults = childData => {
        setSearchResults(childData)
    }

    console.log(searchResults)

    return (
        <>
            <Navigation />
            <Header setFilteredCards={getSearchResults} />
            <Route path={`/create-card`}>
                <CreateCard />
            </Route>
            <Route path={'/my-flash-cards'}>
                <FlashCards flashCards={searchResults || flashCards} />
            </Route>
        </>
    )
}

export default HomePage
