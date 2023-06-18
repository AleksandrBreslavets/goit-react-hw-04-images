import ReactModal from 'react-modal';
import PropTypes from "prop-types";
import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import { ModalImg } from './Modal.styled';

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, onClose, bigImg: { bigImgURL, altDescr } }) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: '1200',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'unset',
      border: 'unset'
    }
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
      onRequestClose={onClose}
      style={styles}
    >
      <ModalImg src={bigImgURL} alt={altDescr} />
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  bigImg: PropTypes.shape({
    bigImgURL: PropTypes.string.isRequired,
    altDescr: PropTypes.string.isRequired,
  }).isRequired,
};