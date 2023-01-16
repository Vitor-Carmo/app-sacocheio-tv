import React from "react";

import { PodcastContainer, AvatarContainer } from "../../Podcast/styles";

import ShimmerPlaceholder from "../../ShimmerPlaceholder";

export type PodcastProps = {
  isLastPodcast?: boolean;
};

export default function LoadingPodcast({ isLastPodcast }: PodcastProps) {
  return (
    <PodcastContainer isLastPodcast={isLastPodcast}>
      <AvatarContainer>
        <ShimmerPlaceholder
          borderRadius={5}
          width={60}
          height={60}
          marginRight={10}
        />
        <ShimmerPlaceholder borderRadius={2} width="50%" height={16} />
      </AvatarContainer>
      <ShimmerPlaceholder
        borderRadius={2}
        width="100%"
        height={12}
        marginBottom={5}
      />
      <ShimmerPlaceholder
        borderRadius={2}
        width="90%"
        height={12}
        marginBottom={12}
      />
    </PodcastContainer>
  );
}
