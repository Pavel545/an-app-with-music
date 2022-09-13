function YearWindow() {

  return (
    <div className="filter__title window_year ">
      <div>
        <input  type="radio" name="elem" value="" checked />
        <label className="window_text">Более новые</label>
      </div>
      <div>
        <input type="radio" name="elem" value="" />
        <label className="window_text">Более старые</label>
      </div>
    </div>
  );
}
export default YearWindow;

