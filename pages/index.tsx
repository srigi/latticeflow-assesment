import { NextPageWithLayout } from "src/types";
import Grid from "src/components/Grid";
import Stats from "src/components/Stats";
import withPageLayout from "src/layouts/1col";

const IndexPage: NextPageWithLayout = () => {
  return <Grid />;
};
IndexPage.getLayout = (title) => withPageLayout(title("Welcome"));

export default IndexPage;
