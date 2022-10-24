import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import { Cache } from "react-native-cache";

export const cache = new Cache({
  namespace: "sacocheio-tv-app",
  policy: {
    maxEntries: 50000, // if unspecified, it can have unlimited entries
    stdTTL: 3 * 60, // the standard ttl as number in seconds, default: 0 (unlimited)
  },
  backend: AsyncStorage,
});

const cachingRequest = async (
  key: string,
  request: () => Promise<AxiosResponse<any, any>>
) => {
  const cachedValue = await cache.get(key);

  if (!cachedValue) {
    const response = await request();
    await cache.set(key, JSON.stringify(response.data.data));
    return response;
  }

  return {
    data: {
      data: JSON.parse(cachedValue),
    },
  };
};

export default cachingRequest;
