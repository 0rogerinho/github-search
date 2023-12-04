import React from 'react';  
// React Native
import { FlatList } from 'react-native';  
// React Navigation
import { useIsFocused } from '@react-navigation/native';  
// styled-components
import styled from 'styled-components/native';  
// ui
import { RecentCard } from '../ui/RecentCard';  
// hooks
import { useStorage } from '../../hooks';  
// types
import { IUser } from '../../@types';  


export const Recent = () => {
  const [dataUser, setDataUser] = React.useState<IUser[] | null>(null);

  const { getUser } = useStorage();
  const focus = useIsFocused();

  React.useEffect(() => {
    async function test() {
      const data = await getUser('@user');
      setDataUser(data);
    }

    test();
  }, [focus]);

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
