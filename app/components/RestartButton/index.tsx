import { RestartButtonProps } from "@/app/type";

const RestartButton = ({ clickFunction }: RestartButtonProps) => {
  return (
    <button
      onClick={clickFunction}
      className="rounded-lg border-2 border-purple-500 px-6 py-3 text-white transition-colors hover:bg-purple-950"
    >
      Restart Game
    </button>
  );
};
export default RestartButton;
