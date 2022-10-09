import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Poppins_600SemiBold,
  Poppins_300Light,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import { AppLoading } from "../components";
import TabRoutes from "./tab.routes";
import AuthenticationRoutes from "./authentication.routes";
import { RootState } from "../store";
import { ASYNC_STORAGE_KEYS } from "../constants";
import { signIn } from "../store/duck/auth";
import { useNavigationTheme } from "../hooks";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  const [loadingApp, setLoadingApp] = useState(true);
  const { COLORS } = useTheme();
  const dispatch = useDispatch();
  const navigationTheme = useNavigationTheme();
  const token = useSelector<RootState>((state) => state.auth.token);

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    const getToken = async () => {
      try {
        const asyncUserData = await AsyncStorage.getItem(
          ASYNC_STORAGE_KEYS.USER_DATA
        );

        if (asyncUserData) {
          const data: IUser = JSON.parse(asyncUserData);

          dispatch({
            type: signIn.type,
            payload: data,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingApp(false);
      }
    };

    getToken();
  }, []);

  return (
    <>
      {loadingApp || !fontsLoaded ? (
        <AppLoading />
      ) : (
        <NavigationContainer theme={navigationTheme}>
          <Navigator
            screenOptions={{
              headerShown: false,
              navigationBarColor: COLORS.BACKGROUND,
              statusBarColor: COLORS.STATUSBAR,
              statusBarAnimation: "slide",
            }}
          >
            {token ? (
              <Screen name="AppStack" component={TabRoutes} />
            ) : (
              <Screen
                name="AuthenticationStack"
                component={AuthenticationRoutes}
              />
            )}
          </Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
