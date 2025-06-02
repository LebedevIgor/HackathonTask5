import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function EditPhraseModal({ navigation, route }) {
  const { phrase: initialPhrase } = route.params;
  const [editedPhrase, setEditedPhrase] = useState(initialPhrase);

  const handleSave = () => {
    if (editedPhrase.trim() && editedPhrase.trim() !== initialPhrase) {
      navigation.navigate('PhrasesList', {
        editedPhrase: editedPhrase.trim(),
        originalPhrase: initialPhrase,
      });
    } else {
      navigation.goBack();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Изменить фразу</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={[styles.headerButton, !editedPhrase.trim() && styles.headerButtonDisabled]}>
            Сохранить
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Введите текст фразы"
          value={editedPhrase}
          onChangeText={setEditedPhrase}
          multiline
          autoFocus
          textAlignVertical="top"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerButton: {
    fontSize: 17,
    color: '#007AFF',
    fontWeight: '600',
  },
  headerButtonDisabled: {
    opacity: 0.5,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  input: {
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
}); 