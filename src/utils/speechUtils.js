export const speakText = (text) => {
  return new Promise((resolve, reject) => {
    if (!text) {
      reject(new Error('No text provided'));
      return;
    }

    // Create speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Set language to Russian
    utterance.lang = 'ru-RU';

    // Configure voice settings
    utterance.rate = 0.9; // Slightly slower than default for better clarity
    utterance.pitch = 1;
    utterance.volume = 1;

    // Add event handlers
    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = (error) => {
      reject(error);
    };

    // Speak the text
    window.speechSynthesis.speak(utterance);
  });
};
