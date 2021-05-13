import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import WebCamCapture from '../components/WebCamCapture';

const styles = (theme) => ({
    root: {}
})

const FaceDetect = (props) => {
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <WebCamCapture />
        </div>
    )
}

FaceDetect.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FaceDetect);