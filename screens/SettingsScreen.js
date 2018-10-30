import React from 'react';
import {Text,  View, ScrollView} from 'react-native';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Settings'
    }
    render() {
        return (
          <ScrollView>
            <View>
                <Text>Settings Screen</Text>
            </View>
          </ScrollView>
        );
    }
}