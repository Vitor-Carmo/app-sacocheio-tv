import { MemoryStore } from "react-native-cache";

const MEMORY_KEY = "svg-cache";

let data: any = null;

const loadData = async () => {
  const defaultData = {
    svgs: {},
  };

  const result = await MemoryStore.getItem(MEMORY_KEY);
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

    await MemoryStore.setItem(MEMORY_KEY, JSON.stringify(newData));
  },
  async getSvg(uri: string) {
    if (data === null) await loadData();
    return data.svgs[uri];
  },
};

export default SVGCacheService;
