import React, { useState, useEffect } from "react";
import PortfolioFilter from "./PortfolioFilter";
import portfolioData from "../Utils/portfolioData.json";
import "./Portfolio.css";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setItems(portfolioData);
  }, []);

  const filterSelection = (c) => {
    setFilter(c);
  };

  return (
    <section id="myPortfolio" className="portfolio row">
      <PortfolioFilter clickHandle={filterSelection} activeButton={filter} />
      <div id="myPortfolioDiv" className="shadow-lg portfoliodiv row" />
      {items.map((item) => (
        <div
          key={item.id}
          id={`FlipCard-${item.id}`}
          className={`col-12 flip-card shadow rounded-4
          ${filter === "all" || filter === item.dev ? "show" : ""}`}
        >
          <div className="flip-card-inner rounded-4">
            <div className="flip-card-front rounded-4">
              <img
                className="rounded-4"
                src={require(`../../assets/img/${item.image}`)}
                alt={item.name}
              />
            </div>
            <div className="flip-card-back rounded-4">
              <h5>Name: {item.name}</h5>
              <p>Description: {item.description}</p>
              <p>Dev: {item.dev}</p>
              <a href={item.link}>Visitar sitio</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Portfolio;
