import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import RCOverlay from './RCOverlay';

export default function Camera() {
  const [facing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [torch, setTorch] = useState<'on' | 'off'>('off');

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Button onPress={requestPermission} title="Grant camera permission" />
      </View>
    );
  }

  const handleCapture = () => {
    setScanned(true);
    alert('Receipt captured!');
  };

  const toggleTorch = () => {
    setTorch(current => current === 'on' ? 'off' : 'on');
  };

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing}
        flashMode={torch}
      >
        <RCOverlay isTorchOn={torch === 'on'} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
            <Ionicons name="scan-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.torchButton} onPress={toggleTorch}>
            <Ionicons 
              name={torch === 'on' ? "flash" : "flash-off"} 
              size={30} 
              color="white" 
            />
           </TouchableOpacity>
        </View>
      </CameraView>
      {scanned && (
        <Button title={'Scan Another Receipt'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    height: 75,
    width: 75,
    backgroundColor: 'white',
    borderRadius: 75 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 20,
  },
  torchButton: {
    height: 50,
    width: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

