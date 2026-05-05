export const class10Math = [
    {
        id: "ch1_quadratic",
        title: "Quadratic Equations",
        class: 10,
        subject: "Mathematics",
        ncertPageRange: "Pages 70-90",
        topics: ["Quadratic Equations", "Solution by Factorisation", "Solution by Completing the Square", "Nature of Roots (Discriminant)"],
        concepts: [
            {
                id: "factorisation",
                title: "Solving Quadratic Equations by Factorisation",
                ncertRef: "NCERT Pg. 74",
                hook: "A farmer's rectangular field has an area of 528 m² and the length is 1 m more than twice the breadth. What's the breadth? To find it, you need to solve x(2x + 1) = 528 — a quadratic equation!",
                definition: "A quadratic equation in the variable x is an equation of the form ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0.",
                explanation: "Method of splitting the middle term:\nTo solve ax² + bx + c = 0 by factorisation, we need to find two numbers whose product is a × c and whose sum is b.\n\nExample: x² - 5x + 6 = 0\nHere a×c = 1×6 = 6, and b = -5.\nWe need two numbers: product = 6, sum = -5 → (-2) and (-3).\nSplit: x² - 2x - 3x + 6 = 0\nGroup: x(x - 2) - 3(x - 2) = 0\nFactor: (x - 2)(x - 3) = 0\nx = 2 or x = 3.\n\nThis method works perfectly when the roots are rational numbers. For irrational roots, we use the quadratic formula.",
                examples: [
                    {
                        given: "Solve 2x² + x - 6 = 0 by factorisation.",
                        find: "The roots of the equation.",
                        steps: [
                            "Step 1: a×c = 2×(-6) = -12. b = 1.",
                            "Step 2: Find two numbers: product = -12, sum = 1 → 4 and -3.",
                            "Step 3: Split: 2x² + 4x - 3x - 6 = 0",
                            "Step 4: Group: 2x(x + 2) - 3(x + 2) = 0",
                            "Step 5: Factor: (2x - 3)(x + 2) = 0",
                            "Step 6: x = 3/2 or x = -2."
                        ],
                        note: "Verify by substitution: 2(3/2)² + 3/2 - 6 = 2(9/4) + 3/2 - 6 = 9/2 + 3/2 - 6 = 6 - 6 = 0 ✓"
                    }
                ],
                summary: [
                    "Standard form: ax² + bx + c = 0 (a ≠ 0).",
                    "Splitting middle term: find two numbers with product ac and sum b.",
                    "Factor into two brackets, set each = 0.",
                    "Always verify roots by substituting back."
                ],
                misconceptions: [
                    {
                        wrong: "Any equation with x² is a quadratic equation.",
                        right: "x⁴ + x² = 5 has x² but is NOT quadratic (it's biquadratic). The HIGHEST power of the variable must be exactly 2."
                    }
                ],
                animationId: "ParabolaAnimation",
                diagramRef: "Source: NCERT Class 10 Math, Chapter 4, Page 74",
                connection: "Not all quadratics can be easily factorised. For those, we use the method of completing the square, which leads to the powerful quadratic formula."
            },
            {
                id: "nature_of_roots",
                title: "Nature of Roots and Discriminant",
                ncertRef: "NCERT Pg. 88",
                hook: "When you throw a ball, will it ever reach the 10-meter mark? By checking the 'Discriminant' of the quadratic equation modeling its flight, you can instantly know if it will hit it twice, exactly once, or never at all—without even fully solving the equation!",
                definition: "For the quadratic equation ax² + bx + c = 0, the expression b² - 4ac is called the discriminant (D). It determines whether the roots are real or non-real.",
                explanation: "The roots of a quadratic equation are given by:\nx = [-b ± √(b² - 4ac)] / 2a\n\nThe discriminant D = b² - 4ac determines the nature of roots:\n\nCase 1: D > 0 — Two distinct real roots (curve crosses x-axis at two points).\nCase 2: D = 0 — Two equal real roots (curve just touches the x-axis).\nCase 3: D < 0 — No real roots (curve doesn't cross the x-axis at all).\n\nThis is especially useful in problems where you need to find the value of k such that roots are equal — just set D = 0.",
                examples: [
                    {
                        given: "Find the discriminant of 2x² - 4x + 3 = 0, and hence find the nature of its roots.",
                        find: "Discriminant D, and nature of roots.",
                        steps: [
                            "Step 1: a = 2, b = -4, c = 3.",
                            "Step 2: D = b² - 4ac = (-4)² - 4(2)(3)",
                            "D = 16 - 24 = -8.",
                            "Step 3: Since D < 0, the equation has no real roots."
                        ],
                        note: "Always include the negative signs when identifying a, b, c."
                    }
                ],
                summary: [
                    "Discriminant D = b² - 4ac.",
                    "D > 0: Two distinct real roots.",
                    "D = 0: Two equal real roots.",
                    "D < 0: No real roots."
                ],
                misconceptions: [
                    {
                        wrong: "If D = 0, the equation has only ONE root.",
                        right: "A quadratic equation always has exactly two roots. When D = 0, those roots simply have the exact same value."
                    }
                ],
                animationId: "DiscriminantAnimation",
                diagramRef: "Source: NCERT Class 10 Math, Chapter 4, Page 88",
                connection: "Understanding quadratic equations is essential for solving complex area and speed/time word problems."
            }
        ],
        examSection: {
            formulas: [
                { formula: "x = [-b ± √(b² - 4ac)] / 2a", description: "Quadratic Formula" },
                { formula: "D = b² - 4ac", description: "Discriminant" },
                { formula: "Sum of roots = -b/a", description: "Sum of roots of ax² + bx + c = 0" },
                { formula: "Product of roots = c/a", description: "Product of roots of ax² + bx + c = 0" }
            ],
            derivations: [
                "The method of completing the square is a classic derivation to obtain the quadratic formula."
            ],
            tips: [
                "In word problems involving speed/time or age, reject negative roots if the variable models physical distance or time.",
                "Questions asking 'Find the value of k for which the roots are equal' mean you just set b² - 4ac = 0 and solve for k.",
                "If sum and product of roots are given, the equation is: x² - (sum)x + (product) = 0."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_m10_1",
                    question: "The roots of the quadratic equation x² - 3x - m(m+3) = 0, where m is a constant, are:",
                    options: ["m, m+3", "-m, m+3", "m, -(m+3)", "-m, -(m+3)"],
                    correct: "-m, m+3",
                    explanation: "Splitting: x² - (m+3)x + mx - m(m+3) = 0. Therefore, (x+m)(x-(m+3)) = 0. So x = -m or x = m+3.",
                    examTip: "Using algebraic constants in quadratic equations is a very common trick.",
                    ncertRef: "NCERT Pg. 74"
                },
                {
                    id: "q_m10_1b",
                    question: "If the discriminant of a quadratic equation is zero, then its roots are:",
                    options: ["Not real", "Real and unequal", "Real and equal", "Rational and unequal"],
                    correct: "Real and equal",
                    explanation: "D = 0 means the ± part of the quadratic formula is ±0, giving only one value. Two roots exist but are equal.",
                    examTip: "D = 0 is the condition used in 'find k' type questions.",
                    ncertRef: "NCERT Pg. 88"
                }
            ],
            match: [
                {
                    id: "mt_m10_1",
                    columnA: ["D > 0", "D = 0", "D < 0", "Quadratic Formula", "Standard Form"],
                    columnB: ["2 distinct real roots", "2 equal real roots", "No real roots", "x = [-b ± √D] / 2a", "ax² + bx + c = 0"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch2_ap",
        title: "Arithmetic Progressions",
        class: 10,
        subject: "Mathematics",
        ncertPageRange: "Pages 93-116",
        topics: ["Arithmetic Progressions", "nth Term of an AP", "Sum of First n Terms of an AP"],
        concepts: [
            {
                id: "nth_term",
                title: "nth Term of an Arithmetic Progression",
                ncertRef: "NCERT Pg. 100",
                hook: "You get ₹100 pocket money in January and it increases by ₹50 each month. Can you predict exactly how much you'll get in December without counting month by month? That's the power of the nth term formula.",
                definition: "In an AP with first term 'a' and common difference 'd', the nth term (also called the general term) is given by: an = a + (n-1)d.",
                explanation: "An Arithmetic Progression (AP) is a sequence where each term increases (or decreases) by a fixed constant called the common difference (d).\n\nExamples of APs: 2, 5, 8, 11, ... (d = 3), 100, 97, 94, 91, ... (d = -3)\n\nTo find d: d = any term - previous term = a2 - a1\n\nThe nth term formula lets you jump directly to ANY term:\na1 = a (first term)\na2 = a + d\na3 = a + 2d\nPattern: an = a + (n-1)d\n\nTo find if a number is part of an AP, substitute it for 'an', solve for n, and check if n is a positive integer.",
                examples: [
                    {
                        given: "AP: 3, 8, 13, 18, ...",
                        find: "The 20th term.",
                        steps: [
                            "Step 1: a = 3, d = 8 - 3 = 5, n = 20.",
                            "Step 2: an = a + (n-1)d",
                            "a20 = 3 + (20-1)(5) = 3 + 19 × 5 = 3 + 95 = 98."
                        ],
                        note: "If asked 'which term is 253?', set 253 = 3 + (n-1)5 and solve for n."
                    }
                ],
                summary: [
                    "Common difference d = a2 - a1 (must be constant throughout).",
                    "nth term: an = a + (n-1)d.",
                    "If d > 0, AP is increasing. If d < 0, AP is decreasing. If d = 0, all terms are equal.",
                    "Last term l = an = a + (n-1)d. Useful when you know the last term."
                ],
                misconceptions: [
                    {
                        wrong: "1, 4, 9, 16, 25, ... is an AP because the differences are increasing regularly.",
                        right: "The differences are 3, 5, 7, 9, ... which are NOT constant. A constant common difference is the defining requirement of an AP."
                    }
                ],
                animationId: "SumOfAPAnimation",
                diagramRef: "Source: NCERT Class 10 Math, Chapter 5, Page 100",
                connection: "Once we can find any specific term, the next natural question is: what's the SUM of the first n terms?"
            },
            {
                id: "sum_ap",
                title: "Sum of First n Terms of an AP",
                ncertRef: "NCERT Pg. 107",
                hook: "A young Carl Gauss was asked by his teacher to add all numbers from 1 to 100. Instead of adding sequentially, he finished in 5 seconds by discovering a brilliant pattern. That pattern is the sum formula of an AP.",
                definition: "The sum of the first n terms of an AP with first term 'a' and common difference 'd' is S = n/2 * [2a + (n-1)d].",
                explanation: "Gauss realized that pairing the first and last numbers (1+100 = 101), the second and second-to-last (2+99 = 101), they all sum to the same amount. How many pairs? n/2.\n\nFor any AP: Sn = (n/2) × [First term + Last term] = (n/2)[a + l]\n\nIf the last term is unknown, substitute l = a + (n-1)d:\nSn = (n/2) × [2a + (n-1)d]\n\nUseful relation: an = Sn - Sn-1 (the nth term equals the total sum minus the sum of the first n-1 terms).",
                examples: [
                    {
                        given: "Find the sum of the first 22 terms of the AP: 8, 3, -2, ...",
                        find: "S22",
                        steps: [
                            "Step 1: a = 8, d = 3 - 8 = -5, n = 22.",
                            "Step 2: Sn = (n/2)[2a + (n-1)d]",
                            "S22 = (22/2)[2(8) + (21)(-5)]",
                            "= 11[16 - 105] = 11[-89] = -979."
                        ],
                        note: "The sum can be negative if the common difference is negative and enough terms are accumulated."
                    }
                ],
                summary: [
                    "Sum to n terms: Sn = (n/2)[2a + (n-1)d].",
                    "Alternative: Sn = (n/2)[a + l] where l is the last term.",
                    "nth term from sums: an = Sn - Sn-1.",
                    "Sum of first n naturals: n(n+1)/2."
                ],
                misconceptions: [
                    {
                        wrong: "The sum of positive terms is always positive.",
                        right: "An AP starting positive with negative d (e.g. 5, 2, -1, -4...) will eventually have a negative sum."
                    }
                ],
                animationId: "SumOfAPAnimation",
                diagramRef: "Source: NCERT Class 10 Math, Chapter 5, Page 108",
                connection: "This arithmetic series concept is an introduction to evaluating infinite geometric series in higher classes."
            }
        ],
        examSection: {
            formulas: [
                { formula: "an = a + (n-1)d", description: "nth Term of an AP" },
                { formula: "Sn = (n/2)[2a + (n-1)d]", description: "Sum of first n terms" },
                { formula: "Sn = (n/2)[a + l]", description: "Sum when last term 'l' is known" },
                { formula: "n = [(l - a)/d] + 1", description: "Number of terms given first, last term, and d" }
            ],
            derivations: [
                "Proof by writing the sum forwards and backwards and adding them together."
            ],
            tips: [
                "Word problems often require identifying what 'n', 'an', and 'Sn' correspond to.",
                "If 3 numbers are in AP, say a-d, a, a+d. Their sum gives 3a.",
                "Sum of first n odd numbers = n². Sum of first n even numbers = n(n+1)."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_m10_2",
                    question: "The 10th term of the AP: 5, 8, 11, 14, ... is",
                    options: ["32", "35", "38", "185"],
                    correct: "32",
                    explanation: "a=5, d=3. a10 = 5 + (10-1)3 = 5 + 27 = 32.",
                    examTip: "Always use the formula. Do not try to manually count.",
                    ncertRef: "NCERT Pg. 102"
                },
                {
                    id: "q_m10_2b",
                    question: "The sum of the first 20 terms of the AP: 1, 4, 7, 10, ... is:",
                    options: ["570", "590", "600", "610"],
                    correct: "590",
                    explanation: "a=1, d=3, n=20. S = (20/2)[2(1) + 19(3)] = 10[2 + 57] = 10 × 59 = 590.",
                    examTip: "Read question carefully — is it asking for the nth TERM or the SUM?",
                    ncertRef: "NCERT Pg. 107"
                },
                {
                    id: "q_m10_2c",
                    question: "If the nth term of an AP is (2n + 1), then the common difference is:",
                    options: ["1", "2", "3", "4"],
                    correct: "2",
                    explanation: "a1 = 2(1) + 1 = 3. a2 = 2(2) + 1 = 5. d = a2 - a1 = 5 - 3 = 2.",
                    examTip: "When nth term expression is given, d = coefficient of n.",
                    ncertRef: "NCERT Pg. 100"
                }
            ],
            match: [
                {
                    id: "mt_m10_2",
                    columnA: ["First Term", "Common Difference", "nth Term", "Sum of n terms", "a + l"],
                    columnB: ["a", "d", "a + (n-1)d", "(n/2)[2a + (n-1)d]", "Used when last term known"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch3_triangles",
        title: "Triangles (Similarity)",
        class: 10,
        subject: "Mathematics",
        ncertPageRange: "Pages 117-142",
        topics: ["Similar Figures", "Similarity of Triangles", "Criteria for Similarity", "Areas of Similar Triangles", "Pythagoras Theorem"],
        concepts: [
            {
                id: "similarity_criteria",
                title: "Criteria for Similarity of Triangles",
                ncertRef: "NCERT Pg. 126",
                hook: "A small passport photo of you and a large poster of you — they look identical just at different scales. That's geometric similarity. If two triangles have the same shape but different sizes, they are 'similar'.",
                definition: "Two triangles are said to be similar if (i) their corresponding angles are equal, and (ii) their corresponding sides are in the same ratio (proportion).",
                explanation: "Three conditions to check (any ONE is sufficient):\n\n1. AAA / AA (Angle-Angle): If two angles of one triangle are equal to two angles of another, they are similar.\n   (If 2 angles match, the third automatically matches since sum = 180°)\n\n2. SSS (Side-Side-Side): If all three pairs of corresponding sides are in the same ratio, the triangles are similar.\n\n3. SAS (Side-Angle-Side): If one pair of angles is equal AND the sides including that angle are in the same ratio, they are similar.\n\nSymbol for similarity: △ABC ~ △DEF (order of vertices matters!)\n\nBasic Proportionality Theorem (BPT / Thales' Theorem): If a line is drawn parallel to one side of a triangle to intersect the other two sides, it divides those sides in the same ratio.",
                examples: [
                    {
                        given: "In △ABC, DE ∥ BC, AD = 4 cm, DB = 6 cm, AE = 5 cm.",
                        find: "EC.",
                        steps: [
                            "Step 1: By BPT (Thales' theorem), AD/DB = AE/EC.",
                            "Step 2: 4/6 = 5/EC",
                            "Step 3: EC = (5 × 6) / 4 = 30/4 = 7.5 cm."
                        ],
                        note: "BPT only works when the line is PARALLEL to a side."
                    }
                ],
                summary: [
                    "Similar ≠ Congruent. Similar = same shape, different size.",
                    "AA, SSS, SAS are the three criteria.",
                    "BPT: Line ∥ to one side divides the other two proportionally.",
                    "Ratio of areas of similar triangles = square of ratio of sides."
                ],
                misconceptions: [
                    {
                        wrong: "If sides of two triangles are equal, they are similar.",
                        right: "If sides are EQUAL, they are CONGRUENT (identical), which is a special case of similarity with ratio 1:1."
                    }
                ],
                animationId: "ParabolaAnimation",
                diagramRef: "Source: NCERT Class 10 Math, Chapter 6, Page 126",
                connection: "Similarity leads us to one of the most important theorems in all of mathematics — the Pythagoras Theorem."
            }
        ],
        examSection: {
            formulas: [
                { formula: "AD/DB = AE/EC", description: "Basic Proportionality Theorem (BPT)" },
                { formula: "Area ratio = (side ratio)²", description: "Areas of similar triangles" },
                { formula: "a² + b² = c²", description: "Pythagoras Theorem" }
            ],
            derivations: [
                "Proof of BPT (Thales' Theorem) is a very important 5-mark question.",
                "Proof of Pythagoras theorem using similarity of triangles."
            ],
            tips: [
                "When writing similarity, ORDER matters: △ABC ~ △DEF means A↔D, B↔E, C↔F.",
                "To find ratio of areas, square the ratio of any pair of corresponding sides.",
                "Pythagoras Theorem: hypotenuse² = base² + perpendicular²."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_m10_3",
                    question: "If △ABC ~ △DEF and the ratio of their corresponding sides is 3:5, then the ratio of their areas is:",
                    options: ["3:5", "5:3", "9:25", "25:9"],
                    correct: "9:25",
                    explanation: "Ratio of areas of similar triangles = (ratio of sides)² = (3/5)² = 9/25.",
                    examTip: "For areas, SQUARE the side ratio. For perimeters, use the side ratio directly.",
                    ncertRef: "NCERT Pg. 137"
                },
                {
                    id: "q_m10_3b",
                    question: "In △ABC, DE ∥ BC. If AD/DB = 2/3, then AE/AC is:",
                    options: ["2/3", "2/5", "3/5", "3/2"],
                    correct: "2/5",
                    explanation: "By BPT, AD/DB = AE/EC = 2/3. So AE = 2k, EC = 3k. AC = AE + EC = 5k. AE/AC = 2k/5k = 2/5.",
                    examTip: "Often questions switch between AD/DB, AD/AB, AE/AC. Be careful with the ratios.",
                    ncertRef: "NCERT Pg. 122"
                }
            ],
            match: [
                {
                    id: "mt_m10_3",
                    columnA: ["AA Similarity", "SSS Similarity", "SAS Similarity", "BPT", "Pythagoras"],
                    columnB: ["Two angles equal", "All sides proportional", "One angle equal + including sides proportional", "Line parallel to a side", "a² + b² = c²"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    }
];
