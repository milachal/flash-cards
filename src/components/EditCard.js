import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import FlashCardsContext from '../contexts/FlashCardsContext'

const EditCard = ({ editedCard }) => {

    const [editedFrontText, setEditedFrontText] = useState(editedCard[0].frontText || [])
    const [editedBackText, setEditedBackText] = useState(editedCard[0].backText || [])

    const { flashCards, setFlashCards } = useContext(FlashCardsContext)

    const history = useHistory()
    
    const submitEditedCardHandler = () => {
        const indexOfEditedCard = flashCards.findIndex(card => {
            return card._id === editedCard[0]._id
        })

        const newFlashCards = flashCards
        newFlashCards[indexOfEditedCard] = {
            frontText: editedFrontText,
            backText: editedBackText
        }
        
        setFlashCards(newFlashCards)
        localStorage.setItem('flashCards', JSON.stringify(newFlashCards))
        return history.push('/my-flash-cards')
    }

    console.log(flashCards)

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