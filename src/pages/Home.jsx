import React from "react";
import tree from "../img/tree.png";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <img src={tree} alt="tree" />
      <div>
        <hr />
        Оценка негативного воздействия на окружающую среду и разработка
        экологической документации
      </div>
    </div>
  );
};

export default Home;
