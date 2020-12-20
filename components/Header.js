import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        padding: 40,
    }
});

export default Header;