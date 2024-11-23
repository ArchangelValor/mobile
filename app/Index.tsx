import { Text, View, StyleSheet } from 'react-native';
import QRscanner from '@/components/QRScanner';


export default function Index() {
  return (
    <View style={styles.container}>
      <QRscanner></QRscanner>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  
  },
});
