import React, { useState } from "react";
import Searchbox from "../MainComp/Searchbox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

function Hero({ resultRef }) {
  const [searchTerm, setSearchTerm] = useState("");

  const elem = document.getElementById("categories")

  const scrollFunction = () => {
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  function search() {
    if (searchTerm === "") {
      return;
    }
    scrollFunction();
    resultRef.current.formHeroSearch(searchTerm);
    setSearchTerm("")
  }

  function onSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <section className="heroSection">
      <div className="container-fluid">
        <div className="row heroRow">
          <div className="col-12 col-lg-6 col1">
            <div className="content">
              <h1 className="sectionTitle">
                1500+ AI Tools<br /> <br /> 
                Search For The Best AI Websites
              </h1>
              <h5 className="subTitle"></h5>
              <p className="text">
              10x Your Productivity with AI and Be Future-Ready.
              </p>
              <Searchbox
                handleChange={onSearchTermChange}
                placeholder="Type in AI website usecase, category, or function..."
                search={searchTerm}
              />
              <div className="heroButton">
                <div onClick={() => search()} className="cta btn btn-primary">
                  Search
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col2">
            <div className="sectionImage">
              <img
                src="./img/heroImage.png"
                alt="heroImage"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
