# 2048 Game

Welcome to the 2048 game! This is a classic sliding block puzzle game where the objective is to combine tiles with the same numbers to reach the 2048 tile. This project is implemented in JavaScript with a simple and clean UI.

[DEMO LINK](https://lliashko.github.io/2048_game/)

## Introduction

The 2048 game is a single-player puzzle game created using JavaScript, HTML, and CSS. The main goal is to slide numbered tiles on a grid to combine them and create a tile with the number 2048. You can continue playing to achieve higher numbers after reaching 2048.

## Features

Simple and clean user interface
Responsive design
Score tracking
Win and game over messages
Restart functionality

## Game Rules

The game field is a 4x4 grid.
Each cell can be empty or contain one of the numbers: 2, 4, 8, ..., 2^n.
The player can move cells using the keyboard arrow keys.
All numbers should be moved in the selected direction until all empty cells are filled.
Two equal cells should be merged into a doubled number.
The merged cell cannot be merged twice during one move.
A move is possible if at least one cell is changed after the move.
After each move, a 2 or 4 appears in a random empty cell (4 appears with a 10% probability).
When the 2048 tile is created, a win message is displayed.
A game over message is displayed if there are no more available moves.

## Usage

Use the arrow keys on your keyboard to move the tiles.
Combine tiles with the same number to merge them into a single tile with double the value.
Reach the 2048 tile to win the game.
Click the "Restart" button to reset the game at any time.
