import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {white, lighterGray} from '../colors'
const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: lighterGray,
    borderRadius: 3,
    marginVertical: 5,
  },
  header: {
    fontSize: 18,
    paddingBottom: 15,
    fontWeight: '600',
  },
  content: {
    fontSize: 12,
  }
})

function Item({title, content}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

export default Item