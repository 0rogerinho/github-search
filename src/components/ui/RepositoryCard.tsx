import React from 'react';
// styled-components
import styled from 'styled-components/native';
// Config Colors
import { colors } from '../../../themesConfig';
// Icons
import { FontAwesome } from '@expo/vector-icons';
// Types
import { IRepositories } from '../../@types';


export const RepositoryCard = (props: IRepositories) => {

  function formatDate(date: string) {
    const option: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const dataObj = new Date(date);
    return dataObj.toLocaleDateString('eng', option);
  }

  return (
    <ViewMain>
      <ViewRowBetween>
        <Title ellipsizeMode="tail" numberOfLines={2}>
          {props.name}
        </Title>

        <ViewRow>
          <FontAwesome
            name="circle"
            size={10}
            color={props.language === null ? 'red' : colors.primary}
          />
          <Title>
            {props.language ?? 'No Language'}
          </Title>
        </ViewRow>
      </ViewRowBetween>

      <Description style={props.description === null && { display: 'none' }}>
        {props.description}
      </Description>

      <ViewRowBetween>
        <ViewRow>
          <FontAwesome name="circle" size={10} color="#9CA3A0" />
          <Text>{formatDate(props.created_at)}</Text>
        </ViewRow>

        <ViewRow>
          <FontAwesome
            name="circle"
            size={10}
            color={props.updated_at === null ? 'red' : '#00FF38'}
          />
          <Text>{props.updated_at === null ? 'No Updated' : formatDate(props.updated_at)}</Text>
        </ViewRow>
      </ViewRowBetween>
    </ViewMain>
  );
};

const ViewMain = styled.View`
  width: 100%;
  background-color: ${colors.background};
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  max-width: 180px;
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

const Text = styled.Text`
  font-size: 10px;
  color: white;
`;

const Description = styled.Text`
  width: 100%;
  font-size: 12px;
  margin: 5px 0px;
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
