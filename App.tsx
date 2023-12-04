// routes
import { Routes } from './src/routes';
// react-navigation-native
import { NavigationContainer } from '@react-navigation/native';
// react-native-root-siblings
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <NavigationContainer>
      <RootSiblingParent>
        <Routes/>
      </RootSiblingParent>
    </NavigationContainer>
  );
}

