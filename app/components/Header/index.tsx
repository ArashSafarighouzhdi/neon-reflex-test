import Subtitle from "../Subtitle";
import Title from "../Title";

const Header = () => {
  return (
    <header className="w-full max-w-3xl mx-auto mb-10 rounded-2xl border-2 border-purple-500 bg-slate-900 px-6 py-8 text-center">
      <Title />
      <Subtitle />
    </header>
  );
};

export default Header;
