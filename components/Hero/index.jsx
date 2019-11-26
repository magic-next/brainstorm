import React from 'react';

import * as S from './styled';

const Hero = () => (
  <S.HeroWrapper>
    <S.HeroTextWrapper>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Praesentium rem quae quis, animi voluptas modi, natus nesciunt veniam assumenda.
        Aatque laborum fugiat amet consequatur ab odio iusto commodi ipsum quo.
      </h2>
      <a className="btn btn--rounded btn--primary" href="/ranking">Ir para o ranking</a>
    </S.HeroTextWrapper>
    <S.LogoWrapper>
      <img src="/static/images/island.png" alt="Island Illustration" />
    </S.LogoWrapper>
  </S.HeroWrapper>
);

export default Hero;
