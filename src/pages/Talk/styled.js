import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
