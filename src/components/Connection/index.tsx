import React, { useState, useEffect, useRef } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withSequence,
} from "react-native-reanimated";
import { Container } from "./styles";
import { Title } from "../../styles/global";
import { useNetworkInfo } from "../../hooks";

export default function Connection() {
  const isConnectToInternet = useNetworkInfo();
  const isFirstTime = useRef(true);
  const STATUS_TYPE = {
    ONLINE: { text: "Você está com acesso a internet!", color: "#006400" },
    OFFLINE: { text: "Você está sem acesso a internet!", color: " #8B0000" },
  };
  const [status, setStatus] = useState(STATUS_TYPE.ONLINE);
  const containerHeight = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    return {
      height: containerHeight.value,
    };
  });
  useEffect(() => {
    if (isFirstTime.current === true) {
      const clearFirstTimeCheckTimeOut = setTimeout(() => {
        isFirstTime.current = false;
      }, 2000);
      return () => {
        clearTimeout(clearFirstTimeCheckTimeOut);
      };
    }

    setStatus(isConnectToInternet ? STATUS_TYPE.ONLINE : STATUS_TYPE.OFFLINE);

    containerHeight.value = withSequence(
      withTiming(0, {
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      }),
      withTiming(25, {
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      })
    );

    const clearContainerHeight = () => {
      containerHeight.value = withTiming(0, {
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      });
    };

    const clearContainerHeightTimeout = setTimeout(clearContainerHeight, 5000);
    return () => {
      clearTimeout(clearContainerHeightTimeout);
    };
  }, [isConnectToInternet]);

  const ANIMATION_DURATION = 180;
  return (
    <Container color={status.color} style={containerStyle}>
      <Title fontSize="11px" color="white">
        {status.text}
      </Title>
    </Container>
  );
}
