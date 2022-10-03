import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TabRoutes from "./tab.routes";
import AuthenticationRoutes from "./authentication.routes";
import { RootState } from "../store";
import { ASYNC_STORAGE_KEYS } from "../constants";
import { signIn } from "../store/duck/auth";
import { useNavigationTheme } from "../hooks";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  const { COLORS } = useTheme();
  const dispatch = useDispatch();
  const navigationTheme = useNavigationTheme();
  const token = useSelector<RootState>((state) => state.auth.token);

  useLayoutEffect(() => {
    const getToken = async () => {
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
    };

    getToken();
  }, []);

  return (
    <>
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
    </>
  );
}
