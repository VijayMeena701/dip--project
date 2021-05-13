import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import * as faceapi from 'face-api.js';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        border: '10px solid #000'
    }
})

const FaceMatch = (props) => {
    const classes = props.classes;
    const imageUpload = document.getElementById('imageUpload');
    const start = () => {
        console.log('Loaded')
    }
    React.useEffect(() => {
        Promise.all([
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
        ]).then(start);
    })
    return (
        <div className={classes.root}>
            <input type="file" id="imageUpload"></input>
        </div>
    )
}

FaceMatch.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FaceMatch)