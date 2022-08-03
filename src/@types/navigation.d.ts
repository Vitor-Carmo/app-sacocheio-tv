import { NavigatorScreenParams } from "@react-navigation/native";

type ProgramasParamList = {
  PodcastsList: undefined;
};

type TabParamList = {
  Home: undefined;
  Programas: NavigatorScreenParams<ProgramasParamList>;
  Biblioteca: undefined;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      LoginStack: undefined;
      AppStack: NavigatorScreenParams<TabParamList>;
    }
  }
}
