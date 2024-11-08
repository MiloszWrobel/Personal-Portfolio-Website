import managmentLogo from "./assets/no-projects.png";
import TTTLogo from "./assets/New-Logo.png";
import calculatorLogo from "./assets/investment-calculator-logo.png";
import portLogo from "./assets/portfolio-logo.jpg";
import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";
import a5 from "./assets/a5.png";

import quizLogo from "./assets/quiz-logo.png";

export default [
  {
    id: 1,
    image: TTTLogo,
    title: "Tic-Tac-Toe",
    displayImages: [a1, a2, a3, a4, a5],
    text: "This Tic Tac Toe website offers a versatile and engaging game experience with both player-versus-player and player-versus-AI game modes. Initially, this website originated from a React course that I've been actively studying. However, once I finished programming the website, I took it upon myself to continue working on it. Originally, the game was only playable with two players, and there was no AI mode. Naturally, I thought to myself that that was the next step I should take when working on a game such as this. Users can select their preferred mode from a Menu component, which provides options for the two-player mode or an AI opponent. For the AI games, players can choose from three difficulty levels: easy, medium, and hard, which adjust the AI's decision-making strategy. The hard AI difficulty is controlled using a separate Minimax component that enhances gameplay by employing strategic logic to create a challenging opponent. The easy difficulty simply selects a random available square, and the medium difficulty does the same unless it detects a winning move, which it will always take. The app is built with React functionalities such as state management (useState) for tracking game states, player names, and selected squares, creating a responsive and interactive experience. The TwoPlayer and AiGame components manage distinct game boards, each equipped with its own GameBoard component for rendering the grid and a GameOver component for displaying end-game messages. The app also includes a Log component to record each move, giving players a detailed history of their gameplay.",
  },
  {
    id: 2,
    image: calculatorLogo,
    title: "Investment Calculator",
    displayImages: [managmentLogo, TTTLogo, portLogo, a4, a5],
  },
  {
    id: 3,
    image: managmentLogo,
    title: "Project Managment",
    displayImages: [managmentLogo, TTTLogo, portLogo, a4, a5],
  },
  {
    id: 4,
    image: portLogo,
    title: "Portfolio website",
    displayImages: [managmentLogo, TTTLogo, portLogo, a4, a5],
  },
  {
    id: 5,
    image: quizLogo,
    title: "Quiz Website",
    displayImages: [managmentLogo, TTTLogo, portLogo, a4, a5],
  },
];
