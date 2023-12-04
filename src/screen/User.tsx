// React
import React from 'react';
// React Native
import { Modal, FlatList, Platform } from 'react-native';
// React Navigation
import { useNavigation, useRoute } from '@react-navigation/native';
// Icons
import { Feather, Entypo } from '@expo/vector-icons';
// Types
import { INavigationProps, IUserRouteProps } from '../@types';
// Style-Components
import styled from 'styled-components/native';
// Config Colors
import { colors } from '../../themesConfig';
// Hooks
import { useStorage } from '../hooks';
// Components
import { ModalLink, RepositoryCard } from '../components';


const android = Platform.OS === 'android';

interface IStatics {
  title: string;
  text: number;
}

interface IReposModalProps {
  name: string;
  link: string;
}

const Statics = ({ title, text}: IStatics) => (
  <ViewStatic>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </ViewStatic>
);

export const User = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalRepo, setModalRepo] = React.useState<IReposModalProps | null>(
    null,
  );

  const navigation = useNavigation<INavigationProps>();
  const {
    params: { dataUser, dataRepos },
  } = useRoute<IUserRouteProps>();
  console.log(dataRepos);

  const { saveUser } = useStorage();

  async function handlePress() {
    await saveUser('@user', dataUser);
    navigation.navigate('Home');
  }

  async function handleShowModal(index: number) {
    const data = {
      name: dataRepos[index].name,
      link: dataRepos[index].html_url,
    };
    setModalRepo(data);
    setShowModal(true);
  }

  return (
    <SafeAreaView>
      <MainView>
        <Title>User: {dataUser.id}</Title>

        <ViewCard>
          <ViewCardUser>
            <Avatar source={{ uri: dataUser.avatar_url }} />
            <TextName ellipsizeMode="tail" numberOfLines={2}>
              {dataUser.name ?? 'No Name'}
            </TextName>
            <View>
            <TextLogin ellipsizeMode="tail" numberOfLines={1}>@{dataUser.login}</TextLogin>
            <ViewRowGap>
              <Feather name="map-pin" size={16} color="white" />
              <TextLocation ellipsizeMode="tail" numberOfLines={1}>
                {!dataUser.location ? 'No Location' : dataUser.location}
              </TextLocation>
            </ViewRowGap>
            </View>
          </ViewCardUser>

          <ViewStatics>
            <Statics title='Repositories' text={dataUser.public_repos} />
            <Statics title='Followers' text={dataUser.followers} />
            <Statics title='Following' text={dataUser.following} />
          </ViewStatics>

          <ViewColumn>
            <ViewBoxRepos>
              <Entypo name="book" size={20} color={colors.primary} />
              <Title>Repositories</Title>
            </ViewBoxRepos>
          </ViewColumn>
          {dataRepos && (
            <FlatList
              style={{ maxHeight: 480 }}
              data={dataRepos}
              renderItem={(data) => (
                <TouchableOpacity
                  key={data.index}
                  onPress={() => handleShowModal(data.index)}
                >
                  <RepositoryCard {...data.item} />
                </TouchableOpacity>
              )}
            />
          )}
        </ViewCard>
      <TouchableOpacityReturn onPress={handlePress}>
          <Title>Return</Title>
      </TouchableOpacityReturn>
      </MainView>

      {modalRepo && (
        <Modal visible={showModal} transparent={true}>
          <ModalLink
            showModal={() => setShowModal(false)}
            link={modalRepo?.link}
            repoName={modalRepo?.name}
          />
        </Modal>
      )}
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

const MainView = styled.View`
  width: 95%;
  gap: 8px;
`;

const View = styled.View`
  width: 125px;
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
  color: white;
  
`;

const ViewCard = styled.View`
  max-height: 89%;
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

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  object-fit: contain;
`;

const TextName = styled.Text`
  max-width: 110px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const TextLogin = styled.Text`
  color: ${colors.primary};
`;

const ViewRowGap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const TextLocation = styled.Text`
  color: white;
`;

const ViewCardUser = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 30px
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

const ViewBoxRepos = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  max-width: 100%;
`;

const TouchableOpacityReturn = styled.TouchableOpacity`
  width: 50%;
  margin:  auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-top: 10px;
  gap: 5px;
`;
