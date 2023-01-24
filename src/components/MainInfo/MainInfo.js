import Header from './Header/Header.js'
import WorkExperience from './WorkExperience.js/WorkExperience.js';
import Education from './Education/Education.js';

const MainInfo = () => (
  <div className="my-2 px-4 md:w-2/3 text-neutral-600 z-40">
    <Header />
    <hr className="mt-2 text-gray-900" />
    <WorkExperience />
    <Education />
  </div>
);

export default MainInfo;