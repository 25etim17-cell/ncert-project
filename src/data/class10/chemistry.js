export const class10Chemistry = [
    {
        id: "ch1_reactions",
        title: "Chemical Reactions and Equations",
        class: 10,
        subject: "Chemistry",
        ncertPageRange: "Pages 1-16",
        topics: ["Chemical Equations", "Balancing Chemical Equations", "Types of Chemical Reactions", "Oxidation and Reduction", "Effects of Oxidation in Everyday Life"],
        concepts: [
            {
                id: "balancing",
                title: "Balancing Chemical Equations",
                ncertRef: "NCERT Pg. 4",
                hook: "You can never create or destroy atoms in a chemical reaction. Think of it like a Lego set—you can break apart a spaceship to build a car, but you must use the exact same number of Lego bricks.",
                definition: "A balanced chemical equation has an equal number of atoms of different elements in the reactants and products.",
                explanation: "According to the Law of Conservation of Mass (Class 9), mass can neither be created nor destroyed in a chemical reaction. Therefore, the total mass of the elements present in the products has to be precisely equal to the total mass in the reactants.\n\nTo balance an equation, we use the method of 'hit and trial.' We make a list of the elements present, count how many atoms of each are on the Left Hand Side (LHS) and Right Hand Side (RHS), and start adding coefficients (numbers in front of the molecules) until the numbers match perfectly.",
                examples: [
                    {
                        given: "Balance the skeletal equation: Fe + H2O → Fe3O4 + H2",
                        find: "The balanced equation.",
                        steps: [
                            "Step 1: Write equation. Fe + H2O → Fe3O4 + H2.",
                            "Step 2: List atoms. LHS (Fe=1, H=2, O=1) | RHS (Fe=3, H=2, O=4).",
                            "Step 3: Balance O. Put 4 before H2O. LHS now has 8 H and 4 O.",
                            "Step 4: Balance H. Put 4 before H2. Fe + 4H2O → Fe3O4 + 4H2.",
                            "Step 5: Balance Fe. Put 3 before Fe. 3Fe + 4H2O → Fe3O4 + 4H2."
                        ],
                        note: "Never change the formula of the compounds to balance an equation. You can only change the coefficients in front of them."
                    }
                ],
                summary: [
                    "Equations must be balanced to obey Law of Conservation of Mass.",
                    "Balance the heaviest/most complex molecule first.",
                    "Usually, oxygen and hydrogen are balanced last.",
                    "Write physical states (s, l, g, aq) to make it more informative."
                ],
                misconceptions: [
                    {
                        wrong: "H2O can be changed to H2O2 to balance oxygen.",
                        right: "Changing the subscript changes the substance entirely. H2O2 is hydrogen peroxide, which is toxic! Only change the coefficient (like 2H2O)."
                    }
                ],
                animationId: "BalancingEquationAnimation",
                diagramRef: "Source: NCERT Class 10 Chemistry, Chapter 1, Page 4",
                connection: "Once an equation is balanced, we can classify what TYPE of reaction just happened, such as combination or decomposition."
            },
            {
                id: "types_reactions",
                title: "Types of Chemical Reactions",
                ncertRef: "NCERT Pg. 6",
                hook: "Every chemical reaction is like a story — atoms partner up, break apart, switch partners, or even swap partners. Each of these stories has a name.",
                definition: "Chemical reactions can be classified into combination, decomposition, displacement, double displacement, and oxidation-reduction (redox) reactions.",
                explanation: "1. Combination Reaction: Two or more substances combine to form a single product.\n   Example: CaO + H2O → Ca(OH)2 (quicklime + water = slaked lime, releases heat)\n\n2. Decomposition Reaction: A single substance decomposes into two or more simpler substances.\n   Example: 2FeSO4 → Fe2O3 + SO2 + SO3 (ferrous sulphate on heating)\n   Types: Thermal decomposition, Electrolytic decomposition, Photolytic decomposition\n\n3. Displacement Reaction: A more reactive element displaces a less reactive one from its compound.\n   Example: Fe + CuSO4 → FeSO4 + Cu (iron nail in copper sulphate)\n\n4. Double Displacement Reaction: Two compounds exchange their ions.\n   Example: Na2SO4 + BaCl2 → BaSO4↓ + 2NaCl (precipitate forms)\n\n5. Oxidation-Reduction (Redox): Gain of oxygen = oxidation, Loss of oxygen = reduction. Both happen simultaneously.",
                examples: [
                    {
                        given: "When iron nails are added to copper sulphate solution, the solution changes from blue to green.",
                        find: "Type of reaction and explanation.",
                        steps: [
                            "Step 1: Fe(s) + CuSO4(aq) → FeSO4(aq) + Cu(s)",
                            "Step 2: Iron (more reactive) displaces copper (less reactive) from CuSO4.",
                            "Step 3: This is a Displacement Reaction.",
                            "Step 4: Blue colour fades because CuSO4 (blue) is replaced by FeSO4 (green)."
                        ],
                        note: "The activity series (reactivity series) determines which metal can displace which."
                    }
                ],
                summary: [
                    "Combination: A + B → AB",
                    "Decomposition: AB → A + B (needs energy: heat/light/electricity)",
                    "Displacement: A + BC → AC + B (A is more reactive)",
                    "Double Displacement: AB + CD → AD + CB (exchange of ions)"
                ],
                misconceptions: [
                    {
                        wrong: "Rusting is a fast chemical reaction.",
                        right: "Rusting (corrosion) is actually a very slow oxidation reaction. It happens over days, weeks, or months. Not all reactions are fast."
                    }
                ],
                animationId: "ReactionTypeAnimation",
                diagramRef: "Source: NCERT Class 10 Chemistry, Chapter 1, Page 8",
                connection: "Understanding reaction types helps us predict products and is the foundation for analytical chemistry."
            }
        ],
        examSection: {
            formulas: [],
            derivations: [],
            tips: [
                "Practice balancing combustion reactions, they are frequently asked.",
                "Always write the physical states for full marks in a 3-mark question.",
                "Endothermic reactions absorb heat, exothermic release heat.",
                "Rancidity is oxidation of fats and oils — prevented by adding antioxidants or nitrogen gas."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_c10_1",
                    question: "When magnesium ribbon is burnt in air, the ash formed is:",
                    options: ["Black", "White", "Yellow", "Pink"],
                    correct: "White",
                    explanation: "Magnesium burns with a dazzling white flame to form Magnesium Oxide (MgO), which is a white powder.",
                    examTip: "This is based on Activity 1.1 NCERT. Very common 1 mark question.",
                    ncertRef: "NCERT Pg. 1"
                },
                {
                    id: "q_c10_1b",
                    question: "Decomposition of vegetable matter into compost is an example of:",
                    options: ["Endothermic reaction", "Exothermic reaction", "Photolytic reaction", "Electrolytic reaction"],
                    correct: "Exothermic reaction",
                    explanation: "Decomposition of vegetable matter releases heat (composting generates warmth), making it an exothermic decomposition reaction.",
                    examTip: "Exothermic = heat is evolved. Endothermic = heat is absorbed.",
                    ncertRef: "NCERT Pg. 9"
                },
                {
                    id: "q_c10_1c",
                    question: "Which of the following is a double displacement reaction?",
                    options: ["2Mg + O2 → 2MgO", "Zn + CuSO4 → ZnSO4 + Cu", "Na2SO4 + BaCl2 → BaSO4 + 2NaCl", "2H2O → 2H2 + O2"],
                    correct: "Na2SO4 + BaCl2 → BaSO4 + 2NaCl",
                    explanation: "In this reaction, Na2SO4 and BaCl2 exchange their ions (Na goes with Cl, and Ba goes with SO4). This mutual exchange = double displacement.",
                    examTip: "If a precipitate forms or if there's an exchange of ions between two compounds, it's double displacement.",
                    ncertRef: "NCERT Pg. 11"
                }
            ],
            match: [
                {
                    id: "mt_c10_1",
                    columnA: ["Combination", "Decomposition", "Displacement", "Double Displacement", "Exothermic"],
                    columnB: ["A + B → AB", "AB → A + B", "A + BC → AC + B", "AB + CD → AD + CB", "Heat is evolved"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch2_acids_bases",
        title: "Acids, Bases and Salts",
        class: 10,
        subject: "Chemistry",
        ncertPageRange: "Pages 17-36",
        topics: ["Chemical Properties of Acids and Bases", "Reaction with Metals", "Reaction of Metallic Oxides with Acids", "What Acids and Bases Have in Common", "pH Scale", "Importance of pH", "Salts and their Properties"],
        concepts: [
            {
                id: "ph_scale",
                title: "pH Scale and Strength of Acids/Bases",
                ncertRef: "NCERT Pg. 25",
                hook: "Have you ever wondered why lemon juice tastes sour but baking soda tastes slightly bitter? It's all about how many invisible hydrogen ions are floating around in them. We measure this using a universal ruler called the pH scale.",
                definition: "A scale for measuring hydrogen ion concentration in a solution is called the pH scale. The 'p' in pH stands for 'potenz' in German, meaning power.",
                explanation: "All acids produce H+ (hydrogen ions) in water, and all bases produce OH- (hydroxide ions). Even basic solutions have some H+ ions, but the OH- ions outnumber them.\n\nThe pH scale runs from 0 (very acidic) to 14 (very alkaline/basic). \n\n7 is perfectly neutral (pure water). As the pH value drops from 7 to 0, the H+ concentration increases, making the solution a stronger acid. As it rises from 7 to 14, the OH- concentration increases, making it a stronger base.\n\nImportance of pH in everyday life:\n• Our stomach has pH ~1.2 (highly acidic HCl)\n• Our blood maintains pH 7.0–7.8 — any change is dangerous\n• Tooth decay starts below pH 5.5\n• Soil pH affects plant growth\n• Bee stings are acidic (treat with baking soda), wasp stings are basic (treat with vinegar)",
                examples: [
                    {
                        given: "You have two solutions, A and B. pH of A = 6, pH of B = 8.",
                        find: "Which has higher [H+]? Which is acidic?",
                        steps: [
                            "Step 1: pH 6 < 7, so solution A is acidic.",
                            "Step 2: pH 8 > 7, so solution B is basic.",
                            "Step 3: Lower pH = higher [H+] concentration.",
                            "Step 4: Solution A has higher [H+]."
                        ],
                        note: "A difference of 1 on the pH scale = a 10-fold difference in H+ concentration. pH 5 is 10 times more acidic than pH 6."
                    }
                ],
                summary: [
                    "pH < 7 is Acidic. pH > 7 is Basic. pH = 7 is Neutral.",
                    "Strong acids (e.g. HCl) ionize completely in water.",
                    "Weak acids (e.g. Acetic acid) ionize partially.",
                    "Our body works precisely within the pH range of 7.0 to 7.8."
                ],
                misconceptions: [
                    {
                        wrong: "Basic solutions do not contain any H+ ions.",
                        right: "They DO contain H+ ions. It's just that the concentration of OH- ions is much greater than H+, making the overall solution basic."
                    }
                ],
                animationId: "ReactionTypeAnimation",
                diagramRef: "Source: NCERT Class 10 Chemistry, Chapter 2, Page 26",
                connection: "When an acid reacts with a base, they neutralize each other to form a salt and water."
            },
            {
                id: "salts",
                title: "Important Salts and Their Properties",
                ncertRef: "NCERT Pg. 29",
                hook: "The common table salt in your kitchen — NaCl — is the starting material for making things as different as baking soda, bleaching powder, and even caustic soda used in soap making!",
                definition: "A salt is a compound formed by the reaction of an acid and a base. The positive ion of the base and negative ion of the acid combine to form the salt.",
                explanation: "Common Salt (NaCl) is the raw material for many important chemicals:\n\n1. Sodium Hydroxide (NaOH) — Caustic Soda: Made by electrolysis of brine (chlor-alkali process).\n   2NaCl(aq) + 2H2O(l) → 2NaOH(aq) + Cl2(g) + H2(g)\n\n2. Baking Soda (NaHCO3): NaCl + NH3 + CO2 + H2O → NaHCO3 + NH4Cl\n   • Used in baking (makes bread fluffy by releasing CO2)\n   • Used as antacid (neutralizes stomach acid)\n\n3. Washing Soda (Na2CO3.10H2O): Obtained by heating baking soda.\n   2NaHCO3 → Na2CO3 + H2O + CO2, then Na2CO3 + 10H2O → Na2CO3.10H2O\n   • Used in glass, soap, and paper manufacturing.\n\n4. Bleaching Powder (CaOCl2): Ca(OH)2 + Cl2 → CaOCl2 + H2O\n   • Used for water purification and bleaching.\n\n5. Plaster of Paris (CaSO4.½H2O): Obtained by heating Gypsum.\n   • Used for making casts for broken bones and decorative items.",
                examples: [
                    {
                        given: "Write the reaction for making baking soda and give two uses.",
                        find: "Chemical equation and uses of NaHCO3.",
                        steps: [
                            "Step 1: NaCl + NH3 + CO2 + H2O → NaHCO3 + NH4Cl",
                            "Step 2: Uses: (a) In cooking as a leavening agent, (b) As an antacid to neutralize excess stomach acid.",
                            "Step 3: When baking soda is heated: NaHCO3 → Na2CO3 + H2O + CO2 (this CO2 makes bread fluffy)."
                        ],
                        note: "Baking SODA (NaHCO3) and Baking POWDER are different. Baking powder = baking soda + mild acid like tartaric acid."
                    }
                ],
                summary: [
                    "NaCl is the starting material for NaOH, NaHCO3, Na2CO3, Cl2, and HCl production.",
                    "Bleaching powder = CaOCl2 (calcium oxychloride).",
                    "Plaster of Paris = CaSO4.½H2O (sets into hard gypsum with water).",
                    "Water of crystallization gives crystals their shape and colour (e.g., CuSO4.5H2O is blue)."
                ],
                misconceptions: [
                    {
                        wrong: "Baking soda and washing soda are the same thing.",
                        right: "Baking soda is NaHCO3 (sodium hydrogen carbonate). Washing soda is Na2CO3.10H2O (sodium carbonate decahydrate). They have different formulas and uses."
                    }
                ],
                animationId: "BalancingEquationAnimation",
                diagramRef: "Source: NCERT Class 10 Chemistry, Chapter 2, Page 31",
                connection: "Salts are fundamental to industrial chemistry. Understanding their properties helps us in manufacturing, water treatment, and even baking!"
            }
        ],
        examSection: {
            formulas: [],
            derivations: [],
            tips: [
                "Memorize the formulas for common salts: Bleaching powder, Baking soda, Washing soda, Plaster of Paris.",
                "Questions on 'Importance of pH in Everyday Life' are frequent.",
                "water of crystallization: CuSO4.5H2O = blue, FeSO4.7H2O = green.",
                "Chlor-alkali process produces NaOH, Cl2, and H2 simultaneously."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_c10_2",
                    question: "A solution turns red litmus blue, its pH is likely to be:",
                    options: ["1", "4", "5", "10"],
                    correct: "10",
                    explanation: "Bases turn red litmus blue. A basic solution must have a pH strictly greater than 7. Therefore, 10 is the only correct option.",
                    examTip: "Acid turns blue litmus red (ABR). Base turns red litmus blue.",
                    ncertRef: "NCERT Pg. 17"
                },
                {
                    id: "q_c10_2b",
                    question: "Plaster of Paris is obtained by heating:",
                    options: ["Calcium carbonate", "Calcium sulphate dihydrate", "Calcium hydroxide", "Calcium chloride"],
                    correct: "Calcium sulphate dihydrate",
                    explanation: "Plaster of Paris (CaSO4.½H2O) is obtained by heating Gypsum (CaSO4.2H2O) at 373 K. Gypsum is calcium sulphate dihydrate.",
                    examTip: "Do NOT confuse Gypsum (CaSO4.2H2O) with POP (CaSO4.½H2O). Heating removes 1.5 molecules of water.",
                    ncertRef: "NCERT Pg. 34"
                }
            ],
            match: [
                {
                    id: "mt_c10_2",
                    columnA: ["Lemon Juice", "Pure Water", "Milk of Magnesia", "Gastric Juice", "Tooth Decay starts at"],
                    columnB: ["pH ~ 2.2", "pH 7.0", "pH 10.0", "pH 1.2", "pH < 5.5"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch3_metals",
        title: "Metals and Non-Metals",
        class: 10,
        subject: "Chemistry",
        ncertPageRange: "Pages 37-55",
        topics: ["Physical Properties of Metals and Non-metals", "Chemical Properties of Metals", "Reactivity Series", "Ionic Bonds", "Occurrence of Metals", "Corrosion"],
        concepts: [
            {
                id: "reactivity_series",
                title: "Reactivity Series of Metals",
                ncertRef: "NCERT Pg. 43",
                hook: "Why can an iron nail displace copper from its solution, but copper can't displace iron? Metals have a strict hierarchy — a pecking order of reactivity. The more reactive metal always wins.",
                definition: "A list of metals arranged in the order of their decreasing activities is known as an activity series or reactivity series of metals.",
                explanation: "The reactivity series (most to least reactive):\nK > Na > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > [H] > Cu > Hg > Ag > Au > Pt\n\nA more reactive metal can displace a less reactive one from its salt solution. This is the basis of displacement reactions.\n\nReactivity also determines how metals are extracted from ores:\n• Highly reactive metals (Na, K, Ca, Al) — Electrolytic reduction\n• Moderately reactive metals (Zn, Fe, Pb) — Carbon reduction (smelting)\n• Least reactive metals (Cu, Ag, Au) — Found Free or simple heating\n\nCorrosion: When metals react with substances in the environment (air, water, acids), they corrode. Iron rusting (Fe + O2 + H2O → Fe2O3.xH2O) is the most common example. Prevention methods: painting, oiling, galvanization (zinc coating), electroplating.",
                examples: [
                    {
                        given: "A student places iron nails in ZnSO4 solution and zinc pieces in FeSO4 solution.",
                        find: "In which case will a reaction occur?",
                        steps: [
                            "Step 1: Check reactivity. Zn is MORE reactive than Fe in the series.",
                            "Step 2: Zn + FeSO4 → ZnSO4 + Fe — Zn displaces Fe. Reaction occurs!",
                            "Step 3: Fe + ZnSO4 → No reaction. Fe CANNOT displace Zn because Fe is less reactive.",
                            "Step 4: Rule: More reactive displaces less reactive."
                        ],
                        note: "This is why gold (Au) doesn't react with most chemicals — it's at the very bottom of the series."
                    }
                ],
                summary: [
                    "More reactive metal displaces less reactive from solution.",
                    "K, Na, Ca — react vigorously with water.",
                    "Mg, Al, Zn, Fe — react with steam/acids but not cold water.",
                    "Cu, Ag, Au — do not react with water or dilute acids."
                ],
                misconceptions: [
                    {
                        wrong: "Aluminium is less reactive than iron because aluminium doesn't rust like iron.",
                        right: "Aluminium is actually MORE reactive than iron! But it forms a thin protective oxide layer (Al2O3) on its surface that prevents further corrosion. Iron oxide (rust) is porous and keeps corroding."
                    }
                ],
                animationId: "ReactionTypeAnimation",
                diagramRef: "Source: NCERT Class 10 Chemistry, Chapter 3, Page 43",
                connection: "Understanding reactivity helps us predict which metals can be used in displacement reactions and how to extract metals from their ores."
            }
        ],
        examSection: {
            formulas: [],
            derivations: [],
            tips: [
                "Memorize the reactivity series: 'King Soda Can Magnetically Attract Zinc Irons Nicely, Send Proper Hydrogen Canisters Mercifully Silver And Gold Please Terminate.'",
                "Ionic compounds have high melting/boiling points and conduct electricity when dissolved in water or molten.",
                "Anodising is coating aluminium with a thick oxide layer by electrolysis."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_c10_3",
                    question: "An element reacts with oxygen to give a compound with a high melting point. This compound is also soluble in water. The element is likely to be:",
                    options: ["Calcium", "Carbon", "Silicon", "Iron"],
                    correct: "Calcium",
                    explanation: "Calcium (reactive metal) forms CaO which has high MP (ionic) and dissolves in water to form Ca(OH)2. Carbon and silicon form covalent oxides (low MP). Iron oxide doesn't dissolve easily.",
                    examTip: "Metal oxides are basic (ionic, high MP). Non-metal oxides are acidic (covalent, low MP).",
                    ncertRef: "NCERT Pg. 38"
                },
                {
                    id: "q_c10_3b",
                    question: "Which of the following methods is suitable for preventing an iron frying pan from rusting?",
                    options: ["Applying grease", "Applying paint", "Applying a coat of zinc", "All of the above"],
                    correct: "All of the above",
                    explanation: "Rusting requires oxygen and water to be in contact with iron. All three methods (greasing, painting, galvanizing) create a barrier that prevents this contact.",
                    examTip: "Galvanization specifically refers to coating iron with zinc.",
                    ncertRef: "NCERT Pg. 49"
                }
            ],
            match: [
                {
                    id: "mt_c10_3",
                    columnA: ["Malleable", "Ductile", "Sonorous", "Galvanization", "Anodising"],
                    columnB: ["Can be beaten into sheets", "Can be drawn into wires", "Produces ringing sound", "Coating iron with zinc", "Coating aluminium with thick oxide"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    }
];
