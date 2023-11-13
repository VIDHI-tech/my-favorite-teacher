import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

const Home = () => (
  <Fragment>
    <Helmet><title>Quiz App - Home</title></Helmet>
    <div id="home">
      <section>
        <div style={{ textAlign: 'center'}}>
            <span><CalculateOutlinedIcon className="cube" sx={{ fontSize: 140 }} /></span>
        </div>
        <h1>Quiz App</h1>
        <div className="play-button-container">
            <ul>
                <li><Link className="play-button" to="/play/instructions">Play</Link></li>
            </ul>
        </div>
        <div className="auth-container">
            <Link to="/login"    className="auth-buttons" id="login-button">Login</Link>
            <Link to="/register" className="auth-buttons" id="register-button">Sign up</Link>
        </div>
      </section>
    </div>
  </Fragment>
);

export default Home;
