import React from 'react';
import {Text, View, ScrollView} from 'react-native';

export default class SendScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Send',
        title: 'Send',
    }
    
    render() {
        return (
          <ScrollView>
            <View>
                <Text>Send Screen</Text>
            </View>
          </ScrollView>
        );
    }
}