import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import NotesStackNavigator from './notes';
import SettingsStackNavigator from './settings';
import NotFoundScreen from '../screens/NotFoundScreen';

const { Navigator, Screen} = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Notes" component={NotesStackNavigator} />
      <Screen name="Settings" component={SettingsStackNavigator} />
      <Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Navigator>
  );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
