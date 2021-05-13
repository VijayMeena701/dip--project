import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Button } from '@material-ui/core';
import image1 from '../utils/Face Recognition Icons - Download Free Vector Icons _ Noun Project_files/7792-200.png';
import image2 from '../utils/Face Recognition Icons - Download Free Vector Icons _ Noun Project_files/3026585-200.png';
import image3 from '../utils/Face Recognition Icons - Download Free Vector Icons _ Noun Project_files/3097822-200.png';
const styles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2em'
    },
    container: {
        maxWidth: '1280px',
    },
    item: {
        display: 'flex',
        flexDirection: 'column'
    }
});

const available = [
    {
        id: 1,
        icon: "",
        name: "Face Detection",
        link: "/face-detection",
        image: image1,
    },
    {
        id: 2,
        icon: "",
        name: "Face LandMark",
        link: "/face-landmark",
        image: image2
    },
    {
        id: 3,
        icon: "",
        name: "Face Matching",
        link: "/face-matching",
        image: image3
    }
]

const Home = (props) => {
    const classes = props.classes;
    return (
        <section className={classes.root}>
            <CssBaseline />
            <Grid className={classes.container} container spacing={2}>
                {
                    available.map((item) => {
                        return (
                            <Grid container justify="space-around" className={classes.item} key={item.id} item sm={12} md={4}>
                                <Grid item sm>
                                    <Typography>
                                        {item.name}
                                    </Typography>
                                </Grid>
                                <Grid item sm>
                                    <img alt="icon" src={item.image}></img>
                                </Grid>
                                <Grid item sm>
                                    <Link to={item.link} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained">{item.name}</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </section >
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);