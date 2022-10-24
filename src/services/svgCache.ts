import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cache } from "react-native-cache";

const ASYNC_STORAGE_KEY = "svg-cache";

let data: any = null;

const cache = new Cache({
  namespace: "sacocheio-tv-app-svg",
  policy: {
    maxEntries: 50000,
    stdTTL: 60 * 60,
  },
  backend: AsyncStorage,
});

const loadData = async () => {
  const defaultData = {
    svgs: {},
  };

  const result = await cache.get(ASYNC_STORAGE_KEY);
  data = result ? await JSON.parse(result) : defaultData;
  data = { ...defaultData, ...data };
};

const SVGCacheService = {
  async setSvg(uri: string, svg: string) {
    const oldData = data || {};

    const newData = {
      ...oldData,
      svgs: {
        ...oldData.svgs,
        [uri]: svg,
      },
    };

    data = newData;

    await cache.set(ASYNC_STORAGE_KEY, JSON.stringify(newData));
  },

  async getSvg(uri: string) {
    if (data === null) await loadData();
    return data.svgs[uri];
  },
};

export default SVGCacheService;
