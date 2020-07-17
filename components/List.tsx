import * as React from 'react';
import { View } from 'react-native';

import ListItem from './ListItem';
import { ListItemData } from '../types';

export default function List ({ items, pressHandler } : { items : any, pressHandler : () => void}) {
    return (
        <View>
            {
                items && items.length && items.map((item : ListItemData) => (
                    <ListItem item={item} pressHandler={pressHandler} /> 
                ))
            }
        </View>
    );
}
