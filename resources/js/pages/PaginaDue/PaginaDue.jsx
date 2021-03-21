import { Link } from 'react-router-dom';
import Col from '../../components/Col/Col';
import ColBreak from '../../components/ColBreak/ColBreak';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';

const PaginaDue = () => (
  <>
    <h1>PAGINA DUE</h1>
    <Container>
      <Row>
        <Col>Colonna 1</Col>
        <Col>Colonna 2</Col>
        <ColBreak />
        <Col>Colonna 3</Col>
        <Col>Colonna 4</Col>
      </Row>
    </Container>
    <p><Link to="/">Pagina uno</Link></p>
    <p><Link to="/paginaDue">Pagina due</Link></p>
  </>
);

export default PaginaDue;
