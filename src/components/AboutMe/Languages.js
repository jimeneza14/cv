import React from "react";
import LanguageData from "../Utils/LanguageData.json";

const Languages = () => {
  return (
    <div id="mylanguages" className="row languages shadow-lg">
      <h3><em class="text-success fs-1 bi bi-translate" />&nbsp;Idiomas</h3>
      {LanguageData.map((language) => (
        <div key={language.id} className="row LanguageHeading">
          <h5 className="languageHeading">{language.language}</h5>
          {language.label.map((item, index) => (
            <div key={index} className={`languageIndicator${Object.keys(item)[0].toLowerCase()}${language.language.toLowerCase()} col col-12`}>
              <div className="row">
                <p>{Object.keys(item)[0].toUpperCase()}</p>
              </div>
              <div className="languagesindicatorouter rounded-5 row">
                <div 
                className="rounded-5 row"                
                style={{ width: `${item[Object.keys(item)[0]]}%` }}
                >
                  <p>{item[Object.keys(item)[0]]}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Languages;
