// React
import React from 'react';
// React Native
import { TouchableOpacity } from 'react-native';
// React Navigation
import { useNavigation } from '@react-navigation/native';
// style-components
import styled from 'styled-components/native';
// Icons
import { Feather } from '@expo/vector-icons';
// Config Colors
import { colors } from '../../../themesConfig';
// Types
import { INavigationDataProps, IUser } from '../../@types';
// Service
import { getUserRepos } from '../../service';
  

export const RecentCard = (props: IUser) => {
  const [load, setLoad] = React.useState(false);

  const navigation = useNavigation<INavigationDataProps>();

  const handlePress = React.useCallback(async () => {
    setLoad(true);
    try {
      const dataRepos =  await getUserRepos(props.repos_url)
      navigation.navigate('User', {
        dataUser: props,
        dataRepos: dataRepos,
      });
    } finally {
      setLoad(false);
    }
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
      <MainView>
        {!load && (
          <>
            <Avatar source={{ uri: props.avatar_url }} />
            <TextName ellipsizeMode="tail" numberOfLines={1}>
              {props.name ?? "No Name"}
            </TextName>
            <TextLogin ellipsizeMode="tail" numberOfLines={1}>
              @{props.login}
            </TextLogin>
            <View>
              <Feather name="map-pin" size={16} color="white" />
              <Text ellipsizeMode="tail" numberOfLines={1}>
                {props.location ?? 'No Location'}
              </Text>
            </View>
          </>
        )}

        {load && <ActivityIndicator color="white" />}
      </MainView>
    </TouchableOpacity>
  );
};

const MainView = styled.View`
  width: 100%;
  height: 72px;
  flex-direction: row;
  background-color: ${colors.backgroundSecondary};
  border-radius: 6px;
  gap: 15px;
  align-items: center;
  padding: 16px 14px;
  margin-bottom: 10px;
`;

const ActivityIndicator = styled.ActivityIndicator`
  width: 100%;
`;

const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  object-fit: cover;
`;

const TextName = styled.Text`
  width: 100px;
  font-size: 12px;
  font-weight: 600;
  color: white;
`;
const TextLogin = styled.Text`
  width: 80px;
  font-size: 14px;
  color: ${colors.primary};
`;
const View = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Text = styled.Text`
  width: 70px;
  font-size: 12px;
  color: white;
`;
