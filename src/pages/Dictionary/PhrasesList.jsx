import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, Pressable, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PlusBtn from '../../../assets/icons/PlusBtn';

const initialPhrases = [
  "Я не слышу. Повторите, пожалуйста, что вы сказали.",
  "Я не слышу. Повторите, пожалуйста, что вы сказали.",
  "Я не слышу. Говорите, пожалуйста в телефон: он переведет вашу речь в печатный текст. Произносите слова медленно и повторно, используйте простую конструкцию предложения",
  "Кто последний?",
  "Какая следующая остановка?",
  "Что происходит? Пожалуйста, объясните. Я не слышу.",
  "Я не слышу. Повторите, пожалуйста, что вы сказали."
];

const DropdownMenu = ({ visible, onClose, style, onMenuItemPress }) => {
  const menuItems = [
    { icon: 'edit-2', label: 'Изменить текст', color: '#000', action: 'edit' },
    { icon: 'check-square', label: 'Отметить', color: '#000', action: 'mark' },
    { icon: 'folder', label: 'Переместить в папку', color: '#000', action: 'move' },
    { icon: 'download', label: 'Скачать', color: '#000', action: 'download' },
    { icon: 'share-2', label: 'Поделиться', color: '#000', action: 'share' },
    { icon: 'trash-2', label: 'Удалить', color: '#FF3B30', action: 'delete' },
  ];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View style={[styles.dropdown, style]}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                onMenuItemPress(item.action);
                onClose();
              }}
            >
              <Feather name={item.icon} size={20} color={item.color} />
              <Text style={[styles.menuItemText, { color: item.color }]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};

export default function PhrasesList({ navigation, route }) {
  const [phrases, setPhrases] = useState(initialPhrases);
  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });

  React.useEffect(() => {
    if (route.params?.newPhrase) {
      setPhrases([route.params.newPhrase, ...phrases]);
      navigation.setParams({ newPhrase: null });
    } else if (route.params?.editedPhrase && route.params?.originalPhrase) {
      setPhrases(phrases.map(phrase => 
        phrase === route.params.originalPhrase ? route.params.editedPhrase : phrase
      ));
      navigation.setParams({ editedPhrase: null, originalPhrase: null });
    }
  }, [route.params?.newPhrase, route.params?.editedPhrase]);

  const handleMorePress = (phrase, event) => {
    const { pageY, pageX } = event.nativeEvent;
    setSelectedPhrase(phrase);
    setDropdownPosition({
      top: pageY - 10,
      right: 20,
    });
    setDropdownVisible(true);
  };

  const handleMenuItemPress = (action) => {
    if (action === 'delete' && selectedPhrase) {
      Alert.alert(
        'Удаление фразы',
        'Вы уверены, что хотите удалить эту фразу?',
        [
          {
            text: 'Отмена',
            style: 'cancel',
          },
          {
            text: 'Удалить',
            style: 'destructive',
            onPress: () => {
              setPhrases(phrases.filter(phrase => phrase !== selectedPhrase));
              setSelectedPhrase(null);
            },
          },
        ],
        { cancelable: true }
      );
    } else if (action === 'edit' && selectedPhrase) {
      navigation.navigate('EditPhrase', { phrase: selectedPhrase });
    }
    // Handle other actions here when implemented
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Фразы</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollView}>
        {phrases.map((phrase, index) => (
          <TouchableOpacity
            key={index}
            style={styles.phraseCard}
            onPress={() => navigation.navigate('PhraseView', { phrase })}
          >
            <Text style={styles.phraseText} numberOfLines={2}>
              {phrase}
            </Text>
            <TouchableOpacity 
              style={styles.moreButton}
              onPress={(event) => handleMorePress(phrase, event)}
            >
              <Feather name="more-vertical" size={20} color="gray" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <DropdownMenu
        visible={dropdownVisible}
        onClose={() => setDropdownVisible(false)}
        style={{
          position: 'absolute',
          ...dropdownPosition,
        }}
        onMenuItemPress={handleMenuItemPress}
      />

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddPhrase')}
      >
        <PlusBtn />
        <Text style={styles.addButtonText} marginLeft={8}>Добавить фразу</Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  phraseCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  phraseText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  moreButton: {
    padding: 8,
  },
  addButton: {
    margin: 16,
    backgroundColor: '#FFD600',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 200,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 16,
  },
}); 