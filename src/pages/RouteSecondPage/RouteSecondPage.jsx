import { Link } from 'react-router-dom';

const RouteSecondPage = (props) => (
  <>
    <h1>SECONDA PAGINA</h1>
    <p><Link to="/">home page</Link></p>
    <p><Link to="/test">second page</Link></p>
    <p><Link to="/fdsfdsfs">not found page</Link></p>
  </>
);

export default RouteSecondPage;
