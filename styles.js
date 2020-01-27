import {StyleSheet} from 'react-native'
import {darkestBlue, white, blue} from './colors'

export default StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 100,
    backgroundColor: darkestBlue,
    height: '100%',
  },
  header: {
    padding: 10,
  },
  headerText: {
    color: white,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  emoji: {
    fontSize: 70,
    textAlign: 'center',
    paddingVertical: 200,
  },
  button: {
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: "#6b7db3",
    position: 'absolute',
    bottom: 50,
    right: 37,
    width: 300,
  },
  buttonText: {
    fontWeight: '600',
    color: white,
    fontSize: 16,
    textAlign: 'center',
  }
});