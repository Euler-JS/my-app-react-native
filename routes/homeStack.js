import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#7b1425' },
            }}>
          <Stack.Screen name="Home" component={Home} 
          />
          <Stack.Screen 
                name="Juris Pergunas" 
                component={ReviewDetails} 
                screenOptions=
                {
                    {
                        headerTintColor: 'black',
                        headerStyle: { backgroundColor: 'black' },
                    }
                }
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;