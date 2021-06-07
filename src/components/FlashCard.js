import React, { useState } from 'react'
import styled from 'styled-components'
import CardOptions from './CardOptions'
import BackFlashCard from './BackFlashCard'


const FlashCard = ({ card, editCardHandler, deleteCardHandler }) => {

    const [showBackCard, setShowBackCard] = useState(false)
    
    return (
        <div>
            <CardOptions 
                id={card._id}
                editCardHandler={editCardHandler} 
                deleteCardHandler={deleteCardHandler}
            />
            
            <Card readOnly value={card.frontText} />
            {showBackCard ? (
                <Container>
                    <StyledButton 
                            onClick={() => setShowBackCard(!showBackCard)} 
                    >
                        Hide content
                    </StyledButton>
                    <Card 
                        readOnly 
                        value={card.backText} 
                    />
                </Container>
            ) : (
                <BackFlashCard 
                    showBackCard={() => setShowBackCard(!showBackCard)} 
                />
            )}
        </div>
    )
}

export default FlashCard

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

const Container = styled.div`
    display: inline-block;
    position: relative;
`

const StyledButton = styled.button`
    position: absolute;
    top: -7px;
    right: 114px;
    border: none;
    border-radius: 3px;
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #4C647F;
    color: #ffff;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`