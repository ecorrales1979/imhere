import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, View } from 'react-native';

import { styles } from './styles'
import Button from '../../components/button';
import Participant from '../../components/participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState('');

  const handleAddParticipant = () => {
    if (participants.includes(newParticipant)) {
      return Alert.alert(
        'Participant name already exists',
        'There is already a participant with that name registered in the event',
      );
    }

    setParticipants(oldState => ([...oldState, newParticipant]))
    setNewParticipant('')
  }

  const handleRemoveParticipant = (name: string) => {
    Alert.alert(
      'Remove participant',
      `Are you sure you want to remove participant ${name}?`,
      [
        {
          text: 'Yes',
          onPress: () => console.log(`You are removing participant ${name}`),
        },
        {
          text: 'Não',
          style: 'cancel',
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor="#6B6B6B"
          value={newParticipant}
          onChangeText={setNewParticipant}
        />

        <Button label="+" type="add" onPress={handleAddParticipant} />
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => `participant_${item}`}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            There are no participants for this event yet. Start adding participants.
          </Text>
        )}
      />
    </View>
  );
}