import React from "react";
import { ScrollView } from "react-native";

import { LinearGradient } from "./styles";

interface IContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return (
    <ScrollView>
      <LinearGradient>{children}</LinearGradient>
    </ScrollView>
  );
}
