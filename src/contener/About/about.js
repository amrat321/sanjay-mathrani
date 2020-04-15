import React from 'react'
import Paper from '@material-ui/core/Paper';
import PermanentDrawerLeft from '../../components/navbar/navbar'
import FooterPage from '../../components/footer/footer'
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import './about.css'



export default class About extends React.Component {
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
                    title="About Sanjay Mathrani"
                    content={<div>
                    <p className="content" style={{ textAlign: "left", fontSize: '15px' }}>
                    Performance and results have driven with combined expertise in Public Relation Management and Digital Media. I have the unique ability to manage multidisciplinary projects and handle complex assignments effectively with a proven ability to organize and prioritize work in high pressured environments. I born in an epicenter of heritage in Pakistan – a place called Amarkot, Thar known for its rich culture, folklore, myths, rituals, and archaeology. The place has an immense impression on my upbringing which can be reflected from my subject selection, hobbies to the professional engagements. A critical thinker, problem-solver, and a decision-maker who GET THINGS DONE.
                     <br /><br />
                    Sanjay Mathrani is an is a multimedia journalist based in Hyderabad, Sindh and a member of the staff. He covers environment, politics, wildlife, culture and Sindhi Nationalism.
                     <br /><br />
                    Sanjay Mathrani is also alumni of the Global Undergraduate Exchange Program (UGRAD), the U.S. Department of State’s exchange program.
                     <br /><br />
                    Sanjay Mathrani has contributed reports, feature stories, investigative reports for
                    <br /><br />
                     </p>
                     </div>}
                />


            </div>
        )
    }
}