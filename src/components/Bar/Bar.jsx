import React from 'react'
import * as SB from '../Loaging/Loading'
import PlayerBtn from '../PlayerBtn/PlayerBtn'
import * as S from './style'
import PlayTrack from '../PlayTrack/PlayTrack'
import { useState, useEffect, useRef } from 'react'
import AudioControls from '../AudioControls/AudioControls'
import { useThemeContext } from '../../context/theme'


function Bar(props) {
    console.log(props);
    const { theme } = useThemeContext()

    const [isOpenLoading, setIsOpenLoading] = useState(true)

    useEffect(() => {
        const intervalId = setTimeout(finishLoading, 2000)
        return () => clearTimeout(intervalId)
    }, [])
    const finishLoading = () => {
        setIsOpenLoading(false)
    }

    const [trackIndex, setTrackIndex] = useState(0)
    const [trackProgress, setTrackProgress] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const {album, author,name,track_file
     } = props.data.results[trackIndex]
    
    const audioRef = useRef(new Audio(track_file))
    const intervalRef = useRef()
    const isReady = useState(false)

     

    const toNextTrack = () => {
        console.log('TODO go to next')
        if (trackIndex < props.data.results.length - 1) {
            setTrackIndex(trackIndex + 1)
        } else {
            setTrackIndex(0)
        }
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
            startTimer()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])
    useEffect(() => {
        return () => {
            audioRef.current.pause()
            clearInterval(intervalRef.current)
        }
    }, [])
    useEffect(() => {
        audioRef.current.pause()

        audioRef.current = new Audio(track_file)
        setTrackProgress(audioRef.current.currentTime)

        if (isReady.current) {
            audioRef.current.play()
            setIsPlaying(true)
            startTimer()
        } else {
            isReady.current = true
        }
    }, [trackIndex])

    const startTimer = () => {
        clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack()
            } else {
                setTrackProgress(audioRef.current.currentTime)
            }
        }, [1000])
    }
    const onScrub = (value) => {
        clearInterval(intervalRef.current)
        audioRef.current.currentTime = value
        setTrackProgress(audioRef.current.currentTime)
    }
    const onScrubEnd = () => {
        if (!isPlaying) {
            setIsPlaying(true)
        }
        startTimer()
    }
    const { duration } = audioRef.current
    const toPrevTrack = () => {
        console.log('TODO go to prev')
        if (trackIndex - 1 < 0) {
            setTrackIndex(props.data.results.length - 1)
        } else {
            setTrackIndex(trackIndex - 1)
        }
    }
    return (
        <S.Bar style={{ background: theme.background }}>
            <S.BarContent style={{ background: theme.background }}>
                <S.BarPlayerProgress
                    max={duration}
                    onChange={(e) => onScrub(e.target.value)}
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    style={{
                        background: trackStyling(
                            duration,
                            trackProgress,
                            theme
                        ),
                    }}
                />
                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <AudioControls
                            isPlaying={isPlaying}
                            onPrevClick={toPrevTrack}
                            onNextClick={toNextTrack}
                            onPlayPauseClick={setIsPlaying}
                        />
                        {isOpenLoading ? (
                            <SB.LoadingBar />
                        ) : (
                            <PlayTrack autho={author} album={album} />
                        )}
                    </S.BarPlayer>
                    <S.BarVolumeBlockVo>
                        <S.VolumeContent>
                            <PlayerBtn
                                name="volume__image"
                                svgName="volume__svg"
                                alt="volume"
                                xlinkHref="img/icon/sprite.svg#icon-volume"
                            />

                            <S.VolumeProgress>
                                <svg
                                    width="14"
                                    height="18"
                                    viewBox="0 0 14 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <mask
                                        id="path-1-inside-1_6_207"
                                        fill="white"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8 0L3 5H0V13H3L8 18V0Z"
                                        />
                                    </mask>
                                    <path
                                        d="M3 5V6H3.41421L3.70711 5.70711L3 5ZM8 0H9V-2.41421L7.29289 -0.707107L8 0ZM0 5V4H-1V5H0ZM0 13H-1V14H0V13ZM3 13L3.70711 12.2929L3.41421 12H3V13ZM8 18L7.29289 18.7071L9 20.4142V18H8ZM3.70711 5.70711L8.70711 0.707107L7.29289 -0.707107L2.29289 4.29289L3.70711 5.70711ZM0 6H3V4H0V6ZM1 13V5H-1V13H1ZM3 12H0V14H3V12ZM8.70711 17.2929L3.70711 12.2929L2.29289 13.7071L7.29289 18.7071L8.70711 17.2929ZM7 0V18H9V0H7Z"
                                        fill="white"
                                        mask="url(#path-1-inside-1_6_207)"
                                    />
                                    <path
                                        d="M11 13C12.1046 13 13 11.2091 13 9C13 6.79086 12.1046 5 11 5"
                                        stroke="white"
                                    />
                                </svg>

                                <S.VolumeProgressLine
                                    type="range"
                                    name="range"
                                />
                            </S.VolumeProgress>
                        </S.VolumeContent>
                    </S.BarVolumeBlockVo>
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    )
}

const trackStyling = (duration, trackProgress, theme) => {
    const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : '0%'
    return `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${theme.colorPlayProgressEnd}), color-stop(${currentPercentage}, ${theme.colorPlayProgress}))
`
}
export default Bar
