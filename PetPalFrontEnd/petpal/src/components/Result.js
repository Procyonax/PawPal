import PawPalContainer from "../containers/PawPalContainer";
import ResultCard from "../components/ResultCard";

const Result = ({reversedArray}) => {

  const breedItems = reversedArray.map((breed, index) => 
    <ResultCard  key={index} breed={breed}/>
  );

  return (
    <div>
      <ul>
        <li>
        <p>{breedItems}</p>
        </li>
      </ul>
    </div>
  );
};

export default Result;
