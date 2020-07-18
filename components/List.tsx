import * as React from 'react';
import { View } from 'react-native';

import ListItem from './ListItem';

const List = ({ children } : { children : any }) => {
    return (
        <View>
            {children}
        </View>
    )
}

List.Item = ListItem;

export default List;
