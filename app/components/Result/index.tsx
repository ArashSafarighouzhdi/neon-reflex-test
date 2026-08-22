import { ResultProps } from "@/app/type";

const Result = ({ result }: ResultProps) => {
  return <p className="mt-6 text-center text-2xl text-purple-300">{result}</p>;
};
export default Result;
