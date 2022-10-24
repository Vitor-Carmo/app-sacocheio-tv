import React, { useEffect, useState, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useFonts } from "expo-font";
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

import AppLoading from "../AppLoading";
import { ASYNC_STORAGE_KEYS } from "../../constants";
import { signIn } from "../../store/duck/auth";
import { cache } from "../../services/cache";
import api from "../../services/api";

interface ApplicationContainerProps {
  children: ReactNode;
}

export default function ApplicationContainer({
  children,
}: ApplicationContainerProps) {
  const [loadingApp, setLoadingApp] = useState(true);
  const dispatch = useDispatch();

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
          api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
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

  useEffect(() => {
    const clearCache = async () => {
      await cache.clearAll();
    };

    clearCache();
  }, []);

  return loadingApp || !fontsLoaded ? <AppLoading /> : <>{children}</>;
}
