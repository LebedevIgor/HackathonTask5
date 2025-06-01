import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styled';
import MicroBtnSVG from '../../../assets/icons/MicroBtnSVG';

export default function MicroBtn({
  isLoading,
  disable,
  ...props
}) {
  return (
    <TouchableOpacity style={styles.microBtn} disabled={isLoading || disable} {...props}>
       <MicroBtnSVG />
    </TouchableOpacity>
  );
}
