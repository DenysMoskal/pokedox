import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={230}
    viewBox="0 0 280 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="83" y="13" rx="0" ry="0" width="230" height="280" />
  </ContentLoader>
);

export default Skeleton;
