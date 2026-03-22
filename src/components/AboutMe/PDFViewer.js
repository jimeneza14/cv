import React from 'react';
import pdf from '../../assets/pdf/arjg-CV-Espanol.pdf';

const PDFViewer = () => {
  const downloadLink = (
    <p>
      El archivo PDF no se puede mostrar. Puedes descargarlo{' '}
      <a href={pdf} download="Angel Rafael Jimenez Guillermo.pdf">
        aquí
      </a>
      .
    </p>
  );

  return (
    <div style={{ width: '100%', height: '1100px' }}>
      <object
        data={pdf}
        type="application/pdf"
        width="100%"
        height="100%"
        aria-label="PDF viewer"
      >
        {downloadLink}
      </object>
    </div>
  );
};

export default PDFViewer;
