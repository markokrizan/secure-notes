import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { RootStackParamList } from '../types';
import List from '../components/List';

import { NOTE_SCREEN } from '../constants/screens';
import { Note } from '../types';

const mockData = [
    {
        id : 1,
        title : "First Note",
        subtitle : "Some subtitle"
    },
    {
        id : 2,
        title : "Seccond Note",
        subtitle : "Some subtitle"
    },
    {
        id : 3,
        title : "Third Note",
        subtitle : "Some subtitle"
    }
]

export default function Notes({
  navigation,
}: StackScreenProps<RootStackParamList, 'Notes'>) {

    const navigateToSingleItem = (note : Note) => navigation.navigate(NOTE_SCREEN, { note });
    
    return (
      <List>
        {
            mockData && mockData.length && mockData.map((note : Note) => (
                <List.Item key={note.id} item={note} pressHandler={() => navigateToSingleItem(note)} /> 
            ))
        }
      </List>
    );
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
