import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { INavigationProps, IUserRouteProps } from '../@types/stack';
import { colors } from '../../themesConfig';
import { RepositoryCard } from '../components/ui/RepositoryCard';
import { useStorage } from '../hooks/useStorage';

const android = Platform.OS === 'android';

const Statics = ({ title = 'test', text = 'test' }) => {
  return (
    <ViewStatic>
      <Text>{title}</Text>
      <Text>{text}</Text>
    </ViewStatic>
  );
};


export const User = () => {
  const navigation = useNavigation<INavigationProps>()
  const {params: {data, dataRepos}} = useRoute<IUserRouteProps>()

  const { saveUser } = useStorage()

  async function handlePress() {
   await saveUser('@user', data)
    navigation.navigate('Home')
  }
  
  
  return (
    <SafeAreaView>
      <MainView>
        <Title>User:</Title>
        <ViewCard>
          <ViewCardUser>
            <Avatar>
              <Image source={require('../../assets/favicon.png')} />
            </Avatar>
            <View>
              <TextLocation>id: {data.id}</TextLocation>
              <TextName>{data.name}</TextName>
            </View>
            <TextLogin>{data.login}</TextLogin>
            <ViewRowGap>
              <Feather name="map-pin" size={16} color="white" />
              <TextLocation>{!data.location ? 'NaN' : data.location }</TextLocation>
            </ViewRowGap>
          </ViewCardUser>
          <ViewStatics>
            <Statics title="Repositories" text="50" />
            <Statics title="Followers" text="11247" />
            <Statics title="Following" text="38" />
          </ViewStatics>
          <ViewColumn>
            <ViewRepositories>
              <Entypo name="book" size={20} color={colors.primary} />
              <Text>Repositories</Text>
              <AntDesign name="caretup" size={15} color="white" />
            </ViewRepositories>
          </ViewColumn>
          <FlatList
            style={{ maxHeight: 480 }}
            data={dataRepos}
            renderItem={(data) => (
              <RepositoryCard
                key={data.index}
                name={data.item.name}
                language={data.item.language}
                description={data.item.description}
                created_at={data.item.created_at}
                updated_at={data.item.updated_at}
              />
            )}
          />
        </ViewCard>
        <TouchableOpacity onPress={handlePress}>
          <Title>Return</Title>
        </TouchableOpacity>
      </MainView>
    </SafeAreaView>
  );
};

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #141d2f;
  padding-top: ${android ? '50px' : '20px'};
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const MainView = styled.View`
  width: 95%;
  gap: 8px;
`;

const ViewColumn = styled.View`
  width: 100%;
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

const ViewCard = styled.View`
  background-color: ${colors.backgroundSecondary};
  border-radius: 10px;
  align-items: center;
  padding: 16px 14px;
  gap: 20px;
`;

const ViewStatic = styled.View`
  align-items: center;
  border-radius: 10px;
  gap: 5px;
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
  max-width: 100px;
  font-size: 12px;
  font-weight: 600;
  color: white;
`;

const TextLogin = styled.Text`
  font-size: 12px;
  color: ${colors.primary};
`;

const ViewRowGap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const TextLocation = styled.Text`
  width: 75px;
  font-size: 12px;
  color: white;
`;

const View = styled.View``;

const ViewCardUser = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ViewStatics = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${colors.background};
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
`;

const ViewRepositories = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  width: 50%;
  margin: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-top: 10px;
  gap: 5px;
`;
