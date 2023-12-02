import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './pages/Home'
import { User } from './components'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='user' component={User} />
    </Stack.Navigator>
  )
}

export default Routes
