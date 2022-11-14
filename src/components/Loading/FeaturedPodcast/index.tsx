import React from "react";
import { Container, Info } from "../../FeaturedPodcast/styles";

import ShimmerPlaceholder from "../../ShimmerPlaceholder";

interface IFeaturedPodcastProps {
  marginRight?: string;
}

export default function FeaturedPodcast({
  marginRight,
}: IFeaturedPodcastProps) {
  return (
    <Container marginRight={marginRight}>
      <Info>
        <ShimmerPlaceholder
          style={{
            width: 45,
            height: 45,
            borderRadius: 5,
            marginRight: 5,
          }}
        />
        <ShimmerPlaceholder
          style={{
            width: 80,
            height: 12,
            borderRadius: 4,
          }}
        />
      </Info>

      <ShimmerPlaceholder
        style={{
          flex: 1,
          width: "100%",
          borderRadius: 10,
        }}
      />
    </Container>
  );
}
