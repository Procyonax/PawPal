const ResultCard = ({key, breed}) => {


  return (
    <div>
      <img src={`../Images/${breed.image}`} alt="{}"/>
      <h2>{breed.name}</h2>
      <p>{breed.description}</p>
    </div>
  );
};

export default ResultCard;
