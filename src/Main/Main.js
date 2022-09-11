import "../css/style.css";

import Search from "../Search/Search";
import PlaylistItem from "../Playlistltem/PlaylistItem";
import Sidebar from "../Sudebar/Sidebar";
import Burger from "../Burger/Burger";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import React from "react";
import AuthorWindow from "../pop-upWindow/authorWindow.js";
import YearWindow from "../pop-upWindow/yearWindow";
import GenreWindow from "../pop-upWindow/genreWindow.js";
import Loading from "../Loaging/Loading";
import Item from "../Playlistltem/PlaylistItem";

const { useState } = React;


function Main() {
  const [isOpenAuthor, setIsOpenAuthor] = useState(false);
  const toggleAuthor = () => {
    setIsOpenAuthor(!isOpenAuthor);
    setIsOpenYear(false);
    setIsOpenGenre(false);
  };
  const [isOpenYear, setIsOpenYear] = useState(false);
  const toggleYear = () => {
    setIsOpenYear(!isOpenYear);
    setIsOpenAuthor(false);
    setIsOpenGenre(false);
  };
  const [isOpenGenre, setIsOpenGenre] = useState(false);
  const toggleGenre = () => {
    setIsOpenGenre(!isOpenGenre);
    setIsOpenAuthor(false);
    setIsOpenYear(false);
  };
  const [isOpenLoading, setIsOpenLoading] = useState(true);
  const toggleLoading = () => {
    setIsOpenLoading(false);
  };
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
      </nav>
      <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>
          <div
            className="filter__button button-author _btn-text"
            onClick={toggleAuthor}
          >
            исполнителю
          </div>
          {isOpenAuthor && <AuthorWindow />}

          <div
            className="filter__button button-year _btn-text"
            onClick={toggleYear}
          >
            году выпуска
          </div>
          {isOpenYear && <YearWindow />}
          <div
            className="filter__button button-genre _btn-text"
            onClick={toggleGenre}
          >
            жанру
          </div>
          {isOpenGenre && <GenreWindow />}
        </div>
        <div className="centerblock__content">
          <PlaylistTitle />
          {isOpenLoading ? <Loading />:<Item/>}
          {setTimeout(toggleLoading,2000)}
        </div>
      </div>
      <Sidebar />
    </main>
  );
}
export default Main;
