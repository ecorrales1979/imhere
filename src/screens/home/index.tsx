import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles'

export default function Home() {
  const handleAddParticipant = () => {
    console.log('You pressed the Add Participant Button')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2022</Text>

      <TextInput
        style={styles.input}
        placeholder='Participant name'
        placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleAddParticipant}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}