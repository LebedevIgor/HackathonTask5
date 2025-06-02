import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MicrophoneIcon from '../../../assets/icons/MicrophoneIcon';
import Typography from '../../components/Typography/Typography';
import { FontSize } from '../../shared/tokens';
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  playButton: {
    backgroundColor: '#FFE600',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  playButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
    backgroundColor: '#FFFFFF',
    width: 48,
    height: 48,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  closeText: {
    fontSize: 32,
    color: '#000',
    lineHeight: 36,
    marginTop: -2,
  },
};

export default function SpeakingInstructions() {
  const navigation = useNavigation();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const instructionText =
    'Включен микрофон. Говорите. Постарайтесь говорить разборчиво и не очень быстро';

  const handleSpeak = async () => {
    try {
      setIsSpeaking(true);
      await speakText(instructionText);
    } catch (error) {
      console.error('Speech synthesis error:', error);
    } finally {
      setIsSpeaking(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>

      <View style={styles.messageContainer}>
        <Typography fontWeight='900' size={36} tac> Включен микрофон.{'\n'}Говорите.{'\n'}
          Постарайтесь говорить разборчиво и не очень быстро</Typography>
        
      </View>

      <TouchableOpacity
        style={[styles.playButton, isSpeaking && { opacity: 0.7 }]}
        onPress={handleSpeak}
        disabled={isSpeaking}
      >
        <MicrophoneIcon />
        {isSpeaking ? (
          <ActivityIndicator color="#000" style={{ marginLeft: 8 }} />
        ) : (
          <Text style={styles.playButtonText}>Воспроизвести</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
