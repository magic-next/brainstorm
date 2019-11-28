import React from 'react';
import Container from '../Container';
import Area from './Area';

import content from './content';
import * as S from './styled';

const Footer = () => (
  <S.FooterWrapper>
    <Container>
      <div className="flex areas">
        {content.map((item, index) => (
          <Area
            key={index.toString()}
            title={item.title}
            links={item.links}
          />
        ))}
      </div>
      <div>
        <small>
          Todo o conteúdo original é protegido por direitos autorais © 2019 Magic Next.
          <br />
          Magic: The Gathering e suas respectivas propriedades são copyright Wizards of the Coast.
        </small>
      </div>
    </Container>
  </S.FooterWrapper>
);

export default Footer;
