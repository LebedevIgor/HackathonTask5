import { StyleSheet } from 'react-native';
import { Colors, Gaps } from '../../shared/tokens';

export const tabRouterStyles = StyleSheet.create({
  'tab-bar': {
    backgroundColor: Colors.white,
    borderTopWidth: 0,
    height: 60,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
  },

  'tab-label': {
    color: Colors.green,
    fontSize: 12,
    fontWeight: '500',
  },
});
