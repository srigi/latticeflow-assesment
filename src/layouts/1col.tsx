import { FunctionComponent, ReactNode } from "react";

import { WithLayout } from "src/types";
import WebsiteHeader from "src/components/WebsiteHeader";

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <WebsiteHeader />
      <main className="container mb-16">{children}</main>
    </>
  );
};

const withLayout: WithLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default withLayout;
