import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styled';
import Loader from '../Loader/Loader';
import CustomText from '../../components/Typography/Typography';

export default function Button({
  text,
  isLoading,
  styleBtn,
  styleText,
  heightLoader,
  mt,
  mb,
  disable,
  children,
  ...props
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={isLoading || disable} {...props}>
        <View style={[styles.button, styleBtn]}>
          {isLoading ? (
            <Loader color="white" height={heightLoader} mt={mt} mb={mb} />
          ) : (
            children
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
