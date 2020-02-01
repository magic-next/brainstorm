import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Loader from '@/components/Loader';
import TutorService from '@/services/tutor';
import * as V from '@/styles';
import * as S from './styled';
import ApiContext from '@/contexts/Api';

const PriceTag = ({ offer, loading, color }) => {
  if (!loading && !offer) {
    return null;
  }
  if (loading) {
    return (
      <Loader color={color} />
    );
  }
  const { price } = offer;
  return (
    <data value={price} className="text--bold">
      {`R$ ${price.toFixed(2).replace('.', ',')}`}
    </data>
  );
};

PriceTag.propTypes = {
  color: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  offer: PropTypes.shape({
    price: PropTypes.number,
  }),
};

PriceTag.defaultProps = {
  offer: null,
};

const ExternalLinks = ({
  name,
  color,
  children,
  provider,
}) => {
  const [offer, setOffer] = useState(null);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const { tutorUrl } = useContext(ApiContext);

  const loadDetails = async () => {
    const service = TutorService({ tutorUrl });
    const resp = await service.details({ name, price: true, provider })
      .catch(() => null);
    setLoading(false);
    if (!resp || resp.error || !resp.offers.length) {
      return;
    }
    setOffer(resp.offers[0]);
    setUrl(resp.url);
  };

  useEffect(() => {
    loadDetails();
  }, [name]);

  if (!offer && !loading) {
    return null;
  }

  return (
    <S.LinksWrapper>
      <a href={url} target="__blank">
        <S.ExternalWrapper disabled={!url} color={color} block>
          {children}
          <PriceTag color={color} loading={loading} offer={offer} />
        </S.ExternalWrapper>
      </a>
    </S.LinksWrapper>
  );
};

ExternalLinks.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
  provider: PropTypes.string,
};

ExternalLinks.defaultProps = {
  color: null,
  provider: 'ligamagic',
  children: null,
};

export default ExternalLinks;
