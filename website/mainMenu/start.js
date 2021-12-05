/*
    EECS1012 Section A Lab 03 - Term Project
    Team Name: Code Stars
    Team Members: Avaninder Bath, Justin Blasetti
    Project Title: Tic-Tac-York

    Client Side JS - Main Menu (Start) Page
*/

// If the page loads for the first time (determined by the flag), then set the default player marks
window.onload = function() {
    if (sessionStorage.getItem("flag") == null) {
        sessionStorage.setItem("flag", "0");
        sessionStorage.setItem("lastP1Mark", "1");
        sessionStorage.setItem("lastP2Mark", "2");
    }
}
