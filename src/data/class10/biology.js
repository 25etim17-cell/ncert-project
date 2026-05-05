export const class10Biology = [
    {
        id: "ch1_bio_life_processes",
        title: "Life Processes",
        class: 10,
        subject: "Biology",
        ncertPageRange: "Pages 93-113",
        topics: ["Nutrition", "Respiration", "Transportation", "Excretion"],
        concepts: [
            {
                id: "nutrition_intro",
                title: "Nutrition",
                ncertRef: "NCERT Pg. 95",
                hook: "Every engine needs fuel to run. For the 'human engine', that fuel is food. But how does bread turn into energy?",
                definition: "Nutrition is the process of intake of nutrients and its utilization by an organism in various biological activities.",
                explanation: "Two main modes of nutrition:\n1. Autotrophic Nutrition: Organisms use CO2 and water with sunlight to make food (e.g., Green plants via photosynthesis).\n2. Heterotrophic Nutrition: Organisms depend on other organisms for food (e.g., Animals and Fungi).\n\nPhotosynthesis equation:\n6CO2 + 6H2O → C6H12O6 + 6O2 (in presence of sunlight and chlorophyll)\n\nHuman Digestive System:\n1. Mouth: Salivary amylase breaks starch → maltose.\n2. Stomach: HCl + Pepsin break proteins. Mucus protects lining.\n3. Small Intestine: Bile emulsifies fats. Pancreatic juice completes digestion. Villi absorb nutrients.\n4. Large Intestine: Absorbs water. Undigested food expelled.",
                summary: [
                    "Autotrophs perform photosynthesis; Heterotrophs consume others.",
                    "Stomata are tiny pores on leaves for gas exchange.",
                    "Digestion starts in mouth, completes in small intestine.",
                    "Villi increase surface area for absorption."
                ],
                misconceptions: [
                    { wrong: "Plants only perform photosynthesis and not respiration.", right: "Plants perform both! Photosynthesis during the day for food, and respiration 24/7 to release energy." }
                ],
                animationId: "PhotosynthesisAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 6, Page 96",
                connection: "The food produced is then used in respiration to release energy."
            },
            {
                id: "respiration_transport",
                title: "Respiration and Transportation",
                ncertRef: "NCERT Pg. 101",
                hook: "You breathe in oxygen 20 times a minute. But what happens to that oxygen inside your body? It's burned with glucose to power every cell you have.",
                definition: "Respiration is the process of breaking down glucose to release energy. Transportation is the movement of substances (O2, CO2, nutrients, waste) throughout the body.",
                explanation: "Respiration:\n• Aerobic: With O2, in mitochondria. C6H12O6 + 6O2 → 6CO2 + 6H2O + 38 ATP.\n• Anaerobic: Without O2, in cytoplasm. Produces ethanol + CO2 (yeast) or lactic acid (muscles). Only 2 ATP.\n• Alveoli in lungs have thin walls, rich blood supply, and large surface area for efficient gas exchange.\n\nTransportation in Humans:\n• Heart: 4-chambered pump. Double circulation prevents mixing of oxygenated and deoxygenated blood.\n• Blood: RBCs carry O2 (haemoglobin), WBCs fight infection, Platelets help clotting, Plasma carries dissolved substances.\n• Arteries carry blood away from heart; Veins carry blood to heart; Capillaries enable exchange.\n\nTransportation in Plants:\n• Xylem: Transports water + minerals upward via transpiration pull.\n• Phloem: Transports sucrose (food) to all parts via translocation.",
                summary: [
                    "Aerobic respiration: 38 ATP with O2; Anaerobic: 2 ATP without O2.",
                    "Double circulation = pulmonary + systemic circuits.",
                    "Arteries: thick walls, high pressure; Veins: thin walls, have valves.",
                    "Xylem = water up (transpiration pull); Phloem = food transport (translocation)."
                ],
                misconceptions: [
                    { wrong: "Arteries always carry oxygenated blood.", right: "Pulmonary artery carries deoxygenated blood from heart to lungs. It's an artery because it carries blood AWAY from the heart." }
                ],
                animationId: "DigestionAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 6, Page 105",
                connection: "Waste produced during these processes must be removed — leading us to excretion."
            },
            {
                id: "excretion",
                title: "Excretion",
                ncertRef: "NCERT Pg. 110",
                hook: "Your body produces toxic waste every second. Without kidneys filtering 180 litres of blood daily, you wouldn't survive a week.",
                definition: "Excretion is the biological process by which harmful metabolic wastes are removed from the body.",
                explanation: "Human Excretory System:\n1. Kidneys: Two bean-shaped organs, each containing ~1 million nephrons.\n2. Nephron: The functional unit of kidney. Parts: Bowman's capsule, Glomerulus, Tubular system.\n   • Filtration: Blood filtered in glomerulus → filtrate enters Bowman's capsule.\n   • Reabsorption: Useful substances (glucose, amino acids, water) reabsorbed in tubules.\n   • Secretion: Additional waste added. Final product = Urine.\n3. Urine → Ureter → Urinary Bladder → Urethra.\n\nExcretion in Plants:\n• Excess water removed by transpiration.\n• Waste stored in vacuoles, old leaves, bark.\n• Oxygen (waste of photosynthesis) released through stomata.\n• Gums, resins, latex are stored waste products.",
                summary: [
                    "Nephron = functional unit of kidney (filtration + reabsorption + secretion).",
                    "Kidneys filter 180 L of blood daily, produce ~1.5 L urine.",
                    "Artificial kidney (dialysis) filters blood when kidneys fail.",
                    "Plants excrete through transpiration, leaf fall, and gum/resin secretion."
                ],
                misconceptions: [
                    { wrong: "Kidneys only make urine.", right: "Kidneys also regulate water balance, blood pressure, pH, and produce hormones (erythropoietin)." }
                ],
                animationId: "NephronAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 6, Page 111",
                connection: "Understanding excretion connects to how organisms maintain homeostasis for survival."
            }
        ],
        examSection: {
            formulas: [
                { formula: "C6H12O6 + 6O2 → 6CO2 + 6H2O + Energy", description: "Aerobic respiration equation" },
                { formula: "6CO2 + 6H2O → C6H12O6 + 6O2", description: "Photosynthesis equation" },
                { formula: "Glucose → Ethanol + CO2 + 2ATP", description: "Anaerobic respiration (yeast)" }
            ],
            derivations: [
                "Difference between aerobic and anaerobic respiration — very common 3-mark question.",
                "Draw and label the human digestive system — important 5-mark diagram question.",
                "Structure and function of nephron — frequently asked 5-mark question."
            ],
            tips: [
                "Pulmonary artery carries deoxygenated blood — exam trick question!",
                "Villi and alveoli both increase surface area — compare them for 3-mark answers.",
                "Remember: Translocation (phloem) uses ATP; Transpiration pull (xylem) does not.",
                "Dialysis = artificial kidney = exam favourite term."
            ]
        },
        tests: {
            mcq: [
                { id: "q1", question: "Which enzyme is found in saliva?", options: ["Pepsin", "Amylase", "Trypsin", "Lipase"], correct: "Amylase", explanation: "Salivary amylase breaks down starch into maltose.", ncertRef: "NCERT Pg. 99" },
                { id: "q2", question: "Where is bile produced?", options: ["Stomach", "Pancreas", "Liver", "Gall Bladder"], correct: "Liver", explanation: "Bile is produced by the liver and stored in the gall bladder.", ncertRef: "NCERT Pg. 100" },
                { id: "q3", question: "The functional unit of kidney is:", options: ["Neuron", "Nephron", "Glomerulus", "Alveolus"], correct: "Nephron", explanation: "Nephron performs filtration, reabsorption, and secretion to form urine.", ncertRef: "NCERT Pg. 111" }
            ],
            match: [
                { id: "mt_lp_1", columnA: ["Amylase", "Pepsin", "Bile", "Villi", "Nephron"], columnB: ["Protein digestion", "Fat emulsification", "Starch digestion", "Nutrient absorption", "Urine formation"], correctPairs: { 0: 2, 1: 0, 2: 1, 3: 3, 4: 4 } }
            ]
        }
    },
    {
        id: "ch2_bio_reproduce",
        title: "How do Organisms Reproduce?",
        class: 10,
        subject: "Biology",
        ncertPageRange: "Pages 128-141",
        topics: ["Modes of Reproduction", "Asexual Reproduction", "Sexual Reproduction in Plants", "Sexual Reproduction in Humans", "Reproductive Health"],
        concepts: [
            {
                id: "asexual_reproduction",
                title: "Asexual Reproduction",
                ncertRef: "NCERT Pg. 129",
                hook: "What if you could create an exact copy of yourself without a partner? Bacteria do it every 20 minutes. Welcome to asexual reproduction.",
                definition: "Asexual reproduction is a mode of reproduction that involves only one parent and produces offspring that are genetically identical (clones) to the parent.",
                explanation: "Types of asexual reproduction:\n\n1. Fission:\n   • Binary fission: Organism splits into two equal halves (Amoeba, bacteria).\n   • Multiple fission: Organism splits into many daughter cells (Plasmodium).\n\n2. Fragmentation: Body breaks into pieces, each growing into a new organism (Spirogyra).\n\n3. Regeneration: Organised regrowth from a cut body part using specialised cells (Planaria, Hydra).\n\n4. Budding: A small outgrowth (bud) develops on parent body, detaches, and grows (Hydra, Yeast).\n\n5. Vegetative Propagation: New plants from vegetative parts:\n   • Stem: Potato (eyes), sugarcane.\n   • Root: Sweet potato, dahlia.\n   • Leaves: Bryophyllum (buds on leaf margins).\n   • Artificial methods: Layering, cutting, grafting, tissue culture.\n\n6. Spore Formation: Spores are small bulb-like structures with thick walls that survive harsh conditions (Rhizopus, ferns).",
                summary: [
                    "Asexual = one parent, genetically identical offspring (clones).",
                    "Binary fission = 2 parts; Multiple fission = many parts.",
                    "Regeneration ≠ Reproduction — regeneration requires specialised cells.",
                    "Vegetative propagation preserves desired traits in plants."
                ],
                misconceptions: [
                    { wrong: "Regeneration and reproduction are the same.", right: "Regeneration is regrowth of lost parts. It can lead to reproduction in simple organisms (Planaria) but is not a mode of reproduction in complex organisms." }
                ],
                animationId: "ReproductionAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 8, Page 130",
                connection: "Asexual reproduction creates clones. Sexual reproduction creates variation — crucial for evolution."
            },
            {
                id: "sexual_reproduction",
                title: "Sexual Reproduction",
                ncertRef: "NCERT Pg. 133",
                hook: "Why do siblings look different from each other even with the same parents? Sexual reproduction shuffles genes like a deck of cards, creating unique combinations every time.",
                definition: "Sexual reproduction involves two parents and the fusion of male and female gametes (fertilization) to produce offspring with genetic variation.",
                explanation: "Sexual Reproduction in Flowering Plants:\n• Flower = reproductive organ. Parts:\n  - Stamen (male): Anther (produces pollen) + Filament.\n  - Pistil/Carpel (female): Stigma + Style + Ovary (contains ovules).\n• Pollination: Transfer of pollen from anther to stigma (self or cross).\n• Fertilization: Pollen tube grows down style, male gamete fuses with egg cell in ovule.\n• Post-fertilization: Ovule → Seed; Ovary → Fruit.\n\nSexual Reproduction in Humans:\n• Male: Testes produce sperm + testosterone. Sperm travels through vas deferens.\n• Female: Ovaries produce eggs + estrogen/progesterone. Egg travels through fallopian tube.\n• Fertilization occurs in fallopian tube. Zygote implants in uterus lining.\n• Pregnancy lasts ~9 months. Placenta provides nutrition and O2 to embryo.\n• Menstruation: If no fertilization, uterus lining breaks down (28-day cycle).",
                summary: [
                    "Sexual reproduction produces genetically unique offspring.",
                    "Flower parts: Sepals, Petals, Stamens (male), Pistil (female).",
                    "Pollination → Fertilization → Seed and Fruit formation.",
                    "In humans: Fertilization in fallopian tube, development in uterus."
                ],
                misconceptions: [
                    { wrong: "Pollination and fertilization are the same.", right: "Pollination is transfer of pollen to stigma. Fertilization is fusion of male and female gametes inside the ovule — it happens AFTER pollination." }
                ],
                animationId: "ReproductionAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 8, Page 135",
                connection: "The genetic variation from sexual reproduction drives evolution — next chapter."
            },
            {
                id: "reproductive_health",
                title: "Reproductive Health",
                ncertRef: "NCERT Pg. 140",
                hook: "With the world population crossing 8 billion, understanding contraception and reproductive health isn't just biology — it's a life skill.",
                definition: "Reproductive health refers to the total well-being in all aspects of reproduction including physical, emotional, and social well-being.",
                explanation: "Contraceptive Methods:\n1. Barrier methods: Condoms — prevent sperm from reaching egg. Also protect against STDs.\n2. Chemical methods: Oral pills — change hormonal balance to prevent ovulation.\n3. Intrauterine devices (IUDs): Copper-T placed in uterus — prevents implantation.\n4. Surgical methods: Vasectomy (male — vas deferens cut), Tubectomy (female — fallopian tube cut).\n\nWhy contraception matters:\n• Population control\n• Prevention of STDs (HIV, gonorrhoea, syphilis)\n• Women's health and family planning\n• Spacing between children for better maternal health",
                summary: [
                    "Barrier (condom), Chemical (pills), IUD (Copper-T), Surgical (vasectomy/tubectomy).",
                    "Only condoms protect against both pregnancy AND STDs.",
                    "Vasectomy = male; Tubectomy = female surgical methods.",
                    "Reproductive health includes physical, emotional, and social well-being."
                ],
                misconceptions: [
                    { wrong: "All contraceptive methods prevent STDs.", right: "Only barrier methods (condoms) prevent STDs. Pills, IUDs, and surgery only prevent pregnancy." }
                ],
                animationId: "ReproductionAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 8, Page 141",
                connection: "Understanding reproduction is fundamental before studying how traits are inherited — Heredity."
            }
        ],
        examSection: {
            formulas: [
                { formula: "Pollen → Stigma → Style → Ovule", description: "Path of pollen tube in plants" },
                { formula: "Ovule → Seed | Ovary → Fruit", description: "Post-fertilization changes" },
                { formula: "Fertilization in fallopian tube", description: "Site of fertilization in humans" }
            ],
            derivations: [
                "Difference between self-pollination and cross-pollination — common 3-mark question.",
                "Draw and label longitudinal section of a flower — very important diagram.",
                "Explain the process of fertilization in humans — important 5-mark question."
            ],
            tips: [
                "Binary fission = Amoeba; Budding = Hydra/Yeast — don't mix up!",
                "Bryophyllum reproduces through leaf buds — exam favourite.",
                "Menstruation cycle = 28 days — ovulation occurs around day 14.",
                "Only condoms prevent STDs — important MCQ trap."
            ]
        },
        tests: {
            mcq: [
                { id: "q1", question: "Asexual reproduction takes place through budding in:", options: ["Amoeba", "Yeast", "Plasmodium", "Leishmania"], correct: "Yeast", explanation: "Yeast reproduces asexually by budding — a small outgrowth develops and detaches.", ncertRef: "NCERT Pg. 130" },
                { id: "q2", question: "The part of the flower that develops into a fruit is:", options: ["Stigma", "Ovary", "Anther", "Petal"], correct: "Ovary", explanation: "After fertilization, the ovary develops into a fruit and ovules become seeds.", ncertRef: "NCERT Pg. 138" },
                { id: "q3", question: "Which contraceptive method also protects against STDs?", options: ["Oral pills", "Copper-T", "Condom", "Tubectomy"], correct: "Condom", explanation: "Condoms are barrier methods that prevent both pregnancy and sexually transmitted diseases.", ncertRef: "NCERT Pg. 141" }
            ],
            match: [
                { id: "mt_rep_1", columnA: ["Binary fission", "Budding", "Vegetative propagation", "Ovary", "Anther"], columnB: ["Yeast/Hydra", "Bryophyllum", "Amoeba", "Produces pollen", "Becomes fruit"], correctPairs: { 0: 2, 1: 0, 2: 1, 3: 4, 4: 3 } }
            ]
        }
    },
    {
        id: "ch3_bio_heredity",
        title: "Heredity and Evolution",
        class: 10,
        subject: "Biology",
        ncertPageRange: "Pages 143-166",
        topics: ["Heredity", "Mendel's Laws", "Sex Determination", "Evolution", "Speciation", "Human Evolution"],
        concepts: [
            {
                id: "mendel_laws",
                title: "Mendel's Laws of Inheritance",
                ncertRef: "NCERT Pg. 143",
                hook: "Why do you have your mother's eyes but your father's nose? Gregor Mendel figured out the rules of inheritance 160 years ago using just pea plants.",
                definition: "Heredity is the transmission of characters (traits) from parents to offspring. Mendel's laws describe how traits are inherited through factors (genes).",
                explanation: "Mendel's Experiments with Pea Plants:\n\nMonohybrid Cross (one trait):\n• Crossed tall (TT) × dwarf (tt) pea plants.\n• F1 generation: All tall (Tt) — tall is dominant.\n• F2 generation: 3 tall : 1 dwarf (ratio 3:1).\n• Law of Dominance: One allele dominates the other.\n• Law of Segregation: Two alleles separate during gamete formation.\n\nDihybrid Cross (two traits):\n• Crossed round-yellow (RRYY) × wrinkled-green (rryy).\n• F2 ratio: 9:3:3:1\n• Law of Independent Assortment: Different traits are inherited independently.\n\nKey Terms:\n• Gene: Unit of inheritance on a chromosome.\n• Allele: Different forms of a gene (T and t).\n• Genotype: Genetic makeup (TT, Tt, tt).\n• Phenotype: Physical appearance (tall, dwarf).\n• Homozygous: Same alleles (TT or tt). Heterozygous: Different alleles (Tt).",
                summary: [
                    "Dominant trait expresses in F1; Recessive appears in F2 (3:1 ratio).",
                    "Monohybrid ratio = 3:1; Dihybrid ratio = 9:3:3:1.",
                    "Law of Segregation: Alleles separate during gamete formation.",
                    "Genotype = genetic code; Phenotype = visible trait."
                ],
                misconceptions: [
                    { wrong: "Dominant traits are always more common in a population.", right: "Dominant just means it masks the recessive allele. Frequency in population depends on other factors like natural selection." }
                ],
                animationId: "MendelCrossAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 9, Page 146",
                connection: "These inherited variations are the raw material for evolution by natural selection."
            },
            {
                id: "sex_determination",
                title: "Sex Determination",
                ncertRef: "NCERT Pg. 150",
                hook: "Is it the mother or father who determines the sex of a baby? The answer might surprise many people — it's always the father's chromosome.",
                definition: "Sex determination is the mechanism by which the sex of an organism is established. In humans, it depends on the sex chromosomes inherited from parents.",
                explanation: "Human Sex Determination:\n• Humans have 23 pairs of chromosomes (46 total).\n• 22 pairs are autosomes (same in males and females).\n• 1 pair = sex chromosomes:\n  - Female: XX (both X chromosomes).\n  - Male: XY (one X and one Y chromosome).\n\nInheritance:\n• Mother always contributes X chromosome.\n• Father contributes either X or Y.\n• If sperm carries X → XX → Girl.\n• If sperm carries Y → XY → Boy.\n• Probability: 50% boy, 50% girl.\n\nNote: In some organisms, sex is determined by environment (e.g., temperature in some reptiles) rather than chromosomes.",
                summary: [
                    "Female = XX; Male = XY.",
                    "Father's sperm determines the sex of the child.",
                    "50:50 probability of boy or girl.",
                    "Sex chromosomes are one of 23 pairs in humans."
                ],
                misconceptions: [
                    { wrong: "The mother determines the sex of the baby.", right: "The father's sperm determines sex — if it carries X → girl, if Y → boy. The mother always contributes X." }
                ],
                animationId: "MendelCrossAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 9, Page 150",
                connection: "Sex determination is one example of how chromosomes carry inherited information."
            },
            {
                id: "evolution",
                title: "Evolution",
                ncertRef: "NCERT Pg. 151",
                hook: "Humans and bananas share about 60% of their DNA. How? Because all life on Earth shares a common ancestor billions of years old.",
                definition: "Evolution is the gradual change in inherited characteristics of biological populations over successive generations, driven by natural selection, genetic drift, and other mechanisms.",
                explanation: "Key Concepts:\n\n1. Variation + Natural Selection:\n   • Nature selects organisms best suited to their environment.\n   • Favourable variations accumulate over generations.\n   • Example: Peppered moths — dark moths survived better during industrial pollution.\n\n2. Evidence for Evolution:\n   • Homologous organs: Same structure, different function (human arm, whale flipper, bat wing) — common ancestry.\n   • Analogous organs: Different structure, same function (bird wing vs insect wing) — convergent evolution.\n   • Fossils: Preserved remains showing gradual changes over millions of years.\n\n3. Speciation:\n   • New species form when populations are geographically isolated.\n   • Genetic drift + natural selection in isolated groups → different species.\n   • Reproductive isolation confirms new species.\n\n4. Human Evolution:\n   • Originated in Africa.\n   • Progression: Primates → Australopithecus → Homo habilis → Homo erectus → Homo sapiens.\n   • All races of humans belong to a single species: Homo sapiens.",
                summary: [
                    "Evolution = gradual change over generations via natural selection.",
                    "Homologous organs = common ancestry; Analogous organs = convergent evolution.",
                    "Fossils provide direct evidence of evolution.",
                    "All humans are Homo sapiens — differences are superficial, not genetic species-level."
                ],
                misconceptions: [
                    { wrong: "Humans evolved FROM monkeys.", right: "Humans and apes share a COMMON ANCESTOR. We didn't evolve from modern monkeys — we're cousins, not descendants." }
                ],
                animationId: "MendelCrossAnimation",
                diagramRef: "Source: NCERT Class 10 Biology, Chapter 9, Page 158",
                connection: "Evolution ties together all of biology — genetics, ecology, diversity, and classification."
            }
        ],
        examSection: {
            formulas: [
                { formula: "Monohybrid F2 = 3:1", description: "Phenotypic ratio (dominant : recessive)" },
                { formula: "Dihybrid F2 = 9:3:3:1", description: "Two-trait phenotypic ratio" },
                { formula: "XX = Female | XY = Male", description: "Sex determination in humans" }
            ],
            derivations: [
                "Explain Mendel's monohybrid cross with a checker board — very important 5-mark question.",
                "How is the sex of the child determined in humans? — frequently asked 3-mark question.",
                "Difference between homologous and analogous organs with examples — common 3-mark question."
            ],
            tips: [
                "F1 = First filial generation (all dominant). F2 = Second filial (3:1).",
                "Homologous = same structure = divergent evolution. Analogous = same function = convergent evolution.",
                "Father determines sex of child — most commonly asked MCQ.",
                "All humans = Homo sapiens — important for 1-mark questions."
            ]
        },
        tests: {
            mcq: [
                { id: "q1", question: "The F2 phenotypic ratio in a monohybrid cross is:", options: ["1:1", "2:1", "3:1", "9:3:3:1"], correct: "3:1", explanation: "In a monohybrid cross, the F2 generation shows 3 dominant : 1 recessive phenotypic ratio.", ncertRef: "NCERT Pg. 147" },
                { id: "q2", question: "Who determines the sex of the child in humans?", options: ["Mother", "Father", "Both equally", "Random"], correct: "Father", explanation: "The father's sperm carries either X (girl) or Y (boy) chromosome. Mother always contributes X.", ncertRef: "NCERT Pg. 150" },
                { id: "q3", question: "Wings of a bird and wings of an insect are examples of:", options: ["Homologous organs", "Analogous organs", "Vestigial organs", "Rudimentary organs"], correct: "Analogous organs", explanation: "They have the same function (flying) but different structural origin — convergent evolution.", ncertRef: "NCERT Pg. 154" }
            ],
            match: [
                { id: "mt_her_1", columnA: ["Homologous organs", "Analogous organs", "XX chromosomes", "Fossil", "F2 ratio"], columnB: ["Female", "3:1", "Same structure different function", "Evidence of evolution", "Same function different structure"], correctPairs: { 0: 2, 1: 4, 2: 0, 3: 3, 4: 1 } }
            ]
        }
    }
];
