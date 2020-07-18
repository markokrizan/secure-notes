import * as React from 'react';

import { ListItem as MaterialListItem } from 'react-native-elements';

export default function ListItem ({ item, pressHandler } : { item : any, pressHandler : () => void }) {
    return (
        <MaterialListItem
            key={item.id}
            leftAvatar={{ source: { uri: item.leftAvatarSource } }}
            title={item.title}
            subtitle={item.subtitle}
            onPress={pressHandler}
            bottomDivider
        />
    )
}
