import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';

class About extends Component {
  render() {
    return (
      <Scrollbars style={{ width: 700, height: 540, margin: 'auto' }}>
        <div className="container">
        
          <div className="sub-container">
            <div className="sub-sub-container">
              <span className="page-title">About</span>
              {/* <span>Website:\About> run</span>
              <span>loading...</span> */}
              <p>
                  On September 18, 2018, I have realized my destiny and decided to pursue a career is software development. 
                  After nearly 3 years of working in insurance in various roles and diverse responsibilites, 
                  I have concluded without doubt that software development is the most enjoyable of 
                  these roles.
                  On September 18, 2018, I have realized my destiny and decided to pursue a career is software development. 
                  After nearly 3 years of working in insurance in various roles and diverse responsibilites, 
                  I have concluded without doubt that software development is the most enjoyable of 
                  these roles.
                  On September 18, 2018, I have realized my destiny and decided to pursue a career is software development. 
                  After nearly 3 years of working in insurance in various roles and diverse responsibilites, 
                  I have concluded without doubt that software development is the most enjoyable of 
                  these roles.
                  On September 18, 2018, I have realized my destiny and decided to pursue a career is software development. 
                  After nearly 3 years of working in insurance in various roles and diverse responsibilites, 
                  I have concluded without doubt that software development is the most enjoyable of 
                  these roles.
                  On September 18, 2018, I have realized my destiny and decided to pursue a career is software development. 
                  After nearly 3 years of working in insurance in various roles and diverse responsibilites, 
                  I have concluded without doubt that software development is the most enjoyable of 
                  these roles.
              </p>
              <ul>
                <li><span id="dash">-</span><div id="home">Home</div><span id="dash">-</span></li>
                <li>About</li>
              </ul>
            </div>
          </div>
          
        </div>
        </Scrollbars>
        );
    }
}

export default About;