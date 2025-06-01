import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styled';
import MicroBtn from '../../assets/icons/microBtn';
export default function microBtn({
  isLoading,
  disable,
  ...props
}) {
  return (
    <TouchableOpacity style={styles.microBtn} disabled={isLoading || disable} {...props}>
       <MicroBtn />
    </TouchableOpacity>
  );
}
