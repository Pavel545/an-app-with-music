function PlayerBtn(params) {
    <div className={params.name}>
      <svg className={params.svgName} alt={params.alt}>
        <use xlinkHref={params.xlinkHref}></use>
      </svg>
    </div>;
  }
export default PlayerBtn;