import React from 'react'
import * as SB from '../Loaging/Loading'
import PlayerBtn from '../PlayerBtn/PlayerBtn'
import * as S from './style'
import PlayTrack from '../PlayTrack/PlayTrack'
import { useState, useEffect, useRef } from 'react'
import { tracks } from './Treac'
import AudioControls from '../AudioControls/AudioControls'

function Bar() {
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

    const { title, artist, color, image, audioSrc } = tracks[trackIndex]

    // Refs
    const audioRef = useRef(new Audio(audioSrc))
    const intervalRef = useRef()
    const isReady = useState(false)

    

    const toNextTrack = () => {
        console.log('TODO go to next')
        if (trackIndex < tracks.length - 1) {
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

        audioRef.current = new Audio(audioSrc)
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
    // Destructure for conciseness
    const { duration } = audioRef.current
    const toPrevTrack = () => {
        console.log('TODO go to prev')
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1)
        } else {
            setTrackIndex(trackIndex - 1)
        }
    }
    const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : '0%'
    const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #2e2e2e))
`
    return (
        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress
                    style={styleProgress(trackStyling, trackProgress, duration,onScrubEnd,onScrub)}
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
                            <PlayTrack autho={artist} album={title} />
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
// ,

const styleProgress = (trackStyling, trackProgress, duration,onScrubEnd,onScrub) => {
    return {
        max: duration ? duration : `${duration}`,
        onChange:((e) => onScrub(e.target.value)),
        type: 'range',
        value: trackProgress,
        step: '1',
        min: '0',
        background: trackStyling,
        onMouseUp: { onScrubEnd },
        onKeyUp: { onScrubEnd },
    }
}
export default Bar
