import React, { useState, useRef } from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import styles from './styled';
import MicroBtnSVG from '../../../assets/icons/MicroBtnSVG';
import { Audio } from 'expo-av';

export default function MicroBtn({ isLoading, disable, ...props }) {
  const [isRecording, setIsRecording] = useState(false);
  const recordingRef = useRef(null);

  const handlePress = async () => {
    if (isRecording) {
      setIsRecording(false);
      try {
        await recordingRef.current.stopAndUnloadAsync();
        const uri = recordingRef.current.getURI();
        console.log('Audio file URI:', uri);
        Alert.alert('Аудио записано', uri);
      } catch (e) {
        console.log('Ошибка при остановке записи:', e);
      }
    } else {
      try {
        const permission = await Audio.requestPermissionsAsync();
        if (!permission.granted) {
          Alert.alert('Нет доступа к микрофону');
          return;
        }
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        recordingRef.current = recording;
        setIsRecording(true);
      } catch (e) {
        console.log('Ошибка при старте записи:', e);
      }
    }
  };

  return (
    <TouchableOpacity
      style={[styles.microBtn, { opacity: isRecording ? 1 : 0.7 }]}
      disabled={isLoading || disable}
      onPress={handlePress}
      {...props}
    >
      <MicroBtnSVG />
    </TouchableOpacity>
  );
}
