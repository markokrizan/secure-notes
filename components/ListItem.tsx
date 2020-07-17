import * as React from 'react';

import { ListItem } from 'react-native-elements';
import { ListItemData } from '../types';

export default function List ({ item, pressHandler } : { item : ListItemData, pressHandler : () => void }) {
    return (
        <ListItem
            key={item.id}
            leftAvatar={{ source: { uri: item.leftAvatarSource } }}
            title={item.title}
            subtitle={item.subtitle}
            bottomDivider={item.bottomDivider}
            onPress={pressHandler}
        />
    )
}
