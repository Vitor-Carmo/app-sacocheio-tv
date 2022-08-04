import React from "react";
import { ScrollViewProps } from "react-native";

import { ScrollView, LinearGradient } from "./styles";

export default function Container({ children, ...props }: ScrollViewProps) {
  return (
    <ScrollView {...props}>
      <LinearGradient>{children}</LinearGradient>
    </ScrollView>
  );
}
