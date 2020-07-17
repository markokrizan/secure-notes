import * as React from 'react';
import { Button } from 'react-native';

export default function NavigationButton({ pressHandler, title } : { pressHandler : () => void, title : string }) {
    return <Button onPress={pressHandler} title={title} color={'black'}/>;
}
