function TrackPlay(params) {
    return (
      <div className={params.name}>
        <a className={params.aName} href="http://">
          {params.text}
        </a>
      </div>
    );
  }
  export default TrackPlay;
  