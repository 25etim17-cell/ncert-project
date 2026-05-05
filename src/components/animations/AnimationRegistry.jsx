import React from 'react';

// Physics
import DistanceDisplacementAnimation from './physics/DistanceDisplacementAnimation';
import VelocityTimeGraphAnimation from './physics/VelocityTimeGraphAnimation';
import UniformAccelerationAnimation from './physics/UniformAccelerationAnimation';
import RefractionAnimation from './physics/RefractionAnimation';
import OhmsLawAnimation from './physics/OhmsLawAnimation';
import GravitySimulation from './physics/GravitySimulation';

// Chemistry
import StateChangeAnimation from './chemistry/StateChangeAnimation';
import DiffusionAnimation from './chemistry/DiffusionAnimation';
import ReactionTypeAnimation from './chemistry/ReactionTypeAnimation';
import BalancingEquationAnimation from './chemistry/BalancingEquationAnimation';
import ElectronConfigAnimation from './chemistry/ElectronConfigAnimation';

// Biology
import OsmosisAnimation from './biology/OsmosisAnimation';
import PhotosynthesisAnimation from './biology/PhotosynthesisAnimation';
import CellStructureAnimation from './biology/CellStructureAnimation';
import TissueAnimation from './biology/TissueAnimation';
import DigestionAnimation from './biology/DigestionAnimation';
import MendelCrossAnimation from './biology/MendelCrossAnimation';
import ReproductionAnimation from './biology/ReproductionAnimation';
import NephronAnimation from './biology/NephronAnimation';

// Generic fallback for any animation ID not yet implemented
const GenericAnimation = ({ playing, step, id }) => (
  <div className="flex flex-col items-center justify-center p-10 h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300">
    <div className={`px-6 py-3 rounded-xl font-bold ${playing ? 'bg-[#00A8E8] text-white' : 'bg-gray-200 text-gray-500'}`}>
      {playing ? '▶ Simulating...' : '⏸ Press Play'}
    </div>
    <p className="mt-3 text-center font-semibold text-gray-500 text-sm">{id}</p>
    {step > 0 && <p className="text-xs mt-1 font-mono text-gray-400">Step: {step}</p>}
  </div>
);

const AnimationRegistry = {
  // Physics
  DistanceDisplacementAnimation,
  VelocityTimeGraphAnimation,
  UniformAccelerationAnimation,
  RefractionAnimation,
  OhmsLawAnimation,
  GravitySimulation,

  // Chemistry
  StateChangeAnimation,
  DiffusionAnimation,
  ReactionTypeAnimation,
  BalancingEquationAnimation,
  ElectronConfigAnimation,

  // Biology
  OsmosisAnimation,
  PhotosynthesisAnimation,
  CellStructureAnimation,
  TissueAnimation,
  DigestionAnimation,
  MendelCrossAnimation,
  ReproductionAnimation,
  NephronAnimation,
};

export const getAnimationComponent = (id) => {
  return AnimationRegistry[id] || ((props) => <GenericAnimation id={id} {...props} />);
};
