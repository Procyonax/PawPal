const ResultCard = ({breed}) => {

console.log("breed at resultcard" + breed)
  return (
    <div>
      <img src={`../images/${breed.image}`} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>{breed.name}</h5>
          <p>{breed.description}</p>
          <button className="btn">find at dog trust</button>
        </div>
    </div>
  );
};

export default ResultCard;
