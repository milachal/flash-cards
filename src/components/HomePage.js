import React from 'react'
import styled from 'styled-components'
import {
    useRouteMatch,
    Route,
    Switch
} from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'
import CreateCard from './CreateCard'

const HomePage = () => {

    const { path, url } = useRouteMatch()

    return (
        <>
            <Navigation />
            <Header />
            <Switch>
                <Route path={`${path}/create-card`}>
                    <CreateCard />
                </Route>
            </Switch>
        </>
    )
}

export default HomePage

