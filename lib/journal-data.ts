// Sonargaon University Journal — issue archive data.
// PDF links are '#' placeholders until the real article/issue PDFs are wired.

export interface JournalIssue {
  slug: string;
  volume: string;        // e.g. "5"
  issue: string;         // e.g. "II" or "I & II"
  period: string;        // e.g. "July–December 2025"
  // For issues with a per-article breakdown:
  articles?: { title: string; pdf: string }[];
  hasTechnicalNote?: boolean;
  technicalNote?: { title: string; pdf: string };
  frontMatter?: boolean; // show Editorial / Board / Call for Papers cards
  // For older issues that only have a single full-issue PDF:
  fullPdf?: string;
  size?: string;         // e.g. "92.27 MB"
  current?: boolean;
  cover?: string;        // real cover image (falls back to gradient placeholder)
}

const A = (title: string, pdf = '#') => ({ title, pdf });

export const JOURNAL_ISSUES: JournalIssue[] = [
  {
    slug: 'volume-5-issue-2',
    volume: '5',
    issue: 'II',
    period: 'July–December 2025',
    current: true,
    cover: '/assets/journal/sonargaon.png',
    frontMatter: true,
    hasTechnicalNote: true,
    technicalNote: { title: 'Technical Note', pdf: '#' },
    articles: [
      A('Prophet Mohammad (SM) As The World’s Greatest Reformer', '/assets/journal/v5i2/journal111.pdf'),
      A('Bridging the Knowledge Management Gap: A Comparative Analysis of Public and Private University Libraries in Bangladesh in the Context of the 4th Industrial Revolution', '/assets/journal/v5i2/journal22.pdf'),
      A('The Legal Status of River Rights in Bangladesh: A Comparative Analysis of River Personhood and Rights-Based Approach', '/assets/journal/v5i2/journal33.pdf'),
      A('A Critical Review of the Opportunities and Obstacles of Online Journalism in Bangladesh', '/assets/journal/v5i2/journal44.pdf'),
      A('Assessing the Impact of Social Media on University Students’ Studies: A Chi-Square Analysis at the University of Rajshahi', '/assets/journal/v5i2/journal55.pdf'),
      A('Analysis of Inventory Systems for Non-Perishable Goods with Changing Production Rates and Random Switching Times', '/assets/journal/v5i2/journal66.pdf'),
      A('Predicting Heart Disease with Machine Learning: A Comparative Analysis of Models', '/assets/journal/v5i2/journal77.pdf'),
      A('Integration of Wearable Technology in Fashion Design: A Path towards Smart Aesthetics', '/assets/journal/v5i2/journal88.pdf'),
      A('Digital Sovereignty in the Artificial Intelligence Era: Exploring Legal and Jurisprudential Norms in Globalized International Law', '/assets/journal/v5i2/journal99.pdf'),
      A('Epistemological and Poetic Reconstruction: Allama Iqbal’s Strategy for Muslim Renaissance and Self-Determination', '/assets/journal/v5i2/journal100.pdf'),
    ],
  },
  {
    slug: 'volume-5-issue-1',
    volume: '5',
    issue: 'I',
    period: 'January–June 2025',
    frontMatter: true,
    hasTechnicalNote: true,
    technicalNote: { title: 'Technical Note', pdf: '#' },
    articles: [
      A('Evaluating the Quality of Higher Education in Private Universities of Bangladesh: Challenges, Developments, and the Path Forward'),
      A('Advancements of Cathode Material for Rechargeable Lithium-Ion Batteries: Progress, Challenges, and Electrochemical Performance'),
      A('Comparative Performance Evaluation of Classical Machine Learning and Quantum SVM for Heart Disease Prediction using a Quantum-Featured Dataset'),
      A('Development of an Automated Railway Gate Control System for Enhanced Safety in Bangladesh'),
      A('Environmental and Social Impacts of Artificial Intelligence and Digital Transformation on Industrial Management in Bangladesh'),
      A('Impact of Human Resource Outsourcing Activities on Employee’s Performance of State-owned Commercial Banks in Bangladesh'),
      A('International Labor Migration and Economic Development in Bangladesh: Evidence from an ARDL Analysis'),
      A('Numerical Investigation of Fourth-Order Boundary Value Problems Using the Finite Difference Method'),
      A('Perishable Production Inventory Model for Exponential Demand Rate with Constant Production Rate and offering Discount during Production Run'),
      A('Redefining the Paradigm: How ChatGPT and Generative AI Are Transforming Scientific Publishing and Knowledge Dissemination'),
      A('Socio-Demographical Causes behind Increasing Dependency on Caesarean Delivery: A Case Study on Literate Working Women Living in Dhaka City'),
    ],
  },
  {
    slug: 'volume-4',
    volume: '4',
    issue: 'I & II',
    period: 'December 2024',
    cover: '/assets/journal/cover-v4.png',
    frontMatter: true,
    hasTechnicalNote: true,
    technicalNote: { title: 'Technical Note', pdf: '#' },
    articles: [
      A('Numerical Simulation of NACA 4412 Airfoil to Analyse its Performance Characteristics M15 and M20', '/assets/journal/v4/a1.pdf'),
      A('A Comparison of Compressive Strength of Concrete by Using Different Brands of Portland Composite Cement for Grade M15 and M20', '/assets/journal/v4/a2.pdf'),
      A('Production of Sustainable Alternative Building Block'),
      A('Analyzing the Apparel Buying Behavior of Middle Age Men', '/assets/journal/v4/a4.pdf'),
      A('Threats of RMG Sector in Bangladesh and Possible Way Outs', '/assets/journal/v4/a5.pdf'),
      A('Corporate Governance Practices in Bangladesh: An Overview of Pharmaceutical, Chemical and Ceramic Industry', '/assets/journal/v4/a6.pdf'),
      A('An Investigation of Microclimatic Influence of Greening Roofs, Walls, and Terraces in Urban Dwellings: A Case of Uttara, Dhaka', '/assets/journal/v4/a7.pdf'),
      A('Automatic Voltage Regulator Control Simulation Analysis using Differential Evolution Algorithm', '/assets/journal/v4/a8.pdf'),
      A('Survival Scenario of the Street Children in Bangladesh', '/assets/journal/v4/a9.pdf'),
    ],
  },
  {
    slug: 'volume-3',
    volume: '3',
    issue: 'I & II',
    period: 'July 2020',
    cover: '/assets/journal/cover-v3.png',
    frontMatter: true,
    hasTechnicalNote: true,
    technicalNote: { title: 'Technical Note', pdf: '#' },
    articles: [
      A('Shaping Festival Financing and Expenditure: A Fair Assessment of Bangladeshi Earnings Capable Residents', '/assets/journal/v3/a1.pdf'),
      A('Mixed Convection in a Ventilated Concentric Horizontal Cylindrical Annulus for Aiding and Opposing Buoyancy Forces', '/assets/journal/v3/a2.pdf'),
      A('Study and Analysis of Production Management using Renewable Energy for Sustainable Development', '/assets/journal/v3/a3.pdf'),
      A('Natural Convection in a Horizontal Cylindrical Annulus with Equally Spaced Radially Divergent Longitudinal Solid Fins: Part I', '/assets/journal/v3/a4.pdf'),
      A('From Morality to Legal Right: A Comprehensive Analysis on Parent’s Alimony', '/assets/journal/v3/a5.pdf'),
      A('Evaluation of the Effect of End Conditions on the Load Carrying Capacity of Long Column', '/assets/journal/v3/a6.pdf'),
      A('A Detail Study of Inspiration to Fashion Design in the Context of Ready Made Garment (RMG) Industry in Bangladesh', '/assets/journal/v3/a7.pdf'),
      A('Analysis of Extracted Bio-Fuel from Plastic based Solid Medical Waste through Pyrolysis', '/assets/journal/v3/a8.pdf'),
      A('Study of Seam Performance of Jute Bag in Plain and Twill Fabric', '/assets/journal/v3/a9.pdf'),
    ],
  },
  {
    slug: 'volume-2-number-2',
    volume: '2',
    issue: '2',
    period: 'December 2017',
    cover: '/assets/journal/cover-v2.png',
    articles: [
      A('Energy Storage in an Impure Paraffin Wax Embedded in the Finned-Annulus of Two Horizontal Tubes: Part II', '/assets/journal/v2i1/a1.pdf'),
      A('An Empirical Study on Determining the Association Between Micro Finance and Poor’s Access: Evidence from Pakistan', '/assets/journal/v2i1/a2.pdf'),
      A('Community Based Approaches to Disaster Risk Reduction in Bangladesh', '/assets/journal/v2i1/a3.pdf'),
      A('Effectiveness of Using Slag as Coarse Aggregate and Study of Its Impact on Mechanical Properties of Concrete', '/assets/journal/v2i1/a4.pdf'),
      A('Strength Variation of Concrete Between Cylindrical and Cubical Specimen Due to Various Proportion of Ingredients', '/assets/journal/v2i1/a5.pdf'),
      A('Social Networks: Perceived Impact on Students Academic and Personal Life', '/assets/journal/v2i1/a6.pdf'),
      A('Modified Roof-Top Garden as a Tuned Mass Damper for Vibration Control of Building Structure Under Earthquake Excitation', '/assets/journal/v2i1/a7.pdf'),
      A('Scenario of Safety Issues Prevailing Accident in Rural Engineering Workshop in Bangladesh', '/assets/journal/v2i1/a8.pdf'),
      A('A Review on Renovation of Gas Turbine to Improve Efficiency by Using Compressor Water Wash', '/assets/journal/v2i1/a9.pdf'),
      A('Nation Branding: Branding Bangladesh Using Global Branding Strategy with the Help of Domestic Products', '/assets/journal/v2i1/a10.pdf'),
    ],
  },
  {
    slug: 'volume-2-number-1',
    volume: '2',
    issue: '1',
    period: 'June 2017',
    cover: '/assets/journal/cover-v2.png',
    articles: [
      A('Energy Storage in an Impure Paraffin Wax Embedded in the Finned-Annulus of Two Horizontal Tubes: Part II', '/assets/journal/v2i1/a1.pdf'),
      A('An Empirical Study on Determining the Association Between Micro Finance and Poor’s Access: Evidence from Pakistan', '/assets/journal/v2i1/a2.pdf'),
      A('Community Based Approaches to Disaster Risk Reduction in Bangladesh', '/assets/journal/v2i1/a3.pdf'),
      A('Effectiveness of Using Slag as Coarse Aggregate and Study of Its Impact on Mechanical Properties of Concrete', '/assets/journal/v2i1/a4.pdf'),
      A('Strength Variation of Concrete Between Cylindrical and Cubical Specimen Due to Various Proportion of Ingredients', '/assets/journal/v2i1/a5.pdf'),
      A('Social Networks: Perceived Impact on Students Academic and Personal Life', '/assets/journal/v2i1/a6.pdf'),
      A('Modified Roof-Top Garden as a Tuned Mass Damper for Vibration Control of Building Structure Under Earthquake Excitation', '/assets/journal/v2i1/a7.pdf'),
      A('Scenario of Safety Issues Prevailing Accident in Rural Engineering Workshop in Bangladesh', '/assets/journal/v2i1/a8.pdf'),
      A('A Review on Renovation of Gas Turbine to Improve Efficiency by Using Compressor Water Wash', '/assets/journal/v2i1/a9.pdf'),
      A('Nation Branding: Branding Bangladesh Using Global Branding Strategy with the Help of Domestic Products', '/assets/journal/v2i1/a10.pdf'),
    ],
  },
  {
    slug: 'volume-1-number-2',
    volume: '1',
    issue: '2',
    period: 'December 2016',
    cover: '/assets/journal/cover-v1i2.png',
    articles: [
      A('Effect of Moving Surface on Aerodynamic Characteristics in NACA0012 Airfoil', '/assets/journal/v1i2/a1.pdf'),
      A('Present Status and Potential Locations of Open Spaces in the Dhaka City Corporation Area: Using GIS Technology', '/assets/journal/v1i2/a2.pdf'),
      A('Characterizing the Driver Behavior for Non-Motorized Transport in Khulna Metropolitan City', '/assets/journal/v1i2/a3.pdf'),
      A('Fractals Generating Techniques', '/assets/journal/v1i2/a4.pdf'),
      A('Improvement of Conventional Electric Heater to Reduce Energy Loss and its Performance Test', '/assets/journal/v1i2/a5.pdf'),
      A('Effect of Macro Economic Variables on Stock Market Returns - Bangladesh Context', '/assets/journal/v1i2/a6.pdf'),
      A('An Economic Analysis of Shipping Industry in Bangladesh: Implications for Sustainable Development', '/assets/journal/v1i2/a7.pdf'),
      A('Is Microfinance Beneficial or Optimistic', '/assets/journal/v1i2/a8.pdf'),
      A('A Comparative Study of Performance of Different Types of Barrier Constructions for Attenuating Low Frequency Noise', '/assets/journal/v1i2/a9.pdf'),
      A('The Influence of Balance of Payments and Balance of Trade on Exchange Rate in Developing Countries of Asia: A Case Study of Bangladesh, Pakistan and India', '/assets/journal/v1i2/a10.pdf'),
      A('SNR Estimation Technique of the AWGN Channel by Second and Fourth-Order Moments (M2M4)', '/assets/journal/v1i2/a11.pdf'),
    ],
  },
  {
    slug: 'volume-1-number-1',
    volume: '1',
    issue: '1',
    period: 'June 2016',
    cover: '/assets/journal/cover-v1i1.png',
    articles: [
      A('Performance Evaluation of Cement Industry of Bangladesh: A Case Study on Some Selected Firms', '/assets/journal/v1i1/a1.pdf'),
      A('Rights of Women Workers in the Ready-Made Garment (RMG) Sector of Bangladesh: Law and Practice', '/assets/journal/v1i1/a2.pdf'),
      A('D-STATCOM Model for Restoration of Distribution System Stability', '/assets/journal/v1i1/a3.pdf'),
      A('Corporate Social Responsibility and its Impact on Corporate Profitability: Some Evidences from Selected Private Commercial Banks in Bangladesh', '/assets/journal/v1i1/a4.pdf'),
      A('Interference in Academic Freedom and a Threat to Professional Immunity: A Legal Research Specially Focused on Bangladeshi Universities', '/assets/journal/v1i1/a5.pdf'),
      A('Seismic Performance Assessment of Laminated Rubber Bearing on Kadamtaly Flyover', '/assets/journal/v1i1/a6.pdf'),
      A('Development and Potentials of Pharmaceutical Industry in Bangladesh: A Synopsis', '/assets/journal/v1i1/a7.pdf'),
      A('Ship Motion Prediction in Regular Head Waves', '/assets/journal/v1i1/a8.pdf'),
      A('Corporate Liquidity and Profitability Patterns of Selected Textile Manufacturing Companies Listed in the Dhaka Stock Exchange Limited', '/assets/journal/v1i1/a9.pdf'),
      A('Study on the Spirality and Shrinkage of Weft Knitted Fabric: An Impact of Tumble Drying and Line Drying', '/assets/journal/v1i1/a10.pdf'),
      A('Study of Hybrid Photovoltaic Solar Thermal Systems During Summer Months in Bangladesh', '/assets/journal/v1i1/a11.pdf'),
      A('Augmentation of Heat Transfer in a Circular Pipe by Means of Twisted Vane Inserted', '/assets/journal/v1i1/a12.pdf'),
    ],
  },
];

export const getIssueBySlug = (slug: string) =>
  JOURNAL_ISSUES.find((i) => i.slug === slug);

export const issueLabel = (i: JournalIssue) =>
  i.issue.includes('&') ? `Volume ${i.volume} · Issues ${i.issue}` : `Volume ${i.volume} · Issue ${i.issue}`;
