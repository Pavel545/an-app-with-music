import PlayerBtn from '../PlayerBtn/PlayerBtn'
import * as S from './style'

import { ReactComponent as Play } from './img/play.svg'
import { ReactComponent as Sprite } from './img/sprite.svg'
import { ReactComponent as Next } from './img/next.svg'
import { ReactComponent as Prev } from './img/prev.svg'
import { ReactComponent as Repeat } from './img/repeat.svg'

function AudioControls({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick,
}) {
    return (
        <S.PlayerControls>
            <div onClick={onPrevClick}>
                <Prev />
            </div>
            
            {isPlaying ? (
                <div onClick={() => onPlayPauseClick(false)}>
                    <Play />
                </div>
            ) : (
                <div onClick={() => onPlayPauseClick(true)}>
                    <Play />
                </div>
            )}

            <div onClick={onNextClick}>
                <Next />
            </div>

            <div>
                <Repeat />
            </div>

            <div>
                <Sprite />
            </div>
        </S.PlayerControls>
    )
}
export default AudioControls
