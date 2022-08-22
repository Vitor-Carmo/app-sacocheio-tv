import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

export default function useScrollAnimated() {
  const scrollY = useSharedValue<number>(0);

  const scrollHandler = useAnimatedScrollHandler(({ contentOffset: { y } }) => {
    scrollY.value = y;
  });

  return {
    scrollY,
    scrollHandler,
  };
}
