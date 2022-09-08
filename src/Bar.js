import "./css/style.css";

import PlayerBtn from './PlayerBtn';
import TrackPlay from './TrackPlay';



function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <PlayerBtn
                name="player__btn-prev"
                svgName="player__btn-prev-svg"
                alt="prev"
                xlinkHref="img/icon/sprite.svg#icon-prev"
              />
              <PlayerBtn
                name="player__btn-play _btn"
                svgName="player__btn-play-svg"
                alt="play"
                xlinkHref="img/icon/sprite.svg#icon-play"
              />
              <PlayerBtn
                name="player__btn-next"
                svgName="player__btn-next-svg"
                alt="next"
                xlinkHref="img/icon/sprite.svg#icon-next"
              />
              <PlayerBtn
                name="player__btn-repeat _btn-icon"
                svgName="player__btn-repeat-svg"
                alt="repeat"
                xlinkHref="img/icon/sprite.svg#icon-repeat"
              />
              <PlayerBtn
                name="player__btn-shuffle _btn-icon"
                svgName="player__btn-shuffle-svg"
                alt="shuffle"
                xlinkHref="img/icon/sprite.svg#icon-shuffle"
              />
            </div>

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
          </div>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <PlayerBtn
                name="volume__image"
                svgName="volume__svg"
                alt="volume"
                xlinkHref="img/icon/sprite.svg#icon-volume"
              />

              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bar;
