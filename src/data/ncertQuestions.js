// NCERT Textbook Questions extracted from official PDFs
// Mapped to chapter IDs from src/data/

export const ncertTextbookQuestions = {
  // ═══════════════════════════════════════
  // CLASS 9 PHYSICS
  // ═══════════════════════════════════════
  ch1_motion: {
    chapter: "Motion",
    pdfPath: "/pdfs/CLASS 9 PHYSICS.pdf",
    questions: [
      { id: 1, question: "An object has moved through a distance. Can it have zero displacement? If yes, support your answer with an example.", answer: "Yes. If a person walks 10 m forward and then 10 m backward, the total distance is 20 m but displacement is 0 m because they return to the starting point." },
      { id: 2, question: "A farmer moves along the boundary of a square field of side 10 m in 40 s. What will be the magnitude of displacement at the end of 2 minutes 20 seconds?", answer: "After 3.5 rounds, the farmer is at the diagonally opposite corner. Displacement = 10√2 m ≈ 14.14 m" },
      { id: 3, question: "Which of the following is true for displacement? (a) It cannot be zero (b) Its magnitude is greater than the distance travelled", answer: "Both are incorrect. Displacement can be zero when initial and final positions are the same. Displacement is always ≤ distance." },
      { id: 4, question: "An athlete completes one round of a circular track of diameter 200 m in 40 s. What will be the distance covered and displacement at the end of 2 min 20 s?", answer: "Distance ≈ 2199 m (3.5 × 200π). Displacement = 200 m (diameter, as athlete is at opposite point after 3.5 rounds)." },
      { id: 5, question: "Joseph jogs from A to B (300 m) in 2 min 30 s and then back 100 m to C in 1 min. Find average speed and velocity.", answer: "A→B: Speed = 2 m/s, Velocity = 2 m/s. A→C: Speed = 400/210 ≈ 1.90 m/s, Velocity = 200/210 ≈ 0.95 m/s." },
      { id: 6, question: "Abdul, while driving to school, computes the average speed for his trip to be 20 km/h. On his return trip along the same route, the average speed is 30 km/h. What is the average speed for the entire trip?", answer: "Average speed = 2d/(d/20 + d/30) = 2d/(d/12) = 24 km/h" },
      { id: 7, question: "A motorboat starting from rest on a lake accelerates in a straight line at a constant rate of 3.0 m/s² for 8.0 s. How far does the boat travel during this time?", answer: "s = ut + ½at² = 0 + ½(3)(64) = 96 m" },
      { id: 8, question: "From the v-t graph: (a) Find distance using area under graph (b) Which part shows uniform motion?", answer: "(a) Distance = area under the speed-time graph. (b) Horizontal straight line represents uniform motion." },
      { id: 9, question: "State which situations are possible: (a) constant acceleration but zero velocity (b) moving with acceleration but uniform speed (c) acceleration perpendicular to motion", answer: "(a) Yes — ball at highest point. (b) Yes — uniform circular motion. (c) Yes — circular motion has centripetal acceleration perpendicular to velocity." },
      { id: 10, question: "An artificial satellite is moving in a circular orbit of radius 42250 km. Calculate its speed if it takes 24 hours to revolve around the Earth.", answer: "Speed = 2πr/T = (2 × π × 42250)/86400 ≈ 3.07 km/s" },
    ]
  },

  ch2_force: {
    chapter: "Force and Laws of Motion",
    pdfPath: "/pdfs/CLASS 9 PHYSICS.pdf",
    questions: [
      { id: 1, question: "Which of the following has more inertia: (a) a rubber ball and a stone of the same size (b) a bicycle and a train (c) a five-rupees coin and a one-rupee coin?", answer: "(a) Stone (more mass). (b) Train (much larger mass). (c) Five-rupee coin (greater mass). Inertia depends on mass." },
      { id: 2, question: "In the following example, try to identify the number of times the velocity of the ball changes: A football player kicks a football to another player who kicks it towards the goal. The goalkeeper catches and kicks it.", answer: "Velocity changes 3 times — when the first player kicks, the second player kicks, and the goalkeeper stops and kicks it." },
      { id: 3, question: "Explain why some leaves may get detached from a tree if we vigorously shake its branch.", answer: "When the branch is shaken, it moves suddenly, but the leaves tend to remain at rest due to inertia. This causes them to detach." },
      { id: 4, question: "Why do you fall in the forward direction when a moving bus brakes to a stop and fall backwards when it accelerates from rest?", answer: "Due to inertia. When bus stops — lower body stops, upper body continues forward. When bus starts — lower body moves, upper body stays at rest." },
      { id: 5, question: "A truck starts from rest and rolls down a hill with constant acceleration. It travels 400 m in 20 s. Find acceleration and force if mass = 7 tonnes.", answer: "a = 2s/t² = 800/400 = 2 m/s². Force = ma = 7000 × 2 = 14000 N" },
      { id: 6, question: "A stone of 1 kg is thrown with velocity 20 m/s across frozen ice and comes to rest after 50 m. Find friction force.", answer: "v² = u² + 2as → 0 = 400 + 100a → a = −4 m/s². Friction = ma = 1 × 4 = 4 N" },
      { id: 7, question: "An 8000 kg engine pulls 5 wagons each of 2000 kg along a horizontal track. If it exerts 40000 N force and resistance is 5000 N, find net acceleration.", answer: "Total mass = 18000 kg. Net force = 35000 N. Acceleration = 35000/18000 ≈ 1.94 m/s²" },
      { id: 8, question: "A bullet of 10 g travelling at 150 m/s strikes a wooden block and stops in 0.03 s. Find distance of penetration and force.", answer: "a = −5000 m/s². Distance = 2.25 m. Force = 0.01 × 5000 = 50 N" },
    ]
  },

  ch3_gravitation: {
    chapter: "Gravitation",
    pdfPath: "/pdfs/CLASS 9 PHYSICS.pdf",
    questions: [
      { id: 1, question: "How does the force of gravitation between two objects change when the distance between them is reduced to half?", answer: "Force becomes 4 times because F ∝ 1/r². If r → r/2, then F → F × 4." },
      { id: 2, question: "Gravitational force acts on all objects in proportion to their masses. Why then, a heavy object does not fall faster than a light object?", answer: "Because acceleration due to gravity (g = 9.8 m/s²) is independent of mass. All objects fall with equal acceleration in absence of air resistance." },
      { id: 3, question: "What is the magnitude of the gravitational force between the earth and a 1 kg object on its surface?", answer: "F = GMm/r² = (6.7×10⁻¹¹ × 6×10²⁴ × 1)/(6.4×10⁶)² ≈ 9.8 N" },
      { id: 4, question: "The earth and the moon are attracted to each other by gravitational force. Does the earth attract the moon with a force that is greater or smaller or the same?", answer: "Same force. Newton's Third Law — action and reaction are equal and opposite." },
      { id: 5, question: "If the moon attracts the earth, why does the earth not move towards the moon?", answer: "Earth does move slightly, but the motion is negligible because Earth's mass is much larger than the Moon's." },
      { id: 6, question: "A ball is thrown vertically upwards with velocity of 49 m/s. Calculate (i) maximum height (ii) total time taken to return.", answer: "(i) h = u²/2g = 2401/19.6 = 122.5 m. (ii) t = u/g = 5 s up, total = 10 s." },
      { id: 7, question: "A stone is released from the top of a tower of height 19.6 m. Calculate its final velocity just before touching the ground.", answer: "v² = 2gh = 2 × 9.8 × 19.6 = 384.16 → v = 19.6 m/s" },
      { id: 8, question: "A ball thrown up returns in 6 s. Find (a) initial velocity (b) maximum height (c) position after 4 s.", answer: "(a) u = 29.4 m/s. (b) h = 44.1 m. (c) After 4 s: s = 39.2 m above ground." },
    ]
  },

  // ═══════════════════════════════════════
  // CLASS 9 CHEMISTRY
  // ═══════════════════════════════════════
  ch1_matter: {
    chapter: "Matter in Our Surroundings",
    pdfPath: "/pdfs/Class 9 CHEMISTRY.pdf",
    questions: [
      { id: 1, question: "Convert the following temperatures to Celsius scale: (a) 293 K (b) 470 K", answer: "(a) 293 − 273 = 20°C. (b) 470 − 273 = 197°C" },
      { id: 2, question: "Convert to Kelvin scale: (a) 25°C (b) 373°C", answer: "(a) 25 + 273 = 298 K. (b) 373 + 273 = 646 K" },
      { id: 3, question: "Give reasons: (a) Why do naphthalene balls disappear? (b) Why can we smell perfume from a distance?", answer: "(a) Naphthalene undergoes sublimation (solid → gas directly). (b) Perfume particles diffuse through air." },
      { id: 4, question: "Arrange the following in increasing order of forces of attraction: water, sugar, oxygen.", answer: "Oxygen < Water < Sugar (Gas < Liquid < Solid)" },
      { id: 5, question: "What is the physical state of water at: (a) 25°C (b) 0°C (c) 100°C?", answer: "(a) Liquid. (b) Both solid and liquid exist. (c) Both liquid and gas exist." },
      { id: 6, question: "Why does ice at 0°C cool more effectively than water at 0°C?", answer: "Ice absorbs latent heat of fusion (334 J/g) while melting, producing more cooling than water at the same temperature." },
      { id: 7, question: "What produces more severe burns: boiling water or steam? Why?", answer: "Steam causes more burns because it carries additional latent heat of vaporisation (2260 J/g) over boiling water." },
      { id: 8, question: "Why are clothes dried faster on a hot, dry day than on a humid day?", answer: "On hot dry day, evaporation is faster due to high temperature and low humidity. More water vapour can be absorbed by dry air." },
    ]
  },

  ch2_pure_matter: {
    chapter: "Is Matter Around Us Pure",
    pdfPath: "/pdfs/Class 9 CHEMISTRY.pdf",
    questions: [
      { id: 1, question: "What type of mixtures are separated by the technique of crystallisation?", answer: "Impure samples of solid substances which are soluble in some solvent. Example: pure salt from impure salt." },
      { id: 2, question: "Classify the following as homogeneous or heterogeneous: soda water, wood, air, soil, vinegar, filtered tea.", answer: "Homogeneous: soda water, air, vinegar, filtered tea. Heterogeneous: wood, soil." },
      { id: 3, question: "How would you confirm that a colourless liquid given to you is pure water?", answer: "Pure water has a fixed boiling point (100°C) and freezing point (0°C). If the liquid boils/freezes at these points, it's pure water." },
      { id: 4, question: "Which of the following materials fall in the category of a 'pure substance'?", answer: "Pure: Ice, Iron, Hydrochloric acid, Calcium oxide, Mercury. Not pure: Milk, Brick, Wood, Air." },
      { id: 5, question: "Identify the solutions among the following: sea water, air, coal, soda water, soil.", answer: "Solutions: Sea water, Air, Soda water. Not solutions: Coal, Soil." },
      { id: 6, question: "Which will show Tyndall effect: salt solution, milk, copper sulphate solution, starch solution?", answer: "Tyndall effect: Milk, Starch solution. No Tyndall: Salt solution, Copper sulphate solution." },
    ]
  },

  ch3_atoms_molecules: {
    chapter: "Atoms and Molecules",
    pdfPath: "/pdfs/Class 9 CHEMISTRY.pdf",
    questions: [
      { id: 1, question: "In a reaction 5.3 g of Na₂CO₃ reacted with 6 g of C₂H₅OH. What is the mass remaining?", answer: "By law of conservation of mass, mass of products = mass of reactants = 5.3 + 6 = 11.3 g" },
      { id: 2, question: "Define: (a) Polyatomic ions (b) Give examples", answer: "Polyatomic ions are groups of atoms carrying a net charge. Examples: NH₄⁺ (ammonium), SO₄²⁻ (sulphate), NO₃⁻ (nitrate)." },
      { id: 3, question: "Write the chemical formulae of: Magnesium chloride, Calcium oxide, Copper nitrate, Aluminium chloride, Calcium carbonate.", answer: "MgCl₂, CaO, Cu(NO₃)₂, AlCl₃, CaCO₃" },
      { id: 4, question: "Calculate the molecular mass of: (a) C₂H₂ (b) S₈ (c) P₄ (d) HCl (e) HNO₃", answer: "(a) 26 u (b) 256 u (c) 124 u (d) 36.5 u (e) 63 u" },
      { id: 5, question: "What is the mass of 0.2 mole of oxygen atoms?", answer: "Mass = moles × atomic mass = 0.2 × 16 = 3.2 g" },
    ]
  },

  ch4_structure_atom: {
    chapter: "Structure of the Atom",
    pdfPath: "/pdfs/Class 9 CHEMISTRY.pdf",
    questions: [
      { id: 1, question: "Compare the properties of electrons, protons and neutrons.", answer: "Electron: charge −1, mass ≈ 1/2000 u, outside nucleus. Proton: +1, 1 u, in nucleus. Neutron: 0, 1 u, in nucleus." },
      { id: 2, question: "What are the limitations of J.J. Thomson's model of the atom?", answer: "Could not explain scattering results, had no concept of nucleus, could not explain stability of atom." },
      { id: 3, question: "What are the limitations of Rutherford's model of the atom?", answer: "Could not explain stability of electrons in orbit (should lose energy and spiral into nucleus). Did not explain electron arrangement." },
      { id: 4, question: "Describe Bohr's model of the atom.", answer: "Electrons revolve in fixed circular orbits (shells). Each orbit has fixed energy. No energy is radiated in stable orbits. Energy is emitted/absorbed when electrons jump between shells." },
      { id: 5, question: "Summarise the rules for writing of distribution of electrons in various shells.", answer: "Maximum electrons in shell = 2n². Outermost shell can have max 8 electrons. Shells are filled step by step (K, L, M...)." },
      { id: 6, question: "Define: (i) Atomic number (ii) Mass number (iii) Isotopes (iv) Isobars", answer: "(i) Number of protons. (ii) Protons + neutrons. (iii) Same atomic number, different mass number. (iv) Same mass number, different atomic number." },
    ]
  },

  // ═══════════════════════════════════════
  // CLASS 9 BIOLOGY
  // ═══════════════════════════════════════
  ch1_bio_cell: {
    chapter: "The Fundamental Unit of Life",
    pdfPath: "/pdfs/Class 9 biology.pdf",
    questions: [
      { id: 1, question: "Make a comparison and write down ways in which plant cells are different from animal cells.", answer: "Plant cell has cell wall, large vacuole, plastids, fixed shape, autotrophic. Animal cell has no cell wall, small vacuoles, no plastids, irregular shape, heterotrophic." },
      { id: 2, question: "How is a prokaryotic cell different from a eukaryotic cell?", answer: "Prokaryotic: no true nucleus, small, no membrane-bound organelles. Eukaryotic: true nucleus present, larger, has membrane-bound organelles." },
      { id: 3, question: "What would happen if the plasma membrane ruptures or breaks down?", answer: "The cell contents would leak out, cytoplasm would mix with external environment, and the cell would die." },
      { id: 4, question: "What would happen to the life of a cell if there was no Golgi apparatus?", answer: "No packaging/transport of proteins and lipids. Cell secretion, membrane formation, and lysosome creation would all stop." },
      { id: 5, question: "Which organelle is known as the powerhouse of the cell? Why?", answer: "Mitochondria — because it produces energy (ATP) through cellular respiration." },
      { id: 6, question: "Where do the lipids and proteins constituting the cell membrane get synthesised?", answer: "Lipids: Smooth Endoplasmic Reticulum (SER). Proteins: Ribosomes (on Rough ER)." },
      { id: 7, question: "How does Amoeba obtain its food?", answer: "Through endocytosis — it extends pseudopodia to engulf food particles, forming a food vacuole where digestion occurs." },
      { id: 8, question: "What is osmosis?", answer: "Movement of water molecules from a region of higher concentration to lower concentration through a semi-permeable membrane." },
    ]
  },

  ch2_bio_tissues: {
    chapter: "Tissues",
    pdfPath: "/pdfs/Class 9 biology.pdf",
    questions: [
      { id: 1, question: "Define the term 'tissue'.", answer: "A tissue is a group of similar cells performing a specific function." },
      { id: 2, question: "Name the elements of xylem and state their functions.", answer: "Xylem has 4 elements: Tracheids, Vessels (water transport), Xylem fibres (support), Xylem parenchyma (food storage)." },
      { id: 3, question: "Differentiate between simple and complex tissues.", answer: "Simple tissue: one type of cells, similar function (Parenchyma). Complex tissue: different types of cells, coordinated function (Xylem, Phloem)." },
      { id: 4, question: "What are the functions of stomata?", answer: "Exchange of gases (CO₂ and O₂) and transpiration (loss of water vapour)." },
      { id: 5, question: "What is the function of cardiac muscle?", answer: "Cardiac muscle helps in continuous rhythmic contraction of the heart to pump blood throughout the body." },
      { id: 6, question: "Differentiate between striated, unstriated and cardiac muscles.", answer: "Striated: voluntary, striped, attached to bones. Unstriated: involuntary, spindle-shaped, in internal organs. Cardiac: involuntary, branched, striated, only in heart." },
    ]
  },

  ch3_bio_food: {
    chapter: "Improvement in Food Resources",
    pdfPath: "/pdfs/Class 9 biology.pdf",
    questions: [
      { id: 1, question: "Explain any one method of crop production which ensures high yield.", answer: "Use of HYV (High Yielding Variety) seeds — they produce more crops per unit area, are disease resistant, and respond well to fertilizers." },
      { id: 2, question: "Why are manure and fertilizers used in fields?", answer: "To provide essential nutrients (N, P, K etc.) to crops, improve soil fertility, and increase crop yield." },
      { id: 3, question: "What are the advantages of inter-cropping and crop rotation?", answer: "Inter-cropping: better nutrient use, reduces pests. Crop rotation: maintains soil fertility, prevents diseases, improves productivity." },
      { id: 4, question: "How do storage grain losses occur?", answer: "Due to biotic factors (insects, rodents, fungi, bacteria) and abiotic factors (moisture, temperature). Improper storage conditions worsen losses." },
      { id: 5, question: "What are the desirable agronomic characteristics for crop improvements?", answer: "Tallness and profuse branching in fodder crops. Dwarfness in cereals (less nutrients go to stem). These traits give higher productivity." },
    ]
  },

  // ═══════════════════════════════════════
  // CLASS 10 PHYSICS
  // ═══════════════════════════════════════
  ch1_light: {
    chapter: "Light: Reflection and Refraction",
    pdfPath: "/pdfs/Class 10 Physics TB Questions.pdf",
    questions: [
      { id: 1, question: "Which one of the following materials cannot be used to make a lens? (a) Water (b) Glass (c) Plastic (d) Clay", answer: "(d) Clay — because it is opaque and light cannot pass through it." },
      { id: 2, question: "The image formed by a concave mirror is virtual, erect and larger than the object. Where should be the position of the object?", answer: "(d) Between the pole of the mirror and its principal focus." },
      { id: 3, question: "Where should an object be placed in front of a convex lens to get a real image of the size of the object?", answer: "(b) At twice the focal length (2F)." },
      { id: 4, question: "A spherical mirror and a thin spherical lens have each a focal length of −15 cm. The mirror and the lens are likely to be?", answer: "(a) Both concave. Negative focal length indicates concave mirror and concave lens." },
      { id: 5, question: "No matter how far you stand from a mirror, your image appears erect. The mirror is likely to be?", answer: "(d) Either plane or convex. Both always form erect, virtual images." },
      { id: 6, question: "Which lens would you prefer while reading small letters found in a dictionary?", answer: "(c) A convex lens of focal length 5 cm — shorter focal length gives higher magnification." },
      { id: 7, question: "Name the type of mirror used in: (a) Headlights of a car (b) Side/rear-view mirror (c) Solar furnace", answer: "(a) Concave — focuses light. (b) Convex — wide field of view. (c) Concave — concentrates sunlight." },
      { id: 8, question: "Find the focal length of a lens of power −2.0 D. What type of lens is this?", answer: "f = 1/P = 1/(−2) = −0.5 m = −50 cm. It is a concave (diverging) lens." },
    ]
  },

  ch2_electricity: {
    chapter: "Electricity",
    pdfPath: "/pdfs/Class 10 Physics TB Questions.pdf",
    questions: [
      { id: 1, question: "A piece of wire of resistance R is cut into five equal parts. These parts are then connected in parallel. What is the ratio R/R'?", answer: "(d) 25. Each part has resistance R/5. Five in parallel: R' = (R/5)/5 = R/25. So R/R' = 25." },
      { id: 2, question: "Which of the following does not represent electrical power in a circuit? (a) I²R (b) IR² (c) VI (d) V²/R", answer: "(b) IR² does not represent power. Correct formulae: P = VI = I²R = V²/R." },
      { id: 3, question: "An electric bulb is rated 220 V and 100 W. When operated on 110 V, the power consumed will be?", answer: "(d) 25 W. R = V²/P = 220²/100 = 484 Ω. At 110V: P = V²/R = 110²/484 = 25 W." },
      { id: 4, question: "Two conducting wires of same material, equal lengths and diameters are first connected in series then parallel. What is the ratio of heat produced?", answer: "(d) 1:4. In series: H_s = V²t/2R. In parallel: H_p = 2V²t/R. Ratio = 1:4." },
    ]
  },

  ch3_magnetic: {
    chapter: "Magnetic Effects of Electric Current",
    pdfPath: "/pdfs/Class 10 Physics TB Questions.pdf",
    questions: [
      { id: 1, question: "Why does a compass needle get deflected when brought near a bar magnet?", answer: "The compass needle is a small magnet. It gets deflected due to the magnetic force exerted by the bar magnet on it." },
      { id: 2, question: "Draw magnetic field lines around a bar magnet.", answer: "Field lines emerge from the north pole and merge into the south pole. They are closed continuous curves. They never intersect each other." },
      { id: 3, question: "List the properties of magnetic field lines.", answer: "They form closed loops from N to S outside the magnet. They never cross each other. Closer lines mean stronger field. They are continuous." },
    ]
  },

  // ═══════════════════════════════════════
  // CLASS 10 CHEMISTRY
  // ═══════════════════════════════════════
  ch1_reactions: {
    chapter: "Chemical Reactions and Equations",
    pdfPath: "/pdfs/Class 10 Chemistry TB Questions.pdf",
    questions: [
      { id: 1, question: "Which of the statements about 2PbO(s) + C(s) → 2Pb(s) + CO₂(g) are incorrect? (a) Lead is getting reduced (b) CO₂ is getting oxidised (c) Carbon is getting oxidised (d) Lead oxide is getting reduced", answer: "(i) (a) and (b) are incorrect. Lead oxide is reduced (not lead). Carbon is oxidised (not CO₂)." },
      { id: 2, question: "Fe₂O₃ + 2Al → Al₂O₃ + 2Fe. This reaction is an example of?", answer: "(d) Displacement reaction. Aluminium displaces iron from iron oxide." },
      { id: 3, question: "What happens when dilute hydrochloric acid is added to iron fillings?", answer: "(a) Hydrogen gas and iron chloride are produced. Fe + 2HCl → FeCl₂ + H₂↑" },
      { id: 4, question: "What is a balanced chemical equation? Why should chemical equations be balanced?", answer: "A balanced equation has equal number of atoms of each element on both sides. It must be balanced to obey the law of conservation of mass." },
      { id: 5, question: "What does one mean by exothermic and endothermic reactions? Give examples.", answer: "Exothermic: releases heat (burning, respiration). Endothermic: absorbs heat (photosynthesis, decomposition of CaCO₃)." },
      { id: 6, question: "Why is respiration considered an exothermic reaction?", answer: "Because during respiration, glucose is broken down using oxygen, releasing energy in the form of heat: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy" },
    ]
  },

  ch2_acids_bases: {
    chapter: "Acids, Bases and Salts",
    pdfPath: "/pdfs/Class 10 Chemistry TB Questions.pdf",
    questions: [
      { id: 1, question: "A solution turns red litmus blue. Its pH is likely to be: (a) 1 (b) 4 (c) 5 (d) 10", answer: "(d) 10. A basic solution (pH > 7) turns red litmus blue." },
      { id: 2, question: "A solution reacts with crushed egg-shells to give a gas that turns lime-water milky. The solution contains?", answer: "(b) HCl. Egg shells are CaCO₃. HCl + CaCO₃ → CaCl₂ + H₂O + CO₂ (turns limewater milky)." },
      { id: 3, question: "Why does distilled water not conduct electricity, whereas rain water does?", answer: "Distilled water is pure and has no ions. Rain water dissolves CO₂ and other gases to form acidic ions (H⁺), which conduct electricity." },
      { id: 4, question: "Why does dry HCl gas not show acidic behaviour in the absence of water?", answer: "HCl shows acidic behaviour only in water because it needs water to dissociate into H⁺ and Cl⁻ ions. Without water, no H⁺ ions are produced." },
      { id: 5, question: "Fresh milk has a pH of 6. How does pH change as it turns to curd?", answer: "pH decreases (becomes more acidic) because lactic acid is produced during curd formation by bacterial action." },
    ]
  },

  ch3_metals: {
    chapter: "Metals and Non-Metals",
    pdfPath: "/pdfs/Class 10 Chemistry TB Questions.pdf",
    questions: [
      { id: 1, question: "Which of the following pairs will give displacement reactions? (a) NaCl + Cu (b) MgCl₂ + Al (c) FeSO₄ + Ag (d) AgNO₃ + Cu", answer: "(d) AgNO₃ + Cu → Cu(NO₃)₂ + Ag. Copper is more reactive than silver, so it displaces silver." },
      { id: 2, question: "Which metals do not corrode easily?", answer: "Gold, platinum, and silver — they are noble metals and are less reactive, hence resist corrosion." },
      { id: 3, question: "What are amphoteric oxides? Give two examples.", answer: "Oxides that react with both acids and bases are called amphoteric oxides. Examples: Al₂O₃, ZnO." },
    ]
  },

  // ═══════════════════════════════════════
  // CLASS 10 BIOLOGY
  // ═══════════════════════════════════════
  ch1_bio_life_processes: {
    chapter: "Life Processes",
    pdfPath: "/pdfs/Class 10 Biology TB Questions.pdf",
    questions: [
      { id: 1, question: "The kidneys in human beings are a part of the system for: (a) Nutrition (b) Excretion (c) Respiration (d) Transportation", answer: "(b) Excretion. Kidneys filter blood and remove waste products as urine." },
      { id: 2, question: "The xylem in plants are responsible for: (a) transport of water (b) transport of amino acids (c) transport of food (d) transport of oxygen", answer: "(a) Transport of water (and dissolved minerals) from roots to leaves." },
      { id: 3, question: "The autotrophic mode of nutrition requires: (a) CO₂ and water (b) sunlight (c) chlorophyll (d) all of the above", answer: "(d) All of the above. Photosynthesis needs CO₂, water, sunlight, and chlorophyll." },
      { id: 4, question: "The breakdown of pyruvate to give CO₂, water and energy takes place in: (a) cytoplasm (b) chloroplast (c) mitochondria (d) nucleus", answer: "(c) Mitochondria. Aerobic respiration of pyruvate occurs in mitochondria." },
      { id: 5, question: "How are fats digested in our bodies? Where does this process take place?", answer: "Bile salts from liver emulsify fats into small globules in the small intestine. Pancreatic lipase then breaks them into fatty acids and glycerol." },
      { id: 6, question: "What is the role of saliva in the digestion of food?", answer: "Saliva contains the enzyme salivary amylase (ptyalin) which breaks down starch into maltose. It also moistens food for easy swallowing." },
      { id: 7, question: "What are the differences between aerobic and anaerobic respiration?", answer: "Aerobic: uses O₂, produces CO₂ + H₂O, occurs in mitochondria, 38 ATP. Anaerobic: no O₂, produces ethanol/lactic acid, occurs in cytoplasm, 2 ATP." },
      { id: 8, question: "How are the alveoli designed to maximise the exchange of gases?", answer: "Alveoli have thin walls (one cell thick), large surface area, rich blood supply, and moist surface — all maximize gas exchange by diffusion." },
      { id: 9, question: "Describe double circulation of blood in human beings. Why is it necessary?", answer: "Blood passes through the heart twice in one complete circuit: pulmonary (heart→lungs→heart) and systemic (heart→body→heart). It ensures oxygenated and deoxygenated blood don't mix, maintaining efficient O₂ supply." },
    ],
  },

  // ═══════════════════════════════════════
  // CLASS 10 BIOLOGY (New chapters)
  // ═══════════════════════════════════════
  ch2_bio_reproduce: {
    chapter: "How do Organisms Reproduce?",
    pdfPath: "/pdfs/Class 10 Biology TB Questions.pdf",
    questions: [
      { id: 1, question: "Asexual reproduction takes place through budding in: (a) Amoeba (b) Yeast (c) Plasmodium (d) Leishmania", answer: "(b) Yeast. Yeast reproduces by budding — a small bud grows on the parent cell, detaches, and forms a new organism." },
      { id: 2, question: "Which of the following is not a part of the female reproductive system? (a) Ovary (b) Uterus (c) Vas deferens (d) Fallopian tube", answer: "(c) Vas deferens. It is part of the male reproductive system — carries sperm from testes." },
      { id: 3, question: "The anther contains: (a) Sepals (b) Ovules (c) Pistil (d) Pollen grains", answer: "(d) Pollen grains. The anther is the male part of the flower that produces and contains pollen grains." },
      { id: 4, question: "What are the advantages of sexual reproduction over asexual reproduction?", answer: "Sexual reproduction produces genetic variation, which helps species adapt to changing environments and evolve. Asexual produces only clones." },
      { id: 5, question: "What are the functions performed by the testis in human beings?", answer: "Testes produce (1) male gametes (sperm) and (2) male hormone testosterone, which controls male secondary sexual characters." },
      { id: 6, question: "Why does menstruation occur?", answer: "If the egg is not fertilized, the thick uterus lining breaks down and is released as blood and mucus through the vagina. This is menstruation (~28-day cycle)." },
      { id: 7, question: "What are the different methods of contraception?", answer: "Barrier (condoms), Chemical (oral pills), IUDs (Copper-T), Surgical (vasectomy in males, tubectomy in females)." },
    ]
  },

  ch3_bio_heredity: {
    chapter: "Heredity and Evolution",
    pdfPath: "/pdfs/Class 10 Biology TB Questions.pdf",
    questions: [
      { id: 1, question: "A Mendelian experiment consisted of breeding tall pea plants with short pea plants. The progeny all bore violet flowers but almost half were short. What is the genetic makeup of the tall parent?", answer: "(d) TtWw. The tall parent must be heterozygous for height (Tt) since half the progeny are short, and heterozygous for flower colour (Ww)." },
      { id: 2, question: "Can we say anything about whether light eye colour trait is dominant or recessive based on children having light-coloured eyes like their parents?", answer: "No, we cannot determine dominance from this alone. Both parents could be homozygous recessive. We need cross-breeding experiments to determine dominance." },
      { id: 3, question: "How is the equal genetic contribution of male and female parents ensured in the progeny?", answer: "Both parents contribute one set of chromosomes (23 each) through gametes. Sperm (23) + Egg (23) = Zygote (46 chromosomes). Equal 50-50 contribution." },
      { id: 4, question: "How does the creation of variations in a species promote survival?", answer: "Variations allow some individuals to survive changing environmental conditions. This ensures the species doesn't go extinct — some variants will always be fit enough to survive." },
    ]
  },
};
