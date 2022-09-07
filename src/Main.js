import "./css/style.css";
function Burger() {
  return (
    <div className="nav__burger burger">
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </div>
  );
}
function NavMenu() {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Главное
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Мой плейлист
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Войти
          </a>
        </li>
      </ul>
    </div>
  );
}

function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}

function Filter() {
  <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>
    <div className="filter__button button-author _btn-text">исполнителю</div>
    <div className="filter__button button-year _btn-text">году выпуска</div>
    <div className="filter__button button-genre _btn-text">жанру</div>
  </div>;
}
function PlaylistTitle() {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </svg>
      </div>
    </div>
  );
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
function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Main() {
  return (
    <main className="main">
      <nav className="main_nav nav">
        <div className="nav__logo logo">
          <img
            className="logo__image"
            src="my-app/public/img/logo.png"
            alt="logo"
          />
        </div>
        <Burger />
        <NavMenu />
      </nav>
      <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">Треки</h2>
        <Filter />
        <div className="centerblock__content">
          <PlaylistTitle />
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
        </div>
      </div>
      <Sidebar />
    </main>
  );
}
export default Main;
