// Sonargaon University — Fall 2026 tuition & fees.
// Source: official "Fall 2026 Course Fee-Approval" sheet (Board of Trustees).
// Figures in BDT. `null` marks a tier/shift that does not apply (---- in source).

export interface FeeRow {
  // Result band that earns this waiver (SSC+HSC / SSC+Diploma).
  band: string;
  waiver: number | null;     // % tuition waiver (null = base / no waiver)
  perCredit: number | null;  // per-credit tuition after waiver
  totalHsc: number | null;   // full program cost (HSC entry)
  totalDip: number | null;   // full program cost (Diploma entry)
}

export interface Shift {
  name: string;              // SUN (Morning) / STAR (Friday) / Moon (Evening)
  admissionFee: number;
  semesterFee: number;
  rows: FeeRow[];            // rows[0] = base (full fee, no waiver)
  note?: string;
}

export interface UGProgram {
  code: string;
  name: string;
  credit: string;            // total credit hours
  kind: 'tri' | 'bi';
  shifts: Shift[];
}

export interface PGProgram {
  code: string;
  name: string;
  credit: number;
  duration: string;
  kind: 'pg-tri' | 'pg-bi';
  regularPerCredit: number;
  waiver: number;            // % off regular per-credit
  perCredit: number;
  semesterFee: number;
  admissionFee: number;
  total: number;             // Fall 2026 total
  suSemesterFee: number;     // for existing SU students
  suTotal: number;
}

const base = (perCredit: number, totalHsc: number, totalDip: number | null = null): FeeRow =>
  ({ band: 'No waiver (full fee)', waiver: null, perCredit, totalHsc, totalDip });
const tier = (
  band: string, waiver: number, perCredit: number, totalHsc: number, totalDip: number | null = null,
): FeeRow => ({ band, waiver, perCredit, totalHsc, totalDip });

// ---------------------------------------------------------------------------
// Undergraduate — Tri-Semester (four-month semesters)
// ---------------------------------------------------------------------------
export const UG_TRI: UGProgram[] = [
  {
    code: 'CSE', name: 'Computer Science & Engineering', credit: '162', kind: 'tri',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 96000, rows: [
        base(2825, 566150),
        tier('5.00–8.99 / 5.00–7.99', 39, 1723, 387626),
        tier('9.00–9.99 / 8.00–9.00', 41, 1667, 378554),
        tier('10.00 (Golden A+)', 52, 1356, 328172),
      ]},
      { name: 'STAR (Friday)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(2700, 521900, 467300),
        tier('5.00–8.99 / 5.00–7.99', 51, 1323, 298826, 269012),
        tier('9.00–9.99 / 8.00–9.00', 53, 1269, 290078, 261236),
        tier('10.00 (Golden A+)', 55, 1215, 281330, null),
      ]},
      { name: 'Moon (Evening)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(3000, 570500, 510500),
        tier('5.00–8.99 / 5.00–7.99', 66, 1020, 249740, 225380),
        tier('9.00–9.99 / 8.00–9.00', 68, 960, 240020, 216740),
        tier('10.00 (Golden A+)', 69, 930, 235160, null),
      ]},
    ],
  },
  {
    code: 'EEE', name: 'Electrical & Electronic Engineering', credit: '161', kind: 'tri',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 96000, rows: [
        base(1750, 390250),
        tier('5.00–8.99 / 5.00–7.99', 55, 788, 235368),
        tier('9.00–9.99 / 8.00–9.00', 58, 735, 226835),
        tier('10.00 (Golden A+)', 73, 473, 184653),
      ]},
      { name: 'STAR (Friday)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(3326, 619986, 557444),
        tier('5.00–8.99 / 5.00–7.99', 62, 1264, 288004, 260516),
        tier('9.00–9.99 / 8.00–9.00', 64, 1197, 277217, 250868),
        tier('10.00 (Golden A+)', 66, 1131, 266591, null),
      ]},
      { name: 'Moon (Evening)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(3326, 619986, 557444),
        tier('5.00–8.99 / 5.00–7.99', 71, 965, 239865, 217460),
        tier('9.00–9.99 / 8.00–9.00', 73, 898, 229078, 207812),
        tier('10.00 (Golden A+)', 75, 832, 218452, null),
      ]},
    ],
  },
  {
    code: 'ME', name: 'Mechanical Engineering', credit: '160', kind: 'tri',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 96000, rows: [
        base(3900, 732500),
        tier('5.00–8.99 / 5.00–7.99', 75, 975, 264500),
        tier('9.00–9.99 / 8.00–9.00', 77, 897, 252020),
        tier('10.00 (Golden A+)', 81, 741, 227060),
      ]},
      { name: 'STAR (Friday)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(4480, 801300, 723620),
        tier('5.00–8.99 / 5.00–7.99', 64, 1613, 342580, 310772),
        tier('9.00–9.99 / 8.00–9.00', 66, 1523, 328180, 297812),
        tier('10.00 (Golden A+)', 68, 1434, 313940, null),
      ]},
      { name: 'Moon (Evening)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(4700, 836500, 755300),
        tier('5.00–8.99 / 5.00–7.99', 80, 940, 234900, 213860),
        tier('9.00–9.99 / 8.00–9.00', 82, 846, 219860, 200324),
        tier('10.00 (Golden A+)', 85, 705, 197300, null),
      ]},
    ],
  },
  {
    code: 'Civil', name: 'Civil Engineering', credit: '161', kind: 'tri',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 96000, rows: [
        base(1750, 390250),
        tier('5.00–8.99 / 5.00–7.99', 54, 805, 238105),
        tier('9.00–9.99 / 8.00–9.00', 57, 753, 229733),
        tier('10.00 (Golden A+)', 72, 490, 187390),
      ]},
      { name: 'STAR (Friday)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(3355, 624655, 573363),
        tier('5.00–8.99 / 5.00–7.99', 62, 1275, 289775, 266563),
        tier('9.00–9.99 / 8.00–9.00', 64, 1208, 278988, 256680),
        tier('10.00 (Golden A+)', 67, 1107, 262727, null),
      ]},
      { name: 'Moon (Evening)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(3400, 631900, 580000),
        tier('5.00–8.99 / 5.00–7.99', 72, 952, 237772, 218920),
        tier('9.00–9.99 / 8.00–9.00', 74, 884, 226824, 208890),
        tier('10.00 (Golden A+)', 76, 816, 215876, null),
      ]},
    ],
  },
  {
    code: 'Textile', name: 'Textile Engineering', credit: '161', kind: 'tri',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 96000, rows: [
        base(1000, 269500),
        tier('5.00–8.99 / 5.00–7.99', 33, 670, 216370),
        tier('9.00–9.99 / 8.00–9.00', 40, 600, 205100),
        tier('10.00 (Golden A+)', 59, 410, 174510),
      ]},
      { name: 'STAR (Friday)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(2415, 473315, 416600),
        tier('5.00–8.99 / 5.00–7.99', 50, 1208, 278988, 241620),
        tier('9.00–9.99 / 8.00–9.00', 52, 1159, 271099, 234760),
        tier('10.00 (Golden A+)', 54, 1111, 263371, null),
      ]},
    ],
  },
  {
    code: 'BBA', name: 'Business Administration', credit: '141', kind: 'tri',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 96000, rows: [
        base(2430, 451130),
        tier('5.00–8.99 / 5.00–7.99', 33, 1628, 338048),
        tier('9.00–9.99 / 8.00–9.00', 36, 1555, 327755),
        tier('10.00 (Golden A+)', 54, 1118, 266138),
      ]},
      { name: 'STAR (Friday)', admissionFee: 12500, semesterFee: 72000, rows: [
        base(3000, 507500),
        tier('5.00–8.99 / 5.00–7.99', 42, 1740, 329840),
        tier('9.00–9.99 / 8.00–9.00', 45, 1650, 317150),
        tier('10.00 (Golden A+)', 47, 1590, 308690),
      ]},
    ],
  },
];

// ---------------------------------------------------------------------------
// Undergraduate — Bi-Semester (six-month semesters)
// ---------------------------------------------------------------------------
export const UG_BI: UGProgram[] = [
  {
    code: 'AMT', name: 'Apparel Manufacture & Technology', credit: '160', kind: 'bi',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 88000, rows: [
        base(1500, 340500),
        tier('5.00–8.99 / 5.00–7.99', 43, 855, 237300),
        tier('9.00–9.99 / 8.00–9.00', 48, 780, 225300),
        tier('10.00 (Golden A+)', 68, 480, 177300),
      ]},
      { name: 'STAR (Friday)', admissionFee: 12500, semesterFee: 64000, rows: [
        base(2460, 470100),
        tier('5.00–8.99 / 5.00–7.99', 50, 1230, 273300),
        tier('9.00–9.99 / 8.00–9.00', 53, 1156, 261460),
        tier('10.00 (Golden A+)', 56, 1082, 249620),
      ]},
    ],
  },
  {
    code: 'FDT', name: 'Fashion Design & Technology', credit: '160', kind: 'bi',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 88000, rows: [
        base(1500, 340500),
        tier('5.00–8.99 / 5.00–7.99', 42, 870, 239700),
        tier('9.00–9.99 / 8.00–9.00', 46, 810, 230100),
        tier('10.00 (Golden A+)', 66, 510, 182100),
      ]},
      { name: 'STAR (Friday)', admissionFee: 12500, semesterFee: 64000, rows: [
        base(2460, 470100),
        tier('5.00–8.99 / 5.00–7.99', 52, 1181, 265460),
        tier('9.00–9.99 / 8.00–9.00', 55, 1107, 253620),
        tier('10.00 (Golden A+)', 58, 1033, 241780),
      ]},
    ],
  },
  {
    code: 'NAME', name: 'Naval Architecture & Marine Engineering', credit: '161', kind: 'bi',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 8500, semesterFee: 96000, rows: [
        base(525, 189025),
        tier('5.00–10.00 / 5.00–9.00', 27, 383, 166163),
      ]},
    ],
  },
  {
    code: 'BARC', name: 'Architecture', credit: '196', kind: 'bi',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 120000, rows: [
        base(4030, 922380),
        tier('5.00–8.99 / 5.00–7.99', 73, 1088, 345748),
        tier('9.00–9.99 / 8.00–9.00', 81, 766, 282636),
        tier('10.00 (Golden A+)', 82, 725, 274600),
      ]},
    ],
  },
  {
    code: 'BANGLA', name: 'B.A. (Honours) in Bangla', credit: '142', kind: 'bi',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 88000, rows: [
        base(950, 235400),
        tier('5.00–9.99 / 5.00–9.00', 33, 637, 190954),
        tier('10.00 (Golden A+)', 50, 475, 167950),
      ]},
    ],
  },
  {
    code: 'LLB', name: 'Bachelor of Laws (LLB Honours)', credit: '144', kind: 'bi',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 96000, rows: [
        base(6666, 1068404),
        tier('5.00–9.99 / 5.00–8.99', 54, 3066, 550004),
        tier('10.00 / 9.00', 59, 2733, 502052),
      ], note: 'For Fall 2026, one month’s tuition and semester fees must be paid along with the admission fee. Tuition and semester fees are to be paid in advance every month; otherwise a penalty applies.' },
    ],
  },
  {
    code: 'JMS', name: 'Journalism & Media Studies', credit: '146', kind: 'bi',
    shifts: [
      { name: 'SUN (Morning)', admissionFee: 12500, semesterFee: 96000, rows: [
        base(3500, 619500),
        tier('5.00–8.99 / 5.00–7.99', 75, 875, 236250),
        tier('9.00–9.99 / 8.00–9.00', 81, 665, 205590),
        tier('10.00 (Golden A+)', 89, 385, 164710),
      ]},
    ],
  },
];

// ---------------------------------------------------------------------------
// Postgraduate (Master's) programs
// ---------------------------------------------------------------------------
export const PG_TRI: PGProgram[] = [
  { code: 'MBA',  name: 'Master of Business Administration',        credit: 39, duration: '1 Year',    kind: 'pg-tri', regularPerCredit: 2000, waiver: 25, perCredit: 1500, semesterFee: 12000, admissionFee: 12500, total: 83000,  suSemesterFee: 6000,  suTotal: 73000 },
  { code: 'EMBA', name: 'Executive MBA',                            credit: 54, duration: '1.4 Years',  kind: 'pg-tri', regularPerCredit: 2000, waiver: 30, perCredit: 1400, semesterFee: 16000, admissionFee: 12500, total: 104100, suSemesterFee: 8000,  suTotal: 92100 },
  { code: 'RMBA', name: 'Regular MBA',                              credit: 69, duration: '2 Years',    kind: 'pg-tri', regularPerCredit: 2000, waiver: 34, perCredit: 1320, semesterFee: 24000, admissionFee: 12500, total: 127580, suSemesterFee: 12000, suTotal: 111580 },
  { code: 'MSCM', name: 'Master in Supply Chain Management',        credit: 69, duration: '2 Years',    kind: 'pg-tri', regularPerCredit: 2000, waiver: 34, perCredit: 1320, semesterFee: 24000, admissionFee: 12500, total: 127580, suSemesterFee: 12000, suTotal: 111580 },
  { code: 'MBM',  name: 'Master of Bank Management',                credit: 69, duration: '2 Years',    kind: 'pg-tri', regularPerCredit: 2000, waiver: 46, perCredit: 1080, semesterFee: 24000, admissionFee: 12500, total: 111020, suSemesterFee: 12000, suTotal: 95020 },
];

export const PG_BI: PGProgram[] = [
  { code: 'MTFM', name: 'Master in Textile & Fashion Management',   credit: 69, duration: '2 Years', kind: 'pg-bi', regularPerCredit: 2000, waiver: 46, perCredit: 1080, semesterFee: 24000, admissionFee: 12500, total: 111020, suSemesterFee: 12000, suTotal: 95020 },
  { code: 'MAM',  name: 'Master of Arts in Management',             credit: 60, duration: '2 Years', kind: 'pg-bi', regularPerCredit: 2000, waiver: 49, perCredit: 1020, semesterFee: 24000, admissionFee: 12500, total: 97700,  suSemesterFee: 12000, suTotal: 81700 },
  { code: 'MAMS', name: 'Master of Arts in Media Studies',          credit: 36, duration: '1 Year',  kind: 'pg-bi', regularPerCredit: 2000, waiver: 41, perCredit: 1180, semesterFee: 12000, admissionFee: 12500, total: 66980,  suSemesterFee: 6000,  suTotal: 56980 },
  { code: 'LLM',  name: 'Master of Laws (LLM)',                     credit: 36, duration: '1 Year',  kind: 'pg-bi', regularPerCredit: 2000, waiver: 43, perCredit: 1140, semesterFee: 12000, admissionFee: 12500, total: 65540,  suSemesterFee: 6000,  suTotal: 55540 },
];

// Headline (full-fee) cost from the primary Morning shift, for summary tables.
export const ugHeadline = (p: UGProgram) => {
  const sun = p.shifts[0];
  return { admissionFee: sun.admissionFee, total: sun.rows[0].totalHsc ?? 0 };
};
