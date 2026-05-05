export const class10Physics = [
    {
        id: "ch1_light",
        title: "Light: Reflection and Refraction",
        class: 10,
        subject: "Physics",
        ncertPageRange: "Pages 160-186",
        topics: ["Reflection of Light", "Spherical Mirrors", "Image Formation by Spherical Mirrors", "Mirror Formula and Magnification", "Refraction of Light", "Refraction by Spherical Lenses", "Power of a Lens"],
        concepts: [
            {
                id: "reflection_spherical",
                title: "Reflection by Spherical Mirrors",
                ncertRef: "NCERT Pg. 162",
                hook: "A giant satellite dish picks up faint signals from space by focusing them at one point. Concave mirrors work the exact same way — they concentrate all incoming light to a single powerful point called the focus.",
                definition: "A spherical mirror whose reflecting surface is curved inwards (towards the centre of the sphere) is called a concave mirror. One whose reflecting surface is curved outwards is called a convex mirror.",
                explanation: "Concave mirrors converge light (bringing rays together). They can form real, inverted images (which can be caught on a screen) OR virtual, erect images depending on where the object is placed.\n\nConvex mirrors diverge light (spreading rays apart). They ALWAYS form virtual, erect, and diminished images regardless of where the object is. This is why they are used as rear-view mirrors in vehicles — they provide a wider field of view.\n\nKey terms:\n• Centre of Curvature (C) – the centre of the sphere of which the mirror forms a part.\n• Radius of Curvature (R) – the radius of that sphere.\n• Principal Focus (F) – the point where parallel rays converge (concave) or appear to diverge from (convex).\n• Focal Length (f) – the distance from the pole (P) to the focus (F). f = R/2.",
                examples: [
                    {
                        given: "A concave mirror has a focal length of 15 cm. An object is placed at 10 cm from the mirror.",
                        find: "Nature, position, and size of the image.",
                        steps: [
                            "Step 1: u = -10 cm (sign convention: object is always on left), f = -15 cm (concave).",
                            "Step 2: Mirror formula: 1/v + 1/u = 1/f",
                            "1/v + 1/(-10) = 1/(-15)",
                            "1/v = -1/15 + 1/10 = (-2 + 3)/30 = 1/30",
                            "v = +30 cm.",
                            "Step 3: v is positive → image is behind the mirror → virtual, erect.",
                            "Step 4: m = -v/u = -(30)/(-10) = +3 (positive = erect, 3x magnified)."
                        ],
                        note: "When the object is between F and P of a concave mirror, the image is virtual, erect, and magnified — this is how a makeup mirror works."
                    }
                ],
                summary: [
                    "Concave: can form real or virtual images depending on object position.",
                    "Convex: always forms virtual, erect, diminished images.",
                    "f = R/2 (focal length is half the radius of curvature).",
                    "Sign convention: all distances measured from the pole; left is negative."
                ],
                misconceptions: [
                    {
                        wrong: "Concave mirrors always form inverted images.",
                        right: "When the object is placed between F and P, the concave mirror forms a virtual, erect, and magnified image. This is the principle behind shaving/makeup mirrors."
                    }
                ],
                animationId: "RefractionAnimation",
                diagramRef: "Source: NCERT Class 10 Physics, Chapter 10, Page 163",
                connection: "Mirrors use reflection to form images. But most optical instruments like cameras and eyeglasses use lenses, which form images using refraction."
            },
            {
                id: "refraction",
                title: "Refraction of Light",
                ncertRef: "NCERT Pg. 171",
                hook: "Ever notice how a completely straight pencil looks painfully broken when you dip half of it into a glass of water? The light itself is bending right in front of your eyes. That's Refraction.",
                definition: "The phenomenon of bending of light when it passes obliquely from one transparent medium to another is called refraction of light.",
                explanation: "Light travels incredibly fast, but its absolute speed is only in a vacuum (3 x 10^8 m/s). When light enters a denser medium (like water or glass), it slows down. This change in speed causes the light ray to bend.\n\nImagine a car driving from a paved road diagonally into thick mud. The tires that hit the mud first slow down, causing the car to swerve or 'bend' its path. \n\nRules of bending:\n1. Rare to Dense (Air to Glass): Light bends TOWARDS the normal.\n2. Dense to Rare (Glass to Air): Light bends AWAY from the normal.\n\nSnell's Law: The ratio sin(i)/sin(r) is a constant called the refractive index (n). n = c/v where c is speed of light in vacuum and v is speed in medium.",
                examples: [
                    {
                        given: "The refractive index of glass is 1.5. If the speed of light in vacuum is 3 × 10⁸ m/s.",
                        find: "Speed of light in glass.",
                        steps: [
                            "Step 1: n = c / v (refractive index = speed in vacuum / speed in medium).",
                            "Step 2: v = c / n = (3 × 10⁸) / 1.5",
                            "Step 3: v = 2 × 10⁸ m/s."
                        ],
                        note: "Light always slows down in a denser medium, so v is always less than c."
                    }
                ],
                summary: [
                    "Refraction is caused by change in speed of light.",
                    "Velocity of light is max in vacuum: 3 × 10⁸ m/s.",
                    "Optical density is different from mass density.",
                    "Snell's Law: sin i / sin r = constant (Refractive Index)."
                ],
                misconceptions: [
                    {
                        wrong: "Denser object like oil is optically denser than water.",
                        right: "Not always. Turpentine oil floats on water (lower mass density), but its refractive index is higher than water (it is optically denser). Mass density and optical density are completely different."
                    }
                ],
                animationId: "RefractionAnimation",
                diagramRef: "Source: NCERT Class 10 Physics, Chapter 10, Page 172",
                connection: "Just as curved mirrors reflect light to form images, curved pieces of glass (Lenses) use refraction to bend light and form images."
            }
        ],
        examSection: {
            formulas: [
                { formula: "1/v + 1/u = 1/f", description: "Mirror Formula" },
                { formula: "m = -v/u = h'/h", description: "Magnification of Mirror" },
                { formula: "1/v - 1/u = 1/f", description: "Lens Formula" },
                { formula: "P = 1/f (in metres)", description: "Power of a Lens (Dioptres)" },
                { formula: "n = sin i / sin r", description: "Snell's Law" },
                { formula: "f = R/2", description: "Focal length and Radius relation" }
            ],
            derivations: [
                "Understanding Cartesian Sign Convention is critical for 5-mark numericals.",
                "Ray diagrams for all 6 positions of an object in front of a concave mirror."
            ],
            tips: [
                "In sign convention, object distance (u) is ALWAYS taken as negative.",
                "Focal length of convex lens/mirror is +ve. Concave mirror focal length is -ve.",
                "Real images have negative magnification. Virtual images have positive magnification.",
                "Powers are additive for lenses in contact: P = P1 + P2."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_p10_1",
                    question: "The absolute refractive index of a medium is always:",
                    options: ["Equal to 1", "Less than 1", "Greater than 1", "Zero"],
                    correct: "Greater than 1",
                    explanation: "Refractive index (n) = c/v. Since speed of light in vacuum (c) is the absolute maximum, 'v' in any medium is always less than 'c'. Thus, c/v > 1.",
                    examTip: "Often asked in competitive and objective board questions.",
                    ncertRef: "NCERT Pg. 175"
                },
                {
                    id: "q_p10_1b",
                    question: "A concave mirror produces a magnified virtual image when the object is placed:",
                    options: ["At C", "Between F and C", "At F", "Between P and F"],
                    correct: "Between P and F",
                    explanation: "When object is between pole and focus, concave mirror forms a virtual, erect, magnified image behind the mirror.",
                    examTip: "Remember the 6 cases of image formation for concave mirror.",
                    ncertRef: "NCERT Pg. 166"
                },
                {
                    id: "q_p10_1c",
                    question: "The power of a concave lens of focal length 25 cm is:",
                    options: ["-4 D", "+4 D", "-0.04 D", "+0.04 D"],
                    correct: "-4 D",
                    explanation: "P = 1/f (in metres). f = -25 cm = -0.25 m (concave lens has negative f). P = 1/(-0.25) = -4 D.",
                    examTip: "Always convert cm to m before finding power.",
                    ncertRef: "NCERT Pg. 184"
                }
            ],
            match: [
                {
                    id: "mt_p10_1",
                    columnA: ["Real, Inverted Image", "Virtual, Erect Image", "Convex Mirror", "Convex Lens", "Snell's Law"],
                    columnB: ["Can be caught on screen", "Appears behind mirror", "Always forms diminished image", "Converging lens", "sin i / sin r = constant"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch2_electricity",
        title: "Electricity",
        class: 10,
        subject: "Physics",
        ncertPageRange: "Pages 199-222",
        topics: ["Electric Current and Circuit", "Electric Potential and Potential Difference", "Ohm's Law", "Resistance and Resistivity", "Resistors in Series and Parallel", "Heating Effect of Electric Current", "Electric Power"],
        concepts: [
            {
                id: "ohms_law",
                title: "Ohm's Law",
                ncertRef: "NCERT Pg. 204",
                hook: "Think of an electric circuit like water pipes. If you increase the water pressure from the pump (voltage), the flow of water (current) definitely speeds up. Georg Simon Ohm proved this mathematically in 1827.",
                definition: "The potential difference, V, across the ends of a given metallic wire in an electric circuit is directly proportional to the current flowing through it, provided its temperature remains the same.",
                explanation: "Ohm's law establishes the relationship between voltage (V) and current (I). V ∝ I. \n\nWhen we replace the proportional sign with an equal sign, we introduce a constant, R: \n\nV = IR. \n\nThis 'R' is Resistance. It is the property of a conductor to resist the flow of charges. A higher resistance means it acts like a narrow, clogged pipe—allowing less current to flow through for the same voltage.\n\nThe SI unit of resistance is Ohm (Ω). 1 Ohm means that a potential difference of 1 Volt produces 1 Ampere of current.",
                examples: [
                    {
                        given: "The potential difference between the terminals of an electric heater is 60 V and it draws a current of 4 A.",
                        find: "What current will the heater draw if the potential difference is increased to 120 V?",
                        steps: [
                            "Step 1: First find resistance (R) using initial values.",
                            "R = V / I = 60 V / 4 A = 15 Ω.",
                            "Step 2: The resistance of the heater doesn't change. Now apply Ohm's Law again with the new voltage.",
                            "I_new = V_new / R = 120 V / 15 Ω = 8 A."
                        ],
                        note: "Check if the temperature is constant; if a filament bulb gets very hot, its resistance increases, and it won't strictly follow Ohm's law."
                    }
                ],
                summary: [
                    "V = IR. (Voltage = Current × Resistance)",
                    "1 Ohm = 1 Volt / 1 Ampere",
                    "V-I graph for an ohmic conductor is a straight line through the origin.",
                    "Ohm's law holds true only at a constant temperature."
                ],
                misconceptions: [
                    {
                        wrong: "Resistance depends on Voltage and Current.",
                        right: "Even though R = V/I, the resistance of a wire is an INHERENT physical property. It depends on length, area, material, and temperature, NOT on how much voltage you apply."
                    }
                ],
                animationId: "OhmsLawAnimation",
                diagramRef: "Source: NCERT Class 10 Physics, Chapter 12, Page 204",
                connection: "If you have a wire with a specific resistance, how does it add up if you use multiple wires in a circuit? We'll see that in Series and Parallel combinations."
            },
            {
                id: "series_parallel",
                title: "Resistors in Series and Parallel",
                ncertRef: "NCERT Pg. 209",
                hook: "If you put a kink in a water hose, much less water flows through — that's a series connection adding resistance. But if you split the hose into 3 separate routes, loads more water gets through — that's parallel.",
                definition: "When resistors are connected end-to-end, they are in series. When they are connected across the same two points, they are in parallel.",
                explanation: "Series Connection:\n• Same current flows through each resistor (like cars on a one-lane road).\n• Total voltage is DIVIDED among all resistors: V = V1 + V2 + V3\n• Equivalent resistance INCREASES: Rs = R1 + R2 + R3\n• If one component fails, the entire circuit breaks.\n\nParallel Connection:\n• Same voltage across each resistor (like a multi-lane highway).\n• Total current is DIVIDED: I = I1 + I2 + I3\n• Equivalent resistance DECREASES: 1/Rp = 1/R1 + 1/R2 + 1/R3\n• If one component fails, others keep working.\n\nHousehold circuits are all wired in PARALLEL — so you can independently switch on/off individual appliances and each gets the full 220V.",
                examples: [
                    {
                        given: "Three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel.",
                        find: "The equivalent resistance.",
                        steps: [
                            "Step 1: 1/Rp = 1/R1 + 1/R2 + 1/R3",
                            "1/Rp = 1/2 + 1/3 + 1/6",
                            "Step 2: Find LCM = 6.",
                            "1/Rp = 3/6 + 2/6 + 1/6 = 6/6 = 1",
                            "Step 3: Rp = 1 Ω.",
                            "Note: Parallel combination is always LESS than the smallest individual resistor."
                        ],
                        note: "This is the most common numerical pattern in board exams for this chapter."
                    }
                ],
                summary: [
                    "Series: Rs = R1 + R2 + R3 (current same, voltage divides).",
                    "Parallel: 1/Rp = 1/R1 + 1/R2 + 1/R3 (voltage same, current divides).",
                    "Equivalent resistance in parallel is always less than the smallest resistor.",
                    "Household circuits use parallel wiring."
                ],
                misconceptions: [
                    {
                        wrong: "Adding more resistors in parallel always increases resistance.",
                        right: "It's actually the opposite! Adding more resistors in parallel DECREASES the equivalent resistance because you are providing more pathways for current to flow."
                    }
                ],
                animationId: "OhmsLawAnimation",
                diagramRef: "Source: NCERT Class 10 Physics, Chapter 12, Page 210",
                connection: "When current flows through a resistor, electrical energy gets converted to heat. This is the Heating Effect — the principle behind electric heaters and fuses."
            }
        ],
        examSection: {
            formulas: [
                { formula: "I = Q/t", description: "Electric Current" },
                { formula: "V = W/Q", description: "Potential Difference" },
                { formula: "V = IR", description: "Ohm's Law" },
                { formula: "R = ρ(L/A)", description: "Resistance based on material" },
                { formula: "Rs = R1 + R2 + R3", description: "Resistors in Series" },
                { formula: "1/Rp = 1/R1 + 1/R2 + 1/R3", description: "Resistors in Parallel" },
                { formula: "H = I²Rt", description: "Joule's Law of Heating" },
                { formula: "P = VI = I²R = V²/R", description: "Electric Power" }
            ],
            derivations: [
                "Derivation of equivalent resistance for Series and Parallel circuits.",
                "Derivation of Joule's law of heating."
            ],
            tips: [
                "In a series circuit, Current (I) remains same across all resistors.",
                "In a parallel circuit, Voltage (V) remains same across all resistors.",
                "Always double-check units. R in Ohms (Ω), L in meters (m), Area in m².",
                "1 kWh (unit of electricity) = 1000 W × 3600 s = 3.6 × 10⁶ J."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_p10_2",
                    question: "The theoretical V-I graph of an ideal ohmic conductor is:",
                    options: ["A curve passing through origin", "A straight line parallel to x-axis", "A straight line passing through the origin", "A parabola"],
                    correct: "A straight line passing through the origin",
                    explanation: "Since V is directly proportional to I, the ratio V/I (Resistance) is constant. Graph of directly proportional quantities is a straight line through origin.",
                    examTip: "Drawing the V-I graph is frequently asked in practical based questions.",
                    ncertRef: "NCERT Pg. 204"
                },
                {
                    id: "q_p10_2b",
                    question: "Two 4Ω resistors are connected in parallel. Their equivalent resistance is:",
                    options: ["8 Ω", "4 Ω", "2 Ω", "1 Ω"],
                    correct: "2 Ω",
                    explanation: "1/Rp = 1/4 + 1/4 = 2/4 = 1/2. Therefore Rp = 2 Ω. For n identical resistors R in parallel, equivalent = R/n.",
                    examTip: "Shortcut for identical resistors in parallel: Rp = R/n.",
                    ncertRef: "NCERT Pg. 210"
                },
                {
                    id: "q_p10_2c",
                    question: "Electrical resistivity of a given metallic wire depends upon:",
                    options: ["Its length", "Its thickness", "Its shape", "Nature of the material"],
                    correct: "Nature of the material",
                    explanation: "Resistivity (ρ) is a property of the material, not its dimensions. It does not change with length, area, or shape of the conductor.",
                    examTip: "Resistance depends on dimensions (R = ρL/A), but resistivity depends only on material and temperature.",
                    ncertRef: "NCERT Pg. 207"
                }
            ],
            match: [
                {
                    id: "mt_p10_2",
                    columnA: ["Ammeter", "Voltmeter", "Rheostat", "Resistor", "Galvanometer"],
                    columnB: ["Connected in Series", "Connected in Parallel", "Variable Resistance", "Fixed Resistance", "Detects current presence"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch3_magnetic",
        title: "Magnetic Effects of Electric Current",
        class: 10,
        subject: "Physics",
        ncertPageRange: "Pages 224-249",
        topics: ["Magnetic Field and Field Lines", "Magnetic Field due to Current-Carrying Conductor", "Force on Current-Carrying Conductor in Magnetic Field", "Electric Motor", "Electromagnetic Induction", "Electric Generator"],
        concepts: [
            {
                id: "electromagnetic_induction",
                title: "Electromagnetic Induction",
                ncertRef: "NCERT Pg. 240",
                hook: "Michael Faraday discovered that moving a magnet near a coil of wire produces electricity — without any battery! This single discovery powers every hydroelectric dam, wind turbine, and generator on Earth.",
                definition: "The phenomenon of inducing an electromotive force (EMF) in a conductor by changing the magnetic flux through it is called electromagnetic induction.",
                explanation: "Faraday's experiment: When you push a bar magnet into a coil, the galvanometer deflects, showing current is produced. Pull it out — the deflection reverses. Keep it stationary — no current at all.\n\nThe key insight is that it's the CHANGE in magnetic field lines (flux) passing through the coil that generates electricity. No change = no current.\n\nFleming's Right Hand Rule tells us the direction of the induced current:\nStretch your right hand so that the thumb, forefinger, and middle finger are mutually perpendicular. The forefinger points in the direction of the magnetic field, the thumb in the direction of motion, and the middle finger shows the direction of the induced current.\n\nThis is the principle behind electric generators that convert mechanical energy into electrical energy.",
                examples: [
                    {
                        given: "A coil of wire is connected to a galvanometer. A magnet is moved towards the coil rapidly.",
                        find: "What happens? How can the effect be increased?",
                        steps: [
                            "Step 1: Moving the magnet changes the magnetic flux through the coil.",
                            "Step 2: This change induces an EMF, producing current — the galvanometer deflects.",
                            "Step 3: The effect can be increased by: (a) using a stronger magnet, (b) increasing the number of turns in the coil, (c) moving the magnet faster."
                        ],
                        note: "If the magnet is kept stationary inside the coil, no current is induced — change in flux is essential."
                    }
                ],
                summary: [
                    "Changing magnetic flux through a coil induces EMF (Faraday's Law).",
                    "No change in flux = no induced EMF.",
                    "Direction of induced current: Fleming's Right Hand Rule.",
                    "Generators work on the principle of electromagnetic induction."
                ],
                misconceptions: [
                    {
                        wrong: "Just placing a magnet near a coil will produce electricity forever.",
                        right: "Only a CHANGING magnetic field produces electricity. If the magnet is stationary relative to the coil, no current flows."
                    }
                ],
                animationId: "OhmsLawAnimation",
                diagramRef: "Source: NCERT Class 10 Physics, Chapter 13, Page 241",
                connection: "Generators produce alternating current (AC). To understand how AC differs from DC and how it is transmitted, we study the basics of domestic electric circuits."
            }
        ],
        examSection: {
            formulas: [
                { formula: "F = BIL", description: "Force on a current-carrying conductor" },
                { formula: "Right Hand Thumb Rule", description: "Direction of magnetic field around a wire" },
                { formula: "Fleming's Left Hand Rule", description: "Direction of force on conductor" },
                { formula: "Fleming's Right Hand Rule", description: "Direction of induced current" }
            ],
            derivations: [],
            tips: [
                "Don't confuse Fleming's Left and Right hand rules. Left = Motor effect, Right = Generator effect.",
                "AC generator uses slip rings. DC generator uses split ring commutator.",
                "Electromagnetic induction is the single most important concept for board exams in this chapter."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_p10_3",
                    question: "The device used to convert mechanical energy into electrical energy is called:",
                    options: ["Motor", "Generator", "Transformer", "Galvanometer"],
                    correct: "Generator",
                    explanation: "A generator converts mechanical energy to electrical energy using electromagnetic induction. A motor does the reverse — converts electrical energy to mechanical energy.",
                    examTip: "Motor: Electrical → Mechanical. Generator: Mechanical → Electrical.",
                    ncertRef: "NCERT Pg. 243"
                },
                {
                    id: "q_p10_3b",
                    question: "Which rule is used to determine the direction of force on a current-carrying conductor in a magnetic field?",
                    options: ["Fleming's Right Hand Rule", "Right Hand Thumb Rule", "Fleming's Left Hand Rule", "Ampere's Rule"],
                    correct: "Fleming's Left Hand Rule",
                    explanation: "Fleming's Left Hand Rule gives the direction of force when a current-carrying conductor is placed in a magnetic field (motor effect).",
                    examTip: "Left Hand = Motor (Force), Right Hand = Generator (Induced current).",
                    ncertRef: "NCERT Pg. 232"
                }
            ],
            match: [
                {
                    id: "mt_p10_3",
                    columnA: ["Electric Motor", "Electric Generator", "Fuse", "Earth Wire", "Short Circuit"],
                    columnB: ["Converts electrical to mechanical", "Converts mechanical to electrical", "Prevents overloading", "Safety from electric shock", "Live and neutral touch"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    }
];
