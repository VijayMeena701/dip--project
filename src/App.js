import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FaceDetect from './pages/FaceDetect';
import FaceMatch from './components/FaceMatch';
import FaceLandMark from './components/FaceLankMark';
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/face-detection" component={FaceDetect} />
				<Route exact path="/face-matching" component={FaceMatch} />
				<Route exact path="/face-landmark" component={FaceLandMark} />
			</Switch>
		</Router>
	);
}

export default App;