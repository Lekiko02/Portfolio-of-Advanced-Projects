
# Rock Paper Scissors Game

This is a simple **Rock Paper Scissors** game implemented in HTML, CSS, and JavaScript. The game allows users to play against the computer, keeps track of the score, and provides the option to reset the score.

## Features

- **Interactive UI**: Select between Rock, Paper, or Scissors by clicking the buttons, each styled for an engaging experience.
- **Computer Opponent**: The computer randomly chooses its move to play against the user.
- **Score Tracking**: Wins, losses, and ties are displayed and stored in the browser’s local storage, allowing the score to persist even if the page is refreshed.
- **Reset Score**: Users can reset the score at any time.

## How to Play

1. Choose your move by clicking one of the three buttons: **Rock**, **Paper**, or **Scissors**.
2. The computer will also choose its move, and the result will be displayed on the screen.
3. Check the current score (wins, losses, ties) displayed below.
4. To reset the score, click the **Reset Score** button.

## Code Structure

- **HTML**: The structure of the game interface.
- **CSS**: Basic styling to create an engaging dark-themed UI.
- **JavaScript**:
  - **makeMove()**: Handles the game logic, compares player and computer moves, and updates the score.
  - **pickComputerMove()**: Randomly selects a move for the computer.
  - **updateScoreElement()**: Updates the score display.
  - **resetScore()**: Resets the score and clears local storage.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## Future Enhancements

- Add sound effects for game interactions.
- Implement animations to enhance user feedback.
- Expand options for game themes and color schemes.

---

