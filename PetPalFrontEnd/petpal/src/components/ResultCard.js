const ResultCard = ({key, breed}) => {


  return (
    <div>
      {/* <img src="../public/Images/"{bestMatch.image} alt="{}"/> */}
      <h2>{breed.name}</h2>
      <p>{breed.description}</p>
    </div>
  );
};

export default ResultCard;
