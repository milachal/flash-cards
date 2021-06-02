import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'
import CreateCard from './CreateCard'
import FlashCards from './FlashCards'

const HomePage = () => {

    return (
        <>
            <Navigation />
            <Header />
            <Route path={`/create-card`}>
                <CreateCard />
            </Route>
            <Route path={'/my-flash-cards'}>
                <FlashCards />
            </Route>
        </>
    )
}

export default HomePage

