import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Loader from '@/components/Loader';
import { ensureLigaMagicUrl } from '@/libs/external';
import TutorService from '@/services/tutor';
import * as V from '@/styles';
import * as S from './styled';
import ApiContext from '@/contexts/Api';

import { to } from '@/utils';

const PriceTag = ({ price }) => {
  if (price < 0) {
    return null;
  }
  if (price === null) {
    return (
      <Loader color={V.colors.external.ligamagic} />
    );
  }
  return (
    <data value={price} className="text--bold">
      {`R$ ${price.toFixed(2).replace('.', ',')}`}
    </data>
  );
};

PriceTag.propTypes = {
  price: PropTypes.number,
};

PriceTag.defaultProps = {
  price: null,
};

const ExternalLinks = ({ name }) => {
  const lmUrl = ensureLigaMagicUrl({ name });
  const [price, setPrice] = useState(null);
  const { tutorUrl } = useContext(ApiContext);

  const loadDetails = async () => {
    const service = TutorService({ tutorUrl });
    const resp = await service.details({ name, price: true })
      .catch(() => null);
    if (!resp || resp.error || !resp.stores.length) {
      setPrice(-1);
      return;
    }
    setPrice(resp.stores[0].price);
  };

  useEffect(() => {
    loadDetails();
  }, [name]);

  return (
    <S.LinksWrapper>
      <a href={lmUrl} target="__blank">
        <S.ExternalWrapper block>
          <img src="/icons/liga.png" alt="Ícono do Logo da Ligamagic" />
          <div className="flex flex-1">
            Comprar na Ligamagic
          </div>
          <PriceTag price={price} />
        </S.ExternalWrapper>
      </a>
    </S.LinksWrapper>
  );
};

ExternalLinks.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExternalLinks;
