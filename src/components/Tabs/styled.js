import { StyleSheet } from 'react-native';
import { Colors, Gaps } from '../../shared/tokens';

export const tabRouterStyles = StyleSheet.create({
  'tab-bar': {
    backgroundColor: Colors.white,
    borderTopWidth: 0,
    borderWidth: 0,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    borderRadius: 0,
    height: 60,
    justifyContent: 'center',
    marginTop: -1,
    paddingTop: 1,
  },

  'tab-label': {
    color: Colors.green,
    fontSize: 12,
    fontWeight: '500',
  },
});
