import { Link } from 'react-router-dom';
import Col from '../../components/Col/Col';
import ColBreak from '../../components/ColBreak/ColBreak';
import LayoutMain from '../../components/LayoutMain/LayoutMain';
import Row from '../../components/Row/Row';

const PaginaDue = () => (
  <LayoutMain>
    <h1>PAGINA DUE</h1>
    <Row>
      <Col>Colonna 6</Col>
      <Col>Colonna 6</Col>
      <ColBreak />
      <Col className="col-8">Colonna 8</Col>
      <Col className="col-4">Colonna 4</Col>
      <ColBreak />
      <Col className="col">Colonna 2</Col>
      <Col className="col">Colonna 2</Col>
      <Col className="col">Colonna 2</Col>
      <Col className="col">Colonna 2</Col>
      <Col className="col">Colonna 2</Col>
      <Col className="col">Colonna 2</Col>
    </Row>
    <Row>
      <Col>
        <p><Link to="/">Pagina uno</Link></p>
        <p><Link to="/paginaDue">Pagina due</Link></p>
      </Col>
    </Row>
  </LayoutMain>
);

export default PaginaDue;
