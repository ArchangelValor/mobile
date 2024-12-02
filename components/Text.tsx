import React from 'react';
import { Text as RNText, TextProps, Platform } from 'react-native';

export function Text({ style, ...props }: TextProps) {
  return (
    <RNText 
      style={[
        { 
          fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        },
        style
      ]} 
      {...props} 
    />
  );
}

