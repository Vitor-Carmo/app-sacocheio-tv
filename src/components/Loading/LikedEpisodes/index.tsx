import React from "react";
import { View } from "react-native";
import { Title, Subtitle } from "../../../styles/global";
import {
  Container,
  Header,
  HeadContent,
  Podcast,
  PodcastContainer,
  PodcastContent,
} from "../../LikedEpisodes/styles";

import AnchorButton from "../../AnchorButton";
import ShimmerPlaceholder from "../../ShimmerPlaceholder";

export default function LikedEpisodesLoading() {
  return (
    <Container show>
      <Header>
        <HeadContent>
          <Title>Episódios Curtidos</Title>
          <Subtitle>
            Veja os episódios que você mais gostou da plataforma.
          </Subtitle>
        </HeadContent>
        <AnchorButton>Veja todos</AnchorButton>
      </Header>
      <View>
        <Podcast lastEpisode={false}>
          <PodcastContent>
            <View>
              <ShimmerPlaceholder
                borderRadius={10}
                marginBottom={8}
                width={160}
                height={16}
              />
              <ShimmerPlaceholder borderRadius={10} width={110} height={16} />
            </View>
            <ShimmerPlaceholder width={120} borderRadius={10} height={11} />
          </PodcastContent>
          <PodcastContainer>
            <ShimmerPlaceholder width={120} height={120} />
          </PodcastContainer>
        </Podcast>
        <Podcast lastEpisode={false}>
          <PodcastContent>
            <View>
              <ShimmerPlaceholder
                borderRadius={10}
                marginBottom={8}
                width={160}
                height={16}
              />
              <ShimmerPlaceholder borderRadius={10} width={110} height={16} />
            </View>
            <ShimmerPlaceholder width={120} borderRadius={10} height={11} />
          </PodcastContent>
          <PodcastContainer>
            <ShimmerPlaceholder width={120} height={120} />
          </PodcastContainer>
        </Podcast>
        <Podcast lastEpisode>
          <PodcastContent>
            <View>
              <ShimmerPlaceholder
                borderRadius={10}
                marginBottom={8}
                width={160}
                height={16}
              />
              <ShimmerPlaceholder borderRadius={10} width={110} height={16} />
            </View>
            <ShimmerPlaceholder width={120} borderRadius={10} height={11} />
          </PodcastContent>
          <PodcastContainer>
            <ShimmerPlaceholder width={120} height={120} />
          </PodcastContainer>
        </Podcast>
      </View>
    </Container>
  );
}
