import Toast from 'react-native-root-toast';
// React
import React from 'react';
// React Native
import { ActivityIndicator, Platform } from 'react-native';
// React Navigation
import { useNavigation } from '@react-navigation/native';
// Icons
import Ionicons from '@expo/vector-icons/Ionicons';
// Expo Status Bar
import { StatusBar } from 'expo-status-bar';
// Types
import { INavigationDataProps, IUser } from '../@types';
// Styled-Components
import styled from 'styled-components/native';
// Config Colors
import { colors } from '../../themesConfig';
// Components
import { Recent } from '../components';
// Server
import { getUserData, getUserRepos } from '../service';

const android = Platform.OS === 'android';

interface IErrorProps {
  message: string;
  status: boolean;
}

export const Home = () => {
  const [search, setSearch] = React.useState<string>('');
  const [load, setLoad] = React.useState<boolean>(false);
  const [error, setError] = React.useState<IErrorProps>({message: '',status: false,});
  const [timeoutId, setTimeoutId] = React.useState< NodeJS.Timeout | number>(0);

  const useNavigate = useNavigation<INavigationDataProps>();

  const handlePress = React.useCallback(async () => {
    try {
      setLoad(true);
      setError({ message: '', status: false });

      const userData: IUser = await getUserData(search);

      if (userData) {
        const userRepos = await getUserRepos(userData.repos_url);
        useNavigate.navigate('User', {
          dataUser: userData,
          dataRepos: userRepos,
        });
      }
    } catch (error) {
      setLoad(false);
      error.response.status === 404
        ? setError({ message: `user ${search} not found`, status: true })
        : setError({ message: 'Internal error', status: true });
    } finally {
      setSearch('');
      setLoad(false);
      clearTimeout(timeoutId)
      const time = setTimeout(() => {setError({message: '',status: false,})}, 4000)
      setTimeoutId(time)
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
          <Toast visible={error.status}>{error.message}</Toast>
        </Separator>
        <ButtonSearch
          data={search === ''}
          disabled={search === ''}
          onPress={handlePress}
        >
          {load ? (
            <ActivityIndicator color="white" />
          ) : (
            <TextSearch>Search</TextSearch>
          )}
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
  padding-top: ${android ? '80px' : '20px'};
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
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const TextField = styled.TextInput`
  width: 250px;
  padding-left: 16px;
  color: white;
`;

const ButtonSearch = styled.TouchableOpacity<{ data: boolean }>`
  justify-content: center;
  align-items: center;
  width: 70px;
  background-color: ${({ data }) => ` ${data ? '#085CB9' : colors.primary}`};
  padding: 10px 10px;
  border-radius: 6px;
`;
const TextSearch = styled.Text`
  color: white;
`;
