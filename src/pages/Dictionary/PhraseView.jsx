import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { speakText } from '../../utils/speechUtils';

export default function PhraseView({ navigation, route }) {
  const { phrase } = route.params;
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async () => {
    try {
      setIsSpeaking(true);
      await speakText(phrase);
    } catch (error) {
      console.error('Speech synthesis error:', error);
    } finally {
      setIsSpeaking(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.phraseText}>{phrase}</Text>
        <TouchableOpacity style={styles.refreshButton}>
          <Feather name="refresh-ccw" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.playButton, isSpeaking && styles.playButtonDisabled]}
        onPress={handleSpeak}
        disabled={isSpeaking}
      >
        {isSpeaking ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text style={styles.playButtonText}>Воспроизвести</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  phraseText: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  refreshButton: {
    padding: 12,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
  },
  playButton: {
    margin: 16,
    marginBottom: 32,
    backgroundColor: '#FFD600',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  playButtonDisabled: {
    opacity: 0.7,
  },
  playButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
