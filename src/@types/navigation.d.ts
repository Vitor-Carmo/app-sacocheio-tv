import { NavigatorScreenParams } from "@react-navigation/native";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      AppStack: NavigatorScreenParams<any, any> | undefined;
      LoginStack: NavigatorScreenParams<any, any> | undefined;
      Home: NavigatorScreenParams<any, any> | undefined;
      Programs: NavigatorScreenParams<any, any> | undefined;
      Bibliotecas: NavigatorScreenParams<any, any> | undefined;
      SignIn: undefined;
      HomeScreen: undefined;
      ProgramsList: undefined;
      Program: undefined;
      Library: undefined;
      Podcast: undefined;
    }
  }
}
