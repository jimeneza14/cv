import React from 'react';
import pdf from '../../assets/pdf/cv-esp.pdf';

const PDFViewer = () => {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      <object
        data={pdf} 
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>El archivo PDF no se puede mostrar. Puedes descargarlo <a href="application/pdf">aquí</a>.</p>
      </object>
    </div>
  );
};

export default PDFViewer;

// import React from 'react';

// const PDFViewer = () => {
//   return (
//     <div>
//       <h2>Curriculum Vitae</h2>
//       <iframe      
//         title="Curriculum Vitae"
//         width="100%"
//         height="450px"
//         src="/cv-esp.pdf"
//         frameborder="0"
//       >
//         Este navegador no puede mostrar el archivo PDF.
//       </iframe>
//     </div>
//   );
// }

// export default PDFViewer;
