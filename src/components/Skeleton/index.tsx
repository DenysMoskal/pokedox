import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Skeleton = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={260}
    height={280}
    viewBox="0 0 330 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="83" y="13" rx="0" ry="0" width="330" height="400" />
  </ContentLoader>
);

export default Skeleton;
