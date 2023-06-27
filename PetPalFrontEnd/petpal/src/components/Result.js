import PawPalContainer from "../containers/PawPalContainer";
import ResultCard from "../components/ResultCard";

const Result = ({ bestMatch }) => {
  return (
    <div>
      <ResultCard bestMatch={bestMatch} />
    </div>
  );
};

export default Result;
