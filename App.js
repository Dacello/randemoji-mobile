/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Item from './components/Item'
import {paleGray} from './colors'

const items = [
  {
    id: 1,
    title: 'TITLE',
    content: '!!!!!content content content content content content!!!!!!',
  },
  {
    id: 2,
    title: 'TITLE 2',
    content: '!!!!!content content content content content content!!!!!!',
  },
]



const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: paleGray,
    height: '100%',
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>RN Phx Channel Demo</Text>
            </View>
            {items.map(item => <Item key={item.id} {...item} />)}
            
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}