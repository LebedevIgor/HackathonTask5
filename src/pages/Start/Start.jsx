import React, { useState, useRef } from 'react';
import { View, SafeAreaView, StatusBar, Platform, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontSize } from '../../shared/tokens';
import Typography from '../../components/Typography/Typography';
import StartIcon from '../../../assets/icons/StartIcon';
import YandexIcon from '../../../assets/icons/YandexIcon';
import InclusionIcon from '../../../assets/icons/inclusion';

// Replace illustration imports with PNG imports
const illustration1 = require('../../../assets/Illustration1.png');
const illustration2 = require('../../../assets/Illustration2.png');
const illustration3 = require('../../../assets/Illustration3.png');

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '0',
    title: 'Разговор',
    description: 'Ваш помощник в общении —\nбыстро, удобно, доступно.',
    isStartScreen: true,
  },
  {
    id: '1',
    title: 'Разговаривайте\nс помощью текста',
    description: 'Приложение покажет на экране, что говорит собеседник. А вы можете написать ответ и озвучить его голосом.',
    buttonText: 'Дальше',
    illustration: illustration1,
  },
  {
    id: '2',
    title: 'Читайте речь\nвокруг вас',
    description: 'Откройте приложение, и оно начнёт превращать в текст речь одного или более спикеров.\n\nУдобно, когда нужно только слушать.',
    buttonText: 'Дальше',
    illustration: illustration2,
  },
  {
    id: '3',
    title: 'Быстрые фразы\nпод рукой',
    description: 'Показывайте или озвучивайте заранее сохранённые фразы.',
    buttonText: 'Начать', 
    illustration: illustration3,
  },
];

export default function StartScreen() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const goToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate('Home');
    }
  };

  const renderStartScreen = ({ item }) => (
    <TouchableOpacity 
      style={[styles.slide, styles.startSlide]} 
      onPress={goToNextSlide}
      activeOpacity={0.9}
    >
      <View style={styles.startIconContainer}>
        <StartIcon name="StartIcon" size={80} />
      </View>
      <View style={styles.textContainer}>
        <Typography  size={FontSize.LARGE} color={Colors.black} style={styles.title} fontWeight={"900"}>
          {item.title}
        </Typography>
        <Typography 
          size={FontSize.SMALL} 
          color={Colors.black}
          style={styles.subtitle}
        >
          {item.description}
        </Typography>
      </View>
      <View style={styles.yandexContainer}>
        <View style={styles.iconsRow}>
          <YandexIcon />
          <InclusionIcon />
        </View>
        <Typography size={FontSize.XSMALL} color={Colors.black} style={styles.inclusionText}>
          Инклюзия в Яндексе
        </Typography>
      </View>
    </TouchableOpacity>
  );

  const renderOnboardingScreen = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: Colors.white }]}>
        <View style={styles.illustrationContainer}>
          <Image 
            source={item.illustration}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.textContainer}>
          <Typography size={FontSize.LARGE} color={Colors.black} style={styles.title}>
            {item.title}
          </Typography>
          <Typography 
            size={FontSize.SMALL} 
            color={Colors.black}
            style={styles.subtitle}
          >
            {item.description}
          </Typography>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={goToNextSlide}
        >
          <Typography size={FontSize.MEDIUM} color={Colors.white} tac>
            {item.buttonText}
          </Typography>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Typography size={FontSize.SMALL} color={Colors.black}>
            Пропустить
          </Typography>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = (props) => {
    return props.item.isStartScreen ? renderStartScreen(props) : renderOnboardingScreen(props);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={currentIndex === 0 ? Colors.yandexYellow : Colors.white}
      />
      
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
        keyExtractor={(item) => item.id}
        scrollEnabled={!slides[currentIndex].isStartScreen}
      />

      {!slides[currentIndex].isStartScreen && (
        <View style={styles.pagination}>
          {slides.slice(1).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: currentIndex - 1 === index ? Colors.black : Colors.gray300 }
              ]}
            />
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slide: {
    width,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  startSlide: {
    backgroundColor: Colors.yandexYellow,
    justifyContent: 'space-between',
    paddingTop: 192,
    paddingBottom: 40,
  },
  startIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 280,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '900',
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: FontSize.SMALL * 1.4,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#48C600',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 32,
    width: '100%',
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  yandexContainer: {
    alignItems: 'center',
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inclusionText: {
    marginTop: 4,
  },
  illustration: {
    width: width - 40, // Full width minus padding
    height: 280,
  },
});
