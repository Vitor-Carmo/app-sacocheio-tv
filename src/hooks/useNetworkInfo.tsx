import React, { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

export type IsConnectionType = boolean | null;

export default function useNetworkInfo(): IsConnectionType {
  const [isConnected, setIsConnected] = useState<IsConnectionType>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;
}
