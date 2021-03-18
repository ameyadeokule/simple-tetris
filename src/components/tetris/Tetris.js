import React from 'react'
import Display from '../display/Display'
import Stage from '../stage/Stage'
import StartButton from '../startButton/StartButton'

const Tetris = () => {
    return (
        <div>
            <Display />
            <Stage />
            <StartButton />
        </div>
    )
}

export default Tetris
