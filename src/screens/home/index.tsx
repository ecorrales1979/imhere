import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';

import { styles } from './styles'
import Button from '../../components/button';
import Participant from '../../components/participant';

export default function Home() {
  const participants = ['John Doe', 'Jane Doe'];

  const handleAddParticipant = () => {
    console.log('You pressed the Add Participant Button')
  }

  const handleRemoveParticipant = (name: string) => {
    console.log(`You are removing participant ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Participant name'
          placeholderTextColor="#6B6B6B"
        />

        <Button label="+" type="add" onPress={handleAddParticipant} />
      </View>

      {participants.map(participant => (
        <Participant
          key={`participant_${participant}`}
          name={participant}
          onRemove={() => handleRemoveParticipant(participant)}
        />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}