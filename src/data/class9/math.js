export const class9Math = [
    {
        id: "ch1_number_systems",
        title: "Number Systems",
        class: 9,
        subject: "Mathematics",
        ncertPageRange: "Pages 1-26",
        topics: ["Rational Numbers", "Irrational Numbers", "Real Numbers and their Decimal Expansions", "Representing Real Numbers on the Number Line", "Operations on Real Numbers", "Laws of Exponents"],
        concepts: [
            {
                id: "rational_irrational",
                title: "Rational and Irrational Numbers",
                ncertRef: "NCERT Pg. 4",
                hook: "Share 3 pizzas among 4 friends — easy: 3/4 each. But measure the diagonal of a 1×1 square — you get √2, a number that goes on forever without repeating. That's irrational!",
                definition: "A number 'r' is rational if it can be written as p/q (p, q are integers, q ≠ 0). A number 's' is irrational if it cannot be written this way.",
                explanation: "Rational Numbers:\n• Includes natural numbers, whole numbers, integers, and fractions.\n• Decimals: either terminate (0.5) or repeat (0.333...).\n• Between any two rational numbers, there are infinitely many rationals.\n\nIrrational Numbers:\n• Cannot be written as p/q.\n• Decimals go on forever without repeating.\n• Examples: √2 = 1.41421..., √3 = 1.73205..., π = 3.14159...\n\nReal Numbers = Rational ∪ Irrational (they completely fill the number line).\n\nLocating √2 on the number line: Draw a unit square, its diagonal = √2 (by Pythagoras). Use compass to transfer this length to the number line.",
                examples: [
                    {
                        given: "Examine whether √225 and √23 are rational or irrational.",
                        find: "The nature of the numbers.",
                        steps: [
                            "Step 1: √225 = 15 (since 15² = 225).",
                            "Step 2: 15 = 15/1, so √225 is rational.",
                            "Step 3: 23 is a prime number.",
                            "Step 4: √(prime) is always irrational. So √23 is irrational."
                        ],
                        note: "Don't assume every square root is irrational. Always simplify first."
                    }
                ],
                summary: [
                    "Rational: p/q form. Decimals terminate or repeat.",
                    "Irrational: Cannot be p/q. Decimals never terminate or repeat.",
                    "Real Numbers = Rational + Irrational.",
                    "Between any two reals, there are infinitely many numbers."
                ],
                misconceptions: [
                    {
                        wrong: "π is 22/7, so it must be rational.",
                        right: "22/7 is just an approximation. The true value of π has an infinite, non-repeating decimal expansion."
                    }
                ],
                animationId: "NumberLineAnimation",
                diagramRef: "Source: NCERT Class 9 Math, Chapter 1, Page 5",
                connection: "All rational and irrational numbers together form the Real Numbers, which fill the number line completely."
            },
            {
                id: "laws_of_exponents",
                title: "Laws of Exponents for Real Numbers",
                ncertRef: "NCERT Pg. 18",
                hook: "Writing 2 × 2 × 2 × 2 × 2 is tedious. Writing 2⁵ is elegant. But what about 2^(1/2) or 2^(-3)? Exponents follow beautiful, simple rules.",
                definition: "For real numbers a and b, and rational exponents m and n, certain rules govern how these expressions can be simplified.",
                explanation: "Laws of Exponents:\n1. a^m × a^n = a^(m+n) — Same base, add powers\n2. (a^m)^n = a^(mn) — Power of a power, multiply\n3. a^m / a^n = a^(m-n) — Same base, subtract powers\n4. a^m × b^m = (ab)^m — Same power, multiply bases\n5. a^0 = 1 (for a ≠ 0)\n6. a^(-n) = 1/a^n\n7. a^(1/n) = ⁿ√a (nth root of a)\n\nSpecial: a^(p/q) = (ⁿ√a)^p = ⁿ√(a^p)\n\nThese rules work for ALL real number bases and ALL rational exponents.",
                examples: [
                    {
                        given: "Simplify: 2^(3/2) × 2^(1/2)",
                        find: "Simplified form.",
                        steps: [
                            "Step 1: Same base (2), so add exponents.",
                            "Step 2: 2^(3/2 + 1/2) = 2^(4/2) = 2² = 4."
                        ],
                        note: "Always check if bases are same before applying exponent laws."
                    }
                ],
                summary: [
                    "Same base: add/subtract exponents.",
                    "Power of power: multiply exponents.",
                    "a^0 = 1, a^(-n) = 1/a^n.",
                    "a^(1/n) = nth root of a."
                ],
                misconceptions: [
                    {
                        wrong: "2³ + 2³ = 2⁶",
                        right: "2³ + 2³ = 2 × 2³ = 2⁴ = 16, NOT 2⁶ = 64. Exponent laws apply to multiplication/division, not addition."
                    }
                ],
                animationId: "NumberLineAnimation",
                diagramRef: "Source: NCERT Class 9 Math, Chapter 1, Page 18",
                connection: "These laws are essential for simplifying complex algebraic expressions involving powers."
            }
        ],
        examSection: {
            formulas: [
                { formula: "a^m × a^n = a^(m+n)", description: "Product of same base" },
                { formula: "(a^m)^n = a^(mn)", description: "Power of a power" },
                { formula: "a^(1/n) = ⁿ√a", description: "Fractional exponent = root" },
                { formula: "(√a + √b)(√a - √b) = a - b", description: "Rationalizing identity" }
            ],
            derivations: [],
            tips: [
                "Rationalizing the denominator: Multiply by conjugate. Essential 3-mark question.",
                "Locating √2, √3, √5 on number line using Pythagoras theorem is must practice.",
                "Remember: √a × √b = √(ab), but √a + √b ≠ √(a+b)."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_m9_1",
                    question: "Which of the following is an irrational number?",
                    options: ["√16", "√(12/3)", "√12", "√100"],
                    correct: "√12",
                    explanation: "√16=4, √(12/3)=√4=2, √100=10 — all rational. √12 = 2√3, which includes irrational √3.",
                    examTip: "Always simplify square roots fully before deciding.",
                    ncertRef: "NCERT Pg. 5"
                },
                {
                    id: "q_m9_1b",
                    question: "Every rational number is:",
                    options: ["A natural number", "An integer", "A real number", "A whole number"],
                    correct: "A real number",
                    explanation: "Real Numbers = Rational + Irrational. So every rational number is definitely a real number. But not every rational is a natural/whole/integer (e.g., 1/2).",
                    examTip: "Natural ⊂ Whole ⊂ Integer ⊂ Rational ⊂ Real.",
                    ncertRef: "NCERT Pg. 1"
                }
            ],
            match: [
                {
                    id: "mt_m9_1",
                    columnA: ["0.333...", "√2", "22/7", "π", "0.5"],
                    columnB: ["Rational (repeating)", "Irrational", "Rational", "Irrational", "Rational (terminating)"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch2_polynomials",
        title: "Polynomials",
        class: 9,
        subject: "Mathematics",
        ncertPageRange: "Pages 27-50",
        topics: ["Polynomials in One Variable", "Zeroes of a Polynomial", "Remainder Theorem", "Factor Theorem", "Factorisation of Polynomials", "Algebraic Identities"],
        concepts: [
            {
                id: "zeroes",
                title: "Zeroes of a Polynomial",
                ncertRef: "NCERT Pg. 32",
                hook: "A ball thrown in the air follows h = 5t - t². When exactly does it hit the ground? Set h = 0 and solve — you're finding the 'zeroes' of the polynomial!",
                definition: "A real number 'a' is a zero of polynomial p(x) if p(a) = 0.",
                explanation: "A polynomial is an expression with variables and constants where exponents are whole numbers.\n\nWhen you substitute a specific number for x and get 0, that number is the 'zero' or 'root'.\n\nLinear polynomial (degree 1): ax + b has exactly one zero: x = -b/a\nQuadratic polynomial (degree 2): can have at most 2 zeroes\nCubic polynomial (degree 3): can have at most 3 zeroes\n\nGeneral rule: A polynomial of degree n has at most n zeroes.",
                examples: [
                    {
                        given: "Find the zero of p(x) = 2x + 1.",
                        find: "Value of x where p(x) = 0.",
                        steps: [
                            "Step 1: Set p(x) = 0.",
                            "2x + 1 = 0",
                            "Step 2: 2x = -1 → x = -1/2.",
                            "Step 3: Verify: p(-1/2) = 2(-1/2) + 1 = -1 + 1 = 0 ✓"
                        ],
                        note: "A linear polynomial has exactly one zero."
                    }
                ],
                summary: [
                    "Zero = value making the polynomial equal to 0.",
                    "Degree n polynomial has at most n zeroes.",
                    "Linear: 1 zero. Quadratic: at most 2. Cubic: at most 3.",
                    "Constant polynomial c (c≠0) has no zeroes."
                ],
                misconceptions: [
                    {
                        wrong: "The zero of a polynomial is always x = 0.",
                        right: "Zero of p(x) = x - 5 is x = 5, not x = 0. The 'zero' refers to the output being 0, not the input."
                    }
                ],
                animationId: "ParabolaAnimation",
                diagramRef: "Source: NCERT Class 9 Math, Chapter 2, Page 33",
                connection: "For harder polynomials, we use the Remainder Theorem and Factor Theorem to find zeroes."
            },
            {
                id: "algebraic_identities",
                title: "Algebraic Identities",
                ncertRef: "NCERT Pg. 40",
                hook: "What's 99²? Instead of multiplying 99 × 99, just use (100-1)² = 10000 - 200 + 1 = 9801. Identities make complex calculations instant!",
                definition: "An algebraic identity is an algebraic equation that is true for all values of the variables.",
                explanation: "Essential Identities to memorize:\n\n1. (a + b)² = a² + 2ab + b² — Square of sum\n2. (a - b)² = a² - 2ab + b² — Square of difference\n3. a² - b² = (a + b)(a - b) — Difference of squares\n4. (x + a)(x + b) = x² + (a+b)x + ab\n5. (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca\n6. (a + b)³ = a³ + b³ + 3ab(a + b)\n7. (a - b)³ = a³ - b³ - 3ab(a - b)\n8. a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)\n\nSpecial case: If a + b + c = 0, then a³ + b³ + c³ = 3abc.",
                examples: [
                    {
                        given: "Evaluate 105 × 95 using identities.",
                        find: "The product.",
                        steps: [
                            "Step 1: 105 × 95 = (100 + 5)(100 - 5).",
                            "Step 2: This is the form (a + b)(a - b) = a² - b².",
                            "Step 3: = 100² - 5² = 10000 - 25 = 9975."
                        ],
                        note: "Always look for opportunities to use identities — they massively simplify calculations."
                    }
                ],
                summary: [
                    "(a+b)² = a² + 2ab + b².",
                    "(a-b)² = a² - 2ab + b².",
                    "a² - b² = (a+b)(a-b).",
                    "If a+b+c = 0, then a³+b³+c³ = 3abc."
                ],
                misconceptions: [
                    {
                        wrong: "(a+b)² = a² + b²",
                        right: "The middle term 2ab is crucial! (a+b)² = a² + 2ab + b². Forgetting the middle term is the most common mistake."
                    }
                ],
                animationId: "ParabolaAnimation",
                diagramRef: "Source: NCERT Class 9 Math, Chapter 2, Page 41",
                connection: "Identities are the foundation for factorizing polynomials and solving equations in higher classes."
            }
        ],
        examSection: {
            formulas: [
                { formula: "(a+b)² = a² + 2ab + b²", description: "Identity I" },
                { formula: "(a-b)² = a² - 2ab + b²", description: "Identity II" },
                { formula: "a² - b² = (a+b)(a-b)", description: "Identity III" },
                { formula: "(x+a)(x+b) = x² + (a+b)x + ab", description: "Identity IV" },
                { formula: "a³+b³+c³ - 3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)", description: "Identity VIII" }
            ],
            derivations: [],
            tips: [
                "Splitting the middle term is essential for factorizing quadratics.",
                "Memorize all 8 identities for board exam 3 and 5 mark questions.",
                "If a + b + c = 0, directly write a³ + b³ + c³ = 3abc — common trick question."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_m9_2",
                    question: "Which of the following is NOT a polynomial?",
                    options: ["x² + 5x + 6", "y³ - √2y", "z + 1/z", "4x⁴ - 3x + 7"],
                    correct: "z + 1/z",
                    explanation: "z + 1/z = z + z⁻¹. The exponent -1 is not a whole number, so not a polynomial.",
                    examTip: "Look for negative exponents or variables in the denominator.",
                    ncertRef: "NCERT Pg. 28"
                },
                {
                    id: "q_m9_2b",
                    question: "The value of 105 × 95 using algebraic identity is:",
                    options: ["9975", "10000", "9950", "9925"],
                    correct: "9975",
                    explanation: "(100+5)(100-5) = 100² - 5² = 10000 - 25 = 9975.",
                    examTip: "Use (a+b)(a-b) = a² - b² for products near round numbers.",
                    ncertRef: "NCERT Pg. 41"
                }
            ],
            match: [
                {
                    id: "mt_m9_2",
                    columnA: ["Degree 1", "Degree 2", "Degree 3", "0 polynomial", "(a+b)²"],
                    columnB: ["Linear", "Quadratic", "Cubic", "Undefined degree", "a²+2ab+b²"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch3_coordinate_geometry",
        title: "Coordinate Geometry",
        class: 9,
        subject: "Mathematics",
        ncertPageRange: "Pages 51-62",
        topics: ["Cartesian System", "Plotting Points in the Plane", "Quadrants", "Axes and Origin"],
        concepts: [
            {
                id: "cartesian_system",
                title: "Cartesian Coordinate System",
                ncertRef: "NCERT Pg. 51",
                hook: "Finding your seat in a cinema — Row F, Seat 12. Two numbers locate your exact position. René Descartes used the same idea to pinpoint any point on a flat surface using two numbers (x, y).",
                definition: "The Cartesian coordinate system consists of two perpendicular number lines (axes) intersecting at their zero point (origin). Any point in the plane can be described by an ordered pair (x, y).",
                explanation: "The x-axis (horizontal) and y-axis (vertical) divide the plane into four quadrants:\n\nQuadrant I: (+, +) — top right\nQuadrant II: (-, +) — top left\nQuadrant III: (-, -) — bottom left\nQuadrant IV: (+, -) — bottom right\n\nThe x-coordinate (abscissa) tells us the horizontal distance. The y-coordinate (ordinate) tells us the vertical distance.\n\nSpecial points:\n• Origin = (0, 0)\n• Points on x-axis: y = 0 → (a, 0)\n• Points on y-axis: x = 0 → (0, b)\n\nThe order matters! (3, 5) and (5, 3) are DIFFERENT points.",
                examples: [
                    {
                        given: "Plot the points A(3, 4), B(-2, 3), C(-1, -4), D(4, -2).",
                        find: "Which quadrant does each point lie in?",
                        steps: [
                            "Step 1: A(3, 4): x=+3, y=+4 → both positive → Quadrant I.",
                            "Step 2: B(-2, 3): x=-2(neg), y=+3(pos) → Quadrant II.",
                            "Step 3: C(-1, -4): both negative → Quadrant III.",
                            "Step 4: D(4, -2): x=+4(pos), y=-2(neg) → Quadrant IV."
                        ],
                        note: "Remember the sign pattern: I(+,+), II(-,+), III(-,-), IV(+,-)."
                    }
                ],
                summary: [
                    "x-axis = horizontal, y-axis = vertical.",
                    "Origin = (0, 0), where axes intersect.",
                    "Quadrant signs: I(+,+), II(-,+), III(-,-), IV(+,-).",
                    "(x, y) is an ordered pair — order matters."
                ],
                misconceptions: [
                    {
                        wrong: "(3, 5) and (5, 3) are the same point because they use the same numbers.",
                        right: "(3, 5) means x=3, y=5. (5, 3) means x=5, y=3. They are completely different locations."
                    }
                ],
                animationId: "NumberLineAnimation",
                diagramRef: "Source: NCERT Class 9 Math, Chapter 3, Page 52",
                connection: "Coordinate geometry is the bridge between algebra and geometry — it lets us describe geometric shapes using equations."
            }
        ],
        examSection: {
            formulas: [],
            derivations: [],
            tips: [
                "Any point on x-axis has y-coordinate = 0.",
                "Any point on y-axis has x-coordinate = 0.",
                "The mirror image of (a, b) in x-axis is (a, -b).",
                "The mirror image of (a, b) in y-axis is (-a, b)."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_m9_3",
                    question: "The point (-3, 4) lies in which quadrant?",
                    options: ["First", "Second", "Third", "Fourth"],
                    correct: "Second",
                    explanation: "x = -3 (negative), y = 4 (positive). Sign pattern (-,+) → Quadrant II.",
                    examTip: "I(+,+), II(-,+), III(-,-), IV(+,-).",
                    ncertRef: "NCERT Pg. 54"
                },
                {
                    id: "q_m9_3b",
                    question: "The abscissa of every point on the y-axis is:",
                    options: ["0", "1", "-1", "Any number"],
                    correct: "0",
                    explanation: "Points on y-axis have x = 0. So (0, y) for any value of y lies on the y-axis.",
                    examTip: "Abscissa = x-coordinate, Ordinate = y-coordinate.",
                    ncertRef: "NCERT Pg. 53"
                }
            ],
            match: [
                {
                    id: "mt_m9_3",
                    columnA: ["Quadrant I", "Quadrant III", "Origin", "x-axis point", "Abscissa"],
                    columnB: ["Both coordinates positive", "Both coordinates negative", "(0, 0)", "(a, 0)", "x-coordinate"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    },
    {
        id: "ch4_linear_equations",
        title: "Linear Equations in Two Variables",
        class: 9,
        subject: "Mathematics",
        ncertPageRange: "Pages 63-78",
        topics: ["Linear Equations", "Solution of a Linear Equation", "Graph of a Linear Equation", "Equations of Lines Parallel to Axes"],
        concepts: [
            {
                id: "linear_eq_two_var",
                title: "Linear Equations in Two Variables",
                ncertRef: "NCERT Pg. 63",
                hook: "A notebook costs ₹x, and a pen costs ₹y. If 2 notebooks and 3 pens together cost ₹50, that gives us 2x + 3y = 50. Finding ALL possible (x, y) pairs is what linear equations are about.",
                definition: "An equation of the form ax + by + c = 0, where a, b and c are real numbers and a and b are not both zero, is called a linear equation in two variables.",
                explanation: "A linear equation in two variables has infinitely many solutions. Each solution is an ordered pair (x, y) that satisfies the equation.\n\nExample: x + y = 10\nSolutions: (1,9), (2,8), (3,7), (5,5), (0,10), (-1,11), (3.5, 6.5)...\nAll these points, when plotted, form a STRAIGHT LINE.\n\nGraph of a Linear Equation:\n1. Find at least 2 solutions (preferably 3 for verification).\n2. Plot them on the Cartesian plane.\n3. Join them — you always get a straight line.\n\nSpecial cases:\n• y = 3 (or y = constant): Horizontal line parallel to x-axis.\n• x = -2 (or x = constant): Vertical line parallel to y-axis.\n• x = 0: The y-axis itself.\n• y = 0: The x-axis itself.",
                examples: [
                    {
                        given: "Draw the graph of 2x + 3y = 12.",
                        find: "Three solutions and the graph.",
                        steps: [
                            "Step 1: When x = 0: 3y = 12 → y = 4. Point: (0, 4).",
                            "Step 2: When y = 0: 2x = 12 → x = 6. Point: (6, 0).",
                            "Step 3: When x = 3: 6 + 3y = 12 → 3y = 6 → y = 2. Point: (3, 2).",
                            "Step 4: Plot (0,4), (6,0), (3,2) and draw a straight line through them."
                        ],
                        note: "All three points should be collinear (on the same line). If not, recheck calculations."
                    }
                ],
                summary: [
                    "Standard form: ax + by + c = 0 (a, b not both zero).",
                    "Infinitely many solutions.",
                    "Graph is always a straight line.",
                    "y = constant → horizontal line. x = constant → vertical line."
                ],
                misconceptions: [
                    {
                        wrong: "A linear equation in two variables has only one solution like x + y = 10 means x=5, y=5.",
                        right: "It has INFINITELY many solutions: (1,9), (2,8), (0,10), (-1,11), etc. The graph is an entire line of solutions."
                    }
                ],
                animationId: "ParabolaAnimation",
                diagramRef: "Source: NCERT Class 9 Math, Chapter 4, Page 65",
                connection: "In Class 10, you'll learn to solve two linear equations simultaneously (both conditions satisfied at once)."
            }
        ],
        examSection: {
            formulas: [
                { formula: "ax + by + c = 0", description: "Standard form of linear equation" },
                { formula: "y = mx + c", description: "Slope-intercept form" }
            ],
            derivations: [],
            tips: [
                "For drawing graphs, find x-intercept (set y=0) and y-intercept (set x=0).",
                "The graph of every linear equation in two variables is a straight line.",
                "x = 0 is the equation of the y-axis. y = 0 is the equation of the x-axis."
            ]
        },
        tests: {
            mcq: [
                {
                    id: "q_m9_4",
                    question: "The equation 2x + 3y = 12 has:",
                    options: ["A unique solution", "Two solutions", "Infinitely many solutions", "No solution"],
                    correct: "Infinitely many solutions",
                    explanation: "A linear equation in two variables always has infinitely many solutions forming a straight line.",
                    examTip: "One variable linear eq → unique solution. Two variable → infinite solutions.",
                    ncertRef: "NCERT Pg. 64"
                },
                {
                    id: "q_m9_4b",
                    question: "The graph of y = 5 is a line:",
                    options: ["Passing through the origin", "Parallel to x-axis", "Parallel to y-axis", "Cutting both axes"],
                    correct: "Parallel to x-axis",
                    explanation: "y = 5 means y is always 5 regardless of x. This is a horizontal line 5 units above the x-axis.",
                    examTip: "y = constant → horizontal. x = constant → vertical.",
                    ncertRef: "NCERT Pg. 73"
                }
            ],
            match: [
                {
                    id: "mt_m9_4",
                    columnA: ["y = 0", "x = 0", "y = 3", "x = -2", "y = x"],
                    columnB: ["x-axis", "y-axis", "Parallel to x-axis", "Parallel to y-axis", "Line through origin"],
                    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
                }
            ]
        }
    }
];
