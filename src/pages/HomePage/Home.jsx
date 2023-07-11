import React from "react";
import data from "../../data/TemplateData.json";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <div>
      <div className="templateContainer">
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
      <Slider/>
    </div>
  );
}

export default Home;
