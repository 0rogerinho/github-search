import styled from 'styled-components/native';
import { colors } from '../../../themesConfig';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { INavigationProps, IUserRouteProps } from '../../@types/stack';
import { IUser } from '../../@types/user';

export const RecentCard = (props: IUser) => {
  const navigation = useNavigation<INavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('User')} 
    >
      <MainView>
        <Avatar>
          <Image source={require('../../../assets/favicon.png')} />
        </Avatar>
        <TextName>{props.name}</TextName>
        <TextLogin>{props.login}</TextLogin>
        <View>
          <Feather name="map-pin" size={16} color="white" />
          <Text>{props.location}</Text>
        </View>
      </MainView>
    </TouchableOpacity>
  );
};

const MainView = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${colors.backgroundSecondary};
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 14px;
`;

const Avatar = styled.View`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: white;
  object-fit: contain;
  border-radius: 100px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextName = styled.Text`
  width: 90px;
  font-size: 10px;
  font-weight: 600;
  color: white;
`;
const TextLogin = styled.Text`
  font-size: 10px;
  color: ${colors.primary};
`;
const View = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Text = styled.Text`
  color: white;
`;
