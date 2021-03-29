import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

const LazyComponent = ({ component, ...others }) => {
  const [LoadedComponent, setLoadedComponent] = useState(null);

  useEffect(() => {
    // dato che è una promise async e nel frattempo il componente potrebbe non
    // essere più richiesto, allora gestisco l'eventuale abort tramite la cleanup
    let isPending = true;
    // promise con esecuzione (then) condizionato dal flag
    component().then((module) => {
      if (isPending) {
        setLoadedComponent(() => (module.default));
      }
    });
    // restituisco funzione di cleanup per abortire la promise
    return () => { isPending = false; };
  }, [component]);

  return LoadedComponent ? <LoadedComponent {...others} /> : null;
};

LazyComponent.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LazyComponent;
