import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ReactComponent as ReactIcon } from './assets/logo.svg';
import Hii from './components/Hii';

import Contact from './pages/Contact';
import About from './pages/About';

function App() {
	const [ state, setState ] = useState(false);

	const start = () => {
		// setState(!state)
		setState((prevValue) => !prevValue);
		setContar(contar + 1);
	};

	const [ contar, setContar ] = useState(0);

	useEffect(
		() => {
			console.log(`Clicks ${contar}`);
		},
		[ contar ]
	);

	return (
		<div className="container mt-5">
			<div className="my-5">
				<ReactIcon />
				<Hii user="" />
			</div>

			<Alert variant="" className="mt-5 mx-5 border">
				<Alert.Heading>Status {state ? 'ON' : 'OFF'}</Alert.Heading>
				<hr />
				<h4>{contar}</h4>
				<Button onClick={() => start()} size="lg" variant="outline-primary">
					ON / OFF
				</Button>
			</Alert>

			<hr className="my-5" />

			<Router>
				<div>
					<Link to="/contact">
						<Button size="lg" variant="outline-danger" className="mr-4">
							Contact
						</Button>
					</Link>
					<Link to="/about">
						<Button size="lg" variant="outline-warning">
							About
						</Button>
					</Link>
				</div>

                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
			</Router>

		</div>
	);
}

export default App;
