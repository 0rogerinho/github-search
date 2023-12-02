import styled from 'styled-components/native';
import { colors } from '../../../themesConfig';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { RepositoryCard, IRepositoryCardProps } from '../ui/RepositoryCard';
import { FlatList } from 'react-native';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const android = Platform.OS === 'android';

const data = {
  id: 227,
  name: 'Natan Gabriel Almeida de Castro',
  login: '@NatanCastro',
  location: 'San Francisco, wa',
  avatar_url: '../../../assets/favicon.png',
  public_repos: 50,
  followers: 11247,
  following: 38,
};

const dataRepos = [
  {
    name: 'age-calculator',
    language: 'css',
    description:
      'Com a nossa calculadora de idade, você pode descobrir quantos anos, meses e dias já viveu! Descubra quantos dias e meses já passaram desde o seu nascimento e saiba exatamente quantos anos você tem. É uma maneira divertida de saber mais sobre a sua vida e compartilhar com amigos e familiares. Experimente agora mesmo!',
    created_at: '2023-04-23T15:46:28Z',
    updated_at: '2023-04-23T15:48:59Z',
  },
  {
    name: 'age-calculator',
    language: 'css',
    description:
      'Com a nossa calculadora de idade, você pode descobrir quantos anos, meses e dias já viveu! Descubra quantos dias e meses já passaram desde o seu nascimento e saiba exatamente quantos anos você tem. É uma maneira divertida de saber mais sobre a sua vida e compartilhar com amigos e familiares. Experimente agora mesmo!',
    created_at: '2023-04-23T15:46:28Z',
    updated_at: '2023-04-23T15:48:59Z',
  },
  {
    name: 'age-calculator',
    language: 'css',
    description:
      'Com a nossa calculadora de idade, você pode descobrir quantos anos, meses e dias já viveu! Descubra quantos dias e meses já passaram desde o seu nascimento e saiba exatamente quantos anos você tem. É uma maneira divertida de saber mais sobre a sua vida e compartilhar com amigos e familiares. Experimente agora mesmo!',
    created_at: '2023-04-23T15:46:28Z',
    updated_at: '2023-04-23T15:48:59Z',
  },
  {
    name: 'age-calculator',
    language: 'css',
    description:
      'Com a nossa calculadora de idade, você pode descobrir quantos anos, meses e dias já viveu! Descubra quantos dias e meses já passaram desde o seu nascimento e saiba exatamente quantos anos você tem. É uma maneira divertida de saber mais sobre a sua vida e compartilhar com amigos e familiares. Experimente agora mesmo!',
    created_at: '2023-04-23T15:46:28Z',
    updated_at: '2023-04-23T15:48:59Z',
  },
];

type IUserProps = {
  id: number;
  name: string;
  login: string;
  location: string;
  img?: string;
  Repositories: IRepositoryCardProps[];
};

const Statics = ({ title = 'test', text = 'test' }) => {
  return (
    <ViewStatic>
      <Text>{title}</Text>
      <Text>{text}</Text>
    </ViewStatic>
  );
};

export const User = () => {
  const { navigate } = useNavigation<any>();

  return (
    <SafeAreaView>
      <MainView>
        <Title>User:</Title>
        <ViewCard>
          <ViewCardUser>
            <Avatar>
              <Image source={require('../../../assets/favicon.png')} />
            </Avatar>
            <View>
              <TextLocation>id: {data.id}</TextLocation>
              <TextName>{data.name}</TextName>
            </View>
            <TextLogin>{data.login}</TextLogin>
            <ViewRowGap>
              <Feather name="map-pin" size={16} color="white" />
              <TextLocation>{data.location}</TextLocation>
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
        <TouchableOpacity onPress={() => navigate('home')}>
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
