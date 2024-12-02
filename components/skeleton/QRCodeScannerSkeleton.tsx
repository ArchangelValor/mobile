import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  SafeAreaView,
  ViewStyle,
  StyleProp,
} from "react-native";

export default function QRCodeScannerSkeleton() {
  const shimmerValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    );

    shimmerAnimation.start();

    return () => shimmerAnimation.stop();
  }, [shimmerValue]);

  const getShimmerStyle = (width: number, height: number): ViewStyle => ({
    width,
    height,
    backgroundColor: "#333", // Darker shade for the skeleton on black background
    borderRadius: 4,
    overflow: "hidden" as const,
  });

  const shimmerTranslate = shimmerValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  const ShimmerEffect = ({ style }: { style: StyleProp<ViewStyle> }) => (
    <View style={style}>
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX: shimmerTranslate }],
          },
        ]}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ShimmerEffect
        style={StyleSheet.compose(getShimmerStyle(200, 40), styles.title)}
      />
      <View style={styles.buttonContainer}>
        <ShimmerEffect
          style={StyleSheet.compose(getShimmerStyle(180, 30), styles.button)}
        />
        <ShimmerEffect
          style={StyleSheet.compose(getShimmerStyle(180, 30), styles.button)}
        />
      </View>
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
    marginBottom: 40,
  },
  buttonContainer: {
    gap: 20,
  },
  button: {
    marginBottom: 10,
  },
  shimmer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle shimmer effect
  },
});
