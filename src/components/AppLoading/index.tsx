import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

import Logo from "../Logo";

import { Container } from "./styles";

export default function AppLoading() {
  const translateXPosition = useSharedValue(0);

  const logoContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateXPosition.value }],
    };
  });

  useEffect(() => {
    translateXPosition.value = withRepeat(
      withSequence(
        withTiming(15, {
          duration: 800,
          easing: Easing.inOut(Easing.quad),
        }),
        withTiming(0, {
          duration: 800,
          easing: Easing.inOut(Easing.quad),
        })
      ),
      -1
    );
  }, []);

  return (
    <>
      <Container>
        <Animated.View style={logoContainerStyle}>
          <Logo size={80} />
        </Animated.View>
      </Container>

      <StatusBar style="light" />
    </>
  );
}
