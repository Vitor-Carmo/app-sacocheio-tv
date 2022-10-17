import React from "react";

import {
  Podcast,
  PodcastContainer,
  PodcastContent,
} from "../../../screens/Programs/styles";
import ShimmerPlaceholder from "../../ShimmerPlaceholder";

interface ILoadingProgramsProps {
  isItTheLatestPodcastItem?: boolean;
}
export default function LoadingPrograms({
  isItTheLatestPodcastItem = false,
}: ILoadingProgramsProps) {
  return (
    <Podcast isItTheLatestPodcastItem={isItTheLatestPodcastItem}>
      <PodcastContainer>
        <ShimmerPlaceholder width={120} height={120} />
      </PodcastContainer>
      <PodcastContent>
        <ShimmerPlaceholder
          width={150}
          height={18}
          borderRadius={2}
          marginBottom={20}
        />

        <ShimmerPlaceholder
          width={"100%"}
          height={12}
          borderRadius={2}
          marginBottom={6}
        />
        <ShimmerPlaceholder
          width={"100%"}
          height={12}
          borderRadius={2}
          marginBottom={6}
        />
        <ShimmerPlaceholder
          width={150}
          height={12}
          borderRadius={2}
          marginBottom={6}
        />
      </PodcastContent>
    </Podcast>
  );
}
