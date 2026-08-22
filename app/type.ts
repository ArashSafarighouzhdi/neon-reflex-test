export type SquareProps = {
  id: number;
  isSelected: boolean;
  isCorrect: boolean;
  gameFinished: boolean;
  clickFunction: (id: number) => void;
};

export type RestartButtonProps = {
  clickFunction: () => void;
};

export type ResultProps = {
  result: string;
};
