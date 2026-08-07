const Cardlist = (props) => {
    return (<li>
      <div>
        <img style={{'marginTop':'20px'}} width='50%' src={props.currElement.img_url} alt="" />
      </div>
    <h2>
     <b>Movie Name: </b>{props.currElement.name}
    </h2>
    <h3>
     <b>Rating: </b>{props.currElement.rating}
    </h3>
    <p>
     <b>Summary: </b>{props.currElement.description}
    </p>
    <p>
      <b>Genre:</b>{props.currElement.genre}
    </p>
    <p>
       <b>Cost: </b>{props.currElement.cast}
    </p>
    <a href={props.currElement.watch_url} target='_blank'><button>Watch Now</button></a>
    </li>)
};

export default Cardlist;