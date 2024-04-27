import { useState } from 'react';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import SectionWrapper from './SectionWrapper';
import { IoIosArrowDown } from 'react-icons/io';

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
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState('indvidual');
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState('strength_power');

  function updateMuscles(muscleGroup) {
    if (muscles.length > 2) {
      return;
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup]);
      return;
    }

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    setMuscles([...muscles, muscleGroup]);
  }

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
            onClick={() => {
              setPoison(type);
            }}
            className={
              'py-3 border-2 border-[#566573] rounded-lg  duration-200 hover:border-[#5484bb]' +
              (type === poison
                ? 'border-2 border-[#9B59B6] text-[#9B59B6]'
                : '')
            }
            key={typeIndex}
          >
            <p className="uppercase font-medium text-sm hover:font-semibold">
              {type.replace('_', ' ')}
            </p>
          </button>
        ))}
      </div>

      <Header
        index="02"
        title="Lock on targets"
        description="Select the muscles judged for annihilation."
      />

      <div className="border-2 border-[#283747] flex flex-col items-center rounded-lg">
        <button
          onClick={() => setShowModal(!showModal)}
          className="flex gap-4 items-center w-full justify-center py-3 "
        >
          <p>Select Muscle Group</p>
          <IoIosArrowDown size={18} cursor="pointer" />
        </button>
        <div className={showModal ? 'py-6 text-purple-950 font-medium' : ''}>
          {showModal && (
            <div className="flex flex-col px-3 pb-3 gap-4">
              {poison === 'individual'
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison]).map(
                    (muscleGroup, muscleGroupIndex) => {
                      return (
                        <button
                          onClick={updateMuscles(muscleGroup)}
                          key={muscleGroupIndex}
                          className={
                            'uppercase' +
                            (muscles.includes(muscleGroup)
                              ? 'text-red-500'
                              : '')
                          }
                        >
                          {muscleGroup}
                        </button>
                      );
                    }
                  )}
            </div>
          )}
        </div>
      </div>

      <Header
        index="03"
        title="Become Juggernaut"
        description="Select your ultimate objective."
      />
      {/* buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button
            onClick={() => {
              setGoals(scheme);
            }}
            className={
              'py-3 border-2 border-[#566573] rounded-lg  duration-200 hover:border-[#5484bb]' +
              (scheme === goals
                ? 'border-2 border-[#9B59B6] text-[#9B59B6]'
                : '')
            }
            key={schemeIndex}
          >
            <p className="uppercase font-medium text-sm hover:font-semibold">
              {scheme.replace('_', ' ')}
            </p>
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
