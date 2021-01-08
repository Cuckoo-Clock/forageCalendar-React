import React from "react";

function LoginModal(){
    return(
        <>
        {/*  <Modal> */} {/* whadda i need to import?*/}
        <p>it's a login modal</p>
        {/*  </Modal> */}
        </>
    );
}

export default function Logbook(){
    return(
        <div>
            <LoginModal />
            <p>Logbook</p>
            <p>immediate load of login modal</p>
        </div>
    );
}