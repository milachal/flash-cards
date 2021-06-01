import React from 'react'
import styled from 'styled-components'

const FlashCards = () => {

    const flashCards = JSON.parse(localStorage.getItem('flashCards'))

    return (

        <>
           {flashCards.map((card) => {
               return (
                    <>
                        <br/>
                        <Card>
                            <Text>
                                {card.frontText}
                            </Text>
                        </Card>
                        <Card>
                            {card.backText}
                        </Card>
                    </>
                )
           })}
        </>
    )
}

export default FlashCards

const Card = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border: 1px solid #4C647F;
    border-radius: 5px;
    font-size: 18px;
    margin: 30px;
`

const Text = styled.p`
    vertical-align: middle;
`