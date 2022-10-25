import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import {
  Anchors,
  LatestPodcasts,
  LikedEpisodes,
  Shows,
  OfficialPlaylist,
  GradientContainer,
  Options,
  Logout,
} from "../../components";
import { Title, Subtitle } from "../../styles/global";
import { greetings } from "../../helpers";
import { ASYNC_STORAGE_KEYS } from "../../constants";

import {
  Container,
  Head,
  AnchorContainer,
  LatestPodcastsContainer,
  TouchableOptions,
  OptionsContainerList,
  TouchableOption,
  OptionListText,
} from "./styles";
import { signOut } from "../../store/duck/auth";

export default function Home() {
  const [showOptionModal, setShowOptionModal] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const options = [
    {
      icon: Logout({ size: 20 }),
      title: "Sair",
      onPress: () => {
        Promise.all([
          SecureStore.deleteItemAsync(ASYNC_STORAGE_KEYS.USER_DATA),
          AsyncStorage.clear(),
        ]).then(() => {
          dispatch(signOut());
        });
      },
    },
  ];

  const optionModalTranslateXInitialValue = 100;
  const optionModalTranslateYInitialValue = options.length * 25 * -1;
  const optionModalScaleInitialValue = 0;

  const optionModalTranslateX = useSharedValue(
    optionModalTranslateXInitialValue
  );

  const optionsContainerListStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: optionModalTranslateX.value,
        },
        {
          translateY: interpolate(
            optionModalTranslateX.value,
            [optionModalTranslateXInitialValue, 0],
            [optionModalTranslateYInitialValue, 0],
            Extrapolate.CLAMP
          ),
        },
        {
          scale: interpolate(
            optionModalTranslateX.value,
            [optionModalTranslateXInitialValue, 0],
            [optionModalScaleInitialValue, 1],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const handleOnPressOptions = () => {
    setShowOptionModal((showOptionModal) => !showOptionModal);
  };

  useEffect(() => {
    optionModalTranslateX.value = showOptionModal
      ? withTiming(0, {
          duration: 250,
          easing: Easing.inOut(Easing.quad),
        })
      : withTiming(100, {
          duration: 250,
          easing: Easing.inOut(Easing.quad),
        });
  }, [showOptionModal]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () =>
      setShowOptionModal(false)
    );

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <TouchableOptions onPress={handleOnPressOptions}>
        <Options size={4} />
      </TouchableOptions>
      <OptionsContainerList style={optionsContainerListStyle}>
        {options.map((option, index) => (
          <TouchableOption
            key={index}
            onPress={option.onPress}
            disabled={!showOptionModal}
          >
            {option.icon}
            <OptionListText>{option.title}</OptionListText>
          </TouchableOption>
        ))}
      </OptionsContainerList>

      <GradientContainer
        onStartShouldSetResponder={(evt) => true}
        onMoveShouldSetResponder={(evt) => true}
        onResponderGrant={() => setShowOptionModal(false)}
        onResponderMove={() => setShowOptionModal(false)}
      >
        <Head>
          <Title>{greetings()}, Jegue! 🐯🏹</Title>
          <Subtitle marginBottom="30px">Tudo chupeta, xuxu?</Subtitle>
        </Head>

        <AnchorContainer>
          <Anchors />
        </AnchorContainer>

        <LatestPodcastsContainer>
          <LatestPodcasts />
        </LatestPodcastsContainer>

        <LikedEpisodes />

        <Shows />

        <OfficialPlaylist />
      </GradientContainer>
    </Container>
  );
}
