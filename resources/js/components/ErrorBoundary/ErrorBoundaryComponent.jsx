// import { PropTypes } from 'prop-types';
import { useCallback } from 'react';

const ErrorBoundaryComponent = (props) => {
  // const { homepageRoute } = props;
  const reload = useCallback(() => window.location.reload(), []);
  return (
    <div
      style={{
        backgroundColor: '#2c2c2c',
      }}
    >
      <div
        className="ml-auto mr-auto"
        style={{
          maxWidth: '1280px',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#000000',
          backgroundImage: `url('${'assets/img/broken.png'}')`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className="float-right pt-4 pr-5"
          style={{
            color: '#ffffff',
          }}
        >
          <h2>Ops! Si è rotto qualcosa</h2>
          <h4>Errore imprevisto</h4>
          <button type="button" variant="link" onClick={reload}>
            Ricarica
          </button>
        </div>
      </div>
    </div>
  );
};

// ErrorBoundaryComponent.propTypes = {
//   homepageRoute: PropTypes.string.isRequired,
// };

export default ErrorBoundaryComponent;
