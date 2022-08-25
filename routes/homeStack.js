// import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const screens = {
    ReviewDetails:{
        screen: ReviewDetails
    },

    Home: {
        screen: Home
    }
}

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Review Details" component={ReviewDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;