import { Link } from 'react-router-dom';
import LayoutMain from '../../components/LayoutMain/LayoutMain';
import routes from '../../config/routes';

const PaginaUno = (props) => (
  <LayoutMain>
    <h1>PAGINA UNO</h1>
    <p><Link to="/">Pagina uno</Link></p>
    <p><Link to={routes.secondPage.to}>Pagina due</Link></p>
    <p><input name="test" /></p>
    <p><button type="button" className="button btn button-primary btn-primary">Prova</button></p>
  </LayoutMain>
);

export default PaginaUno;
