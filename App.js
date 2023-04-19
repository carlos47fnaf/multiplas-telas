import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import Animes from './screens/Animes';
import Filmes from './screens/Filmes';
import Series from './screens/Series';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Animes" component={Animes} />
          <Stack.Screen name="Series" component={Series} />
          <Stack.Screen name="Filmes" component={Filmes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
