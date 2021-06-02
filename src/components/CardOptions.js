import React from 'react'
import styled from 'styled-components'
import Edit from '../images/edit.svg'
import Delete from '../images/delete.svg'

const CardOptions = ({ editCardHandler, deleteCardHandler, id }) => {

    return (
        <div>
            <StyledButton onClick={() => editCardHandler(id)}>
                <Icon src={Edit} alt="edit-icon" />
            </StyledButton>
            <StyledButton onClick={() => deleteCardHandler(id)}>
                <Icon src={Delete} alt="delete-icon" />
            </StyledButton>
        </div>
    )
}

export default CardOptions


const StyledButton = styled.button`
    background-color: #4C647F;
    border-radius: 5px;
    border: none;
    &:hover {
        opacity: 0.8;
    }
    padding: 5px 10px;
    margin: 30px;
`

const Icon = styled.img`
    height: 1rem;
`