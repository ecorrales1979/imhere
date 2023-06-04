import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    marginBottom: 10,
  },
  participantName: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
