import seriesData from '../api/seriesData.json'
const NetflixSeries = () => {
  // variables in jsx
  // const name = 'Breaking Bad';
  // const rating = '9.5';
  // const summary = "A mild-mannered high school chemistry teacher diagnosed with terminal lung cancer partners with a former student to manufacture and sell methamphetamine to secure his family's financial future, gradually transforming into a ruthless drug kingpin.";
  // let age = 54;
  // // Expressions in jsx
  // // Dynamic values usinf functions call
  // const returnGenre = () => {
  //   const genre = 'RomCom';
  //   return genre;
  // };
  
  // //method to write functions

  // // const checkage = () => {
  // //   let age = 14;
  // //   return age >= 18 ? 'Watch Now' : 'Only For adult'; 

  // const checkage = () => {
  //    if (age >= 18) return "Watch Now";
  //    return "Not Availabl";
  // };
    // if (age >= 18) {
    //     text = 'Watch Now';
    //   return text;
     
    // }else {
    //   text = 'Only For adult';
    //   return text;
    // }
  // };

  return(<>
    <ul>
      {seriesData.map((currElement) => {
      return (<li key={currElement.id}>
      <div>
        <img style={{'marginTop':'20px'}} width='50%' src={currElement.img_url} alt="" />
      </div>
    <h2>
     <b>Movie Name: </b>{currElement.name}
    </h2>
    <h3>
     <b>Rating: </b>{currElement.rating}
    </h3>
    <p>
     <b>Summary: </b>{currElement.description}
    </p>
    <p>
      <b>Genre:</b>{currElement.genre}
    </p>
    <p>
       <b>Cost: </b>{currElement.cast}
    </p>
    <a href={currElement.watch_url} target='_blank'><button>Watch Now</button></a>
    </li>)
      })};
      
    </ul>
  </>);
};

// name export
export default NetflixSeries; 