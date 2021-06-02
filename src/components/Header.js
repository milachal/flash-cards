import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Search from '../images/searching.svg'
import FlashCardsContext from '../contexts/FlashCardsContext'

const Header = () => {

    const [keyword, setKeyword] = useState('')
    const [searchResults, setSearchResults] = useState()
    const { flashCards } = useContext(FlashCardsContext)

    const searchBarHandler = (e) => {
        setKeyword(e.target.value)
        
        const findResults = keyword => {

            const result = flashCards.filter(card => {
                return card.frontText.includes(keyword) || card.backText.includes(keyword)
            })

            return setSearchResults(result)
        }

        return findResults(keyword)
    }

    console.log(keyword)
    console.log(searchResults)

    return (
        <Container>
            <StyledInput 
                type="text" 
                placeholder="search" 
                value={keyword} 
                onChange={searchBarHandler} 
            />
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
    outline: none;
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
