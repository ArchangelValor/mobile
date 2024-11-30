import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const overlayColor = 'rgba(0,0,0,0.5)';

const RCOverlay: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={[styles.overlaySection, { height: height * 0.25 }]} />
        <View style={styles.overlayMiddleSection}>
          <View style={styles.overlaySection} />
          <View style={styles.receiptFrame} />
          <View style={styles.overlaySection} />
        </View>
        <View style={[styles.overlaySection, { height: height * 0.25 }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
  },
  overlaySection: {
    flex: 1,
    backgroundColor: overlayColor,
  },
  overlayMiddleSection: {
    flexDirection: 'row',
    height: height * 0.5,
  },
  receiptFrame: {
    width: width * 0.8,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
});

export default RCOverlay;

