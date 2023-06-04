import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type ButtonType = 'add' | 'remove';

interface ButtonProps {
  label: string;
  onPress: () => void;
  type: ButtonType;
}

const buttonTypes = {
  add: {
    backgroundColor: '#31CF67',
    textColor: '#FFF'
  },
  remove: {
    backgroundColor: '#E23C44',
    textColor: '#FFF'
  },
}

export default function Button({ label, onPress, type }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{ ...styles.button, backgroundColor: buttonTypes[type].backgroundColor }}
    >
      <Text style={{ ...styles.buttonText, color: buttonTypes[type].textColor}}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}