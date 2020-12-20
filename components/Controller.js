import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const Controller = (props) => {
    const [amount, setAmount] = useState('');
    const [npeople, setNPeople] = useState('');

    const clearInputs = () => {
        setAmount('');
        setNPeople('');
    }

    const handleCalculate = () => {
        try {
            if(amount < 1 || npeople < 1 || npeople > 100){
                throw null;
            }

            props.calculate(amount, npeople);

            clearInputs();
        } catch (error) {
            Alert.alert("Input error!");
        }
    }

    return (
        <View style={styles.controller}>
            <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType='numeric'
                value={amount}
                onChangeText={text => setAmount(text.replace(/[^0-9]/g, ''))}
                />
            <TextInput
                style={styles.input}
                placeholder="# of people"
                keyboardType='numeric'
                value={npeople}
                onChangeText={text => setNPeople(text.replace(/[^0-9]/g, ''))}
                />
            <TouchableOpacity
                style={styles.button}
                onPress={handleCalculate}
            >
                <Text>Calculate</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 7,
        width: '38%',
        borderRadius: 5,
    },
    button: {
        borderWidth: 1,
        borderColor: '#777',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
    }
});

export default Controller;