import NetflixSeries  from "./components/NetflixSeries"
export const Moviecard  = () => {
  return <>
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

