import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { Camera, CameraPermissionStatus } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

export default function QRScanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState<string | null>(null);

  const { data, error, isLoading } = useSWR(
    qrData ? `https://api-endpoint.com/dashboard?key=${qrData}` : null,
    fetcher
  );

  useEffect(() => {
    (async () => {
      const { status }: { status: CameraPermissionStatus } =
        await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    setQrData(data); // Store scanned QR code data
    console.log("Scanned QR Data:", data); // Debugging output
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Camera access is required to scan QR codes.
        </Text>
        <Button
          title="Grant Permission"
          onPress={() =>
            Camera.requestCameraPermissionsAsync().then(
              ({ status }: { status: CameraPermissionStatus }) =>
                setHasPermission(status === "granted")
            )
          }
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!scanned ? (
        <Camera
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
        />
      ) : (
        <View style={styles.resultContainer}>
          {isLoading && <ActivityIndicator size="large" />}
          {error && (
            <Text style={styles.error}>
              Error fetching data: {error.message}
            </Text>
          )}
          {data && (
            <View>
              <Text style={styles.dataTitle}>Dashboard Data:</Text>
              <Text style={styles.dataContent}>
                {JSON.stringify(data, null, 2)}
              </Text>
            </View>
          )}
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  dataTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dataContent: {
    fontSize: 16,
    marginBottom: 20,
  },
});
