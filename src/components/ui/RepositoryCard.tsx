import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../themesConfig';
import { FontAwesome } from '@expo/vector-icons';

export type IRepositoryCardProps = {
  name: string;
  language: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export const RepositoryCard = ({...props}: IRepositoryCardProps) => {
  return (
    <ViewMain>
      <ViewRowBetween>
        <Title>{props.name}</Title>

        <ViewRow>
          <FontAwesome name="circle" size={10} color={colors.primary} />
          <Title>{props.language}</Title>
        </ViewRow>
      </ViewRowBetween>

      <Description>{props.description}</Description>

      <ViewRowBetween>
        <ViewRow>
          <FontAwesome name="circle" size={10} color="#9CA3A0" />
          <Text>{props.created_at}</Text>
        </ViewRow>

        <ViewRow>
          <FontAwesome name="circle" size={10} color="#00FF38" />
          <Text>{props.updated_at}</Text>
        </ViewRow>
      </ViewRowBetween>
    </ViewMain>
  );
};

const ViewMain = styled.View`
  max-width: 100%;
  width: 100%;
  background-color: ${colors.background};
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

const Text = styled.Text`
  font-size: 10px;
  color: white;
`;

const Description = styled.Text`
  font-size: 10px;
  color: #dee7ff;
`;

const ViewRow = styled.View`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const ViewRowBetween = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ViewRowGap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
