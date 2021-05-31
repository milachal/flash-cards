import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <StyledInput type="text" placeholder="search" />
            <StyledBtn type="submit">search</StyledBtn>
            <Logo>Logo</Logo>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: inline-block;
`

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid gray;  
    margin-left: 3rem;  
`

const StyledBtn = styled.button`
    text-transform: uppercase;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 15px;
    background-color: gray;
    border: none;   
    margin-left: 1rem;
    &:hover {
        opacity: 0.8;
    } 
`

const Logo = styled.p`
    display: inline-block;
`