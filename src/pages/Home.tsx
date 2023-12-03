import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Recent } from '../components';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { INavigationDataProps } from '../@types/stack';

const url_user = 'https://api.github.com/users/';

const android = Platform.OS === 'android';

export const Home = () => {
  const [search, setSearch] = React.useState('');

  const useNavigate = useNavigation<INavigationDataProps>();

  const handlePress = React.useCallback(async () => {
    try {
      console.log(search);

      const getDataUser = await axios.get(`${url_user}${search}`);

      if (getDataUser?.data) {
        console.log('passou primeiro if');
        const getDataRepos = await axios.get(getDataUser?.data.repos_url);
        useNavigate.navigate('User', {
          data: getDataUser?.data,
          dataRepos: getDataRepos?.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  return (
    <SafeAreaView>
      <ViewField>
        <Separator>
          <Ionicons name="search" size={28} color="#0079FF" />
          <TextField
            value={search}
            onChangeText={setSearch}
            placeholder="Search GitHub Username..."
            placeholderTextColor="#768099"
          />
        </Separator>
        <ButtonSearch onPress={handlePress}>
          <TextSearch>Search</TextSearch>
        </ButtonSearch>
      </ViewField>
      <Recent />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #141d2f;
  padding-top: ${android ? '50px' : '20px'};
  align-items: center;
  gap: 20px;
`;
const ViewField = styled.View`
  flex-direction: row;
  background-color: #1e2a47;
  width: 95%;
  height: 60px;
  padding: 10px;
  padding-left: 12px;
  border-radius: 6px;
  justify-content: space-between;
`;
const Separator = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextField = styled.TextInput`
  width: 250px;
  padding-left: 16px;
  color: white;
`;

const ButtonSearch = styled.TouchableOpacity`
  background-color: #0079ff;
  padding: 10px 10px;
  border-radius: 6px;
`;
const TextSearch = styled.Text`
  color: white;
`;
