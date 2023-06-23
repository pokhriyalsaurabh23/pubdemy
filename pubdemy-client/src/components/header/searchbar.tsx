import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { sagaActions } from "../../saga/sagaActions";

interface SearchBarProps {
  token: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ token }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: sagaActions.FETCH_COURSES_SAGA_ACTION,
      payload: {
        token,
        query: searchQuery,
      },
    });
  };

  return (
    <form className="d-flex row" onSubmit={handleSearchSubmit}>
      <div className="input-group">
        <div className="input-group-prepend"></div>
        <input
          className="form-control"
          type="search"
          placeholder="Search for anything"
          aria-label="Search"
          style={{ width: "1500px", borderRadius: "20px", border: "2px solid" }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
