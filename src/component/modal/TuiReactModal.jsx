import PropTypes from 'prop-types';
import './TuiReactModal.scss';
import { useMemo, useState } from 'react';
const TuiReactModal = ({ visibility, message }) => {
  const [hidden, setHidden] = useState('hidden');
  useMemo(() => {
    if (visibility) {
      setHidden('');
      return true;
    }
    setHidden('hidden');
    return visibility;
  }, [visibility]);

  return (
    <div className={`modal ${hidden}`}>
      <div className="modal-container">
        <h4 className="modal-detail">{message}</h4>
        <button
          onClick={() => {
            if (visibility) setHidden('hidden');
          }}
          type="button"
          className="modal-button modal-button-variant-1"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

TuiReactModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default TuiReactModal;
