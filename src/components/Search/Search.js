import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/searchSlice";

function Search() {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div className="search active">
      <input placeholder="Search"  className="searchActive"/>
      <button className="src-btn">Search</button>
    </div>
  );
}

export default Search;
