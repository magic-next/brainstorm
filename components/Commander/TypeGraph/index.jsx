import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import CommanderType from '../../../types/Commander';
import * as S from './styled';

const TypeGraph = ({ data }) => (
  <S.GraphWrapper>
    <ResponsivePie
      data={data}
      margin={{
        left: 10,
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      enableRadialLabels={false}
      sliceLabel={(d) => `${d.label} (${d.value})`}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#000"
    />
    <h4>Distribuição média de tipos</h4>
  </S.GraphWrapper>
);

TypeGraph.propTypes = CommanderType;

export default TypeGraph;
