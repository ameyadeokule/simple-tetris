import React from 'react'
import { StyledCell } from "./StyledCell";
import { TETROMINOS } from "../../helper/tetrominos";

const Cell = ({type}) => {
    return (
        <StyledCell type={type} color={TETROMINOS[type].color}>cell</StyledCell>
    )
}

export default Cell
