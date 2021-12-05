/*
    EECS1012 Section A Lab 03 - Term Project
    Team Name: Code Stars
    Team Members: Avaninder Bath, Justin Blasetti
    Project Title: Tic-Tac-York

    Client Side JS - Game Mode Selection Page
*/

function selectPVC() {
    sessionStorage.setItem("gamemode", "PVC");
}

function selectPVP() {
    sessionStorage.setItem("gamemode", "PVP");
}