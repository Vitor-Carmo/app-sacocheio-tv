import React from "react";
import { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Route } from "@react-navigation/native";
import Play from "../Play";
import { Title } from "../../styles/global";
import LIBRARY_SCREENS from "../../constants/library_screens";

import {
  Head,
  HeadContent,
  CountText,
  Sections,
  TouchableSection,
  TouchableSectionText,
  FilterContainer,
  FilterButton,
  FilterButtonTitle,
} from "./styles";

type LibraryHeaderProps = NativeStackHeaderProps & {
  route: Route<"params", { filterLabel: string }>;
};

export default function LibraryHeader({
  route,
  navigation,
}: LibraryHeaderProps) {
  const { COLORS } = useTheme();

  const handleChangeScreen = (index: number) => {
    navigation.navigate(LIBRARY_SCREENS[index].screen.name);
  };

  return (
    <>
      <Head>
        <HeadContent>
          <Title fontSize="22px">Sua biblioteca</Title>
          <CountText>58 episódios baixados</CountText>
          <Sections>
            {LIBRARY_SCREENS.map((screen, index) => (
              <TouchableSection
                key={index}
                selected={screen.screen.name === route?.name}
                onPress={() => handleChangeScreen(index)}
              >
                <TouchableSectionText
                  selected={screen.screen.name === route?.name}
                >
                  {screen.title}
                </TouchableSectionText>
              </TouchableSection>
            ))}
          </Sections>
        </HeadContent>
        <TouchableOpacity>
          <Play size={50} backgroundColor={COLORS.PRIMARY} />
        </TouchableOpacity>
      </Head>
      <FilterContainer>
        <Title fontSize="16px">{route.params.filterLabel}</Title>
        <FilterButton>
          <FilterButtonTitle>Filtrar</FilterButtonTitle>
        </FilterButton>
      </FilterContainer>
    </>
  );
}
