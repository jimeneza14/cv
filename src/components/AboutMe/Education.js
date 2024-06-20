import React from "react";
import StudyData from "../Utils/StudyData.json";

const Education = () => {
  return (
    <div id="myeducation" className="row education shadow-lg">
      <div className="row">
        <h3><em class="text-success fs-1 bi bi-highlighter" />&nbsp;&nbsp;Estudios:</h3>
      </div>
      {/* Mapeamos los datos para generar las secciones de educación */}
      {StudyData.map((item) => (
        <div key={item.id} className="row educationexperience">
          <h5 className="">{item.localidad}</h5>
          <p className="">{item.desc}</p>
          {/* Mostrar el período si está disponible */}
          {(item.start !== 'NA' && item.end !== 'NA') &&
            <h6>{item.start} - {item.end}</h6>
          }
        </div>
      ))}
    </div>
  );
};

  export default Education;