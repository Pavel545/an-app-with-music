function Element() {
    return(
        <div className="playlist__item loading">
            <img class="sidebar__img" src="img/loading/Loading.png" ></img>
        </div>
    )
}

function Loading() {
    return(
        <div className="content__playlist playlist">
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
        </div>
    )
  }
export default Loading;
  