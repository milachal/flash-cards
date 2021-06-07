import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import CardOptions from './CardOptions'
import FlashCardsContext from '../contexts/FlashCardsContext'
import EditCard from './EditCard'

const FlashCards = (props) => {

    const { flashCards, setFlashCards } = useContext(FlashCardsContext)
    const [editedCard, setEditedCard] = useState({})

    const editCardHandler = (id) => {
        const cardToEdit = flashCards.filter(card => {
            return card._id === id
        })
        if (cardToEdit.length > 0) {
            setEditedCard(cardToEdit[0])
        }
    }

    const deleteCardHandler = (id) => {
       const newCardsArr = flashCards.filter(card => {
            return card._id !== id
        })
        setFlashCards(newCardsArr)
        localStorage.setItem('flashCards', JSON.stringify(newCardsArr))
    }

    if (!flashCards) {
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
                    <div key={card._id}>
                        <CardOptions 
                            id={card._id}
                            editCardHandler={editCardHandler} 
                            deleteCardHandler={deleteCardHandler}
                        />
                        
                        <Card readOnly value={card.frontText} />
                        <Card readOnly value={card.backText} />
                    </div>
                )
            })}
        </>
    )
}

export default FlashCards

const Card = styled.textarea`
    resize: none;
    text-align: center;
    width: 300px;
    height: 300px;
    border: 1px solid #4C647F;
    border-radius: 5px;
    font-size: 18px;
    margin: 30px;
    overflow: scroll;
`

const Text = styled.h2`
    margin: 30px;
    color: #4C647F;
`