import React from "react";
import Podcast from "../../components/Podcast";

import { PodcastList } from "./styles";

export default function Downloads() {
  const podcasts = [{}, {}, {}, {}];

  return (
    <PodcastList
      data={podcasts}
      renderItem={({ item, index }) => (
        <Podcast isLastPodcast={podcasts.length - 1 === index} />
      )}
      keyExtractor={(item, index) => "key" + index}
    />
  );
}
