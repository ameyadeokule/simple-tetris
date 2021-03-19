import React from 'react'
import Display from '../display/Display'
import Stage from '../stage/Stage'
import StartButton from '../startButton/StartButton'
import {createStage} from '../../helper/gameHelpers'
import { StyledTetris,StyledTetrisWrapper } from "./StyledTetris";

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text='Score' />
                        <Display text='Rows' />
                        <Display text='Levels' />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris
