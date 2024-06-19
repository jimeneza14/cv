import React from 'react';

const PDFViewer = () => {
  return (
    <div>
      <h2>Curriculum Vitae</h2>
      <iframe
        title="Curriculum Vitae"
        width="100%"
        height="450px"
        src="/cv-esp.pdf"
        frameborder="0"
        allowfullscreen="true"
      >
        Este navegador no puede mostrar el archivo PDF.
      </iframe>
    </div>
  );
}

export default PDFViewer;
