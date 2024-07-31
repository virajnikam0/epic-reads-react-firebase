import './App.css';
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<Outlet />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
