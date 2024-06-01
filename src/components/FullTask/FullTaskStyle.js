import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderWidth: 5,
    borderColor: '#2FD1D1',
    borderRadius: 20,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});