import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Link, Stack } from "expo-router";
import { useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { getUser } from "@/helper/Session";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function index() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    const session = async () => {
      const user = await getUser();
      console.log(user);
      if (user) {
        router.push("/home");
      }
    };
    session();
    setIsLoading(false);
  });

  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"small"} />
      ) : (
        <>
          <Stack.Screen options={{ title: "Overview", headerShown: false }} />
          <Text style={styles.title}>QR Code Scanner</Text>
          <View style={{ gap: 20 }}>
            <Pressable onPress={requestPermission}>
              <Text style={styles.buttonStyle}>Request Permissions</Text>
            </Pressable>
            <Link href={"/qrscan"} asChild>
              <Pressable disabled={!isPermissionGranted}>
                <Text
                  style={[
                    styles.buttonStyle,
                    { opacity: !isPermissionGranted ? 0.5 : 1 },
                  ]}
                >
                  Scan Code
                </Text>
              </Pressable>
            </Link>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "space-around",
    paddingVertical: 80,
  },
  title: {
    color: "white",
    fontSize: 40,
  },
  buttonStyle: {
    color: "#0E7AFE",
    fontSize: 20,
    textAlign: "center",
  },
});
