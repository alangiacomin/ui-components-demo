import { render } from 'react-dom';
import Application from './Application';

render(<Application
  importPage={(page) => import(`./pages/${page}/${page}`)}
/>, document.getElementById('app'));
