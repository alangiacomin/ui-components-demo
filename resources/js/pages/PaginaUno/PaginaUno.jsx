import { Link } from 'react-router-dom';

const PaginaUno = (props) => (
  <>
    <h1>PAGINA UNO</h1>
    <p><Link to="/">Pagina uno</Link></p>
    <p><Link to="/paginaDue">Pagina due</Link></p>
  </>
);

export default PaginaUno;
