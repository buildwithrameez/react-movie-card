
export const Moviecard  = () => {
  return <>
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  <NetflixSeries />
  </>
   
// in react it return only one elements so we add one parent and its childeran
  // <div>
  //   <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />

  // </div>


  // To avoid from add a extra parent div ,we use fragments in react:

  // there are two way to add fragments, use array and fragment

  // ([ <NetflixSeries key="1" />,  <NetflixSeries key="2" />,  <NetflixSeries key="3" />,  <NetflixSeries key="4" />]);
};

const NetflixSeries = () => {
  // variables in jsx
  const name = 'Breaking Bad';
  const rating = '9.5';
  const summary = "A mild-mannered high school chemistry teacher diagnosed with terminal lung cancer partners with a former student to manufacture and sell methamphetamine to secure his family's financial future, gradually transforming into a ruthless drug kingpin.";
  // Expressions in jsx
  // Dynamic values usinf functions call
  const returnGenre = () => {
    const genre = 'RomCom';
    return genre;
  };
  
  const checkage = () => {
    let age = 14;
    return age >= 18 ? 'Watch Now' : 'Only For adult'; 
    // if (age >= 18) {
    //     text = 'Watch Now';
    //   return text;
     
    // }else {
    //   text = 'Only For adult';
    //   return text;
    // }

  };

  return (<div>
    <div>
      <img style={{'marginTop':'20px'}} width='40%' src="./Breaking-Bad.jpeg" alt="" />
    </div>
    <h1>
     <b>Movie Name: </b>{name}
    </h1>
    <h2>
     <b>Rating: </b>{rating}
    </h2>
    <h4>
     <b>Summary: </b>{summary}
    </h4>
    <h5>
      <b>Genre:</b>{returnGenre()}
    </h5>
    <button>{checkage()}</button>
  </div>);
};