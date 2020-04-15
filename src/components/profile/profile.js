import React from 'react'
import img from '../../img/BxPO7sqC_400x400.jpg'
import './profile.css'

class Profile extends React.Component{

    render(){
        return(
            <div>
      <img className="img" src={img} width="150" height="150" style={{borderRadius: "100px"}}/>
            </div>
        )
    }
}
export default Profile