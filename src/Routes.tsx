import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './pages/Home'
import { User } from './pages/User'


const Stack = createStackNavigator()

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='User' component={User} />
    </Stack.Navigator>

  )
}

export default Routes