import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const CreateCard = () => {

    const [frontText, setFrontText] = useState('')
    const [backText, setBackText] = useState('')
    const history = useHistory()

    const submitHandler = () => {
        const flashCardsArr = JSON.parse(localStorage.getItem('flashCards')) || []
        const flashCardContent = { frontText, backText }

        flashCardsArr.push(flashCardContent)
        localStorage.setItem('flashCards', JSON.stringify(flashCardsArr))
        
        return history.push('/my-flash-cards')
    }

    return (
        <>
            <Heading>Create a card</Heading>
            <Container>
                <Text>FRONT</Text>
                <TextField type="text" onChange={e => setFrontText(e.target.value)} value={frontText} />
            </Container>
            <Container>
                <Text>BACK</Text>
                <TextField type="text" onChange={e => setBackText(e.target.value)} value={backText} />
            </Container>
            <br/>   
            <Button type='submit' onClick={submitHandler}>submit</Button>
        </>
    )
}

export default CreateCard

const Container = styled.div`
    margin: 30px;
    display: inline-block;  
    font-weight: bold;
`

const Heading = styled.h2`
    margin: 30px 0 0 30px;
    color: #4C647F;
    font-weight: bold;
`

const Text = styled.p`
    color: #4C647F;
    text-align: center;
`

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

const Button = styled.button`
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
    margin-left: 200px;
`