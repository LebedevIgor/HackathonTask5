import React, { useState, useRef } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontSize } from '../../shared/tokens';
import Typography from '../../components/Typography/Typography';
import StartIcon from '../../../assets/icons/StartIcon';
import YandexIcon from '../../../assets/icons/YandexIcon';
import InclusionIcon from '../../../assets/icons/Inclusion';

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
    description:
      'Приложение покажет на экране, что говорит собеседник. А вы можете написать ответ и озвучить его голосом.',
    buttonText: 'Дальше',
    illustration: illustration1,
  },
  {
    id: '2',
    title: 'Читайте речь\nвокруг вас',
    description:
      'Откройте приложение, и оно начнёт превращать в текст речь одного или более спикеров.\n\nУдобно, когда нужно только слушать.',
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
        <View style={{ height: 16 }} />
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
        <Typography
          size={FontSize.XSMALL}
          color={Colors.black}
          style={[styles.inclusionText, { marginTop: 12 }]}
          fontWeight="700"
        >
          Инклюзия в Яндексе
        </Typography>
      </View>
    </TouchableOpacity>
  );

  const renderOnboardingScreen = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: Colors.white }]}>
        <View style={styles.contentContainer}>
          <View style={styles.illustrationContainer}>
            <Image
              source={item.illustration}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>

          <View style={styles.textContainer}>
            <Typography size={32} color={Colors.black} style={styles.title} fontWeight="900" tac>
              {item.title}
            </Typography>
            <View style={{ height: 16 }} />
            <Typography
              size={19}
              color={Colors.black}
              style={styles.subtitle}
              tac
            >
              {item.description}
            </Typography>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
            <Typography size={20} color={Colors.black} tac fontWeight="200">
              {item.buttonText}
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Typography size={FontSize.SMALL} color={Colors.black} tac>
              Пропустить
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderItem = (props) => {
    return props.item.isStartScreen
      ? renderStartScreen(props)
      : renderOnboardingScreen(props);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          currentIndex === 0 ? Colors.yandexYellow : Colors.white
        }
      />

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(newIndex);
        }}
        keyExtractor={(item) => item.id}
        scrollEnabled={!slides[currentIndex].isStartScreen}
      />
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
    paddingHorizontal: 24,
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
    backgroundColor: Colors.yandexYellow,
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 32,
    width: '100%',
    alignItems: 'center',
  },
  skipButton: {
    marginTop: 16,
  },
  yandexContainer: {
    alignItems: 'center',
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  inclusionText: {
    marginTop: 8,
  },
  illustration: {
    width: width - 40, // Full width minus padding
    height: 280,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    paddingBottom: 40,
  },
});
