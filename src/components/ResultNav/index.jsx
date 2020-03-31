import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft } from 'styled-icons/fa-solid/ChevronLeft';
import { ChevronRight } from 'styled-icons/fa-solid/ChevronRight';

import Container from '../Container';
import Button from '../Button';
import * as S from './styled';

const PageButton = ({ page, children, params }) => {
  if (!page) {
    return (
      <>
        {children}
      </>
    );
  }
  const qs = Object
    .entries({ ...params, page })
    .map(([key, val]) => `${key}=${val}`)
    .join('&');
  return (
    <a href={`?${qs}`}>
      {children}
    </a>
  );
};

PageButton.propTypes = {
  page: PropTypes.number,
  children: PropTypes.node.isRequired,
  params: PropTypes.shape({}),
};

PageButton.defaultProps = {
  page: null,
  params: {},
};

const ResultNav = ({
  children,
  page,
  position,
  params,
  end,
}) => (
  <S.NavWrapper position={position}>
    <Container className="flex">
      <div className={`flex flex-1 trending--${position}`}>
        {children}
      </div>
      <div className={`flex paginator paginator--${position}`}>
        <PageButton page={page > 1 ? page - 1 : null} params={params}>
          <Button primary disabled={page === 1}>
            <ChevronLeft className="left" />
            <span>Anterior</span>
          </Button>
        </PageButton>
        <PageButton page={page + 1} params={params}>
          <Button primary disabled={end}>
            <span>Próximo</span>
            <ChevronRight className="right" />
          </Button>
        </PageButton>
      </div>
    </Container>
  </S.NavWrapper>
);

ResultNav.propTypes = {
  position: PropTypes.string,
  params: PropTypes.shape({
    colors: PropTypes.string,
    q: PropTypes.string,
  }),
  children: PropTypes.node,
  page: PropTypes.number.isRequired,
  end: PropTypes.bool,
};

ResultNav.defaultProps = {
  params: {},
  end: false,
  children: null,
  position: 'top',
};

export default ResultNav;
