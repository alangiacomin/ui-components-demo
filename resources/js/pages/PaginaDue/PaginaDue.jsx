import { Link } from 'react-router-dom';
import Col from '../../components/Col/Col';
import ColBreak from '../../components/ColBreak/ColBreak';
import LayoutMain from '../../components/LayoutMain/LayoutMain';
import Row from '../../components/Row/Row';
import useTranslation from '../../hooks/useTranslation';

const PaginaDue = () => {
  const { t } = useTranslation('pageTwo');
  return (
    <LayoutMain>
      <h1>PAGINA DUE</h1>
      <Row>
        <Col>{t('colonna')} 6</Col>
        <Col>{t('colonna')} 6</Col>
        <ColBreak />
        <Col className="col-8">{t('colonna')} 8</Col>
        <Col className="col-4">{t('colonna')} 4</Col>
        <ColBreak />
        <Col className="col">{t('colonna')} 2</Col>
        <Col className="col">{t('colonna')} 2</Col>
        <Col className="col">{t('colonna')} 2</Col>
        <Col className="col">{t('colonna')} 2</Col>
        <Col className="col">{t('colonna')} 2</Col>
        <Col className="col">{t('colonna')} 2</Col>
      </Row>
      <Row>
        <Col>
          <p><Link to="/">Pagina uno</Link></p>
          <p><Link to="/paginaDue">Pagina due</Link></p>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default PaginaDue;
