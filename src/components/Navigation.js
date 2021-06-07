import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <Container>
            <StyledLink to={`/create-card`}>Create card</StyledLink>
            <StyledLink to={`/my-flash-cards`}>All cards</StyledLink>
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
    background-color: #4C647F;
    justify-content: space-evenly;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`