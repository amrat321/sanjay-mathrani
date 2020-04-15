import React from "react";
import Paper from "@material-ui/core/Paper";
import PermanentDrawerLeft from "../../components/navbar/navbar";
import "./home.css";
import Grid from "@material-ui/core/Grid";
import SocialButtonsPage from '../../components/buttons/buttons'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from '../../components/loader/loader'
import FooterPage from '../../components/footer/footer'

import {
  SamaData,
  NayaDuarEnglishData,
  NayaDuarUrduData,
  SindhiCourierData,
  SindhExpressData,
  KawishData,
  HumSubData,
  DailyTimeData,
} from "./../../confige/function";
import { Link } from "@material-ui/core";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      
      val: true
    };
  }
  async componentDidMount() {
    let login = await localStorage.getItem("login");
    console.log(login);
    if (!login) {
      console.log(login);
      login = JSON.parse(login);
      this.props.history.push("/");
    }
    let Sama = await SamaData();
    let NayaDuarEnglidh = await NayaDuarEnglishData();
    let NayaDuarUrdu = await NayaDuarUrduData();
    let SindhiCourier = await SindhiCourierData();
    let SindhExpress = await SindhExpressData();
    let Kawish = await KawishData();
    let HumSub = await HumSubData();
    let DailyTime = await DailyTimeData();
                               
    this.setState({
      Sama,
      NayaDuarEnglidh,
      NayaDuarUrdu,
      SindhiCourier,
      SindhExpress,
      Kawish,
      HumSub,
      DailyTime,
      val:false
    });
   
     
    
  }
  

  render() {
    console.log(this.props);
    return (
      <div>
    
        <PermanentDrawerLeft
        
          history={this.props.history}
          // title= {<span >My portfolio</span>}
          buttons = {<SocialButtonsPage/>}
          content={
           
            <div style={{textAlign: 'left' }}>
              {this.state.Sama ? (
                <>
                <br/>
                 <span style={{fontSize: '25px', fontWeight: 'bold'}}>Sama(Urdu)</span>
          
                  {this.state.Sama.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" ,}}
                        target="_blank"
                        >
                        {v.title}
                      </a>
                    </>
                  ))}
                <br/>
                </>
              ) : (
                <></>
                
                )}

              {this.state.NayaDuarEnglidh ? (
                <>
                  <span style={{fontSize: '25px', fontWeight: 'bold'}}>NayaDuar(English)</span>
                  {this.state.NayaDuarEnglidh.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                        >
                        {v.title}
                      </a>
                    </>
                  ))}
                <br/>

                </>
              ) : (
                <></>
                )}

              {this.state.NayaDuarUrdu ? (
                <>
                <span style={{fontSize: '25px', fontWeight: 'bold'}}>NayaDuar(Urdu)</span>
                  {this.state.NayaDuarUrdu.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                        >
                        {v.title}
                      </a>
                    </>
                  ))}
                <br/>
                </>

              ) : (
                <></>
                )}

              {this.state.SindhiCourier ? (
                <>
                <span style={{fontSize: '25px', fontWeight: 'bold'}}>SindhCourier(Sindhi)</span>
                  
                  {this.state.SindhiCourier.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                        >
                        {v.title}
                      </a>
                    </>
                  ))}
                <br/>

                </>
              ) : (
                <></>
                )}

              {this.state.SindhExpress ? (
                <>
                <span style={{fontSize: '25px', fontWeight: 'bold'}}>SindhExpress(Sindhi)</span>
                  {this.state.SindhExpress.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                        >
                        {v.title}
                      </a>

                    </>
                  ))}
                <br/>

                </>
              ) : (
                <></>
                )}

              {this.state.Kawish ? (
                <>
                <span style={{fontSize: '25px', fontWeight: 'bold'}}>Kawish(Sindhi)</span>
                  {this.state.Kawish.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                        >
                        {v.title}
                      </a>
                    </>
                  ))}
                <br/>

                </>
              ) : (
                <></>
                )}

              {this.state.HumSub ? (
                <>
                <span style={{fontSize: '25px', fontWeight: 'bold'}}>HumSub(Urdu)</span>
                  {this.state.HumSub.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                        >
                        {v.title}
                      </a>
                    </>
                  ))}
                <br/>

                </>
              ) : (
                <></>
                )}

              {this.state.DailyTime ? (
                <>
                <span style={{fontSize: '25px', fontWeight: 'bold'}}>DailyTime(English)</span>
                  {this.state.DailyTime.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                        >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
                )}
            </div>
          }
          />
          <div style={{ }} className='loader'><Loader/></div>
         
         {/* <div><SocialButtonsPage /></div>  */}
         {/* {
           this.state.val ? (
             <></>
             ):
             (
              //  <FooterPage style={{marginLeft: '100px'}}/> 
           )
         } */}
      </div>
    );
  }
}
