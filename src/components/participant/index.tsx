import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Participant() {
  const handleRemoveParticipant = () => {
    console.log('You pressed the Remove Participant Button')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>Participant name</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}