import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notes from '../../screens/Notes';
import Note from '../../screens/Note';
import NavigationButton from '../../components/NavigationButton';

import {
  NOTES_SCREEN,
  SETTINGS_SCREEN
} from '../../constants/screens';

const {Navigator, Screen} = createStackNavigator<any>();

export default function NotesStackNavigator() {
  return (
    <Navigator>
      <Screen
        name="Notes"
        component={Notes}
        options={({ navigation, route }) => ({
          headerTitle: route.name,
          headerRight: () => <NavigationButton pressHandler={() => navigation.replace(SETTINGS_SCREEN)} title={SETTINGS_SCREEN}/>
        })}
      />
      <Screen
        name="Note"
        component={Note}
        options={({ navigation, route }) => ({
            headerTitle: route.name,
            headerLeft: () => <NavigationButton pressHandler={() => navigation.replace(NOTES_SCREEN)} title={NOTES_SCREEN} />,
            headerRight: () => <NavigationButton pressHandler={() => navigation.replace(SETTINGS_SCREEN)} title={SETTINGS_SCREEN}/>
        })}
      />
    </Navigator>
  );
}
