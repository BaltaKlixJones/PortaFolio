import React from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer(props) {
  return (
    <div>
      <Document file={props.pdf}>
        <Page pageNumber={2} />
      </Document>
    </div>
  );
}

export default PDFViewer;