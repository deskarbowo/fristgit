import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

class Beranda extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img 
                            src="https://i.ebayimg.com/images/g/YloAAOSwUlFapCmQ/s-l300.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />
                    <div className="banner-text">
                        <h1>Web Master</h1>
                        <hr/>
                        <p>HTML/CSS | PHP | MySQL | Bootstrap | React |
                         React Native | Javascript | Codeigniter | Laravel
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/lokomedia" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" arial-hidden="true"/>
                            </a>
                            <a href="https://www.twitter.com/bukulokomedia" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" arial-hidden="true"/>
                            </a>
                            <a href="https://www.github.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" arial-hidden="true"/>
                            </a>
                            <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" arial-hidden="true"/>
                            </a>
                            <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" arial-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Beranda;