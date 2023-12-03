import { useIsFocused } from '@react-navigation/native';
import { RecentCard } from '../ui/RecentCard';
import styled from 'styled-components/native';
import React from 'react';
import { useStorage } from '../../hooks/useStorage';
import { IUser } from '../../@types/user';

export const Recent = () => {
  const [dataUser, setDataUser] = React.useState<IUser[] | null>(null)

  const {getUser} = useStorage()
  const focus = useIsFocused()

  React.useEffect(() => {
  async  function test (){
     const data = await getUser('@user')
     setDataUser(data)
    }

    test()
   },[focus])

  return (
    <MainView>
      <Text>Recent:</Text>
      {dataUser?.map((data) => (
        <RecentCard
          key={data.id}
          {...data}
        />
      ))}
    </MainView>
  );
};

const MainView = styled.View`
  width: 95%;
  gap: 8px;
`;
const Text = styled.Text`
  font-size: 16px;
  color: white;
`;
