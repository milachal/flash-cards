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
    console.log(path)
    console.log('url', url)
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

