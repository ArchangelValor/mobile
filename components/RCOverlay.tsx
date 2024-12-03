import React from 'react';
import { View, StyleSheet } from 'react-native';

interface RCOverlayProps {
  isTorchOn: boolean;
}

const RCOverlay: React.FC<RCOverlayProps> = ({ isTorchOn }) => {
  return (
    <View style={styles.container}>
      <View style={[
        styles.receiptFrame,
        isTorchOn && { borderColor: 'yellow', borderWidth: 3 }
      ]} />
      {/* rest of the component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiptFrame: {
    width: 200,
    height: 150,
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default RCOverlay;

