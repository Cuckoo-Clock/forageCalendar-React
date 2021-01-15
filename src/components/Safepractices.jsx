import React from "react";
import { warnings, pageContent } from "../shared/safePractices_content";

function WarningModal() {
  return (
    <>
      {/*  <Modal> */} {/* whadda i need to import?*/}
      <h2>{warnings[0].heading}</h2>
      <p>{warnings[0].content}</p>
      {/*  </Modal> */}
    </>
  );
}

// onscroll in react?

export default function Safepractices() {
  return (
    <>
      <WarningModal />
      <h1>{pageContent[0].heading}</h1>
      <p>{pageContent[0].content}</p>
    </>
  );
}
