import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
});

const Home = () => {
    const classes = useStyles();

    return(
        <div className='homestyle' id="section1" style={{fontFamily: 'Times New Roman'}}>
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number:{
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 850
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1
                            }
                        },
                        size:{
                            value: 5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
            <h2 style={{position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontStyle: 'italic', fontSize: '15px', fontWeight: 'bold'}}>Hi, I'm</h2>
            <h1 style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '20px', fontWeight: 'bold'}}>Saumya Herath</h1>
        </div>
    );
};

export default Home;
