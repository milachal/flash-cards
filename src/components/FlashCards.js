import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import CardOptions from './CardOptions'
import FlashCardsContext from '../contexts/FlashCardsContext'
import EditCard from './EditCard'

const FlashCards = () => {

    const { flashCards, setFlashCards } = useContext(FlashCardsContext)
    const [editedCard, setEditedCard] = useState({})
    const history = useHistory()

    const editCardHandler = (id) => {
        const cardToEdit = flashCards.filter(card => {
            return card._id === id
        })
        return setEditedCard(cardToEdit)
    }

    const deleteCardHandler = (id) => {
       const  newCardsArr = flashCards.filter(card => {
            return card._id !== id
        })
        setFlashCards(newCardsArr)
        localStorage.setItem('flashCards', JSON.stringify(newCardsArr))
        return history.push('/my-flash-cards')
    }

    if (editedCard.length > 0) {
        return (
            <EditCard editedCard={editedCard} />
        )
    }

    return (
        <>
            {flashCards ? (
                <>
                    {flashCards.map((card, index) => {
                        return (
                            <div key={index}>
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
            : (
                <Text>No cards yet.</Text>
            )}
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