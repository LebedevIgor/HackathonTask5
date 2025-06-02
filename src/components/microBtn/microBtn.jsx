import React, { useState, useRef } from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import styles from './styled';
import MicroBtnSVG from '../../../assets/icons/MicroBtnSVG';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

export default function MicroBtn({ isLoading, disable, ...props }) {
  const [isRecording, setIsRecording] = useState(false);
  const recordingRef = useRef(null);
  const timerRef = useRef(null);

  // Функция для конвертации данных в разные форматы
  const convertAudioData = async (uri) => {
    try {
      // 1. Получаем данные в формате Base64
      const base64Audio = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log('1. Данные в формате Base64:', base64Audio.substring(0, 100));

      // 2. Получаем данные в виде байтов
      const audioBytes = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      console.log(
        '2. Данные в виде байтов (первые 100 байт):',
        audioBytes.substring(0, 100)
      );

      return {
        base64: base64Audio,
        bytes: audioBytes,
      };
    } catch (error) {
      console.error('Ошибка при конвертации аудио:', error);
      return null;
    }
  };

  // Функция для старта записи
  const startRecording = async () => {
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

    // Запускаем таймер
    timerRef.current = setInterval(() => {
      sendAndRestartRecording();
    }, 5000);
  };

  // Функция для остановки записи и отправки файла
  const sendAndRestartRecording = async () => {
    if (!recordingRef.current) return;
    try {
      await recordingRef.current.stopAndUnloadAsync();
      const uri = recordingRef.current.getURI();

      // Получаем данные в разных форматах
      const audioData = await convertAudioData(uri);
      if (audioData) {
        console.log('Промежуточная отправка:');
        console.log('Размер Base64:', audioData.base64.length);
        console.log('Размер байтов:', audioData.bytes.length);
      }

      // После отправки — начать новую запись
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      recordingRef.current = recording;
    } catch (e) {
      console.log('Ошибка при отправке аудио:', e);
    }
  };

  // Функция для полной остановки записи
  const stopRecording = async () => {
    clearInterval(timerRef.current);
    setIsRecording(false);
    if (recordingRef.current) {
      try {
        await recordingRef.current.stopAndUnloadAsync();
        const uri = recordingRef.current.getURI();

        // Получаем данные в разных форматах
        const audioData = await convertAudioData(uri);
        if (audioData) {
          console.log('Финальная отправка:');
          console.log('Размер Base64:', audioData.base64.length);
          console.log('Размер байтов:', audioData.bytes.length);
        }

        Alert.alert('Аудио записано и готово к отправке');
      } catch (e) {
        console.log('Ошибка при остановке записи:', e);
      }
    }
  };

  const handlePress = async () => {
    if (isRecording) {
      await stopRecording();
    } else {
      await startRecording();
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
