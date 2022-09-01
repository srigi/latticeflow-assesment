import { NextPage } from "next";
import type { AppProps as NextAppProps } from "next/app";
import { ReactElement } from "react";

export type WithLayout = (page: ReactElement) => ReactElement | null;

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (
    layoutRenderer: (title?: string) => ReactElement,
    pageProps: P
  ) => ReactElement | null;
};

export interface AppProps extends NextAppProps {
  Component: NextPageWithLayout;
}

export interface Item {
  id: string;
  color: "blue" | "green" | "orange";
  size: "small" | "large";
  dot: boolean;
}
