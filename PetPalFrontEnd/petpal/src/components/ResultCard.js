const ResultCard = ({ bestMatch }) => {
  return (
    <div>
      {/* <img src="../public/Images/"{bestMatch.image} alt="{}"/> */}
      <h2>{bestMatch.name}</h2>
      <p>{bestMatch.description}</p>
    </div>
  );
};

export default ResultCard;
