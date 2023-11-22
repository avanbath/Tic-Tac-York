# Tic-Tac-York Web Application Project
	Repository for the Tic-Tac-York web application. This repository is based on the game of tic-tac-toe, created as the EECS1012 course project at York University.

Team Name: Code Stars

Team Members: Justin Blasetti (justinb9@my.yorku.ca) | Avaninder Bath (avanbath@my.yorku.ca)

Project Title: Tic-Tac-York

## Description
Following principles of the software development life cycle, we have created a customized and unique version of tic-tac-toe in the form of a web application. This web app consists of a dynamic, minimalistic user interface with a primary game area for player interaction, including a legend with the rules and helpful tips for the player. The game follows traditional tic-tac-toe rules, in which two players (user and computer opponent, or user versus user) take turns adding their assigned unique mark to a 3x3 grid until one player has matched 3 marks in a row, in any direction, to win. Users have the option to choose their preferred mark before starting the game. Other helpful features are also implemented for the player's convenience, and to fulfill the purpose of our project being truly one of a kind.

## Functional Requirements
- Users can play a game of tic-tac-toe versus a computer-controlled opponent or another local user with a visual board display
- Users will be shown a welcome screen with the option to play, customize their mark, or learn how to play the game
- Users can interact with a “Play” button that will allow them to select from two game modes; player versus computer or player versus player
- Users can interact with a “Tips and Tricks” button during the game to get helpful hints and tips to improve their strategy
- Users can select from a list of icons (referred to as "marks") to use as their symbol for the game by pressing the "Customize Mark" button in the main menu
- In either game mode, users will go first/second based on random decision (to ensure fairness), and users will be told the decision once the game begins
- Users can take turns with their opponent by interacting with the 3x3 grid, placing their symbol in any of the available spaces (mouse click)
- If a user makes an illegal move (for example, if the space clicked on is already filled), then they will not be able to place a mark there
- A user can win the game by matching 3 of their symbols in a row, either horizontally, diagonally, or vertically
- In a game versus a computer, a user can lose the game if the computer-controlled opponent matches 3 of their symbols in a row horizontally, diagonally, or vertically
- Users can tie the game if neither them nor the opponent is able to satisfy the win condition before all the spaces in the grid are filled
- Users are notified of their or their opponent's victory (or a tie) once the game has finished
- Users can choose to play the game again or they can return to the main menu

## Project Interface Design (Wireframes)
Combined Wireframes: [Click Here (PDF)](https://github.com/avanbath/tic-tac-york/blob/caf0fb30bea8bcaa62adb228dd945f69c2985c15/Wireframes.pdf)

## How To Start The Application
Users may start the website by first initializing an express server (from Node.js) in the same directory as the source files. The steps are as follows:
- Start the Node / Express server (via Command Prompt / PowerShell / Windows Terminal or another supported CLI) using: `node server.js`
- Open start.html from the [mainMenu](https://github.com/avanbath/tic-tac-york/tree/main/website/mainMenu) subfolder using a supported browser
- Enjoy the game!
