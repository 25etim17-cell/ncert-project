export const class9Physics = [
    {
        id: "ch1_motion",
        title: "Motion",
        class: 9,
        subject: "Physics",
        ncertPageRange: "Pages 98-113",
        topics: ["Describing Motion", "Measuring the Rate of Motion", "Rate of Change of Velocity", "Graphical Representation of Motion", "Equations of Motion", "Uniform Circular Motion"],
        concepts: [
            {
                id: "distance_displacement",
                title: "Distance and Displacement",
                ncertRef: "NCERT Pg. 99",
                hook: "Imagine you walk 3 km East to a store, then 3 km West back home. Your smartwatch says you walked 6 km, but how far are you actually from where you started? Zero! This is the difference between distance and displacement.",
                definition: "Distance is the total path length covered by an object irrespective of the direction. Displacement is the shortest straight-line distance between the initial and final positions of the object.",
                explanation: "Distance only tells us 'how much ground was covered'. It is a scalar quantity, meaning it only has magnitude (size) and no direction. It can never be zero or negative if the body has moved.\n\nDisplacement, however, is a vector quantity. It requires both magnitude and direction to make sense. It tells us 'how far out of place an object is'. Displacement can be positive, negative, or zero. If you return to your starting point, your displacement is zero because the shortest distance between your initial and final position is zero.",
                examples: [
                    {
                        given: "An athlete completes one round of a circular track of diameter 200 m in 40 s.",
                        find: "Distance covered and displacement at the end of 2 minutes 20 s.",
                        steps: [
                            "Step 1: Total time = 2 min 20 s = 140 s.",
                            "Step 2: Number of rounds = 140 / 40 = 3.5 rounds.",
                            "Step 3: Distance = 3.5 × πd = 3.5 × (22/7) × 200 = 2200 m.",
                            "Step 4: After 3 full rounds (back at start) + 0.5 round (at the diametrically opposite point).",
                            "Displacement = diameter = 200 m."
                        ],
                        note: "Students often confuse the 0.5 round distance (πr) with displacement (2r)."
                    }
                ],
                summary: [
                    "Distance is actual path length; Displacement is shortest distance.",
                    "Distance is scalar; Displacement is vector.",
                    "Displacement can be zero even if distance is not zero.",
                    "SI unit for both is meter (m)."
                ],
                misconceptions: [
                    {
                        wrong: "Students think displacement is always equal to distance if you go straight.",
                        right: "Actually, it's only equal if you go straight AND in the same direction without returning back."
                    }
                ],
                animationId: "DistanceDisplacementAnimation",
                diagramRef: "Source: NCERT Class 9 Physics, Chapter 8, Page 99",
                connection: "Understanding displacement is necessary before we can understand velocity, which is simply displacement over time."
            },
            {
                id: "velocity",
                title: "Speed and Velocity",
                ncertRef: "NCERT Pg. 101",
                hook: "When you say a car is going at 60 km/h towards Delhi — you are describing velocity, not just speed. Direction matters when trying to locate an object exactly.",
                definition: "Speed is the rate of change of distance. Velocity is the speed of an object moving in a definite direction (rate of change of displacement).",
                explanation: "Speed tells us how fast an object is moving. It's calculated by dividing the total distance traveled by the total time taken. Since distance has no direction, speed is a scalar quantity.\n\nVelocity tells us how fast AND in what direction an object is moving. It is calculated as displacement divided by time. Because displacement can be zero (like running a full circle), average velocity can also be zero, even if average speed is high.\n\nUniform velocity: equal displacement in equal time intervals.\nNon-uniform velocity: unequal displacement or changing direction.",
                examples: [
                    {
                        given: "Usha swims in a 90 m long pool. She covers 180 m in one minute by swimming from one end to the other and back.",
                        find: "Average speed and average velocity of Usha.",
                        steps: [
                            "Step 1: Total distance = 180 m. Total time = 60 s.",
                            "Step 2: Average speed = 180/60 = 3 m/s.",
                            "Step 3: Displacement = 0 m (returned to starting point).",
                            "Step 4: Average velocity = 0/60 = 0 m/s."
                        ],
                        note: "Never just write the number. Always include the unit (m/s) in the final answer."
                    }
                ],
                summary: [
                    "Speed = Distance / Time (Scalar).",
                    "Velocity = Displacement / Time (Vector).",
                    "Average velocity can be zero if start and end points are the same.",
                    "Velocity changes if either speed or direction changes."
                ],
                misconceptions: [
                    {
                        wrong: "Students think constant speed means constant velocity.",
                        right: "An object moving in a circle with constant speed has constantly changing velocity because its direction changes continuously."
                    }
                ],
                animationId: "VelocityTimeGraphAnimation",
                diagramRef: "Source: NCERT Class 9 Physics, Chapter 8, Page 102",
                connection: "Now that you understand velocity, the next concept — acceleration — is simply how fast velocity itself changes."
            },
            {
                id: "equations_motion",
                title: "Equations of Motion",
                ncertRef: "NCERT Pg. 107",
                hook: "A car starts from rest and speeds up. After 10 seconds, how fast is it going? How far has it traveled? Three elegant equations can answer these instantly.",
                definition: "The three equations of uniformly accelerated motion are: v = u + at, s = ut + ½at², and 2as = v² - u².",
                explanation: "These three equations connect five quantities: initial velocity (u), final velocity (v), acceleration (a), time (t), and displacement (s).\n\nFirst Equation: v = u + at\nThis comes from the definition of acceleration: a = (v - u)/t. Rearranging gives v = u + at.\n\nSecond Equation: s = ut + ½at²\nThis gives the distance covered. The 'ut' part is what you'd cover at constant speed, and '½at²' is the extra distance due to acceleration.\n\nThird Equation: 2as = v² - u²\nThis is useful when time is not given. It relates velocity directly to displacement.\n\nSpecial cases:\n• Starting from rest: u = 0\n• Coming to rest: v = 0\n• Constant velocity: a = 0",
                examples: [
                    {
                        given: "A train starts from rest and accelerates at 2 m/s² for 10 seconds.",
                        find: "Final velocity and distance covered.",
                        steps: [
                            "Step 1: u = 0 (starts from rest), a = 2 m/s², t = 10 s.",
                            "Step 2: v = u + at = 0 + 2(10) = 20 m/s.",
                            "Step 3: s = ut + ½at² = 0 + ½(2)(10²) = 100 m."
                        ],
                        note: "Always check which equation to use based on what is given and what is asked."
                    }
                ],
                summary: [
                    "v = u + at (velocity-time relation).",
                    "s = ut + ½at² (distance-time relation).",
                    "2as = v² - u² (velocity-distance relation, no time needed).",
                    "These equations are valid only for uniform acceleration."
                ],
                misconceptions: [
                    {
                        wrong: "These equations work for any type of motion.",
                        right: "They work ONLY for uniformly accelerated motion (constant acceleration). For non-uniform acceleration, calculus is needed."
                    }
                ],
                animationId: "VelocityTimeGraphAnimation",
                diagramRef: "Source: NCERT Class 9 Physics, Chapter 8, Page 108",
                connection: "These equations describe motion in one dimension. In the next chapter, we'll study what causes this acceleration — Force."
            }
        ],
        examSection: {
            formulas: [
                { formula: "v = s/t", description: "Speed" },
                { formula: "a = (v - u) / t", description: "Acceleration" },
                { formula: "v = u + at", description: "First equation of motion" },
                { formula: "s = ut + (1/2)at²", description: "Second equation of motion" },
                { formula: "2as = v² - u²", description: "Third equation of motion" },
                { formula: "(u + v)/2", description: "Average velocity (uniform acceleration)" }
            ],
            derivations: [
                "Derivation of Equations of Motion by Graphical Method is very frequently asked in 3 or 5 mark questions."
            ],
            tips: [
                "Always convert km/h to m/s by multiplying with 5/18.",
                "If a body starts from rest, u = 0.",
                "If body comes to rest, v = 0.",
                "If body moves with constant velocity, a = 0."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_m_1",
                    question: "An object travels 16 m in 4 s and then another 16 m in 2 s. What is the average speed?",
                    options: ["5.33 m/s", "6.22 m/s", "8 m/s", "4 m/s"],
                    correct: "5.33 m/s",
                    explanation: "Total distance = 32 m. Total time = 6 s. Average speed = 32/6 = 5.33 m/s.",
                    examTip: "Often asked in 1-mark numericals.",
                    ncertRef: "NCERT Pg. 101"
                },
                {
                    id: "q_m_2",
                    question: "A car starts from rest and attains 20 m/s in 10 s. The acceleration is:",
                    options: ["2 m/s²", "0.5 m/s²", "200 m/s²", "10 m/s²"],
                    correct: "2 m/s²",
                    explanation: "a = (v - u)/t = (20 - 0)/10 = 2 m/s².",
                    examTip: "u = 0 when 'starts from rest' is mentioned.",
                    ncertRef: "NCERT Pg. 103"
                },
                {
                    id: "q_m_3",
                    question: "The area under a velocity-time graph gives:",
                    options: ["Speed", "Acceleration", "Displacement", "Distance"],
                    correct: "Displacement",
                    explanation: "The area under a v-t graph represents the displacement covered during that time interval.",
                    examTip: "Slope of v-t graph = acceleration. Area under v-t graph = displacement.",
                    ncertRef: "NCERT Pg. 106"
                }
            ],
            match: [
                {
                    id: "mt_m_1",
                    columnA: ["Scalar Quantity", "Vector Quantity", "Distance", "Retardation", "Odometer"],
                    columnB: ["Speed", "Negative Acceleration", "Measures Distance", "Displacement", "Actual path length"],
                    correctPairs: { 0: 0, 1: 3, 2: 4, 3: 1, 4: 2 }
                }
            ]
        }
    },
    {
        id: "ch2_force",
        title: "Force and Laws of Motion",
        class: 9,
        subject: "Physics",
        ncertPageRange: "Pages 114-128",
        topics: ["Balanced and Unbalanced Forces", "First Law of Motion", "Inertia and Mass", "Second Law of Motion", "Third Law of Motion", "Conservation of Momentum"],
        concepts: [
            {
                id: "inertia",
                title: "Inertia and First Law of Motion",
                ncertRef: "NCERT Pg. 116",
                hook: "Have you noticed that when a fast-moving bus suddenly stops, you fall forward? Your body simply wants to keep doing what it was already doing. This stubbornness is called Inertia.",
                definition: "An object remains in a state of rest or of uniform motion in a straight line unless compelled to change that state by an applied force.",
                explanation: "The First Law of Motion, also known as Galileo's law of inertia, states that things like to keep doing what they are doing. If a book is on a table, it will sit there forever unless someone pushes it.\n\nInertia is the natural tendency of an object to resist a change in its state of motion or rest. The heavier the object, the more inertia it has. A massive boulder is much harder to push or stop than a small pebble.\n\nTypes of Inertia:\n1. Inertia of Rest: A book stays put unless pushed.\n2. Inertia of Motion: A passenger falls forward when a bus brakes.\n3. Inertia of Direction: Mud flies tangentially off a wheel.",
                examples: [
                    {
                        given: "A car is moving at 50 km/h. A passenger drops a coin.",
                        find: "Where does the coin land relative to the dropping point?",
                        steps: [
                            "Step 1: The coin is moving forward at 50 km/h (same as the car).",
                            "Step 2: When dropped, it retains forward motion (inertia of motion).",
                            "Step 3: It falls directly below the dropping point relative to the car."
                        ],
                        note: "This assumes no air resistance inside the car."
                    }
                ],
                summary: [
                    "Inertia is resistance to change in motion.",
                    "First law applies when net external force is zero.",
                    "Mass is the measure of inertia.",
                    "Heavier objects have more inertia."
                ],
                misconceptions: [
                    {
                        wrong: "Force is needed to keep an object moving.",
                        right: "Force is only needed to CHANGE the motion. Without friction, an object will keep moving forever without any force."
                    }
                ],
                animationId: "UniformAccelerationAnimation",
                diagramRef: "Source: NCERT Class 9 Physics, Chapter 9, Page 116",
                connection: "The First Law tells us what happens with NO net force. The Second Law tells us what happens when a force IS applied."
            },
            {
                id: "second_law",
                title: "Newton's Second Law and Momentum",
                ncertRef: "NCERT Pg. 119",
                hook: "Why does a cricket ball hurt more when it comes at 140 km/h versus 40 km/h? And why does getting hit by a truck hurt more than a bicycle at the same speed? The answer lies in momentum.",
                definition: "The rate of change of momentum of an object is proportional to the applied unbalanced force in the direction of force. F = ma.",
                explanation: "Momentum (p) = mass × velocity. It tells us 'how much motion' an object has.\n\nNewton's Second Law: F = Δp/Δt = m(v-u)/t = ma\n\nThis tells us:\n• More force → more acceleration (F ∝ a)\n• More mass → less acceleration for same force (a ∝ 1/m)\n\nUnit of force: 1 Newton (N) = force needed to accelerate 1 kg by 1 m/s².\n\nConservation of Momentum: In an isolated system (no external force), total momentum before collision = total momentum after collision.\nm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
                examples: [
                    {
                        given: "A force of 5 N acts on a body of mass 10 kg at rest for 2 seconds.",
                        find: "The velocity acquired and displacement.",
                        steps: [
                            "Step 1: F = ma → a = F/m = 5/10 = 0.5 m/s².",
                            "Step 2: v = u + at = 0 + 0.5(2) = 1 m/s.",
                            "Step 3: s = ut + ½at² = 0 + ½(0.5)(4) = 1 m."
                        ],
                        note: "F = ma combines Newton's law with equations of motion."
                    }
                ],
                summary: [
                    "Momentum p = mv (unit: kg⋅m/s).",
                    "F = ma (unit: Newton, N).",
                    "1 N = 1 kg⋅m/s².",
                    "Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂."
                ],
                misconceptions: [
                    {
                        wrong: "A heavy object always has more momentum than a light one.",
                        right: "Momentum depends on BOTH mass and velocity. A bullet (small mass, very high velocity) can have enormous momentum."
                    }
                ],
                animationId: "UniformAccelerationAnimation",
                diagramRef: "Source: NCERT Class 9 Physics, Chapter 9, Page 120",
                connection: "The Third Law tells us that forces always come in pairs — for every action, there is an equal and opposite reaction."
            }
        ],
        examSection: {
            formulas: [
                { formula: "p = mv", description: "Momentum" },
                { formula: "F = ma", description: "Newton's Second Law" },
                { formula: "m1u1 + m2u2 = m1v1 + m2v2", description: "Conservation of Momentum" },
                { formula: "1 N = 1 kg⋅m/s²", description: "Unit of force" }
            ],
            derivations: [
                "Mathematical formulation of Second Law of Motion (F=ma) from F=Δp/Δt.",
                "Derivation of the law of conservation of momentum."
            ],
            tips: [
                "In collision problems, set one direction as positive and the opposite as negative.",
                "Weight is a force (W = mg), measured in Newtons, unlike mass which is in kg.",
                "Action and reaction act on DIFFERENT bodies (Third Law)."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_f_1",
                    question: "Which of the following has more inertia?",
                    options: ["A rubber ball", "A stone of the same size", "A bicycle", "A train"],
                    correct: "A train",
                    explanation: "Inertia depends only on mass. A train has the maximum mass among all options.",
                    examTip: "Always relate inertia to mass.",
                    ncertRef: "NCERT Pg. 118"
                },
                {
                    id: "q_f_2",
                    question: "A force of 10 N acts on a body of mass 5 kg. The acceleration produced is:",
                    options: ["50 m/s²", "2 m/s²", "0.5 m/s²", "15 m/s²"],
                    correct: "2 m/s²",
                    explanation: "F = ma. a = F/m = 10/5 = 2 m/s².",
                    examTip: "F = ma is the foundation for most numericals in this chapter.",
                    ncertRef: "NCERT Pg. 120"
                },
                {
                    id: "q_f_3",
                    question: "When a gun is fired, the gun recoils. This is an example of Newton's:",
                    options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
                    correct: "Third Law",
                    explanation: "The bullet goes forward (action), and the gun pushes backward (equal and opposite reaction). This is Newton's Third Law.",
                    examTip: "Action-reaction pairs always act on DIFFERENT bodies.",
                    ncertRef: "NCERT Pg. 123"
                }
            ],
            match: [
                {
                    id: "mt_f_1",
                    columnA: ["First law of motion", "Second law of motion", "Third law of motion", "Momentum", "Inertia"],
                    columnB: ["Law of Inertia", "F = ma", "Action - Reaction", "Mass × Velocity", "Resists change"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch3_gravitation",
        title: "Gravitation",
        class: 9,
        subject: "Physics",
        ncertPageRange: "Pages 129-144",
        topics: ["Gravitation", "Universal Law of Gravitation", "Free Fall", "Mass and Weight", "Thrust and Pressure", "Archimedes' Principle", "Relative Density"],
        concepts: [
            {
                id: "universal_gravitation",
                title: "Universal Law of Gravitation",
                ncertRef: "NCERT Pg. 130",
                hook: "An apple falls from a tree. The Moon 'falls' around the Earth continuously. Newton realized the same force — gravity — is responsible for both. It was the first 'universal' law of physics.",
                definition: "Every object in the universe attracts every other object with a force which is proportional to the product of their masses and inversely proportional to the square of the distance between them.",
                explanation: "F = G × (m₁ × m₂) / r²\n\nWhere:\n• F = gravitational force between two objects\n• G = Universal Gravitational Constant = 6.674 × 10⁻¹¹ N⋅m²/kg²\n• m₁, m₂ = masses of the two objects\n• r = distance between their centres\n\nKey points:\n1. The force is always attractive.\n2. It applies to ALL objects (not just planets).\n3. The force decreases rapidly with distance (inverse square law).\n4. Why don't we feel gravity between two people? Because G is incredibly small — the masses have to be enormous (like planets) for the force to be noticeable.\n\nAcceleration due to gravity (g): On Earth's surface, every object accelerates at g = 9.8 m/s² (approximately 10 m/s²), regardless of its mass.",
                examples: [
                    {
                        given: "Mass of Earth = 6 × 10²⁴ kg, Radius = 6.4 × 10⁶ m, G = 6.7 × 10⁻¹¹ N⋅m²/kg².",
                        find: "The value of g on Earth's surface.",
                        steps: [
                            "Step 1: g = GM/R².",
                            "Step 2: g = (6.7 × 10⁻¹¹ × 6 × 10²⁴) / (6.4 × 10⁶)²",
                            "Step 3: g = (40.2 × 10¹³) / (40.96 × 10¹²)",
                            "Step 4: g ≈ 9.8 m/s²."
                        ],
                        note: "This is why g is the same for all objects on Earth — it doesn't depend on the mass of the falling object."
                    }
                ],
                summary: [
                    "F = Gm₁m₂/r² (Universal Law of Gravitation).",
                    "G = 6.674 × 10⁻¹¹ N⋅m²/kg² (same everywhere in universe).",
                    "g = GM/R² ≈ 9.8 m/s² on Earth's surface.",
                    "g is independent of the mass of the falling body."
                ],
                misconceptions: [
                    {
                        wrong: "Heavy objects fall faster than light objects.",
                        right: "In vacuum (without air resistance), a feather and a hammer fall at EXACTLY the same rate. g = 9.8 m/s² for all objects. In air, the difference comes from air resistance, not gravity."
                    }
                ],
                animationId: "DistanceDisplacementAnimation",
                diagramRef: "Source: NCERT Class 9 Physics, Chapter 10, Page 130",
                connection: "Understanding gravity leads to understanding weight — which is NOT the same as mass."
            },
            {
                id: "mass_weight",
                title: "Mass and Weight",
                ncertRef: "NCERT Pg. 134",
                hook: "On the Moon, you would weigh only 1/6th of your Earth weight, but your mass stays exactly the same. How is that possible if mass and weight mean different things?",
                definition: "Mass is the amount of matter in an object. Weight is the force with which an object is attracted towards the centre of the Earth (or any celestial body).",
                explanation: "Mass (m):\n• Measure of amount of matter.\n• Scalar quantity.\n• SI unit: kilogram (kg).\n• DOES NOT change from place to place.\n• Measured using a beam balance.\n\nWeight (W):\n• Force of gravity on an object: W = mg.\n• Vector quantity (directed towards centre of Earth).\n• SI unit: Newton (N).\n• CHANGES from place to place (because g changes).\n• Measured using a spring balance.\n\nOn Moon: g_moon ≈ 1.63 m/s² ≈ g_earth/6.\nSo a 60 kg person weighs 588 N on Earth but only 98 N on Moon.\nBut their mass remains 60 kg everywhere.",
                examples: [
                    {
                        given: "A person has mass 60 kg. g on Earth = 10 m/s², g on Moon = 1.67 m/s².",
                        find: "Weight on Earth and Moon.",
                        steps: [
                            "Step 1: Weight on Earth = mg = 60 × 10 = 600 N.",
                            "Step 2: Weight on Moon = mg = 60 × 1.67 = 100.2 N.",
                            "Step 3: Weight on Moon = 600/6 ≈ 100 N (about 1/6th).",
                            "Step 4: Mass remains 60 kg in both places."
                        ],
                        note: "Weight is a force, measured in Newtons. Mass is measured in kilograms."
                    }
                ],
                summary: [
                    "Mass is constant; Weight changes with g.",
                    "W = mg (Weight = mass × acceleration due to gravity).",
                    "Weight on Moon ≈ Weight on Earth / 6.",
                    "Mass is measured by beam balance; Weight by spring balance."
                ],
                misconceptions: [
                    {
                        wrong: "In space, astronauts are 'weightless' — there is no gravity.",
                        right: "Gravity exists in space! Astronauts feel 'weightless' because they and their spaceship are in free fall together. They are constantly falling towards Earth but also moving sideways fast enough to keep missing it."
                    }
                ],
                animationId: "UniformAccelerationAnimation",
                diagramRef: "Source: NCERT Class 9 Physics, Chapter 10, Page 135",
                connection: "Weight tells us the force on an object. When that force acts on a surface, it creates pressure — force per unit area."
            }
        ],
        examSection: {
            formulas: [
                { formula: "F = Gm₁m₂/r²", description: "Universal Law of Gravitation" },
                { formula: "g = GM/R²", description: "Acceleration due to gravity" },
                { formula: "W = mg", description: "Weight" },
                { formula: "Pressure = Force/Area", description: "Pressure = Thrust / Area" },
                { formula: "Relative Density = ρ_substance / ρ_water", description: "Relative Density (no unit)" }
            ],
            derivations: [
                "Derivation of g = GM/R² from the universal law.",
                "Archimedes' principle and its applications (buoyancy)."
            ],
            tips: [
                "g at a height h above Earth: g' = g(1 - 2h/R) approximately.",
                "Buoyant force = Weight of fluid displaced (Archimedes).",
                "Objects float if their density is less than water (relative density < 1)."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_g_1",
                    question: "The value of G (gravitational constant) is:",
                    options: ["6.674 × 10⁻¹¹ N⋅m²/kg²", "9.8 m/s²", "6.674 × 10⁻¹¹ kg/m²", "9.8 N/kg²"],
                    correct: "6.674 × 10⁻¹¹ N⋅m²/kg²",
                    explanation: "G is the universal gravitational constant. Its value is 6.674 × 10⁻¹¹ N⋅m²/kg². Don't confuse G (constant) with g (acceleration due to gravity = 9.8 m/s²).",
                    examTip: "G is universal (same everywhere). g varies with planet/altitude.",
                    ncertRef: "NCERT Pg. 130"
                },
                {
                    id: "q_g_2",
                    question: "An object weighs 10 N on Earth. Its weight on the Moon would be approximately:",
                    options: ["10 N", "60 N", "1.67 N", "5 N"],
                    correct: "1.67 N",
                    explanation: "Weight on Moon = Weight on Earth / 6 = 10/6 ≈ 1.67 N.",
                    examTip: "g_moon ≈ g_earth / 6.",
                    ncertRef: "NCERT Pg. 135"
                }
            ],
            match: [
                {
                    id: "mt_g_1",
                    columnA: ["Mass", "Weight", "G", "g", "Buoyant Force"],
                    columnB: ["Amount of matter", "mg (force of gravity)", "Universal constant", "9.8 m/s²", "Weight of displaced fluid"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    }
];
