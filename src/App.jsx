// import logo from './logo.svg';
import React, {useState} from 'react'; //Added userState for search
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

// Search bar and Icons
import './components/Search/search.css';
import data from "./TemplateData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./components/Search/search.css"
import Sidebar from './components/Sidebar';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <Sidebar/>
      <Navbar />
      {/* Search */}
        <div className="templateContainer">
          <div className="searchInput_Container">
              <input id="searchInput" type="text" placeholder="Search..." onChange={(event) => {
                  setSearchTerm(event.target.value);
              }} />
              <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} className=""></FontAwesomeIcon>
              </div>
          </div>
          <div className="template_Container">
              {
              data
                .filter((val) => {
                if(searchTerm == ""){
                    return val;
                } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
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
          </div>
        </div>
      {/* Search */}
    </Router>
  );
}

export default App;
