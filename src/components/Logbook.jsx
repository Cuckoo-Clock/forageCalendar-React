import React, { useState } from "react";
import ForageLogger from "./ForageLogger";

function LoginModal() {
  // return <Form />;
  return <p>pip</p>;
}

// use oauth?

// https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks
// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

// onlog in get state
let username = "usrname";

export default function Logbook() {
  return (
    <div>
      {/* <LoginModal /> */}
      <h1>{username}'s Logbook</h1>
      <ForageLogger />
    </div>
  );
}
