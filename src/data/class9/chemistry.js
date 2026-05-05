export const class9Chemistry = [
    {
        id: "ch1_matter",
        title: "Matter in Our Surroundings",
        class: 9,
        subject: "Chemistry",
        ncertPageRange: "Pages 1-13",
        topics: ["Physical Nature of Matter", "Characteristics of Particles", "States of Matter", "Change of State", "Evaporation"],
        concepts: [
            {
                id: "states_of_matter",
                title: "States of Matter",
                ncertRef: "NCERT Pg. 4",
                hook: "Water can be rock-hard ice, flowing liquid, or invisible steam. It's the exact same chemical everywhere—so why does it look and act so differently?",
                definition: "Matter around us exists in three different states– solid, liquid and gas. These states arise due to the variation in the characteristics of the particles.",
                explanation: "Solids: Particles are tightly packed like commuters on a crowded train. They can only vibrate in place. Fixed shape, fixed volume, barely compressible.\n\nLiquids: Particles have moderate space, like people in a mall. They can slide past each other. No fixed shape (take the shape of container), but fixed volume.\n\nGases: Particles are far apart and move freely, like kids in a playground. No fixed shape, no fixed volume, highly compressible.\n\nPlasma: The fourth state of matter. At very high temperatures, gas ionizes and forms plasma (found in Sun, stars, fluorescent tubes, neon signs).",
                examples: [
                    {
                        given: "A diver is able to cut through water in a swimming pool.",
                        find: "Which property of matter does this observation show?",
                        steps: [
                            "Step 1: The diver's hands pass through the water.",
                            "Step 2: This means particles of water have spaces between them.",
                            "Step 3: The intermolecular force in liquids is weak enough to be broken."
                        ],
                        note: "If the pool were ice (solid), the diver couldn't do this due to strong intermolecular forces."
                    }
                ],
                summary: [
                    "Solids: Fixed shape, fixed volume, least intermolecular space.",
                    "Liquids: No fixed shape, fixed volume, moderate space.",
                    "Gases: No fixed shape, no fixed volume, maximum space.",
                    "States are interconvertible by changing temperature or pressure."
                ],
                misconceptions: [
                    {
                        wrong: "Sponge is a solid, yet we can compress it. So it must not be a true solid.",
                        right: "A sponge has minute holes where air is trapped. When we press it, the air is expelled. The solid part itself remains incompressible."
                    }
                ],
                animationId: "StateChangeAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 1, Page 4",
                connection: "Since temperature determines these states, adding heat literally makes particles dance faster, turning solid into liquid, and liquid into gas."
            },
            {
                id: "change_of_state",
                title: "Change of State of Matter",
                ncertRef: "NCERT Pg. 6",
                hook: "Why does ice cream melt in your hand but a chocolate bar needs more heat? Every substance has its own unique melting point — a temperature fingerprint.",
                definition: "The temperature at which a solid melts to become a liquid at atmospheric pressure is called its melting point. The temperature at which a liquid starts boiling at atmospheric pressure is called its boiling point.",
                explanation: "Melting/Fusion: Solid → Liquid. The temperature at which this happens is the melting point. For ice, it is 0°C (273 K). During melting, temperature stays constant even though heat is being supplied — this hidden heat is called Latent Heat of Fusion.\n\nBoiling/Vaporization: Liquid → Gas. For water, boiling point = 100°C (373 K). Again, temperature stays constant during boiling. The hidden heat is Latent Heat of Vaporization.\n\nSublimation: Solid → Gas directly (without becoming liquid). Examples: Camphor, Naphthalene balls, Dry ice (solid CO2).\n\nDeposition: Gas → Solid directly. Example: Frost formation.\n\nEffect of Pressure: Increasing pressure can convert gas to liquid (how LPG cylinders work).",
                examples: [
                    {
                        given: "When 0°C ice absorbs heat, it first melts to 0°C water before the temperature rises.",
                        find: "Why does the temperature remain constant?",
                        steps: [
                            "Step 1: The heat goes into breaking intermolecular bonds, not increasing temperature.",
                            "Step 2: This heat is called Latent Heat of Fusion (334 J/g for ice).",
                            "Step 3: Once all ice melts, the temperature starts rising again."
                        ],
                        note: "Latent heat of vaporization (2260 J/g) is much higher than fusion (334 J/g) because breaking ALL bonds in liquid needs more energy."
                    }
                ],
                summary: [
                    "Melting Point of ice = 0°C = 273.15 K.",
                    "Boiling Point of water = 100°C = 373.15 K.",
                    "Latent Heat of Fusion (ice) = 334 J/g.",
                    "Latent Heat of Vaporization (water) = 2260 J/g."
                ],
                misconceptions: [
                    {
                        wrong: "Steam and water vapor are the same thing.",
                        right: "Steam is water vapour at or above 100°C with high energy. Water vapour exists at any temperature due to evaporation from the surface."
                    }
                ],
                animationId: "StateChangeAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 1, Page 7",
                connection: "Evaporation is a surface phenomenon — it happens at any temperature, unlike boiling which needs the boiling point."
            },
            {
                id: "evaporation",
                title: "Evaporation",
                ncertRef: "NCERT Pg. 9",
                hook: "A puddle of rain dries up even on a cold cloudy day without boiling? How does water turn into gas below its boiling point? That's evaporation.",
                definition: "The phenomenon of change of a liquid into vapours at any temperature below its boiling point is called evaporation.",
                explanation: "Even in a calm puddle, particles are moving at different speeds. A few particles at the surface have enough kinetic energy to escape as vapor.\n\nEvaporation always causes cooling — the escaping particles take away heat energy from the remaining liquid.\n\nFactors affecting evaporation:\n1. Surface Area: More surface → more evaporation (clothes spread out dry faster).\n2. Temperature: Higher temp → faster evaporation.\n3. Humidity: More moisture in air → slower evaporation (why it's hard to dry clothes on humid days).\n4. Wind Speed: More wind → faster evaporation (wind carries away vapour).",
                examples: [
                    {
                        given: "People sprinkle water on the roof during hot summer days.",
                        find: "Reason for this action based on evaporation.",
                        steps: [
                            "Step 1: The water absorbs heat from the hot surface.",
                            "Step 2: The water turns into vapor (evaporates).",
                            "Step 3: This loss of heat (latent heat) cools the roof."
                        ],
                        note: "This is a direct application of 'Evaporation causes cooling'."
                    }
                ],
                summary: [
                    "Evaporation is a surface phenomenon (boiling is a bulk phenomenon).",
                    "Factors: Surface area (↑), Temperature (↑), Humidity (↓), Wind speed (↑).",
                    "Evaporation always produces a cooling effect.",
                    "It happens at all temperatures below the boiling point."
                ],
                misconceptions: [
                    {
                        wrong: "Boiling and evaporation are the exact same thing.",
                        right: "Boiling is at the boiling point throughout the liquid. Evaporation is at any temperature and only from the surface."
                    }
                ],
                animationId: "DiffusionAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 1, Page 9",
                connection: "Understanding how matter changes states leads to asking: is the matter we see truly 'pure'?"
            }
        ],
        examSection: {
            formulas: [
                { formula: "K = °C + 273", description: "Convert Celsius to Kelvin" },
                { formula: "Latent Heat of Fusion (ice) = 334 J/g", description: "Heat needed to melt ice at 0°C" },
                { formula: "Latent Heat of Vaporization (water) = 2260 J/g", description: "Heat needed to boil water at 100°C" }
            ],
            derivations: [],
            tips: [
                "Questions on 'why does a desert cooler cool better on a hot dry day' are very common 2-mark questions.",
                "Latent heat of fusion vs vaporization is a key differentiating point.",
                "Why steam at 100°C causes more burns than water at 100°C (extra latent heat)."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_c1_1",
                    question: "Which condition will increase the evaporation of water?",
                    options: ["Increase in temperature", "Decrease in temperature", "Less surface area", "Adding common salt"],
                    correct: "Increase in temperature",
                    explanation: "Higher temperature = more kinetic energy = easier for particles to escape as vapor.",
                    examTip: "Remember the 4 factors: Temp (↑), Surface area (↑), Wind (↑), Humidity (↓).",
                    ncertRef: "NCERT Pg. 9"
                },
                {
                    id: "q_c1_1b",
                    question: "The temperature at which a solid melts to become a liquid at atmospheric pressure is called its:",
                    options: ["Boiling point", "Melting point", "Sublimation point", "Dew point"],
                    correct: "Melting point",
                    explanation: "Melting point is the temperature where solid converts to liquid at standard atmospheric pressure.",
                    examTip: "Melting point of ice = 0°C = 273.15 K.",
                    ncertRef: "NCERT Pg. 6"
                },
                {
                    id: "q_c1_1c",
                    question: "Dry ice is an example of:",
                    options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
                    correct: "Sublimation",
                    explanation: "Dry ice (solid CO2) directly converts from solid to gas without becoming liquid — this is sublimation.",
                    examTip: "Other examples of sublimation: camphor, naphthalene, iodine.",
                    ncertRef: "NCERT Pg. 8"
                }
            ],
            match: [
                {
                    id: "mt_c_1",
                    columnA: ["Solid to Gas", "Gas to Liquid", "Liquid to Solid", "Solid to Liquid", "Liquid to Gas"],
                    columnB: ["Sublimation", "Condensation", "Freezing", "Melting", "Vaporization"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch2_pure_matter",
        title: "Is Matter Around Us Pure",
        class: 9,
        subject: "Chemistry",
        ncertPageRange: "Pages 14-27",
        topics: ["Mixtures", "Solutions", "Suspensions", "Colloids", "Separation Techniques", "Elements and Compounds"],
        concepts: [
            {
                id: "mixtures",
                title: "Types of Mixtures",
                ncertRef: "NCERT Pg. 14",
                hook: "When you dissolve salt in water, it vanishes seamlessly. But chalk powder in water clouds up and settles. Both are mixtures, but why do they act so differently?",
                definition: "A mixture contains more than one substance mixed in any proportion.",
                explanation: "1. Homogeneous Mixtures: Uniform composition throughout. You can't see the components separately. Examples: salt solution, sugar solution, air, alloys (brass, bronze).\n\n2. Heterogeneous Mixtures: Non-uniform composition. You can often see different parts. Examples: sand + water, oil + water, chalk + water.\n\nSolutions: Homogeneous mixtures where a solute dissolves in a solvent.\n• Solute: substance dissolved (smaller quantity).\n• Solvent: substance in which solute dissolves (larger quantity).\n• Concentration = (Mass of solute / Mass of solution) × 100\n\nSuspension: Heterogeneous, particle size > 100 nm, particles settle down, visible to naked eye.\n\nColloid: Appears homogeneous but is actually heterogeneous. Particle size 1-100 nm. Shows Tyndall effect. Examples: Milk, fog, smoke, butter.",
                examples: [
                    {
                        given: "A student shines a laser beam through a solution of salt in water and through milk.",
                        find: "In which case will the beam be visible?",
                        steps: [
                            "Step 1: Salt solution is a true solution — particles are too small to scatter light.",
                            "Step 2: Milk is a colloid — particles scatter the laser beam.",
                            "Step 3: The beam will be visible in milk but NOT in salt solution.",
                            "This scattering of light by colloidal particles is called the Tyndall Effect."
                        ],
                        note: "The Tyndall effect is what makes headlight beams visible in fog."
                    }
                ],
                summary: [
                    "Homogeneous: uniform composition (true solutions).",
                    "Heterogeneous: non-uniform (suspensions, colloids).",
                    "Tyndall Effect: scattering of light by colloidal particles.",
                    "Colloid particle size: 1 nm to 100 nm."
                ],
                misconceptions: [
                    {
                        wrong: "Milk is a homogeneous mixture because it looks uniform.",
                        right: "Milk is actually a colloid (heterogeneous). Under a microscope, you can see fat globules in liquid."
                    }
                ],
                animationId: "DiffusionAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 2, Page 15",
                connection: "To separate these mixtures, we rely on differences in their physical properties."
            },
            {
                id: "separation_techniques",
                title: "Separation of Mixtures",
                ncertRef: "NCERT Pg. 20",
                hook: "How do you get pure water from muddy river water? Or pure salt from seawater? Scientists have clever techniques based on the different properties of each component.",
                definition: "Mixtures can be separated into their components by using the differences in their physical properties like particle size, solubility, boiling point, etc.",
                explanation: "Key Separation Methods:\n\n1. Evaporation: Used when a solid (non-volatile) is dissolved in a liquid. Heat the solution → liquid evaporates → solid remains. Example: Getting salt from seawater.\n\n2. Filtration: Separates insoluble solid from liquid using filter paper. Example: Separating sand from water.\n\n3. Distillation: Separates two miscible liquids with different boiling points. Example: Separating acetone (BP 56°C) from water (BP 100°C).\n\n4. Chromatography: Separates dissolved substances based on their different rates of movement through a medium. Example: Separating dyes in ink.\n\n5. Separating Funnel: Separates immiscible liquids. Example: Oil and water.\n\n6. Centrifugation: Separates fine suspended particles by spinning rapidly. Example: Cream from milk, blood components.",
                examples: [
                    {
                        given: "A mixture of oil and water needs to be separated.",
                        find: "Which technique should be used?",
                        steps: [
                            "Step 1: Oil and water are immiscible liquids (they don't mix).",
                            "Step 2: Oil floats on top due to lower density.",
                            "Step 3: Use a Separating Funnel — open the stopcock to drain out the denser water first, leaving oil behind."
                        ],
                        note: "This principle is used in oil refineries and to extract iron from its slag."
                    }
                ],
                summary: [
                    "Evaporation: solid dissolved in liquid.",
                    "Filtration: insoluble solid + liquid.",
                    "Distillation: miscible liquids with different BPs.",
                    "Chromatography: dissolved substances with different solubilities."
                ],
                misconceptions: [
                    {
                        wrong: "Filtration can separate salt from water.",
                        right: "No! Salt is dissolved in water. Filtration only separates insoluble particles. You need evaporation to get salt from salt-water."
                    }
                ],
                animationId: "ReactionTypeAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 2, Page 21",
                connection: "After separation, we can classify pure substances into elements and compounds."
            }
        ],
        examSection: {
            formulas: [
                { formula: "Mass % = (Mass of solute / Mass of solution) × 100", description: "Concentration" }
            ],
            derivations: [],
            tips: [
                "Be careful: Mass of solution = Mass of solute + Mass of solvent.",
                "Properties of Colloids vs Suspensions is a highly tested 3-mark question.",
                "Crystallization is better than evaporation because it gives pure crystals."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_c1_2",
                    question: "Tincture of iodine is a solution of:",
                    options: ["Iodine in potassium iodide", "Iodine in vaseline", "Iodine in water", "Iodine in alcohol"],
                    correct: "Iodine in alcohol",
                    explanation: "Tincture of iodine = iodine (solid solute) dissolved in alcohol (liquid solvent).",
                    examTip: "Memorize famous solutions: Tincture, Brass, Bronze, Aerated water.",
                    ncertRef: "NCERT Pg. 16"
                },
                {
                    id: "q_c1_2b",
                    question: "The Tyndall effect is observed in:",
                    options: ["True solutions", "Colloids", "Pure water", "Distilled water"],
                    correct: "Colloids",
                    explanation: "Colloidal particles (1-100 nm) are large enough to scatter light, causing the Tyndall effect.",
                    examTip: "True solutions don't show Tyndall effect. Suspensions also scatter light but particles settle down.",
                    ncertRef: "NCERT Pg. 18"
                }
            ],
            match: [
                {
                    id: "mt_c_2",
                    columnA: ["True Solution", "Colloid", "Suspension", "Alloy", "Chromatography"],
                    columnB: ["Particle < 1 nm", "Shows Tyndall effect", "Particle > 100 nm", "Homogeneous solid mixture", "Separates dissolved substances"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch3_atoms_molecules",
        title: "Atoms and Molecules",
        class: 9,
        subject: "Chemistry",
        ncertPageRange: "Pages 28-44",
        topics: ["Laws of Chemical Combination", "Dalton's Atomic Theory", "Atom", "Molecule", "Ions", "Writing Chemical Formulae", "Molecular Mass", "Mole Concept"],
        concepts: [
            {
                id: "laws_combination",
                title: "Laws of Chemical Combination",
                ncertRef: "NCERT Pg. 28",
                hook: "Can you create or destroy matter during a chemical reaction? In the 1700s, Lavoisier carefully weighed everything before and after reactions — and proved you can't!",
                definition: "The Law of Conservation of Mass states that mass can neither be created nor destroyed in a chemical reaction. The Law of Constant Proportions states that a chemical compound always contains exactly the same proportion of elements by mass.",
                explanation: "Law of Conservation of Mass (Lavoisier, 1774):\nIn every chemical reaction, the total mass of reactants = total mass of products. If 10g of A reacts with 5g of B, you will get exactly 15g of product(s). Nothing more, nothing less.\n\nLaw of Constant Proportions (Proust):\nPure water, whether from a river, a well, or rain, always contains hydrogen and oxygen in the ratio 1:8 by mass. This ratio never changes. CO2 always has C:O = 3:8 by mass.\n\nThese laws laid the foundation for Dalton's Atomic Theory.",
                examples: [
                    {
                        given: "In a reaction, 5.3 g of sodium carbonate reacted with 6 g of ethanoic acid. The products formed were 2.2 g of CO2, 0.9 g of water, and some sodium ethanoate.",
                        find: "Mass of sodium ethanoate formed.",
                        steps: [
                            "Step 1: Total mass of reactants = 5.3 + 6 = 11.3 g.",
                            "Step 2: Mass of known products = 2.2 + 0.9 = 3.1 g.",
                            "Step 3: By conservation of mass: 11.3 = 3.1 + Mass of sodium ethanoate.",
                            "Step 4: Mass of sodium ethanoate = 11.3 - 3.1 = 8.2 g."
                        ],
                        note: "This question directly tests the Law of Conservation of Mass."
                    }
                ],
                summary: [
                    "Conservation of Mass: Total mass reactants = Total mass products.",
                    "Constant Proportions: A compound always has same ratio by mass.",
                    "These laws apply to ALL chemical reactions.",
                    "Dalton used these laws to propose the atomic theory."
                ],
                misconceptions: [
                    {
                        wrong: "If gas escapes during a reaction, mass is destroyed.",
                        right: "The gas is still a product — the total mass (including gas) is conserved. In an open container we just can't measure the gas that escaped."
                    }
                ],
                animationId: "BalancingEquationAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 3, Page 29",
                connection: "These laws led Dalton to propose that all matter is made of tiny, indivisible particles called Atoms."
            },
            {
                id: "mole_concept",
                title: "Mole Concept",
                ncertRef: "NCERT Pg. 39",
                hook: "Atoms are so tiny that even a grain of sugar contains billions of them. How do chemists count such impossibly large numbers? They invented a 'baker's dozen' for atoms — the Mole.",
                definition: "One mole of any substance contains 6.022 × 10²³ particles (atoms, molecules, or ions). This number is called Avogadro's number (NA).",
                explanation: "Just as a 'dozen' = 12, a 'mole' = 6.022 × 10²³.\n\n1 mole of atoms = 6.022 × 10²³ atoms.\n1 mole of molecules = 6.022 × 10²³ molecules.\n\nThe mass of 1 mole of a substance is its Molar Mass (in grams), numerically equal to its atomic/molecular mass.\n\nExamples:\n• Atomic mass of Carbon = 12 u → 1 mole of Carbon = 12 g → contains 6.022 × 10²³ atoms.\n• Molecular mass of H2O = 18 u → 1 mole of H2O = 18 g → contains 6.022 × 10²³ molecules.\n\nNumber of moles = Given mass / Molar mass\nNumber of particles = Number of moles × NA",
                examples: [
                    {
                        given: "Calculate the number of molecules present in 36 g of water.",
                        find: "Number of H2O molecules.",
                        steps: [
                            "Step 1: Molar mass of H2O = 2(1) + 16 = 18 g/mol.",
                            "Step 2: Number of moles = 36/18 = 2 moles.",
                            "Step 3: Number of molecules = 2 × 6.022 × 10²³ = 12.044 × 10²³.",
                            "Step 4: = 1.2044 × 10²⁴ molecules."
                        ],
                        note: "Each H2O molecule contains 3 atoms. So total atoms = 3 × 12.044 × 10²³ = 36.132 × 10²³."
                    }
                ],
                summary: [
                    "1 mole = 6.022 × 10²³ particles (Avogadro's number).",
                    "Molar mass = Atomic/Molecular mass in grams.",
                    "n (moles) = Mass / Molar mass.",
                    "Number of particles = n × NA."
                ],
                misconceptions: [
                    {
                        wrong: "The mole of a substance always weighs 1 gram.",
                        right: "1 mole of Carbon = 12 g, 1 mole of Iron = 56 g, 1 mole of Oxygen gas = 32 g. The mass varies depending on the substance."
                    }
                ],
                animationId: "BalancingEquationAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 3, Page 40",
                connection: "The mole concept is essential for understanding stoichiometry — calculating reactant/product quantities in chemical reactions."
            }
        ],
        examSection: {
            formulas: [
                { formula: "n = Mass / Molar Mass", description: "Number of moles" },
                { formula: "N = n × NA", description: "Number of particles" },
                { formula: "NA = 6.022 × 10²³", description: "Avogadro's Number" },
                { formula: "1 amu = 1.66 × 10⁻²⁴ g", description: "Atomic mass unit" }
            ],
            derivations: [],
            tips: [
                "Molecular mass = Sum of atomic masses of all atoms in the molecule.",
                "Formula unit mass is used instead of molecular mass for ionic compounds (NaCl).",
                "The mole concept numericals are VERY frequently asked in board exams."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_c1_3",
                    question: "The number of molecules in 44 g of CO2 is:",
                    options: ["6.022 × 10²³", "12.044 × 10²³", "3.011 × 10²³", "44 × 10²³"],
                    correct: "6.022 × 10²³",
                    explanation: "Molar mass of CO2 = 12 + 2(16) = 44 g. 44g/44g = 1 mole = 6.022 × 10²³ molecules.",
                    examTip: "First find molar mass, then find moles, then multiply by NA.",
                    ncertRef: "NCERT Pg. 40"
                },
                {
                    id: "q_c1_3b",
                    question: "According to the Law of Conservation of Mass:",
                    options: ["Mass of products > mass of reactants", "Mass of reactants > mass of products", "Mass is conserved", "Mass can be created"],
                    correct: "Mass is conserved",
                    explanation: "Total mass of reactants = Total mass of products. Mass is neither created nor destroyed.",
                    examTip: "This law was proposed by Antoine Lavoisier.",
                    ncertRef: "NCERT Pg. 28"
                }
            ],
            match: [
                {
                    id: "mt_c_3",
                    columnA: ["1 mole of Carbon", "1 mole of H2O", "Avogadro number", "Atomic mass unit", "Formula unit"],
                    columnB: ["12 grams", "18 grams", "6.022 × 10²³", "1.66 × 10⁻²⁴ g", "Used for ionic compounds"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch4_structure_atom",
        title: "Structure of the Atom",
        class: 9,
        subject: "Chemistry",
        ncertPageRange: "Pages 45-56",
        topics: ["Thomson's Model", "Rutherford's Model", "Bohr's Model", "Neutrons", "Distribution of Electrons", "Valency", "Atomic Number and Mass Number", "Isotopes and Isobars"],
        concepts: [
            {
                id: "atomic_models",
                title: "Models of the Atom",
                ncertRef: "NCERT Pg. 46",
                hook: "Scientists couldn't see atoms, so they had to IMAGINE what they looked like based on experiments. Each new experiment shattered the old model and built a better one.",
                definition: "Different models of the atom were proposed by scientists over time: Thomson's plum pudding model, Rutherford's nuclear model, and Bohr's planetary model.",
                explanation: "Thomson's Model (1898): Atom is a positively charged sphere with electrons embedded in it — like a watermelon with seeds. Couldn't explain Rutherford's experiment.\n\nRutherford's Alpha Scattering Experiment (1911):\n• Most alpha particles passed straight through gold foil → Most of the atom is empty space.\n• A few deflected at large angles → Positive charge is concentrated in a tiny centre (nucleus).\n• Very few bounced back → Nucleus is extremely dense and small.\nProblems: Couldn't explain why electrons don't spiral into the nucleus.\n\nBohr's Model (1913):\n• Electrons revolve in specific orbits/shells (K, L, M, N...) around the nucleus.\n• Each orbit has a fixed energy level.\n• Electrons don't radiate energy while in a stable orbit.\n• Energy is absorbed/emitted only when electrons jump between orbits.",
                examples: [
                    {
                        given: "In Rutherford's experiment, most alpha particles passed through the gold foil undeflected.",
                        find: "What does this conclude about atomic structure?",
                        steps: [
                            "Step 1: Alpha particles are positively charged and heavy.",
                            "Step 2: Most passing straight means there's nothing to stop them.",
                            "Step 3: Conclusion: Most of the atom is EMPTY SPACE.",
                            "Step 4: The few that bounced back hit the tiny, dense, positive nucleus."
                        ],
                        note: "Only 1 in 20,000 alpha particles bounced back. The nucleus is incredibly small compared to the atom."
                    }
                ],
                summary: [
                    "Thomson: Plum pudding model — uniform positive sphere with embedded electrons.",
                    "Rutherford: Nucleus (positive) at centre, electrons around it, mostly empty space.",
                    "Bohr: Electrons in fixed orbits with quantized energy levels.",
                    "Shell capacity: 2n² (K=2, L=8, M=18, N=32)."
                ],
                misconceptions: [
                    {
                        wrong: "Rutherford's model is still the accepted model.",
                        right: "Rutherford couldn't explain electron stability. Bohr's model (with quantum corrections) better explains atomic behaviour."
                    }
                ],
                animationId: "DiffusionAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 4, Page 47",
                connection: "Understanding electron distribution helps explain chemical bonding and properties of elements."
            },
            {
                id: "electron_distribution",
                title: "Electron Distribution and Valency",
                ncertRef: "NCERT Pg. 52",
                hook: "Sodium ALWAYS reacts like sodium. Chlorine ALWAYS reacts like chlorine. Why? Because their electron arrangement determines their personality — their Valency.",
                definition: "The distribution of electrons into different orbits (shells) of an atom is known as the electronic configuration. Valency is the combining capacity of an atom.",
                explanation: "Electrons fill shells in order: K (max 2), L (max 8), M (max 18), N (max 32).\nRule: Maximum electrons in a shell = 2n² where n = shell number.\nOutermost shell holds at most 8 electrons.\n\nExamples:\n• Sodium (Na, Z=11): 2, 8, 1 → Valency = 1 (loses 1 electron)\n• Chlorine (Cl, Z=17): 2, 8, 7 → Valency = 1 (gains 1 electron)\n• Magnesium (Mg, Z=12): 2, 8, 2 → Valency = 2\n• Carbon (C, Z=6): 2, 4 → Valency = 4 (can share)\n\nAtoms are most stable with 8 electrons in the outermost shell (Octet rule). Noble gases already have this — that's why they don't react.\n\nIsotopes: Same atomic number, different mass number (e.g., ¹²C, ¹³C, ¹⁴C).\nIsobars: Different atomic number, same mass number (e.g., ⁴⁰Ca and ⁴⁰Ar).",
                examples: [
                    {
                        given: "Write the electronic configuration of Aluminium (Z = 13).",
                        find: "Shell-wise distribution and valency.",
                        steps: [
                            "Step 1: Z = 13 → 13 electrons to distribute.",
                            "Step 2: K shell = 2 (max 2).",
                            "Step 3: L shell = 8 (max 8).",
                            "Step 4: M shell = 13 - 2 - 8 = 3.",
                            "Step 5: Configuration: 2, 8, 3. Valency = 3."
                        ],
                        note: "Al has 3 electrons in the outermost shell, so it tends to lose 3 electrons → forms Al³⁺ ion."
                    }
                ],
                summary: [
                    "Shell capacity: K=2, L=8, M=18. Max in outermost = 8.",
                    "Valency = electrons in outermost shell (if ≤ 4) or 8 - outermost electrons (if > 4).",
                    "Isotopes: Same Z, different A. Same chemical properties.",
                    "Isobars: Different Z, same A. Different chemical properties."
                ],
                misconceptions: [
                    {
                        wrong: "Isotopes have different chemical properties since they have different masses.",
                        right: "Isotopes have the SAME chemical properties because they have the same number of electrons and protons. Only their mass (number of neutrons) differs."
                    }
                ],
                animationId: "StateChangeAnimation",
                diagramRef: "Source: NCERT Class 9 Chemistry, Chapter 4, Page 53",
                connection: "Electron configuration determines valency, which determines how atoms bond — that's the basis of all chemistry."
            }
        ],
        examSection: {
            formulas: [
                { formula: "Max electrons in shell = 2n²", description: "Shell capacity" },
                { formula: "Mass Number (A) = Protons + Neutrons", description: "Mass number" },
                { formula: "Atomic Number (Z) = Number of Protons", description: "Atomic number" }
            ],
            derivations: [],
            tips: [
                "Isotopes question is very common: ¹H (Protium), ²H (Deuterium), ³H (Tritium).",
                "Valency of noble gases is 0. They are already stable.",
                "In a neutral atom: Protons = Electrons."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_c1_4",
                    question: "Who discovered neutrons?",
                    options: ["Rutherford", "Thomson", "Chadwick", "Bohr"],
                    correct: "Chadwick",
                    explanation: "James Chadwick discovered neutrons in 1932. They have no charge and mass nearly equal to protons.",
                    examTip: "Proton: +1 charge, Electron: -1 charge, Neutron: 0 charge.",
                    ncertRef: "NCERT Pg. 49"
                },
                {
                    id: "q_c1_4b",
                    question: "The electronic configuration of Chlorine (Z=17) is:",
                    options: ["2, 7, 8", "2, 8, 7", "8, 2, 7", "2, 8, 8"],
                    correct: "2, 8, 7",
                    explanation: "Z=17 → 17 electrons: K=2, L=8, M=7. Valency = 8-7 = 1.",
                    examTip: "Fill K first (max 2), then L (max 8), then remaining in M.",
                    ncertRef: "NCERT Pg. 52"
                }
            ],
            match: [
                {
                    id: "mt_c_4",
                    columnA: ["Thomson", "Rutherford", "Bohr", "Chadwick", "Isotopes"],
                    columnB: ["Plum pudding model", "Nuclear model", "Planetary model", "Discovered neutron", "Same Z, different A"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    }
];
