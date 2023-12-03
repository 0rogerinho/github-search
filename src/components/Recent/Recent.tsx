import { useIsFocused, useNavigation } from '@react-navigation/native';
import { RecentCard } from '../ui/RecentCard';
import styled from 'styled-components/native';
import React from 'react';
import { useStorage } from '../../hooks/useStorage';
import { IUser } from '../../@types/user';
import { FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { INavigationDataProps } from '../../@types/stack';

// const url_user = 'https://api.github.com/users/';
// const token =
//   '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';

// const instance = axios.create({
//   headers: { Authorization: `Bearer ${token}` },
// });

export const Recent = () => {
  const [dataUser, setDataUser] = React.useState<IUser[] | null>(null);
  // const [load, setLoad] = React.useState(false);

  // const navigation = useNavigation<INavigationDataProps>();
  const { getUser } = useStorage();
  const focus = useIsFocused();

  React.useEffect(() => {
    async function test() {
      const data = await getUser('@user');
      setDataUser(data);
    }

    test();
  }, [focus]);

  // const handlePress = React.useCallback(async (index: number) => {
  //   if (dataUser != null) {
  //     setLoad(true);
  //     try {
  //       const getDataRepos = await instance.get(dataUser[index].repos_url);
  //       navigation.navigate('User', {
  //         data: dataUser[index],
  //         dataRepos: getDataRepos?.data,
  //       });
  //     } finally {
  //       setLoad(false);
  //     }
  //   }
  // }, []);

  return (
    <MainView>
      <Text>Recent:</Text>
      <FlatList
        data={dataUser}
        renderItem={(data) => (
            <RecentCard key={data.item.id} {...data.item} />
        )}
      />
    </MainView>
  );
};

const MainView = styled.View`
  width: 95%;
  height: 89%;
  gap: 8px;
`;
const Text = styled.Text`
  font-size: 16px;
  color: white;
`;
