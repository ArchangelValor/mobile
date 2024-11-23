import { CameraView, CameraType, useCameraPermissions,  } from 'expo-camera';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

export default function QRscanner() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function takePicture() {
    // const photo = await takePictureAsync();
    // Handle captured photo here (e.g., save to device storage)
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} barcodeScannerSettings={{ barcodeTypes: ["qr"] }}>
        {/* Capture button */}
        
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Text style={styles.captureButtonText}></Text>
        </TouchableOpacity>
        
          {/* <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity> */}
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  captureButton: {
    height: 75, // Height of the button
    width: 75, // Width of the button
    backgroundColor: 'white',
    borderRadius: 75 / 2, // Half of width/height to make it circular
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Allow free positioning
    bottom: 50, // Adjust bottom position (optional)
    left: '50%', // Center horizontally
    marginLeft: -37.5, // Half of width to adjust exact centering
    borderWidth: 1,
    borderColor: 'black',
  },
  captureButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 10,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});