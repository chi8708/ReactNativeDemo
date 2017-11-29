import React, { Component } from 'react';
import { StyleSheet, AppRegistry, FlatList, Image, Text, View, TouchableOpacity, Button } from 'react-native'
import { StackNavigator } from "react-navigation";

// const HomeScreen = ({ navigation }) => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//             onPress={() => navigation.navigate('Details1')}
//             title="Go to details"
//         />
//     </View>
// );

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button color="#00ff00"
                    onPress={() => this.props.navigation.navigate('Details1', { id: 1,name:'cts'})}
                    title="Go to details"
                >
                </Button>
            </View>
        );
    }
};

// const DetailsScreen = () => (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//         </View>
// );
    
class DetailsScreen extends React.Component {

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen{params.id}{params.name}</Text>
            </View>
        );
    }
}



const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home1',
        },
    },
    Details1: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

export default RootNavigator;