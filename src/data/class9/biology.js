export const class9Biology = [
    {
        id: "ch1_bio_cell",
        title: "The Fundamental Unit of Life",
        class: 9,
        subject: "Biology",
        ncertPageRange: "Pages 57-67",
        topics: ["Discovery of Cell", "Plasma Membrane", "Cell Wall", "Nucleus", "Cytoplasm", "Cell Organelles"],
        concepts: [
            {
                id: "cell_discovery",
                title: "Discovery of Cell",
                ncertRef: "NCERT Pg. 57",
                hook: "Did you know that every living organism, from the largest whale to the smallest bacteria, is made of tiny building blocks? Just like a house is made of bricks, life is made of cells.",
                definition: "Cell is the basic structural and functional unit of life. Robert Hooke first discovered cells in 1665 while observing a thin slice of cork under a primitive microscope.",
                explanation: "The cell is called the structural unit because it forms the structure of an organism. It is called the functional unit because all the vital functions of an organism take place inside cells. \n\nImportant scientists in cell history:\n1. Robert Hooke (1665): Discovered cells in cork.\n2. Leeuwenhoek (1674): Discovered free-living cells in pond water.\n3. Robert Brown (1831): Discovered the nucleus.\n4. Schleiden and Schwann (1838-39): Presented the Cell Theory.",
                summary: [
                    "Cells are the basic units of life.",
                    "Discovered by Robert Hooke in 1665.",
                    "Cell theory states that all plants and animals are composed of cells.",
                    "Cells can be unicellular (Amoeba) or multicellular (Human)."
                ],
                misconceptions: [
                    {
                        wrong: "Students often think all cells are of the same shape.",
                        right: "Actually, cells have different shapes like spindle-shaped (muscle cells), branched (nerve cells), or disc-shaped (RBCs) according to their function."
                    }
                ],
                animationId: "CellStructureAnimation",
                diagramRef: "Source: NCERT Class 9 Biology, Chapter 5, Page 57",
                connection: "Cells gather to form tissues, which we will study in the next chapter."
            },
            {
                id: "plasma_membrane",
                title: "Plasma Membrane",
                ncertRef: "NCERT Pg. 59",
                hook: "How does a cell decide what to let in and what to kick out? Look at the Plasma Membrane—the ultimate security guard of the cell.",
                definition: "The plasma membrane is the outermost covering of the cell that separates the contents of the cell from its external environment. It is called a selectively permeable membrane.",
                explanation: "The plasma membrane allows or permits the entry and exit of some materials in and out of the cell. It also prevents movement of some other materials.\n\nKey processes:\n1. Diffusion: Spontaneous movement of a substance from a region of high concentration to a region where its concentration is low (e.g., CO2 and O2).\n2. Osmosis: The movement of water molecules through a selectively permeable membrane from high water concentration to low water concentration.",
                summary: [
                    "Outer layer of animal cells.",
                    "Made of lipids and proteins.",
                    "Selectively permeable.",
                    "Facilitates diffusion and osmosis."
                ],
                misconceptions: [
                    {
                        wrong: "Thinking that diffusion and osmosis are the same thing.",
                        right: "Osmosis is a specific type of diffusion that only involves the movement of water through a semi-permeable membrane."
                    }
                ],
                animationId: "OsmosisAnimation",
                diagramRef: "Source: NCERT Class 9 Biology, Chapter 5, Page 59",
                connection: "Cell walls in plants provide extra protection over this membrane."
            },
            {
                id: "cell_organelles",
                title: "Cell Organelles",
                ncertRef: "NCERT Pg. 61",
                hook: "Imagine a cell as a factory. Every department has a specialist — the nucleus is the boss, mitochondria are the power plants, and ribosomes are the assembly lines.",
                definition: "Cell organelles are specialized structures within the cell that perform specific functions essential for the survival and activity of the cell.",
                explanation: "Key organelles and their functions:\n1. Nucleus: Contains DNA, controls all cell activities. Has nuclear membrane, nucleolus, and chromatin.\n2. Endoplasmic Reticulum (ER): Network of membranes. RER (with ribosomes) makes proteins; SER makes lipids.\n3. Golgi Apparatus: Packages and dispatches proteins and lipids. Forms lysosomes.\n4. Lysosomes: 'Suicide bags' — contain digestive enzymes that break down waste.\n5. Mitochondria: 'Powerhouse of the cell' — performs cellular respiration to produce ATP energy.\n6. Plastids: Found only in plant cells. Chloroplasts (green) perform photosynthesis. Chromoplasts (coloured), Leucoplasts (white, store starch).\n7. Vacuoles: Storage sacs. Large central vacuole in plant cells maintains turgidity.",
                summary: [
                    "Nucleus controls all cell activities via DNA.",
                    "Mitochondria produce ATP — the energy currency.",
                    "Golgi apparatus packages and dispatches materials.",
                    "Lysosomes digest waste — called suicide bags.",
                    "Plastids are exclusive to plant cells."
                ],
                misconceptions: [
                    {
                        wrong: "All plastids are green and do photosynthesis.",
                        right: "Only chloroplasts are green. Chromoplasts give flowers/fruits their colour, and leucoplasts store starch/oils/proteins."
                    }
                ],
                animationId: "CellStructureAnimation",
                diagramRef: "Source: NCERT Class 9 Biology, Chapter 5, Page 63",
                connection: "Understanding organelles helps explain how tissues perform specialized functions."
            }
        ],
        examSection: {
            formulas: [
                { formula: "Hypotonic → cell swells", description: "Water enters cell by osmosis" },
                { formula: "Hypertonic → cell shrinks", description: "Water leaves cell by osmosis" },
                { formula: "Isotonic → no change", description: "Equal concentration inside and outside" }
            ],
            derivations: [
                "Difference between plant cell and animal cell — frequently asked 3-mark question.",
                "Functions of cell organelles — important 5-mark question."
            ],
            tips: [
                "Remember: Prokaryotic = No true nucleus (e.g., bacteria).",
                "Eukaryotic = True nucleus with membrane-bound organelles.",
                "Mitochondria and plastids have their own DNA — exam favourite!",
                "Lysosomes are called 'suicide bags' — common 1-mark question."
            ]
        },
        tests: {
            mcq: [
                { id: "q1", question: "Who discovered the nucleus in the cell?", options: ["Robert Hooke", "Robert Brown", "Purkinje", "Leeuwenhoek"], correct: "Robert Brown", explanation: "Robert Brown discovered the nucleus in 1831.", ncertRef: "NCERT Pg. 57" },
                { id: "q2", question: "Which organelle is known as the powerhouse of the cell?", options: ["Golgi Apparatus", "Mitochondria", "Ribosomes", "Lysosomes"], correct: "Mitochondria", explanation: "Mitochondria produce energy in the form of ATP.", ncertRef: "NCERT Pg. 63" },
                { id: "q3", question: "Lysosomes are also called:", options: ["Power plants", "Suicide bags", "Kitchen of cell", "Control room"], correct: "Suicide bags", explanation: "Lysosomes contain digestive enzymes that can destroy the cell itself if released.", ncertRef: "NCERT Pg. 64" }
            ],
            match: [
                {
                    id: "mt_cell_1",
                    columnA: ["Mitochondria", "Ribosome", "Golgi Apparatus", "Lysosome", "Plastid"],
                    columnB: ["Protein synthesis", "Packaging & dispatch", "Energy production", "Photosynthesis", "Digestion of waste"],
                    correctPairs: { 0: 2, 1: 0, 2: 1, 3: 4, 4: 3 }
                }
            ]
        }
    },
    {
        id: "ch2_bio_tissues",
        title: "Tissues",
        class: 9,
        subject: "Biology",
        ncertPageRange: "Pages 69-81",
        topics: ["Plant Tissues", "Animal Tissues", "Meristematic Tissue", "Permanent Tissue", "Epithelial Tissue", "Connective Tissue", "Muscular Tissue", "Nervous Tissue"],
        concepts: [
            {
                id: "tissue_intro",
                title: "What are Tissues?",
                ncertRef: "NCERT Pg. 69",
                hook: "A single cell can't build an organ alone — just like a single brick can't be a building. Cells with similar structure and function team up to form tissues.",
                definition: "A tissue is a group of cells that have similar structure and work together to perform a particular function.",
                explanation: "In unicellular organisms like Amoeba, a single cell performs all functions. But in multicellular organisms, different groups of cells specialise for different tasks — this is called division of labour.\n\nTissues are broadly classified into:\n1. Plant tissues: Meristematic and Permanent\n2. Animal tissues: Epithelial, Connective, Muscular, Nervous\n\nPlant growth is limited to certain regions (meristems), while animal growth is more uniform.",
                summary: [
                    "Tissue = group of similar cells performing one function.",
                    "Division of labour increases efficiency in multicellular organisms.",
                    "Plant tissues: Meristematic + Permanent.",
                    "Animal tissues: Epithelial + Connective + Muscular + Nervous."
                ],
                misconceptions: [
                    {
                        wrong: "All cells in an organism are the same.",
                        right: "Cells differentiate into specialized types to form tissues, each with unique structures suited to their function."
                    }
                ],
                animationId: "TissueAnimation",
                diagramRef: "Source: NCERT Class 9 Biology, Chapter 6, Page 69",
                connection: "Understanding tissues is essential before studying organs and organ systems."
            },
            {
                id: "plant_tissues",
                title: "Plant Tissues",
                ncertRef: "NCERT Pg. 70",
                hook: "Ever wondered why a tree trunk is so hard while a leaf is so soft? The secret lies in different types of plant tissues.",
                definition: "Plant tissues are classified as Meristematic tissue (dividing cells for growth) and Permanent tissue (differentiated cells that have stopped dividing).",
                explanation: "Meristematic Tissue:\n• Found at growing tips of roots and shoots (apical), sides of stems (lateral), and base of leaves (intercalary).\n• Cells are small, thin-walled, dense cytoplasm, no vacuoles.\n• Responsible for growth in length and girth.\n\nPermanent Tissue — Simple:\n1. Parenchyma: Thin-walled, stores food, fills spaces. Chlorenchyma (with chlorophyll) does photosynthesis. Aerenchyma (with air cavities) helps aquatic plants float.\n2. Collenchyma: Thickened at corners, provides flexibility. Found in leaf stalks.\n3. Sclerenchyma: Thick lignified walls, dead cells, provides rigidity. Found in coconut husk, seed coat.\n\nPermanent Tissue — Complex:\n1. Xylem: Transports water and minerals upward (root → leaves). Made of tracheids, vessels, xylem fibres, xylem parenchyma.\n2. Phloem: Transports food downward (leaves → other parts). Made of sieve tubes, companion cells, phloem fibres, phloem parenchyma.",
                summary: [
                    "Meristematic = actively dividing; Permanent = stopped dividing.",
                    "Parenchyma stores food; Collenchyma gives flexibility; Sclerenchyma gives hardness.",
                    "Xylem transports water UP; Phloem transports food DOWN.",
                    "Xylem cells are dead; Phloem cells (sieve tubes) are living."
                ],
                misconceptions: [
                    {
                        wrong: "Xylem and phloem both transport water.",
                        right: "Xylem transports water and minerals, while phloem transports prepared food (sucrose)."
                    }
                ],
                animationId: "TissueAnimation",
                diagramRef: "Source: NCERT Class 9 Biology, Chapter 6, Page 72-76",
                connection: "These transport tissues form the vascular system studied in detail in Class 10 Life Processes."
            },
            {
                id: "animal_tissues",
                title: "Animal Tissues",
                ncertRef: "NCERT Pg. 77",
                hook: "Your skin protects you, your bones support you, your muscles move you, and your nerves think for you — each job is done by a different type of animal tissue.",
                definition: "Animal tissues are classified into four types: Epithelial, Connective, Muscular, and Nervous tissue.",
                explanation: "1. Epithelial Tissue: Covers body surfaces and lines organs. Types include:\n   • Squamous (flat, thin — skin, lining of blood vessels)\n   • Cuboidal (cube-shaped — kidney tubules)\n   • Columnar (tall, pillar-like — intestine lining)\n   • Glandular (secretes substances — salivary glands)\n\n2. Connective Tissue: Connects and supports. Types:\n   • Blood (fluid matrix — transport)\n   • Bone (hard matrix — support)\n   • Cartilage (flexible — nose, ear)\n   • Ligament (bone to bone)\n   • Tendon (muscle to bone)\n   • Adipose (fat storage)\n   • Areolar (filler tissue)\n\n3. Muscular Tissue:\n   • Striated/Skeletal: Voluntary, striped, attached to bones.\n   • Smooth/Unstriated: Involuntary, spindle-shaped, in internal organs.\n   • Cardiac: Involuntary, branched, only in heart.\n\n4. Nervous Tissue: Made of neurons. Receives stimuli, conducts impulses. Found in brain, spinal cord, nerves.",
                summary: [
                    "Epithelial = covering/lining tissue.",
                    "Connective = support and transport (blood, bone, cartilage).",
                    "Muscular = movement (striated, smooth, cardiac).",
                    "Nervous = impulse transmission via neurons."
                ],
                misconceptions: [
                    {
                        wrong: "Blood is not a tissue.",
                        right: "Blood IS a connective tissue with a fluid matrix called plasma."
                    }
                ],
                animationId: "TissueAnimation",
                diagramRef: "Source: NCERT Class 9 Biology, Chapter 6, Page 77-80",
                connection: "These tissues combine to form organs like the heart (cardiac muscle + nervous tissue + connective tissue)."
            }
        ],
        examSection: {
            formulas: [
                { formula: "Meristematic → Permanent", description: "Differentiation (cells lose ability to divide)" },
                { formula: "Xylem = Water ↑", description: "Transports water and minerals upward" },
                { formula: "Phloem = Food ↓", description: "Transports food downward (translocation)" }
            ],
            derivations: [
                "Difference between Parenchyma, Collenchyma, and Sclerenchyma — very important 3-mark question.",
                "Difference between Striated, Unstriated, and Cardiac muscle — frequently asked.",
                "Functions of Xylem and Phloem — important 5-mark question."
            ],
            tips: [
                "Xylem is dead tissue (except xylem parenchyma); Phloem is living (except phloem fibres).",
                "Blood is a connective tissue — don't forget!",
                "Ligament connects bone-to-bone; Tendon connects muscle-to-bone.",
                "Cardiac muscle is involuntary + striated — unique combination."
            ]
        },
        tests: {
            mcq: [
                { id: "q1", question: "Which tissue is responsible for transport of water in plants?", options: ["Phloem", "Xylem", "Parenchyma", "Collenchyma"], correct: "Xylem", explanation: "Xylem transports water and dissolved minerals from roots to leaves.", ncertRef: "NCERT Pg. 75" },
                { id: "q2", question: "Which muscle type is found only in the heart?", options: ["Striated", "Smooth", "Cardiac", "Skeletal"], correct: "Cardiac", explanation: "Cardiac muscles are involuntary, striated, and found exclusively in the heart.", ncertRef: "NCERT Pg. 79" },
                { id: "q3", question: "Blood is a type of:", options: ["Epithelial tissue", "Muscular tissue", "Connective tissue", "Nervous tissue"], correct: "Connective tissue", explanation: "Blood is a fluid connective tissue with plasma as its matrix.", ncertRef: "NCERT Pg. 78" }
            ],
            match: [
                {
                    id: "mt_tissue_1",
                    columnA: ["Parenchyma", "Sclerenchyma", "Xylem", "Phloem", "Cardiac muscle"],
                    columnB: ["Water transport", "Heart contraction", "Food storage", "Food transport", "Provides rigidity"],
                    correctPairs: { 0: 2, 1: 4, 2: 0, 3: 3, 4: 1 }
                }
            ]
        }
    },
    {
        id: "ch3_bio_food",
        title: "Improvement in Food Resources",
        class: 9,
        subject: "Biology",
        ncertPageRange: "Pages 204-218",
        topics: ["Improvement in Crop Yields", "Crop Variety Improvement", "Crop Production Management", "Crop Protection Management", "Animal Husbandry", "Poultry Farming", "Fish Production", "Bee Keeping"],
        concepts: [
            {
                id: "crop_improvement",
                title: "Improvement in Crop Yields",
                ncertRef: "NCERT Pg. 204",
                hook: "India needs to feed 1.4 billion people. How do scientists make crops grow faster, resist diseases, and produce more food per acre? Welcome to the science of crop improvement.",
                definition: "Crop improvement involves developing better crop varieties through hybridisation, genetic manipulation, and improved agricultural practices to increase yield and quality.",
                explanation: "Three main approaches to improve crop yields:\n\n1. Crop Variety Improvement:\n   • Hybridisation: Crossing two genetically different plants to get desired traits.\n   • Types: Intervarietal (between varieties), Interspecific (between species), Intergeneric (between genera).\n   • Desired traits: Higher yield, disease resistance, fertilizer responsiveness, better quality, wider adaptability, shorter maturity period.\n\n2. Crop Production Management:\n   • Nutrient Management: Macro-nutrients (N, P, K, Ca, Mg, S) and Micro-nutrients (Fe, Mn, B, Zn, Cu, Mo, Cl).\n   • Manure vs Fertilizers: Manure is organic (compost, vermicompost, green manure). Fertilizers are chemical (urea, NPK).\n   • Irrigation: Types include wells, canals, river lift systems, tanks. Modern methods: sprinkler, drip irrigation.\n   • Cropping Patterns: Mixed cropping, intercropping, crop rotation.\n\n3. Crop Protection Management:\n   • Pests: Insects, rodents, and weeds damage crops.\n   • Protection methods: Pesticides (chemical), biological control (natural predators), biopesticides (neem-based).",
                summary: [
                    "Hybridisation combines desirable traits from different varieties.",
                    "16 essential nutrients: 6 macro + 7 micro + C, H, O from air/water.",
                    "Manure is organic, improves soil; Fertilizers are chemical, give quick nutrients.",
                    "Crop rotation and intercropping maintain soil fertility naturally."
                ],
                misconceptions: [
                    {
                        wrong: "Fertilizers are always better than manure.",
                        right: "Overuse of chemical fertilizers degrades soil quality. Manure improves soil structure, water-holding capacity, and adds beneficial microorganisms."
                    }
                ],
                animationId: "PhotosynthesisAnimation",
                diagramRef: "Source: NCERT Class 9 Biology, Chapter 15, Page 206",
                connection: "Crop improvement connects to genetics (Class 10 Heredity) — hybridisation uses principles of inheritance."
            },
            {
                id: "animal_husbandry",
                title: "Animal Husbandry",
                ncertRef: "NCERT Pg. 212",
                hook: "Milk, eggs, meat, honey, fish — all come from animals we've learned to care for scientifically. Animal husbandry is the science behind your daily glass of milk.",
                definition: "Animal husbandry is the scientific management of animal livestock including feeding, breeding, and disease control to obtain food from animals.",
                explanation: "Major areas:\n\n1. Cattle Farming:\n   • Milch animals (milk) and Draught animals (farm labour).\n   • Indian breeds: Red Sindhi, Sahiwal. Exotic breeds: Jersey, Holstein.\n   • Cross-breeding combines high yield of exotic breeds with disease resistance of Indian breeds.\n   • Proper shelter, food, and disease control are essential.\n\n2. Poultry Farming:\n   • For eggs (layers) and meat (broilers).\n   • Broilers need protein-rich feed with vitamin A and K.\n   • Layers need proper lighting and temperature.\n   • Diseases prevented by vaccination, hygiene, and good housing.\n\n3. Fish Production:\n   • Capture fishing: From natural water bodies.\n   • Culture fishing (Aquaculture): Farming fish in controlled conditions.\n   • Composite fish culture: Growing 5-6 species together using different food zones (surface, middle, bottom).\n   • Mariculture: Culture of marine fish (e.g., Mullets, Prawns).\n\n4. Bee Keeping (Apiculture):\n   • Common variety: Apis cerana indica (Indian bee).\n   • Pasturage: Availability of flowers determines honey quality.\n   • Products: Honey and beeswax.",
                summary: [
                    "Cross-breeding combines best traits of Indian and exotic cattle breeds.",
                    "Broilers (meat) and Layers (eggs) have different dietary requirements.",
                    "Composite fish culture = multiple species in same pond = no competition.",
                    "Pasturage (flower availability) directly affects honey quality and quantity."
                ],
                misconceptions: [
                    {
                        wrong: "All fish farming is the same.",
                        right: "Capture fishing (natural), aquaculture (freshwater farming), and mariculture (marine farming) are three distinct methods."
                    }
                ],
                animationId: "PhotosynthesisAnimation",
                diagramRef: "Source: NCERT Class 9 Biology, Chapter 15, Page 214",
                connection: "Animal breeding connects to Heredity and Evolution in Class 10."
            }
        ],
        examSection: {
            formulas: [
                { formula: "Macro: N, P, K, Ca, Mg, S", description: "6 macronutrients required in large amounts" },
                { formula: "Micro: Fe, Mn, B, Zn, Cu, Mo, Cl", description: "7 micronutrients required in small amounts" },
                { formula: "Manure = Organic | Fertilizer = Chemical", description: "Key difference for exams" }
            ],
            derivations: [
                "Difference between Manure and Fertilizers — very common 3-mark question.",
                "Advantages of Composite Fish Culture — important 3-mark question.",
                "Difference between Broilers and Layers — frequently asked."
            ],
            tips: [
                "Mixed cropping = two crops simultaneously; Intercropping = row-by-row pattern.",
                "Crop rotation = different crops in successive seasons on same land.",
                "Remember: Composite fish culture uses fish that feed at different levels.",
                "Apiculture = bee keeping; Pasturage = flowers for bees."
            ]
        },
        tests: {
            mcq: [
                { id: "q1", question: "Which of the following is an exotic breed of cattle?", options: ["Red Sindhi", "Sahiwal", "Jersey", "Gir"], correct: "Jersey", explanation: "Jersey is a foreign/exotic breed known for high milk production.", ncertRef: "NCERT Pg. 213" },
                { id: "q2", question: "What is the advantage of composite fish culture?", options: ["Only one species grows", "Fish compete for food", "Different species use different food zones", "It is cheaper"], correct: "Different species use different food zones", explanation: "Multiple species are grown together — each feeds at different levels, maximizing yield without competition.", ncertRef: "NCERT Pg. 216" },
                { id: "q3", question: "Which nutrient is a macronutrient for plants?", options: ["Iron", "Boron", "Nitrogen", "Zinc"], correct: "Nitrogen", explanation: "Nitrogen (N) is one of the 6 macronutrients needed in large amounts by plants.", ncertRef: "NCERT Pg. 207" }
            ],
            match: [
                {
                    id: "mt_food_1",
                    columnA: ["Manure", "Urea", "Drip irrigation", "Composite fish culture", "Apis cerana"],
                    columnB: ["Chemical fertilizer", "Bee keeping", "Organic nutrient source", "Water-efficient method", "Multiple fish species"],
                    correctPairs: { 0: 2, 1: 0, 2: 3, 3: 4, 4: 1 }
                }
            ]
        }
    }
];
