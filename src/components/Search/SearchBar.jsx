import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './SearchBar.scss';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState();
  return (
    <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} className=""></FontAwesomeIcon>
          </div>
        </div>
  )
}