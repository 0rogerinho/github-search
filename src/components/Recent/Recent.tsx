import { RecentCard } from '../ui/RecentCard';
import styled from 'styled-components/native';

const data = [
  {
    name: 'Natan Gabriel Almeida de Castro',
    login: '@NatanCastro',
    location: 'San Francisco, wa',
    img: '../../../assets/favicon.png',
  },
  {
    name: 'Octocat',
    login: '@Octocat',
    location: 'San Francisco, wa',
    img: '../../../assets/favicon.png',
  },
  {
    name: 'Octocat',
    login: '@Octocat',
    location: 'San Francisco, wa',
    img: '../../../assets/favicon.png',
  },
];

export const Recent = () => {
  return (
    <MainView>
      <Text>Recent:</Text>
      {data.map(({ name, login, location, img }, index) => (
        <RecentCard
          key={index}
          name={name}
          login={login}
          location={location}
          img={img}
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
