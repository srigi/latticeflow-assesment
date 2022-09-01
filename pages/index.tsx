import { Item, NextPageWithLayout } from "src/types";
import Grid from "src/components/Grid";
import withPageLayout from "src/layouts/1col";

import dataset from "src/dataset.json";

const IndexPage: NextPageWithLayout = () => {
  return <Grid items={dataset as Item[]} />;
};
IndexPage.getLayout = (title) => withPageLayout(title("Welcome"));

export default IndexPage;
