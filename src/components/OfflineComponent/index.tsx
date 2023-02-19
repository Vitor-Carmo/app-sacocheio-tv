import React, { ReactNode, Fragment } from "react";

import NoWiFi from "../NoWiFi";
import { useNetworkInfo } from "../../hooks";

export interface OfflineComponentProps {
  children: ReactNode;
}

export default function OfflineComponent({ children }: OfflineComponentProps) {
  const isConnectToInternet = useNetworkInfo();

  return <Fragment>{isConnectToInternet ? children : <NoWiFi />}</Fragment>;
}
