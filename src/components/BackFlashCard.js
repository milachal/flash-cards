import React from 'react'
import styled from 'styled-components'

const BackFlashCard = (props) => {
    return (
        <Container>
            <StyledButton onClick={props.showBackCard}>Show content</StyledButton>
        </Container>
    )
}

export default BackFlashCard

const Container = styled.div`
    display: inline-flex;
    width: 300px;
    height: 300px;
    background-color: #B3D6FF;
    justify-content: center;
    align-items: center;
    border: 1px solid #4C647F;
    border-radius: 5px;
    font-size: 18px;
    margin: 30px;
    vertical-align: top;
`

const StyledButton = styled.button`
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