import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './SearchBar.scss';
/* import data from "@/TemplateData.json"; */

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
{/* {          <div className="template_Container">
            {
              data 
                .filter((val) => {
                  if(searchTerm == ""){
                    return val;
                  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                })
                .map((val) => {
                  return(
                    <div className="template" key={val.id}>
                        <img src={val.image} alt="" />
                        <h3>{val.title}</h3>
                    </div> 
                  )
                })
            }
          </div>} */}
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} className=""></FontAwesomeIcon>
          </div>
        </div>
  )
}