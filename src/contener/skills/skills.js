import React from 'react'
import Paper from '@material-ui/core/Paper';
import PermanentDrawerLeft from '../../components/navbar/navbar'
import Button from '@material-ui/core/Button';
import './skilss.css'



export default class Skills extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
               <PermanentDrawerLeft history={this.props.history}/>
               <h1>Skills</h1>
<div className="skills">
<Button  style={{color: 'black' , margin: '10px 10px 10px 1px'}} variant="outlined" disabled>
  JOURNALISM
</Button>
<Button  style={{color: 'black' , margin: '10px 10px 10px 1px'}} variant="outlined" disabled>
  DIGITAL MEDIA
</Button><Button  style={{color: 'black' , margin: '10px 10px 10px 1px'}} variant="outlined" disabled>
  PUBLIC RELATIONS
</Button><Button  style={{color: 'black' , margin: '10px 10px 10px 1px'}} variant="outlined" disabled>
  SOCIAL NETWORKING
</Button><Button  style={{color: 'black' , margin: '10px 10px 10px 1px'}} variant="outlined" disabled>
  CREATIVE WRITTING
</Button><Button  style={{color: 'black' , margin: '10px 10px 10px 1px'}} variant="outlined" disabled>
  FEATURE WRITTING
</Button><Button  style={{color: 'black' , margin: '10px 10px 10px 1px'}} variant="outlined" disabled>
BLOGGING
</Button><Button  style={{color: 'black' , margin: '10px 10px 10px 1px'}} variant="outlined" disabled>
  VLOGGING
</Button>

</div>
             
            </div>
        )
    }
}