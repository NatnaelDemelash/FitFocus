import { WORKOUTS } from '../utils/swoldier';
import SectionWrapper from './SectionWrapper';

const Header = (props) => {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-500">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
};

const Generator = () => {
  return (
    <SectionWrapper header="Craft your workout" title="It's Gain Time">
      <Header
        index="01"
        title="Pick your poison"
        description="Select the workout you wish to endure."
      />
      {/* buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <button
            className="py-3 border-2 border-[#566573] rounded-lg  duration-200 hover:border-[#77a3d5] "
            key={typeIndex}
          >
            {type}
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
