import FilterSidebar from "../FilterSidebar";
import ContentBodyRight from "../ContentBodyRight";
import "./styles.css";

const ContentBody = () => {
  return (
    <div className="contentBody">
      {/* Left */}
      <FilterSidebar />

      {/* Right */}
      <ContentBodyRight />
    </div>
  );
};

export default ContentBody;
