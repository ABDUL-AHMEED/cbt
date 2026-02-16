// --- CONFIGURATION & DATA ---
let currentSubject = "English";
let currentIndex = 0;
let selectedSubjects = []; // Holds English + 3 others
let userAnswers = {}; // Format: { "Mathematics": { 0: 1, 1: 3 } }

const examData = {
    Science: ["English", "Mathematics", "Physics", "Chemistry", "Biology"],
    Art: ["English", "Government", "Literature", "IRS", "CRS", "History"],
    Commercial: ["English", "Mathematics", "Economics", "Commerce", "Accounts"],
    
    // THE QUESTION BANK - This is where you paste the questions I give you
    questions: {
        "English": [
    {q: "Choose the option nearest in meaning: The man was 'adamant' about his decision.", options: ["Flexible", "Stubborn", "Confused", "Happy"], ans: 1},
    {q: "Choose the option opposite in meaning: The room was 'spacious'.", options: ["Large", "Wide", "Cramped", "Clean"], ans: 2},
    {q: "Fill the gap: Neither the teacher nor the students ____ present.", options: ["was", "were", "is", "am"], ans: 1},
    {q: "The plural of 'Alumnus' is?", options: ["Alumni", "Alumnuses", "Alumna", "Alumnas"], ans: 0},
    {q: "One who specializes in the study of birds is an?", options: ["Zoologist", "Biologist", "Ornithologist", "Anthropologist"], ans: 2},
    {q: "Choose the correctly spelled word:", options: ["Occurence", "Occurrence", "Ocurence", "Occurrance"], ans: 1},
    {q: "Fill the gap: I look forward to ____ you soon.", options: ["see", "seen", "seeing", "saw"], ans: 2},
    {q: "The expression 'to let the cat out of the bag' means?", options: ["To be kind", "To reveal a secret", "To buy a pet", "To be careless"], ans: 1},
    {q: "Choose the option opposite in meaning: He is a 'prodigal' son.", options: ["Wasteful", "Rich", "Wicked", "Frugal"], ans: 3},
    {q: "Which of these is a synonym for 'Abundant'?", options: ["Scant", "Rare", "Plentiful", "Few"], ans: 2},
    {q: "Fill the gap: She ____ English very well.", options: ["speak", "speaking", "spoken", "speaks"], ans: 3},
    {q: "Choose the correctly spelled word:", options: ["Accommodation", "Accomodation", "Acommodation", "Accommadation"], ans: 0},
    {q: "The plural of 'Criterion' is?", options: ["Criterions", "Criteria", "Criterias", "Criterion"], ans: 1},
    {q: "Nearest in meaning: The rain was 'imminent'.", options: ["Far", "Stopping", "Likely to happen soon", "Heavy"], ans: 2},
    {q: "Fill the gap: It is high time we ____ home.", options: ["go", "gone", "went", "going"], ans: 2},
    {q: "Opposite in meaning: The evidence was 'vague'.", options: ["Unclear", "Hidden", "Strong", "Clear"], ans: 3},
    {q: "Nearest in meaning: The lady is 'garrulous'.", options: ["Quiet", "Talkative", "Beautiful", "Shy"], ans: 1},
    {q: "Choose the correctly spelled word:", options: ["Maintenance", "Maintainance", "Maintenace", "Maintenence"], ans: 0},
    {q: "A person who writes a book is an?", options: ["Editor", "Publisher", "Reader", "Author"], ans: 3},
    {q: "Nearest in meaning: The task was 'herculean'.", options: ["Easy", "Short", "Very difficult", "Boring"], ans: 2},
    {q: "Opposite in meaning: He gave a 'concise' report.", options: ["Brief", "Long", "Short", "Accurate"], ans: 1},
    {q: "Fill the gap: One should be careful with ____ money.", options: ["their", "his", "her", "one's"], ans: 3},
    {q: "Nearest in meaning: The news 'devastated' her.", options: ["Happy", "Confused", "Shattered", "Alerted"], ans: 2},
    {q: "Opposite in meaning: The giant was 'benevolent'.", options: ["Kind", "Malevolent", "Big", "Strong"], ans: 1},
    {q: "Choose the correctly spelled word:", options: ["Receive", "recieve", "receve", "recive"], ans: 0},
    {q: "The word 'Assuage' means to?", options: ["Aggravate", "Soothe", "Forget", "Increase"], ans: 1},
    {q: "Opposite in meaning: 'Explicit' instructions.", options: ["Clear", "Hidden", "Ambiguous", "Direct"], ans: 2},
    {q: "Nearest in meaning: He has 'affluence'.", options: ["Wealth", "Poverty", "Influenza", "Power"], ans: 0},
    {q: "Fill the gap: They have ____ their dinner.", options: ["eat", "ate", "eaten", "eating"], ans: 2},
    {q: "A collection of poems is an?", options: ["Anthology", "Biography", "Bibliography", "Dictionary"], ans: 0},
    {q: "Choose the correctly spelled word:", options: ["Harass", "Harrass", "Harasss", "Harras"], ans: 0},
    {q: "Opposite in meaning: 'Innocent' victim.", options: ["Clean", "Guilty", "Pure", "Naive"], ans: 1},
    {q: "Nearest in meaning: 'Lethargic' behavior.", options: ["Active", "Lazy", "Smart", "Brave"], ans: 1},
    {q: "Fill the gap: The boy is ____ than his brother.", options: ["tall", "taller", "tallest", "more tall"], ans: 1},
    {q: "The word 'Obsolete' means?", options: ["New", "Modern", "Outdated", "Expensive"], ans: 2},
    {q: "Opposite in meaning: 'Sober' reflection.", options: ["Drunk", "Calm", "Frivolous", "Serious"], ans: 2},
    {q: "Nearest in meaning: 'Incessant' noise.", options: ["Loud", "Stopping", "Constant", "Soft"], ans: 2},
    {q: "Fill the gap: If I ____ a bird, I would fly.", options: ["am", "was", "were", "be"], ans: 2},
    {q: "The sound /p/ is a?", options: ["Vowel", "Consonant", "Diphthong", "None"], ans: 1},
    {q: "Choose the correctly spelled word:", options: ["Separate", "Seperate", "Seprate", "Saparate"], ans: 0},
    {q: "Opposite in meaning: 'Optimistic' outlook.", options: ["Hopeful", "Pessimistic", "Cheerful", "Sad"], ans: 1},
    {q: "Nearest in meaning: 'Meticulous' planning.", options: ["Careless", "Fast", "Careful", "Brave"], ans: 2},
    {q: "Fill the gap: The car belongs to ____.", options: ["me", "I", "myself", "mine"], ans: 0},
    {q: "A person who hates women is a?", options: ["Misogynist", "Misanthrope", "Philanthropist", "Optimist"], ans: 0},
    {q: "Choose the correctly spelled word:", options: ["Liaison", "Liason", "Liaison", "Liasion"], ans: 0},
    {q: "Opposite in meaning: 'Thrifty' habits.", options: ["Economical", "Extravagant", "Greedy", "Mean"], ans: 1},
    {q: "Nearest in meaning: 'Obdurate' heart.", options: ["Soft", "Kind", "Stubborn", "Warm"], ans: 2},
    {q: "Fill the gap: The sun ____ in the east.", options: ["rise", "rising", "rises", "rose"], ans: 2},
    {q: "A government by the wealthy is a?", options: ["Democracy", "Plutocracy", "Autocracy", "Theocracy"], ans: 1},
    {q: "Choose the correctly spelled word:", options: ["Calendar", "Calender", "Calander", "Calandar"], ans: 0},
    {q: "Opposite in meaning: 'Sullen' mood.", options: ["Gloomy", "Cheerful", "Angry", "Sad"], ans: 1},
    {q: "Nearest in meaning: 'Trivial' matter.", options: ["Important", "Small", "Unimportant", "Urgent"], ans: 2},
    {q: "Fill the gap: I have been here ____ morning.", options: ["for", "since", "from", "at"], ans: 1},
    {q: "The study of sounds in language is?", options: ["Syntax", "Semantics", "Phonology", "Morphology"], ans: 2},
    {q: "Choose the correctly spelled word:", options: ["Argument", "Arguement", "Argumment", "Argumant"], ans: 0},
    {q: "Opposite in meaning: 'Vacant' seat.", options: ["Empty", "Full", "Occupied", "Clean"], ans: 2},
    {q: "Nearest in meaning: 'Wary' of strangers.", options: ["Friendly", "Cautious", "Angry", "Kind"], ans: 1},
    {q: "Fill the gap: You ____ go now if you wish.", options: ["may", "must", "might", "can"], ans: 0},
    {q: "A list of books used in a report is a?", options: ["Biography", "Bibliography", "Index", "Glossary"], ans: 1},
    {q: "Choose the correctly spelled word:", options: ["Privilege", "Priviledge", "Privilege", "Privelege"], ans: 0},
    {q: "Opposite in meaning: 'Zealous' worker.", options: ["Enthusiastic", "Lazy", "Active", "Brave"], ans: 1}
], 
      "Mathematics": [
    {q: "The probabilities that Grace and Precious will pass an examination are 0.9 and 0.7 respectively. Find the probability that at least one of them will pass.", options: ["1.60", "0.97", "0.63", "0.03"], ans: 1},
    {q: "A fair die is thrown twice. What is the probability of obtaining a prime number on both throws?", options: ["1/12", "1/9", "1/4", "4/9"], ans: 2},
    {q: "A bag contains 5 red balls and 3 green balls. Two balls are picked one after the other with replacement. Find the probability that both are the same colour.", options: ["17/32", "25/64", "15/64", "9/64"], ans: 0},
    {q: "The probability of an event occurring is x. What is the probability of the event not occurring?", options: ["1-x", "x-1", "0", "1/x"], ans: 0},
    {q: "A number is selected from the set {4,5,6,9,11,12,13}. What is the probability that the number chosen is either less than 10 or even?", options: ["3/7", "4/7", "5/7", "1"], ans: 3},
    {q: "In a throw of a fair die, the probability of obtaining an even number is?", options: ["1", "2/3", "1/6", "1/2"], ans: 3},
    {q: "A number is selected randomly from the set of integers 1 to 30 inclusive. The probability that the number is prime is?", options: ["4/15", "1/3", "1/5", "3/10"], ans: 3},
    {q: "A bag contains 5 yellow, 6 green balls and 9 black balls. A ball is drawn. What is the probability that it is a black or yellow ball?", options: ["7/10", "3/5", "1/2", "9/80"], ans: 0},
    {q: "Solve for x if 25^(x-1) = 125.", options: ["1.5", "2.5", "3", "5"], ans: 1},
    {q: "Simplify (1/2)^-3 * 4^2.", options: ["32", "64", "128", "256"], ans: 2},
    {q: "Given that Sin x = -√3/2 and Cos x > 0, find the value of x.", options: ["300°", "240°", "120°", "60°"], ans: 0},
    {q: "Find the value of x if log2(x^2) = 6.", options: ["4", "8", "16", "64"], ans: 1},
    {q: "If 7 and 189 are the first and fourth terms of a geometric progression (GP), find the third term.", options: ["21", "36", "45", "63"], ans: 3},
    {q: "Find the product of 1100₂ and 101₂.", options: ["111100₂", "110100₂", "110001₂", "101010₂"], ans: 1},
    {q: "What fraction must be subtracted from the sum of 2 1/4 and 2 7/12 to give 3 1/3?", options: ["1/3", "1/2", "3/4", "1 1/2"], ans: 3},
    {q: "Find the simple interest on N8000 for 3 years at 5% per annum.", options: ["N1200", "N1500", "N800", "N400"], ans: 0},
    {q: "Evaluate: (Log₃4)(Log₄9)", options: ["3", "2", "4/5", "1/2"], ans: 1},
    {q: "The bearing of a point X from Y is 074°. What is the bearing of Y from X?", options: ["106°", "148°", "164°", "254°"], ans: 3},
    {q: "Given that sin x = 3/5, find the value of 1 + tan x.", options: ["3/4", "5/4", "7/3", "7/4"], ans: 3},
    {q: "Find the maximum value of the function, Y = 4Sinx.", options: ["0", "-4", "4", "1"], ans: 2},
    {q: "List all integers satisfying the inequalities: -1 < 2x - 5 < 5", options: ["{2,3,4,5}", "{2,3,4}", "{2,3}", "{3,4}"], ans: 3},
    {q: "If the 4th term of an Arithmetic Progression (AP) is 13 and the 10th term is 31, find the common difference.", options: ["2", "3", "4", "5"], ans: 1},
    {q: "Solve for x: 3x - 4 < 2(x + 3)", options: ["x < 10", "x > 10", "x < 2", "x > -2"], ans: 0},
    {q: "The sum of the interior angles of a regular polygon is 1080°. How many sides does it have?", options: ["6", "7", "8", "10"], ans: 2},
    {q: "If P = {1,2,3,4,5,6} and Q = {3,4,5,6,7,8}, find P ∩ Q.", options: ["{1,2}", "{7,8}", "{3,4,5,6}", "{1,2,3,4,5,6,7,8}"], ans: 2},
    {q: "A cylinder has a radius of 7cm and a height of 10cm. Find its volume. (Take π = 22/7)", options: ["1540cm³", "770cm³", "440cm³", "154cm³"], ans: 0},
    {q: "Find the value of k if (x - 2) is a factor of x³ - kx² + 4.", options: ["2", "3", "4", "5"], ans: 1},
    {q: "If (2x-1) is a factor of 8x³ + 4x² + kx + 15, find the value of k.", options: ["-8.5", "-17", "-30", "-34"], ans: 3},
    {q: "If h(x-2) = x² + 5x - 10, find h(3).", options: ["14", "20", "34", "40"], ans: 3},
    {q: "Make x the subject of the formula: y = (ax + b) / (cx - d)", options: ["(dy+b)/(ay-c)", "(dy+b)/(cy-a)", "(ay+b)/(cy-d)", "(by+d)/(ay-c)"], ans: 1},
    {q: "Factorize completely: 4x² - 9y²", options: ["(2x-3y)(2x-3y)", "(2x+3y)(2x+3y)", "(2x-3y)(2x+3y)", "(4x-9y)(x+y)"], ans: 2},
    {q: "The mean of 5 numbers is 20. If one number is removed, the mean becomes 18. What number was removed?", options: ["22", "24", "26", "28"], ans: 3},
    {q: "Find the range of the following scores: 12, 25, 43, 10, 32, 18, 50.", options: ["30", "35", "40", "43"], ans: 2},
    {q: "Find the median of the scores: 4, 6, 4, 7, 5, 8, 2.", options: ["4", "4.5", "5", "6"], ans: 2},
    {q: "If x + 0.4y = 3 and y = 1/2x, find the value of x.", options: ["2.5", "3.0", "1.5", "0.5"], ans: 0},
    {q: "Convert 10110₂ to base 10.", options: ["20", "22", "24", "26"], ans: 1},
    {q: "Simplify: (3/4 - 2/3) ÷ 1/12", options: ["1", "2", "3", "4"], ans: 0},
    {q: "The mean of the numbers 4, 6, 4, 7, (x+1), 8 and 2 is 5. Find x.", options: ["3", "4", "5", "2"], ans: 0},
    {q: "Find the mode of the scores: 2, 8, 5, 7, 2, 9, 5, 5, 7, 8", options: ["9", "7", "8", "5"], ans: 3},
    {q: "Find the gradient of the line passing through points (2, 3) and (4, 7).", options: ["1", "2", "3", "4"], ans: 1}
],
        "Physics": [
    {q: "Which of the following is a derived unit? (JAMB 2018)", options: ["Ampere", "Kilogram", "Newton", "Kelvin"], ans: 2},
    {q: "A car accelerates from rest at 4 m/s². What is its velocity after 5 seconds? (JAMB 2020)", options: ["10 m/s", "20 m/s", "40 m/s", "50 m/s"], ans: 1},
    {q: "The change in the direction of a wave as it passes from one medium to another is called? (JAMB 2015)", options: ["Reflection", "Refraction", "Diffraction", "Interference"], ans: 1},
    {q: "A body of mass 5kg is acted upon by a force of 20N. Calculate the acceleration. (JAMB 2021)", options: ["4 m/s²", "100 m/s²", "0.25 m/s²", "15 m/s²"], ans: 0},
    {q: "Which of the following is NOT a fundamental property of a photon? (JAMB 2019)", options: ["Rest mass is zero", "Energy is hf", "It is deflected by magnetic field", "It travels at speed of light"], ans: 2},
    {q: "The temperature at which the water vapor in the air is saturated is called? (JAMB 2014)", options: ["Boiling point", "Freezing point", "Dew point", "Critical point"], ans: 2},
    {q: "An object is placed 15cm in front of a concave mirror of focal length 10cm. The image is? (JAMB 2017)", options: ["Real and diminished", "Virtual and magnified", "Real and magnified", "Virtual and diminished"], ans: 2},
    {q: "The clinical thermometer is characterized by having a? (JAMB 2013)", options: ["Wide bore", "Long stem", "Constriction", "Large bulb"], ans: 2},
    {q: "Calculate the work done when a force of 10N moves a body through a distance of 5m in the direction of the force. (JAMB 2022)", options: ["2J", "15J", "50J", "100J"], ans: 2},
    {q: "The process by which a substance changes from solid directly to gas is? (JAMB 2016)", options: ["Evaporation", "Vaporization", "Sublimation", "Condensation"], ans: 2},
    {q: "Which of the following is a scalar quantity? (JAMB 2012)", options: ["Weight", "Momentum", "Energy", "Displacement"], ans: 2},
    {q: "The heat required to raise the temperature of a unit mass of a substance by 1 Kelvin is? (JAMB 2011)", options: ["Heat capacity", "Specific heat capacity", "Latent heat", "Specific latent heat"], ans: 1},
    {q: "The pitch of a sound note depends on its? (JAMB 2010)", options: ["Frequency", "Amplitude", "Wavelength", "Velocity"], ans: 0},
    {q: "A capacitor of 8μF is connected to a 100V DC source. The energy stored is? (JAMB 2018)", options: ["0.04J", "0.4J", "4.0J", "40J"], ans: 0},
    {q: "The property of a body to remain at rest or continue in uniform motion is? (JAMB 2021)", options: ["Momentum", "Inertia", "Friction", "Impulse"], ans: 1},
    {q: "Which instrument is used to measure relative humidity? (JAMB 2019)", options: ["Hydrometer", "Hygrometer", "Barometer", "Anemometer"], ans: 1},
    {q: "The particle nature of light is demonstrated by? (JAMB 2017)", options: ["Interference", "Photoelectric effect", "Diffraction", "Polarization"], ans: 1},
    {q: "A hydraulic press works on the principle of? (JAMB 2015)", options: ["Archimedes", "Newton", "Pascal", "Bernoulli"], ans: 2},
    {q: "The SI unit of magnetic flux density is? (JAMB 2020)", options: ["Weber", "Tesla", "Henry", "Farad"], ans: 1},
    {q: "In a series R-L-C circuit, resonance occurs when? (JAMB 2014)", options: ["XL > XC", "XL < XC", "XL = XC", "R = 0"], ans: 2},
    {q: "Which of the following is a primary cell? (JAMB 2013)", options: ["Lead-acid accumulator", "Leclanche cell", "Nickel-iron cell", "Lithium-ion cell"], ans: 1},
    {q: "The escape velocity of a rocket from the earth depends on? (JAMB 2012)", options: ["Mass of rocket", "Radius of earth", "Time of launch", "Fuel type"], ans: 1},
    {q: "An intrinsic semiconductor becomes an n-type by adding? (JAMB 2011)", options: ["Trivalent atoms", "Pentavalent atoms", "Tetravalent atoms", "Hexavalent atoms"], ans: 1},
    {q: "The time rate of change of momentum is called? (JAMB 2021)", options: ["Power", "Work", "Force", "Energy"], ans: 2},
    {q: "Which wave requires a material medium for propagation? (JAMB 2019)", options: ["Radio waves", "Sound waves", "Light waves", "X-rays"], ans: 1},
    {q: "A lens that is thinner at the middle than at the edges is? (JAMB 2018)", options: ["Convex", "Concave", "Bifocal", "Cylindrical"], ans: 1},
    {q: "The half-life of a radioactive element is 10 days. After 30 days, what fraction remains? (JAMB 2022)", options: ["1/2", "1/4", "1/8", "1/16"], ans: 2},
    {q: "A machine with a velocity ratio of 5 is used to lift a load of 100N with 25N effort. Efficiency is? (JAMB 2020)", options: ["20%", "50%", "80%", "100%"], ans: 2},
    {q: "The speed of sound is fastest in? (JAMB 2015)", options: ["Air", "Water", "Steel", "Vacuum"], ans: 2},
    {q: "The phenomenon where a metal emits electrons when heated is? (JAMB 2017)", options: ["Field emission", "Secondary emission", "Thermionic emission", "Photoemission"], ans: 2},
    {q: "The boiling point of water in Fahrenheit scale is? (JAMB 2014)", options: ["100°F", "180°F", "212°F", "32°F"], ans: 2},
    {q: "Upthrust on a body immersed in a fluid is equal to the? (JAMB 2011)", options: ["Mass of fluid displaced", "Weight of fluid displaced", "Density of fluid", "Volume of body"], ans: 1},
    {q: "Which of the following is used to produce a pure spectrum? (JAMB 2016)", options: ["Glass prism", "Spectrometer", "Camera", "Microscope"], ans: 1},
    {q: "Electric motor converts? (JAMB 2013)", options: ["Mechanical to Electrical", "Electrical to Mechanical", "Chemical to Electrical", "Heat to Electrical"], ans: 1},
    {q: "The ratio of tensile stress to tensile strain is? (JAMB 2021)", options: ["Bulk modulus", "Rigidity modulus", "Young's modulus", "Yield point"], ans: 2},
    {q: "Which of the following radiations has the highest ionizing power? (JAMB 2019)", options: ["Alpha", "Beta", "Gamma", "X-ray"], ans: 0},
    {q: "Pressure in a liquid depends on? (JAMB 2018)", options: ["Area", "Shape of vessel", "Depth", "Volume"], ans: 2},
    {q: "A simple pendulum has a period of 2s. If the length is quadrupled, the period becomes? (JAMB 2022)", options: ["2s", "4s", "8s", "16s"], ans: 1},
    {q: "Which mirror is used as a driving mirror? (JAMB 2012)", options: ["Plane", "Concave", "Convex", "Parabolic"], ans: 2},
    {q: "The unit of power of a lens is? (JAMB 2015)", options: ["Metre", "Watt", "Dioptre", "Candela"], ans: 2}
],
     "Chemistry": [
    {q: "Which of the following is an isotope of Hydrogen? (JAMB 2019)", options: ["Helium", "Deuterium", "Lithium", "Beryllium"], ans: 1},
    {q: "The number of electrons in the outermost shell of an element with atomic number 15 is? (JAMB 2021)", options: ["2", "3", "5", "7"], ans: 2},
    {q: "Which gas is evolved when dilute HCl reacts with Calcium Carbonate? (JAMB 2017)", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Chlorine"], ans: 2},
    {q: "The shape of a water molecule is? (JAMB 2015)", options: ["Linear", "V-shaped", "Tetrahedral", "Pyramidal"], ans: 1},
    {q: "The catalyst used in the Haber process for the manufacture of Ammonia is? (JAMB 2018)", options: ["Platinum", "Iron", "Vanadium(V) oxide", "Nickel"], ans: 1},
    {q: "Which of the following is a primary constituent of natural gas? (JAMB 2020)", options: ["Ethane", "Propane", "Methane", "Butane"], ans: 2},
    {q: "The oxidation number of Manganese in KMnO4 is? (JAMB 2014)", options: ["+2", "+5", "+7", "+4"], ans: 2},
    {q: "Which of these is used to test for the presence of starch? (JAMB 2013)", options: ["Benedict's solution", "Iodine solution", "Millon's reagent", "Fehling's solution"], ans: 1},
    {q: "Hard water is caused by the presence of the following ions EXCEPT? (JAMB 2016)", options: ["Magnesium", "Calcium", "Sodium", "Iron"], ans: 2},
    {q: "The process of breaking down large hydrocarbon molecules into smaller ones is called? (JAMB 2022)", options: ["Polymerization", "Cracking", "Hydrogenation", "Saponification"], ans: 1},
    {q: "Which of the following is a physical change? (JAMB 2011)", options: ["Burning paper", "Rusting iron", "Melting ice", "Souring milk"], ans: 2},
    {q: "The most electronegative element in the periodic table is? (JAMB 2010)", options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"], ans: 2},
    {q: "A solution with a pH of 3 is? (JAMB 2019)", options: ["Weakly acidic", "Strongly acidic", "Weakly alkaline", "Strongly alkaline"], ans: 1},
    {q: "The general formula for alkanes is? (JAMB 2018)", options: ["CnH2n", "CnH2n-2", "CnH2n+2", "CnHn"], ans: 2},
    {q: "Which of the following is an example of an amphoteric oxide? (JAMB 2021)", options: ["Na2O", "MgO", "Al2O3", "CaO"], ans: 2},
    {q: "The noble gas used in filling weather balloons is? (JAMB 2015)", options: ["Argon", "Neon", "Helium", "Krypton"], ans: 2},
    {q: "Which of these is a trihydric alcohol? (JAMB 2017)", options: ["Ethanol", "Glycol", "Glycerol", "Methanol"], ans: 2},
    {q: "The type of bonding in Sodium Chloride is? (JAMB 2014)", options: ["Covalent", "Dative", "Electrovalent", "Metallic"], ans: 2},
    {q: "Which of the following is used as a refrigerant? (JAMB 2012)", options: ["Nitrogen", "Ammonia", "Carbon dioxide", "Helium"], ans: 1},
    {q: "The loss of electrons is known as? (JAMB 2020)", options: ["Reduction", "Neutralization", "Oxidation", "Esterification"], ans: 2},
    {q: "Which law states that the volume of a gas is inversely proportional to its pressure at constant temperature? (JAMB 2013)", options: ["Charles' Law", "Avogadro's Law", "Boyle's Law", "Graham's Law"], ans: 2},
    {q: "The purest form of iron is? (JAMB 2016)", options: ["Pig iron", "Cast iron", "Wrought iron", "Steel"], ans: 2},
    {q: "Which of these particles has the least mass? (JAMB 2011)", options: ["Proton", "Neutron", "Electron", "Alpha particle"], ans: 2},
    {q: "The monomers of proteins are? (JAMB 2022)", options: ["Glucose", "Fatty acids", "Amino acids", "Nucleotides"], ans: 2},
    {q: "Which of the following elements is a metalloid? (JAMB 2019)", options: ["Carbon", "Silicon", "Sulphur", "Phosphorus"], ans: 1},
    {q: "The process of getting alcohol from sugar is? (JAMB 2018)", options: ["Oxidation", "Saponification", "Fermentation", "Hydrolysis"], ans: 2},
    {q: "The color of phenolphthalein in an acidic medium is? (JAMB 2021)", options: ["Pink", "Yellow", "Colorless", "Red"], ans: 2},
    {q: "Which gas is used in the vulcanization of rubber? (JAMB 2015)", options: ["Nitrogen", "Oxygen", "Sulphur", "Chlorine"], ans: 2},
    {q: "The bond formed between two non-metals is usually? (JAMB 2017)", options: ["Ionic", "Metallic", "Covalent", "Hydrogen"], ans: 2},
    {q: "Which of these is a synthetic polymer? (JAMB 2020)", options: ["Cotton", "Silk", "Nylon", "Wool"], ans: 2},
    {q: "The main ore of aluminum is? (JAMB 2014)", options: ["Haematite", "Magnetite", "Bauxite", "Cassiterite"], ans: 2},
    {q: "The gas that turns lime water milky is? (JAMB 2012)", options: ["CO", "NO2", "CO2", "SO2"], ans: 2},
    {q: "Which of the following is a double salt? (JAMB 2011)", options: ["NaCl", "KNO3", "KAl(SO4)2.12H2O", "MgCO3"], ans: 2},
    {q: "The functional group of organic acids is? (JAMB 2016)", options: ["-OH", "-CHO", "-COOH", "-CO-"], ans: 2},
    {q: "The temporary hardness of water is removed by? (JAMB 2013)", options: ["Filtration", "Distillation", "Boiling", "Chlorination"], ans: 2},
    {q: "Which of the following is a greenhouse gas? (JAMB 2022)", options: ["Nitrogen", "Oxygen", "Methane", "Argon"], ans: 2},
    {q: "The kinetic theory of gases explains? (JAMB 2019)", options: ["Chemical properties", "Molecular motion", "Atomic structure", "Isotopes"], ans: 1},
    {q: "An exothermic reaction is one in which? (JAMB 2018)", options: ["Heat is absorbed", "Temperature decreases", "Heat is evolved", "No change occurs"], ans: 2},
    {q: "The acid found in stings of ants is? (JAMB 2010)", options: ["Acetic acid", "Citric acid", "Methanoic acid", "Tartaric acid"], ans: 2},
    {q: "What is the name of the compound CH3CH2CH2OH? (JAMB 2021)", options: ["Ethanol", "Propanol", "Butanol", "Methanol"], ans: 1}
],
       "Biology": [
    {q: "The powerhouse of the cell is the?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Vacuole"], ans: 2},
    {q: "Which of the following is a producer in an ecosystem?", options: ["Fungi", "Green plant", "Lion", "Vulture"], ans: 1},
    {q: "The basic unit of life is the?", options: ["Cell", "Tissue", "Organ", "System"], ans: 0},
    {q: "The process of maintaining a constant internal environment is?", options: ["Metabolism", "Homeostasis", "Evolution", "Osmoregulation"], ans: 1},
    {q: "Which organelle is responsible for protein synthesis?", options: ["Lysosome", "Golgi body", "Nucleolus", "Ribosome"], ans: 3},
    {q: "The green pigment in plants used for photosynthesis is?", options: ["Chlorophyll", "Haemoglobin", "Melanin", "Xanthophyll"], ans: 0},
    {q: "The blood group known as the universal donor is?", options: ["Group A", "Group B", "Group AB", "Group O"], ans: 3},
    {q: "Which part of the brain controls balance and posture?", options: ["Cerebrum", "Medulla oblongata", "Cerebellum", "Hypothalamus"], ans: 2},
    {q: "The hormone that regulates blood sugar is?", options: ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"], ans: 1},
    {q: "Deficiency of Vitamin C leads to?", options: ["Scurvy", "Rickets", "Night blindness", "Beriberi"], ans: 0},
    {q: "The type of tooth used for tearing flesh is the?", options: ["Incisor", "Molar", "Premolar", "Canine"], ans: 3},
    {q: "Pollination by insects is known as?", options: ["Anemophily", "Entomophily", "Hydrophily", "Ornithophily"], ans: 1},
    {q: "The kidney's functional unit is the?", options: ["Neuron", "Nephron", "Alveolus", "Ureter"], ans: 1},
    {q: "Movement of a plant part towards light is?", options: ["Geotropism", "Phototropism", "Hydrotropism", "Thigmotropism"], ans: 1},
    {q: "Which gas is released during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], ans: 0},
    {q: "Bacteria belong to the kingdom?", options: ["Protista", "Fungi", "Monera", "Plantae"], ans: 2},
    {q: "The sudden change in the genetic makeup of an organism is?", options: ["Mutation", "Selection", "Inbreeding", "Variation"], ans: 0},
    {q: "The largest organ in the human body is the?", options: ["Liver", "Skin", "Brain", "Lungs"], ans: 1},
    {q: "The fusion of male and female gametes is?", options: ["Pollination", "Ovulation", "Fertilization", "Implantation"], ans: 2},
    {q: "An organism that lives on or in another organism for food is a?", options: ["Prey", "Host", "Saprophyte", "Parasite"], ans: 3},
    {q: "The resting stage in the life cycle of a butterfly is?", options: ["Larva", "Pupa", "Egg", "Imago"], ans: 1},
    {q: "The father of genetics is?", options: ["Charles Darwin", "Gregor Mendel", "Lamarck", "Pasteur"], ans: 1},
    {q: "Which of these is a social insect?", options: ["Butterfly", "Termite", "Housefly", "Mosquito"], ans: 1},
    {q: "In humans, the site of gas exchange is the?", options: ["Trachea", "Alveoli", "Bronchi", "Diaphragm"], ans: 1},
    {q: "The movement of water through a semi-permeable membrane is?", options: ["Diffusion", "Osmosis", "Active transport", "Plasmolysis"], ans: 1},
    {q: "A group of similar cells performing a specific function is a?", options: ["Tissue", "Organ", "System", "Organism"], ans: 0},
    {q: "The structure in a fish used for buoyancy is the?", options: ["Lateral line", "Operculum", "Swim bladder", "Gill raker"], ans: 2},
    {q: "Which blood vessel carries oxygenated blood away from the heart?", options: ["Vena cava", "Pulmonary artery", "Pulmonary vein", "Aorta"], ans: 3},
    {q: "Deficiency of Vitamin D in children leads to?", options: ["Scurvy", "Rickets", "Anaemia", "Pellagra"], ans: 1},
    {q: "The breakdown of glucose in the absence of oxygen is?", options: ["Fermentation", "Oxidation", "Respiration", "Photosynthesis"], ans: 0},
    {q: "Which organelle is known as the suicidal bag?", options: ["Ribosome", "Lysosome", "Mitochondrion", "Golgi body"], ans: 1},
    {q: "The long-sighted person needs which type of lens?", options: ["Concave", "Cylindrical", "Convex", "Bifocal"], ans: 2},
    {q: "The sequence of changes in a habitat over time is?", options: ["Adaptation", "Succession", "Variation", "Evolution"], ans: 1},
    {q: "Pollination by wind is known as?", options: ["Entomophily", "Anemophily", "Hydrophily", "Ornithophily"], ans: 1},
    {q: "The enzyme found in human saliva is?", options: ["Pepsin", "Ptyalin", "Lipase", "Trypsin"], ans: 1},
    {q: "Which of these is an example of continuous variation?", options: ["Blood group", "Sex", "Height", "Tongue rolling"], ans: 2},
    {q: "The male part of a flower is the?", options: ["Stamen", "Pistil", "Stigma", "Style"], ans: 0},
    {q: "The study of heredity and variation is?", options: ["Ecology", "Genetics", "Physiology", "Taxonomy"], ans: 1},
    {q: "Which of these is a flightless bird?", options: ["Eagle", "Ostrich", "Hawk", "Pigeon"], ans: 1},
    {q: "The transition zone between two ecosystems is an?", options: ["Ecotype", "Ecotone", "Ecosphere", "Niche"], ans: 1}
],
        "Government": [
    {q: "The supreme power of a state to make and enforce laws is?", options: ["Sovereignty", "Legitimacy", "Authority", "Influence"], ans: 0},
    {q: "A flexible constitution is one that is?", options: ["Written", "Unwritten", "Easy to amend", "Difficult to amend"], ans: 2},
    {q: "The first Governor-General of colonial Nigeria was?", options: ["Lord Lugard", "Sir Arthur Richards", "John McPherson", "Sir James Robertson"], ans: 0},
    {q: "Which of the following is a feature of a federation?", options: ["Unicameralism", "Centralized power", "Division of power", "No constitution"], ans: 2},
    {q: "The main representative body in a democracy is the?", options: ["Judiciary", "Executive", "Legislature", "Police"], ans: 2},
    {q: "The head of the Commonwealth is?", options: ["British Monarch", "President of USA", "UN Secretary", "Nigerian President"], ans: 0},
    {q: "Public opinion is important because it?", options: ["Suppresses critics", "Influences policy", "Creates riots", "Enriches leaders"], ans: 1},
    {q: "The first political party in Nigeria was the?", options: ["NCNC", "NPC", "NNDP", "AG"], ans: 2},
    {q: "A major merit of a multi-party system is that it?", options: ["Is cheap to run", "Prevents dictatorship", "Ensures quick decisions", "Avoids election rigging"], ans: 1},
    {q: "The rule of law means?", options: ["Lawyers are supreme", "The law is supreme", "Judges are above law", "The rich are protected"], ans: 1},
    {q: "Franchise refers to the?", options: ["Right to own property", "Right to vote", "Right to travel", "Right to free speech"], ans: 1},
    {q: "The 1979 Constitution of Nigeria introduced the?", options: ["Parliamentary system", "Presidential system", "Monarchical system", "Unitary system"], ans: 1},
    {q: "Separation of powers is intended to prevent?", options: ["Elections", "Tyranny", "Democracy", "Justice"], ans: 1},
    {q: "The organ of government that interprets laws is the?", options: ["Executive", "Legislature", "Judiciary", "Civil Service"], ans: 2},
    {q: "Nigeria became a Republic in?", options: ["1960", "1963", "1966", "1970"], ans: 1},
    {q: "Fascism was a political ideology that originated in?", options: ["Germany", "Italy", "Russia", "France"], ans: 1},
    {q: "The first military coup in Nigeria occurred in?", options: ["July 1966", "January 1966", "February 1976", "December 1983"], ans: 1},
    {q: "A bicameral legislature has how many chambers?", options: ["One", "Two", "Three", "Four"], ans: 1},
    {q: "The process of removing a President from office is called?", options: ["Recall", "Impeachment", "Referendum", "Dismissal"], ans: 1},
    {q: "ECOWAS was formed in 1975 to promote?", options: ["Military defense", "Economic integration", "Political unity", "Cultural exchange"], ans: 1},
    {q: "The primary function of the civil service is?", options: ["Making laws", "Implementing policies", "Arresting criminals", "Winning elections"], ans: 1},
    {q: "Local government is the?", options: ["First tier", "Second tier", "Third tier", "Fourth tier"], ans: 2},
    {q: "Gerrymandering is the unfair practice of?", options: ["Rigging votes", "Refusing to vote", "Redrawing boundaries", "Buying votes"], ans: 2},
    {q: "The highest court of appeal in Nigeria is the?", options: ["High Court", "Court of Appeal", "Supreme Court", "Magistrate Court"], ans: 2},
    {q: "A unitary system of government is best suited for?", options: ["Large countries", "Diverse countries", "Small countries", "Federations"], ans: 2},
    {q: "The Clifford Constitution of 1922 was significant for?", options: ["Granting independence", "Introducing elective principle", "Unifying Nigeria", "Ending indirect rule"], ans: 1},
    {q: "Who was the first Prime Minister of Nigeria?", options: ["Nnamdi Azikiwe", "Abubakar Tafawa Balewa", "Ahmadu Bello", "Obafemi Awolowo"], ans: 1},
    {q: "The UN was established in?", options: ["1914", "1918", "1945", "1960"], ans: 2},
    {q: "The ideology that advocates state ownership of production is?", options: ["Capitalism", "Socialism", "Feudalism", "Liberalism"], ans: 1},
    {q: "Delegated legislation is made by?", options: ["The Judiciary", "The Executive", "The Parliament", "Private citizens"], ans: 1},
    {q: "The concept of 'Collective Responsibility' applies to?", options: ["Monarchy", "Parliamentary system", "Presidential system", "Autocracy"], ans: 1},
    {q: "The 1914 Amalgamation of Nigeria was done by?", options: ["Lord Milverton", "Lord Lugard", "Sir Arthur Richards", "John McPherson"], ans: 1},
    {q: "Which country is a permanent member of the UN Security Council?", options: ["Nigeria", "Germany", "China", "Japan"], ans: 2},
    {q: "The 'Order in Council' was a tool of?", options: ["Democracy", "Military rule", "Colonial rule", "Traditional rule"], ans: 2},
    {q: "Bureaucracy is a characteristic of?", options: ["Political parties", "Civil service", "The Judiciary", "The Legislature"], ans: 1},
    {q: "The head of a mission in a Commonwealth country is a?", options: ["Ambassador", "Consul", "High Commissioner", "Diplomat"], ans: 2},
    {q: "Pressure groups aim to?", options: ["Seize power", "Influence government", "Rig elections", "Form a cabinet"], ans: 1},
    {q: "Anonymity is a feature of the?", options: ["Politicians", "Civil servants", "Judges", "Kings"], ans: 1},
    {q: "The OAU was replaced by the African Union in?", options: ["1999", "2000", "2002", "2010"], ans: 2},
    {q: "Human rights are protected in Nigeria by the?", options: ["Police", "Constitution", "Tradition", "Civil Service"], ans: 1}
], 
        "Literature": [
            {q: "A poem written to mourn the dead is called a/an?", options: ["Ode", "Sonnet", "Elegy", "Limerick"], ans: 2},
    {q: "The person who tells a story in a prose work is the?", options: ["Narrator", "Author", "Antagonist", "Protagonist"], ans: 0},
    {q: "A play meant to provoke hearty laughter is a?", options: ["Tragedy", "Farce", "Comedy", "Melodrama"], ans: 2},
    {q: "The central idea or message of a literary work is the?", options: ["Plot", "Setting", "Climax", "Theme"], ans: 3},
    {q: "An exaggeration for the sake of emphasis is?", options: ["Simile", "Hyperbole", "Oxymoron", "Personification"], ans: 1},
    {q: "In drama, a long speech made by a character alone on stage is a?", options: ["Soliloquy", "Dialogue", "Prologue", "Epilogue"], ans: 0},
    {q: "The struggle between two opposing forces in a story is?", options: ["Theme", "Conflict", "Resolution", "Diction"], ans: 1},
    {q: "A character who changes significantly in the course of a story is?", options: ["Flat", "Static", "Round", "Stock"], ans: 2},
    {q: "'The sun smiled down on the valley' is an example of?", options: ["Metaphor", "Alliteration", "Personification", "Simile"], ans: 2},
    {q: "A sonnet consists of how many lines?", options: ["12", "16", "14", "10"], ans: 2},
    {q: "The dictionary or literal meaning of a word is its?", options: ["Connotation", "Denotation", "Imagery", "Syntax"], ans: 1},
    {q: "A reference to a person, place, or event from history or mythology is?", options: ["Allusion", "Irony", "Paradox", "Pun"], ans: 0},
    {q: "The final resolution or 'unknotting' of the plot is the?", options: ["Climax", "Exposition", "Denouement", "Rising action"], ans: 2},
    {q: "A pair of rhymed lines in poetry is called a?", options: ["Quatrain", "Couplet", "Sestet", "Octave"], ans: 1},
    {q: "'Parting is such sweet sorrow' is an example of?", options: ["Metaphor", "Oxymoron", "Simile", "Hyperbole"], ans: 1},
    {q: "The setting of a story refers to?", options: ["The main characters", "The sequence of events", "The time and place", "The moral lesson"], ans: 2},
    {q: "A character that provides a contrast to the protagonist is a?", options: ["Foil", "Hero", "Villain", "Narrator"], ans: 0},
    {q: "When a speaker says the opposite of what they mean, it is?", options: ["Situational irony", "Dramatic irony", "Verbal irony", "Paradox"], ans: 2},
    {q: "The use of words that imitate the sound they describe is?", options: ["Assonance", "Onomatopoeia", "Consonance", "Rhythm"], ans: 1},
    {q: "A direct comparison between two unlike things without using 'like' or 'as' is a?", options: ["Simile", "Metaphor", "Allegory", "Synecdoche"], ans: 1},
    {q: "A poem of three lines following a 5-7-5 syllable structure is a?", options: ["Haiku", "Ode", "Limerick", "Ballad"], ans: 0},
    {q: "The choice of words and style of expression used by an author is?", options: ["Tone", "Diction", "Mood", "Atmosphere"], ans: 1},
    {q: "A play that ends in a disaster for the main character is a?", options: ["Tragedy", "Comedy", "Tragicomedy", "Opera"], ans: 0},
    {q: "The repetitions of vowel sounds in a line of poetry is?", options: ["Alliteration", "Assonance", "Onomatopoeia", "Rhyme"], ans: 1},
    {q: "A long narrative poem celebrating the deeds of a legendary hero is an?", options: ["Epic", "Elegy", "Ode", "Lyric"], ans: 0},
    {q: "The sequence of events in a story is the?", options: ["Setting", "Theme", "Plot", "Climax"], ans: 2},
    {q: "An address to an absent person or personified object is?", options: ["Apostrophe", "Allusion", "Paradox", "Irony"], ans: 0},
    {q: "A poem that tells a story, often meant to be sung, is a?", options: ["Ballad", "Lyric", "Sonnet", "Ode"], ans: 0},
    {q: "The main character in a literary work is the?", options: ["Antagonist", "Foil", "Protagonist", "Villain"], ans: 2},
    {q: "'Clean as a whistle' is an example of a?", options: ["Metaphor", "Simile", "Pun", "Symbol"], ans: 1},
    {q: "A character that does not change throughout the story is?", options: ["Static", "Dynamic", "Round", "Complex"], ans: 0},
    {q: "The emotional atmosphere created by a literary work is the?", options: ["Tone", "Mood", "Diction", "Style"], ans: 1},
    {q: "A statement that appears self-contradictory but contains a truth is a?", options: ["Metaphor", "Hyperbole", "Paradox", "Irony"], ans: 2},
    {q: "The use of objects or colors to represent abstract ideas is?", options: ["Symbolism", "Imagery", "Rhythm", "Diction"], ans: 0},
    {q: "A humerous play on words is a?", options: ["Pun", "Satire", "Irony", "Paradox"], ans: 0},
    {q: "The 'turning point' of a story is the?", options: ["Exposition", "Climax", "Resolution", "Conflict"], ans: 1},
    {q: "A short story with a moral lesson, usually featuring animals, is a?", options: ["Fable", "Myth", "Legend", "Epic"], ans: 0},
    {q: "The repetition of consonant sounds at the beginning of words is?", options: ["Assonance", "Alliteration", "Consonance", "Rhyme"], ans: 1},
    {q: "A piece of writing that ridicules human folly or vice is?", options: ["Satire", "Drama", "Ode", "Epic"], ans: 0},
    {q: "A brief and indirect reference to something of historical significance is?", options: ["Simile", "Metaphor", "Allusion", "Imagery"], ans: 2}
        ], 
        "IRS": [
    {q: "The first surah of the Qur'an is?", options: ["Al-Baqarah", "Al-Ikhlas", "An-Nas", "Al-Fatihah"], ans: 3},
    {q: "How many pillars has Islam?", options: ["Three", "Four", "Five", "Six"], ans: 2},
    {q: "The Prophet's migration from Makkah to Madinah is known as?", options: ["Hajj", "Jihad", "Zakat", "Hijrah"], ans: 3},
    {q: "The angel responsible for delivering revelations is?", options: ["Mikail", "Israfil", "Jibril", "Malik"], ans: 2},
    {q: "Which Prophet is known as 'Khalilullah' (Friend of Allah)?", options: ["Musa", "Isa", "Ibrahim", "Nuh"], ans: 2},
    {q: "The month in which Muslims fast is?", options: ["Muharram", "Rajab", "Ramadan", "Shawwal"], ans: 2},
    {q: "How many times do Muslims pray daily?", options: ["Three", "Four", "Five", "Six"], ans: 2},
    {q: "The direction Muslims face during prayer is the?", options: ["Madinah", "Jerusalem", "Qiblah", "Mina"], ans: 2},
    {q: "The first woman to accept Islam was?", options: ["Aisha", "Fatima", "Khadijah", "Sumayyah"], ans: 2},
    {q: "The book revealed to Prophet Musa (A.S) is the?", options: ["Zabur", "Injil", "Tawrat", "Qur'an"], ans: 2},
    {q: "Zakat is a compulsory charity aimed at?", options: ["Government", "Rich people", "The poor and needy", "Travelers"], ans: 2},
    {q: "The Prophet Muhammad (S.A.W) was born in which city?", options: ["Madinah", "Taif", "Makkah", "Abyssinia"], ans: 2},
    {q: "Who was the first Mu'adhin (caller to prayer) in Islam?", options: ["Abu Bakr", "Umar", "Bilal ibn Rabah", "Ali"], ans: 2},
    {q: "The phrase 'Allahu Akbar' means?", options: ["Allah is Merciful", "Allah is One", "Allah is the Greatest", "Allah is Eternal"], ans: 2},
    {q: "The battle of Badr took place in which year of the Hijrah?", options: ["1st year", "3rd year", "2nd year", "4th year"], ans: 2},
    {q: "Which Prophet built the Ark to survive the great flood?", options: ["Yunus", "Lut", "Nuh", "Hud"], ans: 2},
    {q: "The festival celebrated at the end of Ramadan is?", options: ["Eid-ul-Adha", "Eid-ul-Maulud", "Eid-ul-Fitr", "Ashura"], ans: 2},
    {q: "Who was the first Caliph of Islam after the Prophet's death?", options: ["Umar ibn Khattab", "Uthman ibn Affan", "Abu Bakr as-Siddiq", "Ali ibn Abi Talib"], ans: 2},
    {q: "The Quran was revealed over a period of how many years?", options: ["10 years", "40 years", "23 years", "13 years"], ans: 2},
    {q: "The pre-Islamic period in Arabia is known as?", options: ["Al-Ansar", "Al-Muhajirun", "Jahiliyyah", "Al-Hijrah"], ans: 2},
    {q: "The specialized prayer performed on Friday afternoons is?", options: ["Salatul Janazah", "Salatul Eid", "Salatul Jumu'ah", "Salatul Witr"], ans: 2},
    {q: "Prophet Isa (A.S) was revealed which holy book?", options: ["Tawrat", "Zabur", "Injil", "Suhuf"], ans: 2},
    {q: "The mountain where the Prophet received his first revelation is?", options: ["Mount Safa", "Mount Marwa", "Mount Hira", "Mount Uhud"], ans: 2},
    {q: "The 'Night Journey' of the Prophet to Jerusalem and Heaven is called?", options: ["Hijrah", "Hajj", "Isra' and Mi'raj", "Umrah"], ans: 2},
    {q: "How many Suwar (Chapters) are in the Holy Qur'an?", options: ["100", "124", "114", "110"], ans: 2},
    {q: "Which companion was known as 'Al-Faruq'?", options: ["Abu Bakr", "Uthman", "Umar ibn Al-Khattab", "Ali"], ans: 2},
    {q: "The term 'Tawheed' refers to?", options: ["Prophethood", "Afterlife", "Oneness of Allah", "Charity"], ans: 2},
    {q: "What is the second pillar of Islam?", options: ["Shahadah", "Zakat", "Salat", "Sawm"], ans: 2},
    {q: "The well that appeared to Hajar and Ismail in the desert is?", options: ["Kawthar", "Tasneem", "Zamzam", "Salsabil"], ans: 2},
    {q: "Who killed Jalut (Goliath)?", options: ["Prophet Musa", "Prophet Ibrahim", "Prophet Dawud", "Prophet Sulaiman"], ans: 2},
    {q: "The uncle of the Prophet who protected him but never accepted Islam was?", options: ["Abu Lahab", "Hamza", "Abu Talib", "Abbas"], ans: 2},
    {q: "Which surah is known as the 'Heart of the Qur'an'?", options: ["Surah Rahman", "Surah Mulk", "Surah Yasin", "Surah Baqarah"], ans: 2},
    {q: "The 'House of Allah' in Makkah is the?", options: ["Masjid al-Aqsa", "Masjid an-Nabawi", "Ka'aba", "Masjid al-Quba"], ans: 2},
    {q: "A person who has memorized the entire Qur'an is called a?", options: ["Imam", "Mufti", "Hafiz", "Sheikh"], ans: 2},
    {q: "The obligatory pilgrimage to Makkah is called?", options: ["Umrah", "Ziyarah", "Hajj", "Sa'y"], ans: 2},
    {q: "Who was the Prophet that was thrown into the fire by Namrud?", options: ["Musa", "Yusuf", "Ibrahim", "Zakariyyah"], ans: 2},
    {q: "The language in which the Qur'an was revealed is?", options: ["Persian", "Hebrew", "Arabic", "Urdu"], ans: 2},
    {q: "Which pillar of Islam is performed only once a year during a specific month?", options: ["Salat", "Zakat", "Sawm", "Shahadah"], ans: 2},
    {q: "Who was the father of Prophet Muhammad (S.A.W)?", options: ["Abdul-Muttalib", "Abu Talib", "Abdullah", "Hamza"], ans: 2},
    {q: "The 'Day of Judgment' is called?", options: ["Yawm al-Ahad", "Yawm al-Jumu'ah", "Yawm al-Qiyamah", "Yawm al-Fitr"], ans: 2}
],

        "CRS": [
    
    {q: "Who was the father of the faithful?", options: ["Moses", "Isaac", "Jacob", "Abraham"], ans: 3},
    {q: "God created the firmament on the?", options: ["First day", "Third day", "Second day", "Fourth day"], ans: 2},
    {q: "The first king of Israel was?", options: ["David", "Solomon", "Saul", "Samuel"], ans: 2},
    {q: "Moses received the Ten Commandments on Mount?", options: ["Nebo", "Carmel", "Hermon", "Sinai"], ans: 3},
    {q: "The prodigal son's father gave him a ring and a?", options: ["Gold chain", "Pair of shoes", "Robe", "Staff"], ans: 2},
    {q: "Who was the successor of Moses?", options: ["Caleb", "Aaron", "Joshua", "Eleazar"], ans: 2},
    {q: "The city where Jesus was born is?", options: ["Nazareth", "Jerusalem", "Bethany", "Bethlehem"], ans: 3},
    {q: "Who betrayed Jesus?", options: ["Peter", "John", "Judas Iscariot", "Thomas"], ans: 2},
    {q: "The first miracle of Jesus was at?", options: ["Capernaum", "Bethsaida", "Cana in Galilee", "Jericho"], ans: 2},
    {q: "Who was the wife of Isaac?", options: ["Sarah", "Rachel", "Leah", "Rebekah"], ans: 3},
    {q: "The man who was swallowed by a great fish was?", options: ["Daniel", "Noah", "Jonah", "Elijah"], ans: 2},
    {q: "How many brothers did Joseph have?", options: ["Ten", "Twelve", "Eleven", "Nine"], ans: 2},
    {q: "The wall of Jericho fell after the Israelites marched around it for?", options: ["Three days", "Five days", "Seven days", "Twelve days"], ans: 2},
    {q: "Who denied Jesus three times?", options: ["Judas", "Andrew", "Peter", "Philip"], ans: 2},
    {q: "The wise king who built the Temple in Jerusalem was?", options: ["Saul", "David", "Solomon", "Rehoboam"], ans: 2},
    {q: "Who was the mother of John the Baptist?", options: ["Mary", "Martha", "Elizabeth", "Salome"], ans: 2},
    {q: "The gift of the Holy Spirit happened on the day of?", options: ["Passover", "Sabbath", "Pentecost", "Ascension"], ans: 2},
    {q: "Who was the first Christian martyr?", options: ["Paul", "Peter", "Stephen", "James"], ans: 2},
    {q: "God promised never to destroy the earth with water again using a?", options: ["Cloud", "Dove", "Rainbow", "Star"], ans: 2},
    {q: "Who was the giant defeated by David?", options: ["Absalom", "Saul", "Goliath", "Haman"], ans: 2},
    {q: "The tax collector who climbed a sycamore tree to see Jesus was?", options: ["Matthew", "Nicodemus", "Zacchaeus", "Lazarus"], ans: 2},
    {q: "How many people were saved in Noah's ark?", options: ["Six", "Seven", "Eight", "Ten"], ans: 2},
    {q: "Who was the prophet that challenged the prophets of Baal on Mt Carmel?", options: ["Elisha", "Samuel", "Elijah", "Isaiah"], ans: 2},
    {q: "Jesus was crucified at a place called?", options: ["Gethsemane", "Golgotha", "Zion", "Bethel"], ans: 1},
    {q: "The garden where Jesus prayed before his arrest was?", options: ["Eden", "Gethsemane", "Sharon", "Olivet"], ans: 1},
    {q: "Who was the king that wanted to kill baby Jesus?", options: ["Agrippa", "Herod the Great", "Pilate", "Felix"], ans: 1},
    {q: "The commandments 'Honor thy father and thy mother' is the?", options: ["Third", "Fourth", "Fifth", "Sixth"], ans: 2},
    {q: "The first five books of the Bible are called the?", options: ["Gospels", "Epistles", "Pentateuch", "Psalms"], ans: 2},
    {q: "Who said, 'Am I my brother's keeper?'", options: ["Abel", "Seth", "Cain", "Lot"], ans: 2},
    {q: "The prophet who was taken to heaven in a whirlwind was?", options: ["Moses", "Enoch", "Elijah", "Ezekiel"], ans: 2},
    {q: "How many plagues did God send upon Egypt?", options: ["Seven", "Nine", "Ten", "Twelve"], ans: 2},
    {q: "Who was the oldest man in the Bible?", options: ["Adam", "Noah", "Methuselah", "Enoch"], ans: 2},
    {q: "The book of the Bible that contains the story of creation is?", options: ["Exodus", "Leviticus", "Genesis", "Numbers"], ans: 2},
    {q: "Who was the strong man whose hair was the secret of his strength?", options: ["Gideon", "David", "Samson", "Solomon"], ans: 2},
    {q: "The disciple who doubted the resurrection of Jesus was?", options: ["Peter", "Bartholomew", "Thomas", "Simon"], ans: 2},
    {q: "Who interpreted the dreams of Pharaoh?", options: ["Daniel", "Benjamin", "Joseph", "Reuben"], ans: 2},
    {q: "The shortest verse in the Bible is?", options: ["God is love", "Jesus wept", "Pray without ceasing", "Rejoice always"], ans: 1},
    {q: "Who was the wife of Ahab?", options: ["Delilah", "Ruth", "Jezebel", "Esther"], ans: 2},
    {q: "The sign of the covenant between God and Abraham was?", options: ["Sacrifice", "Baptism", "Circumcision", "Anointing"], ans: 2},
    {q: "The author of the majority of the Epistles is?", options: ["Peter", "Luke", "Paul", "James"], ans: 2}
],

        "History": [{q: "The Jihad of 1804 was led by?", options: ["El-Kanemi", "Usman Dan Fodio", "Afonja", "Nana Olomu"], ans: 1},
    {q: "The first British consul to the Bights of Benin and Biafra was?", options: ["John Beecroft", "Frederick Lugard", "Taubman Goldie", "Mungo Park"], ans: 0},
    {q: "The capital of the Kanem-Borno Empire was?", options: ["Kano", "Ngazargamu", "Ife", "Benin"], ans: 1},
    {q: "Benin is famous for its works in?", options: ["Iron", "Bronze", "Wood", "Leather"], ans: 1},
    {q: "The indirect rule system was most successful in?", options: ["Eastern Nigeria", "Western Nigeria", "Northern Nigeria", "Southern Nigeria"], ans: 2},
    {q: "The primary cause of the Aba Women's Riot of 1929 was?", options: ["Religion", "Taxation of women", "Land ownership", "Lack of education"], ans: 1},
    {q: "Mungo Park 'discovered' the River Niger at?", options: ["Lokoja", "Bussa", "Segu", "Onitsha"], ans: 2},
    {q: "The first capital of Nigeria was?", options: ["Lagos", "Calabar", "Abuja", "Lokoja"], ans: 1},
    {q: "The Oyo Empire was headed by the?", options: ["Oba", "Alaafin", "Ooni", "Sultan"], ans: 1},
    {q: "The Berlin Conference of 1884/85 was for the?", options: ["End of slave trade", "Partition of Africa", "Industrial revolution", "Spread of Christianity"], ans: 1},
    {q: "The legendary founder of the Hausa states was?", options: ["Bayajidda", "Oduduwa", "Mai Dunama", "Oranmiyan"], ans: 0},
    {q: "The Sokoto Caliphate was divided into how many emirates?", options: ["Two", "Ten", "Several", "One"], ans: 2},
    {q: "The Richards Constitution was introduced in?", options: ["1922", "1946", "1951", "1954"], ans: 1},
    {q: "The first political party in Nigeria, NNDP, was founded by?", options: ["Herbert Macaulay", "Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello"], ans: 0},
    {q: "Which empire was known for the 'trans-Saharan trade'?", options: ["Oyo", "Kanem-Borno", "Asante", "Benin"], ans: 1},
    {q: "The National Council of Nigeria and the Cameroons (NCNC) was led by?", options: ["Sarduana", "Herbert Macaulay", "Tafawa Balewa", "Nnamdi Azikiwe"], ans: 3},
    {q: "The 1914 amalgamation joined which two protectorates?", options: ["North and West", "North and South", "East and West", "Lagos and Calabar"], ans: 1},
    {q: "The headquarters of the Royal Niger Company was at?", options: ["Asaba", "Lokoja", "Akassa", "Onitsha"], ans: 0},
    {q: "The Aro Confederacy was famous for its?", options: ["Farming", "Long Juju Oracle", "Iron smelting", "Fishing"], ans: 1},
    {q: "Who was the first Nigerian to be knighted?", options: ["Adetokunbo Ademola", "Kitoyi Ajasa", "Sapara Williams", "Herbert Macaulay"], ans: 1},
    {q: "The Macpherson Constitution was introduced in?", options: ["1946", "1951", "1954", "1960"], ans: 1},
    {q: "The pre-colonial Igbo society was?", options: ["Monarchical", "Acephalous", "Centralized", "Autocratic"], ans: 1},
    {q: "The ancient Nok culture is famous for its?", options: ["Bronze", "Terra-cotta", "Iron", "Gold"], ans: 1},
    {q: "The first world war ended in?", options: ["1914", "1918", "1939", "1945"], ans: 1},
    {q: "The legendary ancestor of the Yoruba is?", options: ["Oranmiyan", "Oduduwa", "Lamurudu", "Moremi"], ans: 1},
    {q: "Indirect rule in Igboland failed because of?", options: ["The King", "Warrant Chiefs", "Religion", "Language"], ans: 1},
    {q: "The first African Bishop in Nigeria was?", options: ["Henry Townsend", "Samuel Ajayi Crowther", "Thomas Freeman", "Hope Waddell"], ans: 1},
    {q: "Which city was the center of the Old Mali Empire?", options: ["Timbuktu", "Kano", "Kumasi", "Ife"], ans: 0},
    {q: "The Action Group (AG) was predominantly a party for the?", options: ["North", "West", "East", "Middle Belt"], ans: 1},
    {q: "Nigeria's independence was granted by?", options: ["USA", "Britain", "France", "Germany"], ans: 1},
    {q: "The Egbe Omo Oduduwa was founded by?", options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Herbert Macaulay", "Ahmadu Bello"], ans: 1},
    {q: "The Lyttelton Constitution of 1954 made Nigeria a?", options: ["Republic", "Federation", "Unitary State", "Colony"], ans: 1},
    {q: "Who was the 'Father of Nigerian Nationalism'?", options: ["Herbert Macaulay", "Azikiwe", "Awolowo", "Balewa"], ans: 0},
    {q: "The Borgu expedition took place in?", options: ["1894", "1900", "1914", "1960"], ans: 0},
    {q: "The first Military Head of State in Nigeria was?", options: ["Gowon", "Aguiyi-Ironsi", "Murtala", "Obasanjo"], ans: 1},
    {q: "The Benin expedition of 1897 led to the exile of?", options: ["Oba Ovonramwen", "Oba Erediauwa", "Oba Esigie", "Oba Kenekou"], ans: 0},
    {q: "The Satiru Rebellion occurred in which year?", options: ["1906", "1914", "1929", "1945"], ans: 0},
    {q: "The Willink Commission was set up to investigate?", options: ["Corruption", "Minority fears", "Boundary disputes", "Education"], ans: 1},
    {q: "Who was the first female to drive a car in Nigeria?", options: ["Funmilayo Ransome-Kuti", "Margaret Ekpo", "Queen Amina", "Flora Shaw"], ans: 0},
    {q: "The capital of the Songhai Empire was?", options: ["Gao", "Jenne", "Meknes", "Walata"], ans: 0}], 
      
        "Economics": [
    {q: "The basic economic problem of all societies is?", options: ["Poverty", "Inflation", "Scarcity", "Money"], ans: 2},
    {q: "Utility is the satisfaction derived from?", options: ["Saving money", "Consuming a good", "Working hard", "Production"], ans: 1},
    {q: "The father of Modern Economics is?", options: ["Adam Smith", "David Ricardo", "John Hicks", "Alfred Marshall"], ans: 0},
    {q: "A market with only one seller is called a?", options: ["Duopoly", "Monopoly", "Oligopoly", "Perfect Competition"], ans: 1},
    {q: "Which of the following is a factor of production?", options: ["Money", "Capital", "Bank", "Price"], ans: 1},
    {q: "The cost of the next best alternative forgone is?", options: ["Fixed cost", "Variable cost", "Opportunity cost", "Total cost"], ans: 2},
    {q: "Inflation caused by an increase in production costs is?", options: ["Demand-pull", "Hyperinflation", "Cost-push", "Creeping inflation"], ans: 2},
    {q: "The reward for Land as a factor of production is?", options: ["Interest", "Wages", "Rent", "Profit"], ans: 2},
    {q: "A deficit budget is one where?", options: ["Revenue = Expenditure", "Revenue > Expenditure", "Expenditure > Revenue", "Taxation is zero"], ans: 2},
    {q: "The curve that shows the relationship between price and quantity supplied is?", options: ["Demand curve", "Indifference curve", "Supply curve", "Isocost curve"], ans: 2},
    {q: "Money serves as a standard for deferred payment because it is?", options: ["Portable", "Divisible", "Durable", "Generally acceptable"], ans: 3},
    {q: "The central bank's policy to control money supply is?", options: ["Fiscal policy", "Budgetary policy", "Monetary policy", "Trade policy"], ans: 2},
    {q: "Which of the following is an example of an indirect tax?", options: ["Income tax", "Company tax", "Excise duty", "Capital gains tax"], ans: 2},
    {q: "The population theory that focuses on food supply and population growth was by?", options: ["Adam Smith", "J.S. Mill", "Thomas Malthus", "David Ricardo"], ans: 2},
    {q: "International trade occurs mainly due to?", options: ["Language differences", "Political ties", "Comparative advantage", "Geographical proximity"], ans: 2},
    {q: "The apex bank in Nigeria is the?", options: ["First Bank", "World Bank", "Central Bank of Nigeria", "Bank of Industry"], ans: 2},
    {q: "Macroeconomics deals with?", options: ["Individual firms", "Household units", "The whole economy", "Specific markets"], ans: 2},
    {q: "A situation where many firms sell identical products is?", options: ["Monopoly", "Oligopoly", "Perfect Competition", "Monopolistic Competition"], ans: 2},
    {q: "Capital formed by tools, machinery, and buildings is?", options: ["Social capital", "Fixed capital", "Circulating capital", "Human capital"], ans: 1},
    {q: "Which of these is a function of money?", options: ["Creation of jobs", "Source of inflation", "Medium of exchange", "Redistribution of wealth"], ans: 2},
    {q: "The price at which quantity demanded equals quantity supplied is?", options: ["Floor price", "Ceiling price", "Equilibrium price", "Market price"], ans: 2},
    {q: "In a command economy, resource allocation is done by?", options: ["Private firms", "Consumers", "The Government", "Foreign investors"], ans: 2},
    {q: "The formula for calculating Elasticity of Demand is?", options: ["%ΔP / %ΔQ", "ΔQ / ΔP", "%ΔQ / %ΔP", "Q1 - Q2"], ans: 2},
    {q: "Division of labor leads to?", options: ["Lower output", "Generalization", "Specialization", "Higher costs"], ans: 2},
    {q: "The main aim of a private firm is?", options: ["Social welfare", "Tax evasion", "Profit maximization", "Job creation"], ans: 2},
    {q: "Liquidity refers to?", options: ["Company debt", "Fixed assets", "Ease of converting assets to cash", "Total revenue"], ans: 2},
    {q: "Economic growth is measured by an increase in?", options: ["Unemployment", "Inflation", "Gross Domestic Product", "Birth rate"], ans: 2},
    {q: "The 'Invisible Hand' concept was introduced by?", options: ["Karl Marx", "Keynes", "Adam Smith", "Alfred Marshall"], ans: 2},
    {q: "Which of these is NOT a function of a commercial bank?", options: ["Accepting deposits", "Lending money", "Issuing currency", "Providing safe custody"], ans: 2},
    {q: "A tax that takes a higher percentage from the rich is?", options: ["Regressive", "Proportional", "Progressive", "Specific"], ans: 2},
    {q: "A country's balance of trade is the difference between?", options: ["Tax and Spend", "Assets and Liabilities", "Visible exports and imports", "Birth and Death rates"], ans: 2},
    {q: "The marginal utility of a good?", options: ["Increases with consumption", "Stays constant", "Decreases with consumption", "Is always zero"], ans: 2},
    {q: "An infant industry is one that?", options: ["Produces baby toys", "Is well established", "Is new and needs protection", "Is failing"], ans: 2},
    {q: "Devaluation of a currency makes?", options: ["Imports cheaper", "Exports expensive", "Exports cheaper", "Tourism decrease"], ans: 2},
    {q: "The slope of a normal demand curve is?", options: ["Positive", "Vertical", "Negative", "Horizontal"], ans: 2},
    {q: "A stock exchange is a market for?", options: ["Second-hand goods", "Fresh food", "Stocks and shares", "Foreign currencies"], ans: 2},
    {q: "Which of the following is a primary production activity?", options: ["Banking", "Teaching", "Mining", "Insurance"], ans: 2},
    {q: "The law of diminishing returns applies to?", options: ["Short run", "Medium run", "Long run", "Global trade"], ans: 0},
    {q: "Foreign exchange reserves are managed by?", options: ["Customs", "Commercial banks", "Central Bank", "IMF"], ans: 2},
    {q: "Who is the consumer in an economy?", options: ["The producer", "The wholesaler", "The final user", "The retailer"], ans: 2}
],
        "Commerce": [

    {q: "The process of buying and selling across borders is?", options: ["Home trade", "Retail trade", "Wholesale trade", "Foreign trade"], ans: 3},
    {q: "A document that gives a buyer a discount for prompt payment is?", options: ["Invoice", "Credit note", "Debit note", "Cash discount"], ans: 3},
    {q: "Which of the following is an aid to trade?", options: ["Farming", "Fishing", "Banking", "Mining"], ans: 2},
    {q: "The exchange of goods for goods is known as?", options: ["Trade", "Commerce", "Marketing", "Barter"], ans: 3},
    {q: "A person who buys in bulk from producers and sells to retailers is a?", options: ["Consumer", "Retailer", "Wholesaler", "Agent"], ans: 2},
    {q: "The business organization owned by 2 to 20 people is a?", options: ["Sole proprietorship", "Public company", "Partnership", "Co-operative"], ans: 2},
    {q: "The document that serves as a title to goods on a ship is?", options: ["Airway bill", "Consular invoice", "Bill of lading", "Manifest"], ans: 2},
    {q: "An insurance policy that covers the ship's body is?", options: ["Cargo insurance", "Freight insurance", "Hull insurance", "Life insurance"], ans: 2},
    {q: "The place where shares are bought and sold is the?", options: ["Commodity market", "Money market", "Stock exchange", "Supermarket"], ans: 2},
    {q: "Advertising that aims at creating a good image for a company is?", options: ["Persuasive", "Informative", "Institutional", "Competitive"], ans: 2},
    {q: "A trade mark is used for?", options: ["Fixing prices", "Calculating tax", "Product identification", "Storing goods"], ans: 2},
    {q: "The acronym 'PLC' stands for?", options: ["Private Limited Corporation", "Public Limited Company", "People's Land Company", "Public Life Center"], ans: 1},
    {q: "Which of these is a function of the retailer?", options: ["Bulk breaking", "Wholesale pricing", "Manufacturing", "Exporting"], ans: 0},
    {q: "A machine that dispenses cash and performs basic banking is?", options: ["POS", "Calculator", "ATM", "Vending machine"], ans: 2},
    {q: "The act of sending goods to another country for sale is?", options: ["Importing", "Bartering", "Exporting", "Smuggling"], ans: 2},
    {q: "A warehouse located at the port for goods whose duties are not yet paid is?", options: ["State warehouse", "Wholesale warehouse", "Bonded warehouse", "Private warehouse"], ans: 2},
    {q: "The main goal of commerce is to?", options: ["Produce raw materials", "Create awareness", "Ensure distribution of goods", "Employ everyone"], ans: 2},
    {q: "E-commerce stands for?", options: ["Easy commerce", "Early commerce", "Electronic commerce", "Effective commerce"], ans: 2},
    {q: "A trade journal is an example of?", options: ["Outdoor media", "Radio media", "Print media", "Television media"], ans: 2},
    {q: "The path through which goods move from producer to consumer is the?", options: ["Road network", "Marketing mix", "Channel of distribution", "Production line"], ans: 2},
    {q: "Which of the following is a direct service?", options: ["Police", "Civil servants", "Private doctors", "Army"], ans: 2},
    {q: "A formal proposal to start a business is contained in the?", options: ["Prospectus", "Article of Association", "Memorandum of Association", "Certificate of Trading"], ans: 2},
    {q: "The process of bringing goods into a country is?", options: ["Export", "Branding", "Import", "Wholesaling"], ans: 2},
    {q: "Branding is mainly used to?", options: ["Increase weight", "Reduce price", "Differentiate products", "Pay less tax"], ans: 2},
    {q: "Chamber of Commerce is an association of?", options: ["Students", "Politicians", "Businessmen", "Farmers"], ans: 2},
    {q: "The compensation paid to a person for loss in insurance is?", options: ["Premium", "Bonus", "Indemnity", "Commission"], ans: 2},
    {q: "Buying and selling through the internet is?", options: ["Retail trade", "Mail order", "Online trading", "Vending"], ans: 2},
    {q: "A 'Lien' is a right to?", options: ["Sell goods", "Buy goods", "Retain goods for debt", "Destroy goods"], ans: 2},
    {q: "Which of these is NOT a part of the marketing mix?", options: ["Product", "Price", "Politics", "Place"], ans: 2},
    {q: "A partnership formed for a single specific transaction is a?", options: ["General partnership", "Limited partnership", "Joint venture", "Sole trade"], ans: 2},
    {q: "A business owned by one person is a?", options: ["Partnership", "Company", "Sole Proprietorship", "Conglomerate"], ans: 2},
    {q: "The person who takes out an insurance policy is the?", options: ["Insurer", "Broker", "Insured", "Agent"], ans: 2},
    {q: "The document used for withdrawing money from a bank is a?", options: ["Manifest", "Receipt", "Cheque", "Teller"], ans: 2},
    {q: "Which aid to trade involves keeping goods for future use?", options: ["Transport", "Communication", "Warehousing", "Advertising"], ans: 2},
    {q: "A market where only one buyer exists is a?", options: ["Monopoly", "Oligopoly", "Monopsony", "Perfect market"], ans: 2},
    {q: "The reward for a shareholder is?", options: ["Interest", "Salary", "Dividend", "Wages"], ans: 2},
    {q: "In branding, the name of the product is its?", options: ["Trade mark", "Slogan", "Brand name", "Logo"], ans: 2},
    {q: "Who is the 'father' of a limited liability company?", options: ["The Director", "The Manager", "The Shareholder", "The Customer"], ans: 2},
    {q: "An order to buy or sell shares is given to a?", options: ["Jobber", "Banker", "Broker", "Underwriter"], ans: 2},
    {q: "The principle of 'Uberrimae Fidei' in insurance means?", options: ["Proximate cause", "Subrogation", "Utmost good faith", "Insurable interest"], ans: 2}
],
         "Accounts": [
    {q: "The accounting equation is?", options: ["A = L - C", "A = L + C", "C = A + L", "L = A + C"], ans: 1},
    {q: "Which of the following is a current asset?", options: ["Land", "Machinery", "Cash", "Building"], ans: 2},
    {q: "A person who owes money to a business is a?", options: ["Creditor", "Debtor", "Manager", "Supplier"], ans: 1},
    {q: "The 'Golden Rule' of double entry states?", options: ["Debit the giver", "Credit the receiver", "Debit the receiver, credit the giver", "Debit all income"], ans: 2},
    {q: "Assets minus Liabilities equals?", options: ["Capital", "Profit", "Drawings", "Revenue"], ans: 0},
    {q: "The book of original entry for credit purchases is?", options: ["Sales journal", "Purchases journal", "Cash book", "Returns inward"], ans: 1},
    {q: "Which of these is a nominal account?", options: ["Bank account", "Cash account", "Building account", "Rent account"], ans: 3},
    {q: "A credit balance in the Cash Book (Bank column) is?", options: ["Cash at bank", "Bank overdraft", "Net profit", "Total assets"], ans: 1},
    {q: "The side of an account that receives value is the?", options: ["Credit side", "Balance side", "Debit side", "Total side"], ans: 2},
    {q: "Drawings in accounting refer to?", options: ["Art work", "Owner's private use of business assets", "Bank loans", "Company profit"], ans: 1},
    {q: "Which of these is an example of an intangible asset?", options: ["Motor vehicle", "Stock", "Furniture", "Goodwill"], ans: 3},
    {q: "The document used for small daily expenses is the?", options: ["Petty cash book", "Cash book", "General Ledger", "Sales journal"], ans: 0},
    {q: "The reward for a shareholder is called?", options: ["Interest", "Dividend", "Salary", "Commission"], ans: 1},
    {q: "Bad debts are debts that?", options: ["Are paid early", "Cannot be recovered", "Are owed to the bank", "Are collected in cash"], ans: 1},
    {q: "The Trading Account is prepared to determine?", options: ["Net profit", "Gross profit", "Total assets", "Capital"], ans: 1},
    {q: "Profit and Loss account is used to find?", options: ["Gross profit", "Total sales", "Net profit", "Bank balance"], ans: 2},
    {q: "Which of the following is a liability?", options: ["Cash", "Creditors", "Debtors", "Stock"], ans: 1},
    {q: "Depreciation is the permanent decrease in value of?", options: ["Current assets", "Fixed assets", "Liabilities", "Intangible assets"], ans: 1},
    {q: "The ledger is a book of?", options: ["Original entry", "Final entry", "Temporary entry", "Incomplete entry"], ans: 1},
    {q: "Which of the following is a personal account?", options: ["Office equipment", "Adebayo's Account", "Sales", "Wages"], ans: 1},
    {q: "An invoice is a document used for?", options: ["Cash sales", "Credit transactions", "Cash purchases", "Bank deposits"], ans: 1},
    {q: "Prepaid expenses are treated in the balance sheet as?", options: ["Current Assets", "Current Liabilities", "Fixed Assets", "Capital"], ans: 0},
    {q: "Working capital is calculated as?", options: ["Fixed Assets - Liabilities", "Current Assets - Current Liabilities", "Current Assets + Liabilities", "Total Assets - Capital"], ans: 1},
    {q: "The person to whom a cheque is made payable is the?", options: ["Drawer", "Payee", "Drawee", "Endorser"], ans: 1},
    {q: "Which of the following is a capital expenditure?", options: ["Payment of wages", "Purchase of machinery", "Purchase of fuel", "Repairs of building"], ans: 1},
    {q: "A trial balance is prepared to test?", options: ["Net profit", "Arithmetical accuracy", "Financial position", "Tax liability"], ans: 1},
    {q: "A contra entry occurs when a transaction involves?", options: ["Sales and Cash", "Cash and Bank", "Purchases and Bank", "Debtors and Creditors"], ans: 1},
    {q: "The money used to start a business is?", options: ["Capital", "Loan", "Revenue", "Interest"], ans: 0},
    {q: "The historical cost concept states assets should be recorded at?", options: ["Market value", "Purchase price", "Future value", "Estimates"], ans: 1},
    {q: "Final accounts consist of?", options: ["Journal and Ledger", "Trading, P&L and Balance Sheet", "Cash book and Ledger", "Trial balance and Journal"], ans: 1},
    {q: "A suspense account is used to?", options: ["Hide fraud", "Balance a trial balance temporarily", "Record drawings", "Calculate tax"], ans: 1},
    {q: "The acronym GAAP stands for?", options: ["Generally Accepted Accounting Principles", "General African Accounting Policy", "Global Area Accounting Plan", "Gross Annual Accounting Profit"], ans: 0},
    {q: "Returns Outward means goods returned to the?", options: ["Customer", "Agent", "Supplier", "Warehouse"], ans: 2},
    {q: "Which of the following is an error of principle?", options: ["Omitting a transaction", "Recording an asset as an expense", "Wrong calculation", "Writing wrong name"], ans: 1},
    {q: "Carriage Inwards is added to?", options: ["Sales", "Purchases", "Drawings", "Closing stock"], ans: 1},
    {q: "A bank reconciliation statement is prepared by?", options: ["The Bank Manager", "The Account Holder", "The Central Bank", "The Auditor"], ans: 1},
    {q: "A dishonoured cheque is one that the bank?", options: ["Accepts", "Refuses to pay", "Loses", "Cancels"], ans: 1},
    {q: "Which of these is a book of original entry?", options: ["Ledger", "Journal", "Trial Balance", "Balance Sheet"], ans: 1},
    {q: "The person who examines accounts independently is?", options: ["A bookkeeper", "An Auditor", "A bank clerk", "A tax collector"], ans: 1},
    {q: "Which of the following is an example of an asset?", options: ["Loans", "Motor Vehicles", "Overdraft", "Accrued rent"], ans: 1}
],

       "Accounts": [
    {q: "The accounting equation is?", options: ["A = L - C", "A = L + C", "C = A + L", "L = A + C"], ans: 1},
    {q: "Which of the following is a current asset?", options: ["Land", "Machinery", "Cash", "Building"], ans: 2},
    {q: "A person who owes money to a business is a?", options: ["Creditor", "Debtor", "Manager", "Supplier"], ans: 1},
    {q: "The 'Golden Rule' of double entry states?", options: ["Debit the giver", "Credit the receiver", "Debit the receiver, credit the giver", "Debit all income"], ans: 2},
    {q: "Assets minus Liabilities equals?", options: ["Capital", "Profit", "Drawings", "Revenue"], ans: 0},
    {q: "The book of original entry for credit purchases is?", options: ["Sales journal", "Purchases journal", "Cash book", "Returns inward"], ans: 1},
    {q: "Which of these is a nominal account?", options: ["Bank account", "Cash account", "Building account", "Rent account"], ans: 3},
    {q: "A credit balance in the Cash Book (Bank column) is?", options: ["Cash at bank", "Bank overdraft", "Net profit", "Total assets"], ans: 1},
    {q: "The side of an account that receives value is the?", options: ["Credit side", "Balance side", "Debit side", "Total side"], ans: 2},
    {q: "Drawings in accounting refer to?", options: ["Art work", "Owner's private use of business assets", "Bank loans", "Company profit"], ans: 1},
    {q: "Which of these is an example of an intangible asset?", options: ["Motor vehicle", "Stock", "Furniture", "Goodwill"], ans: 3},
    {q: "The document used for small daily expenses is the?", options: ["Petty cash book", "Cash book", "General Ledger", "Sales journal"], ans: 0},
    {q: "The reward for a shareholder is called?", options: ["Interest", "Dividend", "Salary", "Commission"], ans: 1},
    {q: "Bad debts are debts that?", options: ["Are paid early", "Cannot be recovered", "Are owed to the bank", "Are collected in cash"], ans: 1},
    {q: "The Trading Account is prepared to determine?", options: ["Net profit", "Gross profit", "Total assets", "Capital"], ans: 1},
    {q: "Profit and Loss account is used to find?", options: ["Gross profit", "Total sales", "Net profit", "Bank balance"], ans: 2},
    {q: "Which of the following is a liability?", options: ["Cash", "Creditors", "Debtors", "Stock"], ans: 1},
    {q: "Depreciation is the permanent decrease in value of?", options: ["Current assets", "Fixed assets", "Liabilities", "Intangible assets"], ans: 1},
    {q: "The ledger is a book of?", options: ["Original entry", "Final entry", "Temporary entry", "Incomplete entry"], ans: 1},
    {q: "Which of the following is a personal account?", options: ["Office equipment", "Adebayo's Account", "Sales", "Wages"], ans: 1},
    {q: "An invoice is a document used for?", options: ["Cash sales", "Credit transactions", "Cash purchases", "Bank deposits"], ans: 1},
    {q: "Prepaid expenses are treated in the balance sheet as?", options: ["Current Assets", "Current Liabilities", "Fixed Assets", "Capital"], ans: 0},
    {q: "Working capital is calculated as?", options: ["Fixed Assets - Liabilities", "Current Assets - Current Liabilities", "Current Assets + Liabilities", "Total Assets - Capital"], ans: 1},
    {q: "The person to whom a cheque is made payable is the?", options: ["Drawer", "Payee", "Drawee", "Endorser"], ans: 1},
    {q: "Which of the following is a capital expenditure?", options: ["Payment of wages", "Purchase of machinery", "Purchase of fuel", "Repairs of building"], ans: 1},
    {q: "A trial balance is prepared to test?", options: ["Net profit", "Arithmetical accuracy", "Financial position", "Tax liability"], ans: 1},
    {q: "A contra entry occurs when a transaction involves?", options: ["Sales and Cash", "Cash and Bank", "Purchases and Bank", "Debtors and Creditors"], ans: 1},
    {q: "The money used to start a business is?", options: ["Capital", "Loan", "Revenue", "Interest"], ans: 0},
    {q: "The historical cost concept states assets should be recorded at?", options: ["Market value", "Purchase price", "Future value", "Estimates"], ans: 1},
    {q: "Final accounts consist of?", options: ["Journal and Ledger", "Trading, P&L and Balance Sheet", "Cash book and Ledger", "Trial balance and Journal"], ans: 1},
    {q: "A suspense account is used to?", options: ["Hide fraud", "Balance a trial balance temporarily", "Record drawings", "Calculate tax"], ans: 1},
    {q: "The acronym GAAP stands for?", options: ["Generally Accepted Accounting Principles", "General African Accounting Policy", "Global Area Accounting Plan", "Gross Annual Accounting Profit"], ans: 0},
    {q: "Returns Outward means goods returned to the?", options: ["Customer", "Agent", "Supplier", "Warehouse"], ans: 2},
    {q: "Which of the following is an error of principle?", options: ["Omitting a transaction", "Recording an asset as an expense", "Wrong calculation", "Writing wrong name"], ans: 1},
    {q: "Carriage Inwards is added to?", options: ["Sales", "Purchases", "Drawings", "Closing stock"], ans: 1},
    {q: "A bank reconciliation statement is prepared by?", options: ["The Bank Manager", "The Account Holder", "The Central Bank", "The Auditor"], ans: 1},
    {q: "A dishonoured cheque is one that the bank?", options: ["Accepts", "Refuses to pay", "Loses", "Cancels"], ans: 1},
    {q: "Which of these is a book of original entry?", options: ["Ledger", "Journal", "Trial Balance", "Balance Sheet"], ans: 1},
    {q: "The person who examines accounts independently is?", options: ["A bookkeeper", "An Auditor", "A bank clerk", "A tax collector"], ans: 1},
    {q: "Which of the following is an example of an asset?", options: ["Loans", "Motor Vehicles", "Overdraft", "Accrued rent"], ans: 1}
],
    }
};

// --- PHASE 1: DEPARTMENT & SUBJECT SELECTION ---

function selectDepartment(dept) {
    // Hide department buttons, show the Back button and selection area
    const deptNav = document.getElementById('department-nav');
    if(deptNav) deptNav.style.display = 'none';
    
    const backCont = document.getElementById('back-container');
    if(backCont) backCont.style.display = 'block';
    
    const subNav = document.getElementById('subject-nav');
    if(subNav) {
        subNav.style.display = 'flex';
        // Generate checkboxes for the subjects
        const available = examData[dept];
        subNav.innerHTML = available.map(sub => `
            <div class="sub-choice" style="margin-right:15px; display:inline-block;">
                <input type="checkbox" id="chk-${sub}" value="${sub}" 
                ${sub === 'English' ? 'checked disabled' : ''} onchange="handleSubjectSelection()">
                <label for="chk-${sub}">${sub}</label>
            </div>
        `).join('') + `<br><button id="start-btn" onclick="startExam()" disabled style="margin-top:10px; padding: 10px 20px; background: #28a745; color: white; border: none; cursor: pointer;">Start Exam (Pick 3 more)</button>`;
    }
}

function goBackToDepts() {
    document.getElementById('department-nav').style.display = 'flex';
    document.getElementById('subject-nav').style.display = 'none';
    document.getElementById('back-container').style.display = 'none';
    selectedSubjects = [];
}

function handleSubjectSelection() {
    const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    const startBtn = document.getElementById('start-btn');
    
    if (checked.length === 4) {
        selectedSubjects = checked;
        startBtn.disabled = false;
        startBtn.innerText = "Start Exam Now";
    } else {
        startBtn.disabled = true;
        startBtn.innerText = `Pick ${4 - checked.length} more`;
    }
}

// --- PHASE 2: THE EXAM ENGINE ---

function startExam() {
    const backCont = document.getElementById('back-container');
    if(backCont) backCont.style.display = 'none';
    
    const subNav = document.getElementById('subject-nav');
    subNav.innerHTML = selectedSubjects.map(sub => 
        `<button class="subject-btn" id="tab-${sub}" onclick="switchSubject('${sub}')" style="margin-right:5px; padding:10px;">${sub}</button>`
    ).join('');
    
    startTimer(120); // 2 hours
    switchSubject('English');
}

function switchSubject(subjectName) {
    currentSubject = subjectName;
    currentIndex = 0;

    document.querySelectorAll('.subject-btn').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${subjectName}`);
    if(activeTab) activeTab.classList.add('active');

    setupGrid(subjectName);
    renderQuestion();
}

function setupGrid(subject) {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = "";
    const totalQs = (subject === "English") ? 60 : 40;
    
    for (let i = 0; i < totalQs; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-num');
        div.innerText = i + 1;
        div.id = `grid-item-${i}`;
        
        if (userAnswers[currentSubject] && userAnswers[currentSubject][i] !== undefined) {
            div.classList.add('answered');
        }

        div.onclick = () => { currentIndex = i; renderQuestion(); };
        grid.appendChild(div);
    }
}

function renderQuestion() {
    const qData = examData.questions[currentSubject][currentIndex];
    const container = document.getElementById('options-container');
    const qText = document.getElementById('question-text');
    
    document.querySelectorAll('.grid-num').forEach(el => el.style.border = "1px solid #ccc");
    const activeGrid = document.getElementById(`grid-item-${currentIndex}`);
    if(activeGrid) activeGrid.style.border = "2px solid #004a99";

    if (!qData) {
        qText.innerHTML = `<span style="color:red;">[${currentSubject} Q${currentIndex + 1}]</span><br>Empty. Solve the question then paste the code here.`;
        container.innerHTML = "";
        return;
    }

    qText.innerText = `Q${currentIndex + 1}: ${qData.q}`;
    const savedAns = (userAnswers[currentSubject]) ? userAnswers[currentSubject][currentIndex] : null;
    
    container.innerHTML = qData.options.map((opt, i) => `
        <label class="option-item" style="display:block; margin-bottom:10px; cursor:pointer;">
            <input type="radio" name="answer" value="${i}" 
            ${savedAns == i ? 'checked' : ''} 
            onchange="saveAnswer(${i})"> ${opt}
        </label>
    `).join('');
}

function saveAnswer(val) {
    if (!userAnswers[currentSubject]) userAnswers[currentSubject] = {};
    userAnswers[currentSubject][currentIndex] = val;
    
    const gridItem = document.getElementById(`grid-item-${currentIndex}`);
    if(gridItem) gridItem.classList.add('answered');
}

function changeQuestion(step) {
    const totalQs = (currentSubject === "English") ? 60 : 40;
    let newIndex = currentIndex + step;
    if (newIndex >= 0 && newIndex < totalQs) {
        currentIndex = newIndex;
        renderQuestion();
    }
}

// --- TIMER LOGIC ---
function startTimer(minutes) {
    let seconds = minutes * 60;
    const timerEl = document.getElementById('timer');
    const countdown = setInterval(() => {
        let h = Math.floor(seconds / 3600);
        let m = Math.floor((seconds % 3600) / 60);
        let s = seconds % 60;
        timerEl.innerText = `Time Left: ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (seconds <= 0) {
            clearInterval(countdown);
            submitExam();
        }
        seconds--;
    }, 1000);
}

// --- SUBMIT LOGIC ---
const submitBtn = document.getElementById('submit-btn');
if(submitBtn) submitBtn.onclick = submitExam;

function submitExam() {
    if(confirm("Are you sure you want to submit?")) {
        let totalScore = 0;
        let subjectBreakdown = {};

        selectedSubjects.forEach(sub => {
            let score = 0;
            const qs = examData.questions[sub];
            const answers = userAnswers[sub] || {};
            qs.forEach((q, idx) => { if(answers[idx] == q.ans) score++; });
            let qCount = (sub === "English") ? 60 : 40;
            let weightedScore = Math.round((score / qCount) * 100) || 0;
            subjectBreakdown[sub] = weightedScore;
            totalScore += weightedScore;
        });

        localStorage.setItem('jambResult', JSON.stringify({ total: totalScore, breakdown: subjectBreakdown }));
        window.location.href = 'submit.html';
    }

}
