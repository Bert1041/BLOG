import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import {Provider} from './src/context/BlogContext';
import Feather from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} style={{marginRight: 25}} />
              </TouchableOpacity>
            ),
            title: 'Blogs',
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({navigation, route}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Edit', {id: route.params.id})
                }>
                <EvilIcons name="pencil" size={30} style={{marginRight: 25}} />
              </TouchableOpacity>
            ),
            title: 'Blog Content',
          })}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'Create New Blog'}}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{title: 'Edit Content'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
