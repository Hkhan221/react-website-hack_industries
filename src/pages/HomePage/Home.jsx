import React from "react";
import data from "../../data/TemplateData.json";
import SearchBar from "../../components/Search/SearchBar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <div className="templateContainer">
        <SearchBar/>
        <div className="template_Container">
          {data
            .map((val) => {
              return (
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
