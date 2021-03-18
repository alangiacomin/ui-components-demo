import { Link } from 'react-router-dom';

const NotFoundPage = (props) => (
  <>
    <h1>PAGINA NON TROVATA</h1>
    <p><Link to="/">home page</Link></p>
    <p><Link to="/test">second page</Link></p>
    <p><Link to="/fdsfdsfs">not found page</Link></p>
  </>
);

export default NotFoundPage;
