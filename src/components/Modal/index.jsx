import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Modal = ({
  show,
  children,
  className,
  dismissable,
  close,
}) => {
  if (!show) {
    return null;
  }
  const onClickBackdrop = () => {
    if (!dismissable) return;
    close();
  };
  return (
    <S.ModalWrapper className={className} onClick={onClickBackdrop}>
      <S.ModalContentWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContentWrapper>
    </S.ModalWrapper>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  dismissable: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  show: false,
  dismissable: true,
  children: false,
  className: '',
};

export default Modal;
