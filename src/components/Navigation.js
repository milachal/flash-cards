import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <Container>
            <StyledLink to=''>Create card</StyledLink>
            <StyledLink to=''>All cards</StyledLink>
            <StyledLink to=''>My profile</StyledLink>
        </Container>
    )
}

export default Navigation

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    height: 50%;
    width: 10%;
    padding: 3rem; 
    line-height: 1.6;
    background-color: pink;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
`