import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../../screens/Settings';
import NavigationButton from '../../components/NavigationButton';

const {Navigator, Screen} = createStackNavigator<any>();

import { NOTES_SCREEN } from '../../constants/screens';

export default function SettingsStackNavigator() {
  return (
    <Navigator>
      <Screen
        name="Settings"
        component={Settings}
        options={({ navigation, route }) => ({
          headerTitle: route.name,
          
          //TODO: check issue status and use goBack when possible
          //https://github.com/react-navigation/react-navigation/issues/6434 
          headerLeft: () => <NavigationButton pressHandler={() => navigation.replace(NOTES_SCREEN)} title={NOTES_SCREEN} />,
        })}
      />
    </Navigator>
  );
}
