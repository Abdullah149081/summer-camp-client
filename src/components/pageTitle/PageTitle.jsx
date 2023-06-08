import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{`SportsRookieCamp | ${title} `}</title>
    </Helmet>
  );
};

export default PageTitle;
