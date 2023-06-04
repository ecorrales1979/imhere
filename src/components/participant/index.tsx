import { Text, View } from 'react-native';

import { styles } from './styles';
import Button from '../button';

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export default function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{name}</Text>

      <Button label="-" type="remove" onPress={onRemove} />
    </View>
  );
}