import React from 'react';
import './button.css'
import img from '../../img/BxPO7sqC_400x400.jpg'
const SocialButtonsPage = () => {
  return (
    <article>
      <div className='buttom'>
      <img className="img2" src={img} width="150" height="150" style={{borderRadius: "100px"}}/>
<br/>
      <span style={{fontSize: '30px'}}>&nbsp;  &nbsp; My Portfolio</span>
      
    <ul>
          <li><a href="https://twitter.com/sanjay_mathrani" target="_blank" onclick="window.open('https://twitter.com', 'twitter', 'toolbar=no, width=650, height=300'); trackSocial('Twitter', 'Follow', 'http://www.roberteberhard.com'); return false;"><span className="social-button twitter" style={{fontSize: " 110%"}}>Folow@sanjay Mathrani</span></a></li>
    </ul>  
      </div>
  </article>
  
  
  );
}

export default SocialButtonsPage;