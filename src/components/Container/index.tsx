import React from "react";

import { ScrollView, LinearGradient } from "./styles";

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
