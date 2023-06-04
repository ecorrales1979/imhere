import { Text, View } from 'react-native';

import { styles } from './styles';
import Button from '../button';

export default function Participant() {
  const handleRemoveParticipant = () => {
    console.log('You pressed the Remove Participant Button')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>Participant name</Text>

      <Button label="-" type="remove" onPress={handleRemoveParticipant} />
    </View>
  );
}