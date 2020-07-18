import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../../screens/Settings';
import { HeaderBackButton } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator<any>();

export default function SettingsStackNavigator() {
  return (
    <Navigator>
      <Screen
        name="Settings"
        component={Settings}
        options={({ navigation, route }) => ({
          headerTitle: route.name,
          headerLeft: () => <HeaderBackButton onPress={()=>{ navigation.goBack() }}/>  
        })}
      />
    </Navigator>
  );
}
