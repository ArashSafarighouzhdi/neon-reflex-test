"use client";

import { useState } from "react";
import Square from "../Square";
import Result from "../Result";
import RestartButton from "../RestartButton";

const Container = () => {
  const [correctSquare, setCorrectSquare] = useState(
    () => Math.floor(Math.random() * 3) + 1,
  );
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);

  const gameFinished = selectedSquare !== null;

  const handleSquareClick = (id: number) => {
    setSelectedSquare(id);
  };

  const handleRestart = () => {
    setSelectedSquare(null);
    setCorrectSquare(Math.floor(Math.random() * 3) + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-4">
        {[1, 2, 3].map((id) => (
          <Square
            key={id}
            id={id}
            isSelected={selectedSquare === id}
            isCorrect={correctSquare === id}
            gameFinished={gameFinished}
            clickFunction={handleSquareClick}
          />
        ))}
      </div>

      {gameFinished && (
        <Result
          result={selectedSquare === correctSquare ? "You won!" : "You lost!"}
        />
      )}

      {gameFinished && <RestartButton clickFunction={handleRestart} />}
    </div>
  );
};

export default Container;
