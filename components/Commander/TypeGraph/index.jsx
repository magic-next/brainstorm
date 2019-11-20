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
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'Creature',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Land',
          },
          id: 'lines',
        },
      ]}
    />
    <h4>Distribuição média de tipos</h4>
  </S.GraphWrapper>
);

TypeGraph.propTypes = CommanderType;

export default TypeGraph;
