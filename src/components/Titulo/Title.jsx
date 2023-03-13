import React, { useState } from "react";
import "./Title.css";
// import PDFViewer from "../CV/CvPDF";
// import pdfFile from '../CV/CV.pdf';

export default function Titulo() {
  // const [showImage, setShowImage] = useState(false);

  // const handlerClick = () => {
  //   setShowImage(true);
  //   const backgroundOverlay = document.querySelector(".background-overlay");
  //   backgroundOverlay.style.opacity = 1;
  // };

  // const handlerClose = () => {
  //   setShowImage(false);
  //   const backgroundOverlay = document.querySelector(".background-overlay");
  //   backgroundOverlay.style.opacity = 0;
  // };

  // const handleDownloadPDF = async () => {
  //   const fileUrl = process.env.PUBLIC_URL + "https://docs.google.com/document/d/14T18Vn2qtzWxFXuKdhtrvHjFGTP24SeOpnSDN1JJOCU/share?usp=sharing"
  //   const response = await fetch(fileUrl);
  //   const blob = await response.blob();
  //   const url = window.URL.createObjectURL(new Blob([blob]));
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.setAttribute('download', 'Cv-Baltasar.pdf');
  //   document.body.appendChild(link);
  //   link.click();
  // };

  return (
    <div>
      <a href="https://docs.google.com/document/d/14T18Vn2qtzWxFXuKdhtrvHjFGTP24SeOpnSDN1JJOCU/edit?usp=sharing" target="_blank">
      <button class="continue-application" >
        <div>
          <div class="pencil"></div>
          <div class="folder">
            <div class="top">
              <svg viewBox="0 0 24 27">
                <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
              </svg>
            </div>
            <div class="paper"></div>
          </div>
        </div>
        Curriculum
      </button>
        </a>
    </div>
  );
}