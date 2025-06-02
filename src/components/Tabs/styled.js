import { StyleSheet } from 'react-native';
import { Colors, Gaps } from '../../shared/tokens';

export const tabRouterStyles = StyleSheet.create({
  'tab-bar': {
    backgroundColor: Colors.white,
    borderTopWidth: 5,
    borderTopColor: 'white',
    border: 'none',
    height: 60,
    justifyContent: 'center',
  },

  'tab-label': {
    color: Colors.green,
    fontSize: 12,
    fontWeight: '500',
  },
});
