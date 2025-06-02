import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#23201F',
    borderRadius: 12,
    padding: 12,
    minWidth: '100%',
    alignSelf: 'flex-start',
    gap: 4
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconPlaceholder: {
    width: 20,
    height: 20,
    marginRight: 8,
    // backgroundColor: '#444', // для наглядности, убери после вставки SVG
  },
  statusText: {
    color: '#4CD964',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  arrowPlaceholder: {
    width: 20,
    height: 20,
    marginLeft: 8,
    // backgroundColor: '#444', // для наглядности, убери после вставки SVG
  },
  subText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 2,
    marginLeft: 28, // чтобы текст был под статусом, а не под иконкой
  },
});
