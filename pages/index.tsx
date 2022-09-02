import { NextPageWithLayout } from "src/types";
import Grid from "src/components/Grid";
import Stats from "src/components/Stats";
import withPageLayout from "src/layouts/1col";

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex gap-8 justify-around mb-8">
        <Stats target="dot" targetPercentage={25} />
        <Stats target="small" targetPercentage={33.33} />
        <Stats target="large" targetPercentage={66.66} />
      </div>
      <Grid />
    </>
  );
};
IndexPage.getLayout = (title) => withPageLayout(title("Welcome"));

export default IndexPage;
