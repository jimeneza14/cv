import React from "react";
import SkillsData from "../Utils/SkillsData.json";
import "./AboutMe.css";

const Skills = () => {
  return (
    <div id="myskills" className="skills row shadow-lg">      
        <h3 class="skillsheading">Habilidades</h3>
      {SkillsData.map((category) => (
        <div
          key={category.id}
          className={`skillIndicators${category.Title.replace(
            / /g,
            ""
          ).toLowerCase()} col col-12`}
        >
          <div className="row">
            <b><p>{category.Title}</p></b>
          </div>
          <div className="d-flex flex-wrap skillcontent">
            {category.items.map((skill) => (
              <div
                key={Object.keys(skill)[0]}
                id={`mySkillIndicator${Object.keys(skill)[0].replace(
                  / /g,
                  ""
                )}`}
                className={`skillIndicator${Object.keys(skill)[0]
                  .replace(/ /g, "")
                  .toLowerCase()}`}
              >
                <div className="skillIndicatorHeading2 row">
                  <p>{Object.keys(skill)[0]}</p>
                </div>
                <div className="skillindicatorouter rounded-5 row">
                  <div
                    className="rounded-5 row"
                    style={{ width: `${Object.values(skill)[0]}%` }}
                  >
                    <p>{Object.values(skill)[0]}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
