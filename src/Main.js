import "./css/style.css";

import Search from './Search';
import NavMenu from './NavMenu';
import PlaylistItem from './PlaylistItem';
import Sidebar from './Sidebar';
import Burger from './Burger';
import Filter from './Filter';
import PlaylistTitle from './PlaylistTitle';

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
