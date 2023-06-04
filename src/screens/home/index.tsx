import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';

import { styles } from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2022</Text>

      <TextInput
        style={styles.input}
        placeholder='Participant name'
        placeholderTextColor="#6B6B6B"
      />

      <StatusBar style="auto" />
    </View>
  );
}