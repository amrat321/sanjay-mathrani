import React from 'react'
import Paper from '@material-ui/core/Paper';
import PermanentDrawerLeft from '../../components/navbar/navbar'
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'
import './my_twitter.css'




export default class My_twitter extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
               <PermanentDrawerLeft history={this.props.history}
            //    title="Twitter"
               content={<div className ='twitter'>
<a class="twitter-timeline" href="https://twitter.com/sanjay_mathrani?ref_src=twsrc%5Etfw">Tweets by sanjay_mathrani</a>              </div>}
               />
               {/* <h1>My twitter</h1> */}

            </div>
        )
    }
}