import { Link } from 'react-router-dom';

const RouteHomePage = (props) => (
  <>
    <h1>HOME PAGE</h1>
    <p><Link to="/">home page</Link></p>
    <p><Link to="/test">second page</Link></p>
    <p><Link to="/fdsfdsfs">not found page</Link></p>
  </>
);

export default RouteHomePage;
