import React, { useEffect, useState } from "react";
import { SvgFromXml, UriProps } from "react-native-svg";
import svgCache from "../../services/svgCache";

export default function CachedSvgUri({ uri = null, ...props }: UriProps) {
  const [xml, setXml] = useState<string | null>("");

  const fetchCached = async (uri: string) => {
    const cached = await svgCache.getSvg(uri);
    if (cached) {
      return cached;
    } else {
      const response = await fetch(uri);
      const svg = await response.text();
      svgCache.setSvg(uri, svg);
      return svg;
    }
  };

  useEffect(() => {
    const fetch = async (uri: string | null) => {
      try {
        setXml(uri ? await fetchCached(uri) : null);
      } catch (e) {
        console.error(e);
      }
    };

    fetch(uri);
  }, [uri]);

  return <SvgFromXml xml={xml} override={props} />;
}
