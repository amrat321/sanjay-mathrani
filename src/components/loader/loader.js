import React from 'react'
import Loader from 'react-loader-spinner'
 export default class Loader2 extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         type="Puff"
         color="black"
         height={100}
         width={100}
         timeout={4300} //3 secs
 
      />
     );
    }
 }