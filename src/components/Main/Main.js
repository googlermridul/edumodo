import CourseSection from "../CourseSection/CourseSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import GetApp from "../GetApp/GetApp";
import HomeBanner from "../HomeBanner/HomeBanner";

const Main = () => {
   return (
      <div>
         <HomeBanner />
         <FeatureSection />
         <CourseSection />
         <GetApp />
      </div>
   );
};

export default Main;
