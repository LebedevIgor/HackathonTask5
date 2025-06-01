import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    gap: 10,
  },

  text: {
    fontSize: 24,
    color: Colors.pinkDark,
    textAlign: 'center',
  },
  BtnWrapper: {
    marginTop: 100,
    width: '100%',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
