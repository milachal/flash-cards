import React from 'react'
import styled from 'styled-components'
import { 
        NavLink,
        useRouteMatch
} from 'react-router-dom'

const Navigation = () => {

    const { url } = useRouteMatch()

    console.log(url)
    return (
        <Container>
            <StyledLink to={`/create-card`}>Create card</StyledLink>
            <StyledLink to=''>All cards</StyledLink>
            <StyledLink to=''>My profile</StyledLink>
        </Container>
    )
}

export default Navigation

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 15px; 
    line-height: 1.6;
    background-color: #B3D6FF;
    justify-content: space-evenly;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`