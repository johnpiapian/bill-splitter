import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, ScrollView, FlatList} from 'react-native';
import Header from './components/Header';
import Controller from './components/Controller';

export default function App() {
  const [list, setList] = useState([]);

  const Calculate = (a, p) => {
    let r = (a/p).toFixed(2);
    setList([]);
    for (let i = 0; i < p; i++) {
      setList(prev => [...prev, r]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Bill Splitter"/>
      <View style={styles.body}>
        <Controller calculate={Calculate}/>
        <ScrollView style={styles.list}>
          {list.map((item, n)=> {
            return (
              <View style={styles.item}>
                <Text>Person {n+1}</Text>
                <Text>${item}</Text>
              </View>
            )
          })}
        </ScrollView>
        <View style={[styles.item, styles.total]}>
          <Text>Total</Text>
          <Text>$1000</Text>
        </View>
      </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  body: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    padding: 10,
  },
  list: {
    marginTop: 20,
    borderColor: 'black',
    maxHeight: 300,
    // borderWidth: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 15,
    borderColor: 'gray',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
  },
  total: {
    marginTop: 20,
    borderStyle: 'dotted',
  }
});
