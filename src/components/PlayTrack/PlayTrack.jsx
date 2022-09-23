import TrackPlay from '../TrackPlay/TrackPlay'
import PlayerBtn from '../PlayerBtn/PlayerBtn'

function PlayTrack() {
    return (
        <div className="player__track-play track-play">
            <div className="track-play__contain">
                <PlayerBtn
                    name="track-play__image"
                    svgName="track-play__svg"
                    alt="music"
                    xlinkHref="img/icon/sprite.svg#icon-note"
                />
                <TrackPlay
                    name="track-play__autho"
                    aName="track-play__author-link"
                    text="Ты та..."
                />
                <TrackPlay
                    name="track-play__album"
                    aName="track-play__album-link"
                    text="Баста"
                />
            </div>

            <div className="track-play__like-dis">
                <PlayerBtn
                    name="track-play__like _btn-icon"
                    svgName="track-play__like-svg"
                    alt="like"
                    xlinkHref="img/icon/sprite.svg#icon-lik"
                />
                <PlayerBtn
                    name="track-play__dislike _btn-icon"
                    svgName="track-play__dislike-svg"
                    alt="dislike"
                    xlinkHref="img/icon/sprite.svg#icon-dislike"
                />
                <PlayerBtn name="" svgName="" alt="" xlinkHref="" />
            </div>
        </div>
    )
}
export default PlayTrack
