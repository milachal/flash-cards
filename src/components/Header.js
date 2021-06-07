import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Search from '../images/searching.svg'
import FlashCardsContext from '../contexts/FlashCardsContext'

const Header = (props) => {

    const [keyword, setKeyword] = useState('')
    const { flashCards } = useContext(FlashCardsContext)

    const searchBarHandler = (e) => {
        const search = e.target.value.toLowerCase()
        setKeyword(search)
        
        const findResults = () => {

            const searchResult = flashCards.filter(card => {
                return card.frontText.toLowerCase().includes(search) || card.backText.toLowerCase().includes(search)
            })

            return props.setFilteredCards(searchResult)
        }

        return findResults()
    }

    return (
        <Container>
            <StyledInput 
                type="text" 
                placeholder="Search for cards" 
                value={keyword} 
                onChange={searchBarHandler} 
            />
            <Icon src={Search} />
            
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
    padding: 10px;
    margin-left: 5px;  
    outline: none;
`

const Icon = styled.img`
    height: 1rem;
    color: black;
`

