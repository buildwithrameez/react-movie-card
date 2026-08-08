const Cardlist = (props) => {
  const {name,rating,description,genre,cast,watch_url} = props.currElement;
  console.log(name);
  
    return (<li>
      <div>
        <img style={{'marginTop':'20px'}} width='50%' src={props.currElement.img_url} alt="" />
      </div>
    <h2>
     <b>Movie Name: </b>{name}
    </h2>
    <h3>
     <b>Rating: </b>{rating}
    </h3>
    <p>
     <b>Summary: </b>{description}
    </p>
    <p>
      <b>Genre:</b>{genre}
    </p>
    <p>
       <b>Cost: </b>{cast}
    </p>
    <a href={watch_url} target='_blank'><button>Watch Now</button></a>
    </li>)
};

export default Cardlist;