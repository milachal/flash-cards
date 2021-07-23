import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import FlashCardsContext from '../contexts/FlashCardsContext'
import EditCard from './EditCard'
import FlashCard from './FlashCard'

const FlashCards = (props) => {

    const { setFlashCards } = useContext(FlashCardsContext)
    const [editedCard, setEditedCard] = useState({})

    const editCardHandler = (id) => {
        const cardToEdit = props.flashCards.filter(card => {
            return card._id === id
        })
        if (cardToEdit.length > 0) {
            setEditedCard(cardToEdit[0])
        }
    }

    const deleteCardHandler = (id) => {
       const newCardsArr = props.flashCards.filter(card => {
            return card._id !== id
        })
        
        setFlashCards(newCardsArr)
        localStorage.setItem('flashCards', JSON.stringify(newCardsArr))
    }

    if (props.flashCards?.length === 0) {
        return (
            <Text>No cards yet.</Text>
        )
    }

    return (
        <>
            {props.flashCards.map((card) => {
                if (editedCard && card._id === editedCard._id) {
                    return (
                        <EditCard key={card._id} editedCard={editedCard} setEditedCard={setEditedCard} />
                    )
                }
                return (
                    <FlashCard key={card._id} 
                        card={card}
                        editCardHandler={editCardHandler} 
                        deleteCardHandler={deleteCardHandler}
                    />
                )
            })}
        </>
    )
}

export default FlashCards


const Text = styled.h2`
    margin: 30px;
    color: #4C647F;
`
