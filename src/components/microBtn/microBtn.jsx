import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styled';
import Loader from '../Loader/Loader';
import CustomText from '../../components/Typography/Typography';

export default function microBtn({
  isLoading,
  disable,
  ...props
}) {
  return (
    <TouchableOpacity disabled={isLoading || disable} {...props}>
    <View style={[styles.button, styleBtn]}>
        
    </View>
    </TouchableOpacity>
  );
}
