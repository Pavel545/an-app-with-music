function Item() {
  return(
    <div className="content__playlist playlist">
    <PlaylistItem
      name="Guilt"
      executor="Nero"
      album="Welcome Reality"
      time="4:44"
    />
    <PlaylistItem
      name="Elektro"
      executor="Dynoro, Outwork, Mr. Gee"
      album="Elektro"
      time="2:22"
    />
    <PlaylistItem
      name="I’m Fire"
      executor="Ali Bakgor"
      album="I’m Fire"
      time="2:22"
    />
    <PlaylistItem
      name="Non Stop"
      executor="Стоункат, Psychopath"
      album="Non Stop"
      time="4:12"
    />
    <PlaylistItem
      name="Run Run"
      executor="Jaded, Will Clarke, AR/CO"
      album="Run Run"
      time="2:54"
    />
    <PlaylistItem
      name="Eyes on Fire"
      executor="Blue Foundation, Zeds Dead"
      album="Eyes on Fire"
      time="5:20"
    />
    <PlaylistItem
      name="Mucho Bien"
      executor="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
      album="Mucho Bien"
      time="3:41"
    />
    <PlaylistItem
      name="Knives n Cherries"
      executor="minthaze"
      album="Captivating"
      time="1:48"
    />
    <PlaylistItem
      name="How Deep Is Your Love"
      executor="Calvin Harris, Disciples"
      album="How Deep Is Your Love"
      time="3:32"
    />
    <PlaylistItem
      name="Morena"
      executor="Tom Boxer"
      album="Soundz Made in Romania"
      time="3:36"
    />
    <PlaylistItem
      name="Morena"
      executor="Tom Boxer"
      album="Soundz Made in Romania"
      time="3:36"
    />
  </div>

  )
}
function PlaylistItem(props) {
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {props.name} <span className="track__title-span" />
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {props.executor}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {props.album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{props.time}</span>
          </div>
        </div>
      </div>
    );
  }
export default Item;
  