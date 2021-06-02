import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import FlashCardsContext from '../contexts/FlashCardsContext'

const EditCard = ({ editedCard, setEditedCard }) => {

    const [editedFrontText, setEditedFrontText] = useState(editedCard.frontText || '')
    const [editedBackText, setEditedBackText] = useState(editedCard.backText || '')

    const { flashCards, setFlashCards } = useContext(FlashCardsContext)
    
    const submitEditedCardHandler = () => {
        const indexOfEditedCard = flashCards.findIndex(card => {
            return card._id === editedCard._id
        })
        const newFlashCards = flashCards
        newFlashCards[indexOfEditedCard] = {
            ...newFlashCards[indexOfEditedCard],
            frontText: editedFrontText,
            backText: editedBackText
        }

        setFlashCards(newFlashCards)
        localStorage.setItem('flashCards', JSON.stringify(newFlashCards))
        setEditedCard({})
    }

    return (
        <div>
            <TextField value={editedFrontText} onChange={(e) => setEditedFrontText(e.target.value)} />
            <TextField value={editedBackText} onChange={(e) => setEditedBackText(e.target.value) } />
            <StyledButton type="submit" onClick={submitEditedCardHandler}>submit</StyledButton>
        </div>
    )
}

export default EditCard

const TextField = styled.textarea`
    border-color: #4C647F;
    border-radius: 5px;
    height: 200px;
    width: 200px;
    resize: none;
    vertical-align: middle;
    text-align: center;
    font-size: 18px;
`

const StyledButton = styled.button`
    background-color: #4C647F;
    text-transform: uppercase;
    color: #ffff;
    &:hover {
        opacity: 0.8
    }
    border: none;
    border-radius: 5px;
    padding: 10px 30px;  
    font-weight: bold;
    margin: 30px;
`