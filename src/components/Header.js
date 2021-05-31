import React from 'react'
import styled from 'styled-components'
import Search from '../images/searching.svg'

const Header = () => {
    return (
        <Container>
            <StyledInput type="text" placeholder="search" />
            <StyledBtn type="submit">
                <Icon src={Search} />
            </StyledBtn>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: inline-block;
    border-bottom: 1px solid #4C647F;
    margin: 30px;  
`

const StyledInput = styled.input`
    border: none;
    /* border-bottom: 1px solid gray;   */
    margin-left: 5px;  
`

const StyledBtn = styled.button`
    border-radius: 5px;
    font-size: 12px;
    padding: 8px 10px;
    background-color: #4C647F;
    border: none;   
    margin: 0 0 5px 5px;
    &:hover {
        opacity: 0.8;
    } 
`

const Icon = styled.img`
    height: 1rem;
`
