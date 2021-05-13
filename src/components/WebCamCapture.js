import React, { useState } from 'react';
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const videoConstraints = {
    width: 480,
    height: 360,
    facingMode: "user"
};

const WebcamCapture = (props) => {
    setCap("");
    const [src, setSrc] = useState(null);
    const [cap, setCap] = useState(null);
    const webcamRef = React.useRef('');
    const [dataBlob, setDataBlob] = useState(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc)
        setSrc(imageSrc);
        var strImage = imageSrc.replace(/^data:image\/[a-z]+;base64,/, "");
        const byteCharacters = atob(strImage);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "image/jpeg" });
        console.log(blob);
        send(blob);
    };

    const send = async (blob) => {
        const formData = new FormData();
        let image = blob;
        formData.append("image", image);
        // const data = { image: blob }
        const response = await fetch("/face-detection", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            console.log(response.body);
            setDataBlob(response.body);
            setSrc(null);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        capture();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginTop: '1em' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <form encType="multipart/form-data" noValidate onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
                    <Webcam
                        audio={false}
                        height={360}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={480}
                        videoConstraints={videoConstraints}
                        style={{ display: 'block', margin: '0 auto' }}
                    />
                    <Button color="secondary" type="submit" variant="contained" startIcon={<PhotoCameraIcon />}>Capture</Button>
                </form>
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {cap === null ?
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
                        <Webcam
                            audio={false}
                            height={360}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={480}
                            videoConstraints={videoConstraints}
                            style={{ display: 'block', margin: '0 auto' }}
                        />
                        <Button color="secondary" disabled type="submit" variant="contained" startIcon={<PhotoCameraIcon />}>Capture</Button>
                    </div>
                    :
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
                        <img style={{ margin: '0 auto' }} alt="img" src={src !== null ? src : URL.createObjectURL(dataBlob)} />
                        <Button color="secondary" disabled type="submit" variant="contained" startIcon={<PhotoCameraIcon />}>Captured Image</Button>
                    </div>
                }
            </div>
        </div >
    );
};

export default WebcamCapture