
export const Moviecard  = () => {
  return <div>
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />

  </div>
};

const NetflixSeries = () => {
  return (<div>
    <div>
      <img width='40%' src="./Breaking-Bad.jpeg" alt="" />
    </div>
    <h1>
     <b>Movie Name: </b>Breaking Bad
    </h1>
    <h2>
     <b>Rating: </b>9.5
    </h2>
    <h4>
     <b>Summary: </b>A mild-mannered high school chemistry teacher diagnosed with terminal lung cancer partners with a former student to manufacture and sell methamphetamine to secure his family's financial future, gradually transforming into a ruthless drug kingpin.
    </h4>
  </div>);
};