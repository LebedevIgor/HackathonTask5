import React, { createContext, useState, useContext, useEffect } from 'react';
import { AccessibilityInfo } from 'react-native';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  const [isReduceMotionEnabled, setIsReduceMotionEnabled] = useState(false);
  const [isBoldTextEnabled, setIsBoldTextEnabled] = useState(false);

  useEffect(() => {
    // Check initial screen reader status
    AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
      setIsScreenReaderEnabled(screenReaderEnabled);
    });

    // Listen for screen reader changes
    const screenReaderListener = AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      (screenReaderEnabled) => {
        setIsScreenReaderEnabled(screenReaderEnabled);
      }
    );

    // Check reduce motion preference
    if (AccessibilityInfo.isReduceMotionEnabled) {
      AccessibilityInfo.isReduceMotionEnabled().then((reduceMotionEnabled) => {
        setIsReduceMotionEnabled(reduceMotionEnabled);
      });
    }

    // Check bold text preference
    if (AccessibilityInfo.isBoldTextEnabled) {
      AccessibilityInfo.isBoldTextEnabled().then((boldTextEnabled) => {
        setIsBoldTextEnabled(boldTextEnabled);
      });
    }

    return () => {
      screenReaderListener.remove();
    };
  }, []);

  const value = {
    isScreenReaderEnabled,
    isReduceMotionEnabled,
    isBoldTextEnabled,
    announceForAccessibility: (announcement) => {
      AccessibilityInfo.announceForAccessibility(announcement);
    },
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider'
    );
  }
  return context;
}
