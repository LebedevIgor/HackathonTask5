export const Colors = {
  // Основные цвета
  black: '#000000',
  white: '#FFFFFF',

  // Розовые цвета (Психо)
  pink: '#b8b2fd', // Основной розовый
  pinkDark: '#8379fc', // Тёмный розовый
  pinkLight: '#CDD2FF', // Светлый розовый
  gradientPurple:
    'linear-gradient(90deg,rgba(131, 121, 252, 1) 0%, rgba(206, 142, 217, 1) 50%)', // Светлый розовый

  // Зелёная палитра
  green: 'green', // Основной зелёный
  greenDark: '#009245', // Тёмный зелёный
  greenLight: '#00E676', // Светлый зелёный

  // Серые оттенки
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',

  // Дополнительные цвета
  error: '#FF3B30',
  warning: '#FF9500',
  success: '#34C759',
  info: '#007AFF',


  // Yandex
  yandexLightGreen: '#C0F266',
  yandexGray: '#808080',
  yandexBlue: '#007AFF',
  yandexRed: '#FF3B30',
  yandexYellow: '#FF9500',
  yandexOrange: '#FF9500',
};


export const FontSize = {
  SMALL: 19,
  MEDIUM: 20,
  LARGE: 43,
  EXTRA_LARGE: 68,
};

export const Gaps = {
  g4: 4,
  g8: 8,
  g12: 12,
  g16: 16,
  g24: 24,
  g32: 32,
  g40: 40,
  g48: 48,
};

export const Radius = {
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 16,
  full: 100,
};

export const Shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  large: {
    shadowColor: Colors.pinkDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};
