import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'
import CreateCard from './CreateCard'

const HomePage = () => {

    return (
        <>
            <Navigation />
            <Header />
            <Switch>
                <Route path={`/create-card`}>
                    <CreateCard />
                </Route>
            </Switch>
        </>
    )
}

export default HomePage

