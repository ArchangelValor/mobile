import { Text, View, StyleSheet } from 'react-native';
import QRscanner from '@/components/QRScanner';

import { Link, Stack } from 'expo-router';


export default function Index() {
  return (
    <View style={styles.container}>
      <QRscanner>
        
      </QRscanner>
      <View style={styles.container}>
        <Link href="/(tabs)/home" style={styles.button}>
          Navigate HOME
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  
  
  
});
