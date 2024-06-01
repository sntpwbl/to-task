import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 5,
    borderColor: '#2FD1D1',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: '#1F7676',
  }
});