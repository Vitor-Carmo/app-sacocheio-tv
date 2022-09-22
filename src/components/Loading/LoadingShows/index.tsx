import React from "react";
import { View } from "react-native";

import ShimmerPlaceholder from "../../ShimmerPlaceholder";

import {
  ShowContainer,
  ShowTextContent,
} from "../../Shows/styles";

interface LoadingItemProps {
  lastShowItem?: boolean;
}

function LoadingItem({ lastShowItem = false }: LoadingItemProps) {
  return (
    <ShowContainer lastShowItem={lastShowItem}>
      <View>
        <ShimmerPlaceholder
          width={180}
          height={16}
          borderRadius={14}
          marginBottom={5}
        />
        <ShimmerPlaceholder width={120} height={16} borderRadius={14} />
      </View>

      <ShowTextContent>
        <ShimmerPlaceholder width={95} height={18} borderRadius={14} />
      </ShowTextContent>
    </ShowContainer>
  );
}

export default function LoadingShows() {
  return (
    <>
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem lastShowItem />
    </>
  );
}
