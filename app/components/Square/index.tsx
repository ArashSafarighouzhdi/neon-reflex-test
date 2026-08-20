import { SquareProps } from "@/app/type";

const Square = ({
  id,
  isSelected,
  isCorrect,
  gameFinished,
  clickFunction,
}: SquareProps) => {
  return (
    <button
      onClick={() => clickFunction(id)}
      disabled={gameFinished}
      className={
        isSelected
          ? isCorrect
            ? "bg-green-500"
            : "bg-red-500"
          : "bg-purple-950"
      }
    ></button>
  );
};

export default Square;
