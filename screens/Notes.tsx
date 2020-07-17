import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../types';
import List from '../components/List';

import { NOTE_SCREEN } from '../constants/screens';

const mockData = [
    {
        id : 1,
        title : "First Note",
        subtitle : "Some subtitle",
        bottomDivider: true
    },
    {
        id : 2,
        title : "Seccond Note",
        subtitle : "Some subtitle",
        bottomDivider: true
    },
    {
        id : 3,
        title : "Third Note",
        subtitle : "Some subtitle",
        bottomDivider: true
    }
]

export default function Notes({
  navigation,
}: StackScreenProps<RootStackParamList, 'Notes'>) {

    const navigateToSingleItem = () => navigation.replace(NOTE_SCREEN);

    // if(!items || !items.length) {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={styles.title}>No items.</Text>
    //         </View>
    //     );
    // }
    
    
    return <List items={mockData} pressHandler={navigateToSingleItem}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
