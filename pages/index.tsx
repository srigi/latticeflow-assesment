import { NextPageWithLayout } from "src/types";
import Grid from "src/components/Grid";
import withPageLayout from "src/layouts/fluid";

const IndexPage: NextPageWithLayout = () => {
  return <Grid />;
};
IndexPage.getLayout = (title) => withPageLayout(title("Welcome"));

export default IndexPage;
