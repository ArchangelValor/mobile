import { View, Text, TextInput } from "react-native";
export default function ScannedReceipt() {
  return (
    <View>
      <Text>Scanned Receipt</Text>
      <TextInput
        dataDetectorTypes={"calendarEvent"}
        defaultValue="12/12/2024"
      />
    </View>
  );
}
