import React, { useCallback, useState } from "react";

import { Text, TextLayoutEventData, NativeSyntheticEvent, TextProps } from "react-native";

import { ShowMoreOrLessText } from "./styles";

export default function SeeMore({ numberOfLines, ...props }: TextProps) {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(true);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      setLengthMore(e.nativeEvent.lines.length > (numberOfLines ?? 1));
    },
    []
  );

  return (
    <>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : numberOfLines}
        ellipsizeMode="clip"
        {...props}
      />
      {lengthMore && (
        <ShowMoreOrLessText onPress={toggleNumberOfLines}>
          {textShown ? "mostrar menos" : "... ver mais"}
        </ShowMoreOrLessText>
      )}
    </>
  );
}
