import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';

export const metadata = buildMetadata({
  title: 'Registration Policies',
  description:
    'Sonargaon University registration policies: registration, add-drop, advising, attendance, withdrawal, repeat and retake, examinations, probation, and more.',
  path: '/registration-policies',
});

type Sec = {
  id: string;
  label: string;
  title: string;
  paras: string[];
  table?: [string, string][];
  note?: string;
};

const SECTIONS: Sec[] = [
  {
    id: 'regular', label: 'Regular Registration', title: 'Regular Registration',
    paras: [
      'Students must complete their registration formalities before a semester starts, and registration must be done in person. The Admission Office notifies newly admitted students about the time and place of their registration.',
      'Students should consult their advisors to plan their courses and to become familiar with SU policies and procedures related to registration.',
    ],
  },
  {
    id: 'late', label: 'Late Registration & Add-Drop', title: 'Late Registration and Add-Drop of Courses',
    paras: [
      'A student seeking to register after the scheduled date must take permission from the concerned Coordinator, Head of the Department, or Dean of the Faculty. A student given permission to register late must pay a late registration fee of Tk. 500.',
      'A student may drop course(s) only within the date mentioned in the Academic Calendar, with the approval of the Head of the Department. The letter “W” will be imprinted on the transcript as the dropping status of the student.',
    ],
  },
  {
    id: 'advising', label: 'Students’ Advising', title: 'Students’ Advising',
    paras: [
      'Department and faculty advisors advise students of the undergraduate and graduate programs prior to registration.',
      'Undergraduate students must register for a minimum of 9 (nine) credits and graduate students for a minimum of 6 (six) credits in a single semester.',
    ],
  },
  {
    id: 'procedures', label: 'Registration Procedures', title: 'Registration Procedures',
    paras: [
      'Advising forms are available at the concerned Department. A completed registration form must be submitted to the concerned Department.',
    ],
  },
  {
    id: 'prerequisite', label: 'Prerequisite Courses', title: 'Prerequisite Courses',
    paras: [
      'Prerequisite course(s), if any, must be completed before registering for a particular course. Without completing the prerequisite course(s), a student shall not be allowed to register for the course(s).',
    ],
  },
  {
    id: 'change', label: 'Change of Program', title: 'Change of Program / Department',
    paras: [
      'A student may change their program or department by submitting a written request to the concerned Head of the Department or Dean of the Faculty. If permitted, the Registrar’s Office shall make the necessary change to the student’s record.',
    ],
  },
  {
    id: 'attendance', label: 'Minimum Attendance', title: 'Minimum Attendance in the Class',
    paras: [
      'Students are expected to attend classes regularly. A student must attend at least 90% of classes in every course in order to sit for the Final Exam.',
      'If a student fails to ensure the required attendance, they must apply to the concerned authority with proper bonafide documents.',
    ],
  },
  {
    id: 'withdrawal', label: 'Withdrawal of Courses', title: 'Withdrawal of Course(s)',
    paras: [
      'To withdraw any course due to sickness or other unavoidable circumstances, a student must collect a form for the “W” grade from the Registrar’s Office. The student must collect the endorsing signature(s) of the respective course teacher(s) and submit the form to the concerned Head of the Department for final approval.',
      'The duly approved application must be submitted to the Registrar’s Office within the 7th day of the end of the Mid-Term Exam (as per the academic calendar). No tuition fee shall be waived or exempted for the withdrawal of a course.',
    ],
  },
  {
    id: 'retake', label: 'Repeat & Retake', title: 'Repeat & Retake of Course(s)',
    paras: [
      'Absence in the Final Examination without permission from the proper authorities of the University shall result in an “F” grade in the course. A student obtaining an “F” grade in any course in any semester must “Repeat” the course with full payment of the tuition fee for that particular course.',
      'Students wishing to improve their grade(s) may take the course(s) again, which is termed a “Retake”. A student shall not be allowed to retake a course after three consecutive semesters of the intended course to be improved.',
      'Fees for retaking course(s):',
    ],
    table: [
      ['“C” and above', '25% of the tuition fee for the course(s)'],
      ['Below “C”', '50% of the tuition fee for the course(s)'],
    ],
    note: 'Eligible students shall be entitled to a tuition fee discount for a particular course once only.',
  },
  {
    id: 'special-exam', label: 'Special Examination', title: 'Special Examination',
    paras: [
      'If a student misses any Mid-Term or Final Examination for a valid reason, they may sit for the special exam by paying an additional charge of Tk. 500 for the Mid-Term and Tk. 1,000 for the Final Exam.',
      'To avail of this opportunity, the student must apply within 7 (seven) days of the completion of the concerned exam.',
    ],
  },
  {
    id: 'semester-drop', label: 'Semester Drop', title: 'Semester Drop',
    paras: [
      'A student may drop a semester only before the Mid-Term Exam, with valid reason(s), by applying in writing to the respective Head of the Department.',
      'Applications for a Semester Drop shall be approved only on Medical Ground for undergraduate students. For graduate students, approval may be granted on the ground of Transfer of Workplace outside Dhaka or on Medical Ground, whichever is applicable.',
      'If the case is found genuine by SU authorities, the student may be allowed to drop the current semester after paying the Semester Fee and an additional charge of Tk. 1,000. After the Mid-Term Exam, no application to drop the semester shall be entertained; in such cases, students may instead apply for an “I” (Incomplete) grade.',
    ],
  },
  {
    id: 'incomplete', label: '“I” (Incomplete) Grade', title: '“I” (Incomplete) Grade',
    paras: [
      'An “I” (Incomplete) grade is granted only in exceptional cases and may be assigned in special circumstances after the Mid-Term Exam.',
      'A student must appear in the exam for which they were given the “I” grade within one month of the following semester; otherwise, the “I” automatically turns into an “F”.',
      'If the concerned course teacher is absent, the disposition of the case involving an “I” (Incomplete) grade rests with the concerned Head of the Department.',
    ],
  },
  {
    id: 'internship', label: 'Internship / Project', title: 'Internship / Project',
    paras: [
      'As a partial fulfillment of the BBA program, an internship/project is a requirement for BBA students. It is of 15 weeks’ duration and is carried out in a business organization, usually in the relevant area of concentration, under the guidance of a teacher.',
      'The intern must submit an internship/project report on their work experience and defend it before a committee of 3 members.',
    ],
  },
  {
    id: 'supervised', label: 'Supervised Study', title: 'Supervised Study System',
    paras: [
      'If a particular course is not offered in a particular semester, students who have 20 credits remaining out of their total credits shall be allowed to take a Supervised Study under a teacher of that field selected by the department. The maximum number of students shall not exceed 6 (six) in a particular course under the Supervised Study System.',
      'Courses taken under the Supervised Study System must be completed within the semester in which the registration was made. If a course is not completed within the scheduled semester, the student shall be given an “F” grade for the respective Supervised Study course.',
    ],
  },
  {
    id: 'probation', label: 'Academic Probation', title: 'Academic Probation',
    paras: [
      'A student must earn a minimum CGPA of 2.25 for an Undergraduate Program and 2.50 for a Graduate Program to be awarded the degree. A minimum CGPA of 2.00 or above is required to stay in good academic standing.',
      'If a student’s CGPA falls below 2.00 at any time, they shall be placed on academic probation and must come out of probation within the next three semesters. Otherwise, they shall be dismissed from the program and shall not be readmitted.',
    ],
  },
  {
    id: 'unfair-means', label: 'Unfair Means', title: 'Punishment for Adopting Unfair Means',
    paras: ['The following punishments apply for adopting unfair means in any type of test or examination:'],
    table: [
      ['Adopting unfair means for the 1st time', 'Course Expulsion'],
      ['Adopting unfair means for the 2nd time', 'Semester Expulsion'],
      ['Adopting unfair means for the 3rd time', 'Expulsion from the University'],
    ],
  },
  {
    id: 'course-waiver', label: 'Course Waiver', title: 'Course Waiver',
    paras: [
      'Applications for a course waiver must be produced before the Course Committee of SU at the very beginning of the first semester, along with the previous detailed syllabus of the intended course to be waived. Course waiver applies to graduate programs.',
    ],
  },
];

export default function RegistrationPoliciesPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Registration Policies"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
          { label: 'Registration Policies' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '70px 0 16px' }}>
        <Container>
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            <span className="rp-chip">Academic Rules</span>
            <h2 className="rp-title">Registration policies at a glance</h2>
            <p className="rp-lead">
              How registration, add-drop, advising, attendance, examinations, and related academic processes
              work at Sonargaon University.
            </p>
          </div>
        </Container>
      </section>

      {/* Layout */}
      <section style={{ background: '#ffffff', padding: '30px 0 80px' }}>
        <Container>
          <div className="rp-layout">
            <aside className="rp-side">
              <span className="rp-side__title">On this page</span>
              <nav className="rp-side__nav">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="rp-side__link">{s.label}</a>
                ))}
              </nav>
            </aside>

            <div className="rp-main">
              {SECTIONS.map((s) => (
                <article key={s.id} id={s.id} className="rp-block">
                  <h3 className="rp-block__title">{s.title}</h3>
                  {s.paras.map((p, i) => <p key={i} className="rp-text">{p}</p>)}
                  {s.table && (
                    <div className="rp-tablewrap">
                      <table className="rp-table">
                        <tbody>
                          {s.table.map((row, i) => (
                            <tr key={i}>
                              <td className="rp-table__k">{row[0]}</td>
                              <td className="rp-table__v">{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {s.note && <p className="rp-note">{s.note}</p>}
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .rp-chip { display: inline-block; background: rgba(204,21,121,0.10); color: #CC1579; font-weight: 700; font-size: 12px; letter-spacing: 0.08em; padding: 6px 16px; border-radius: 999px; margin-bottom: 16px; }
        .rp-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(26px, 3.5vw, 40px); line-height: 1.2; margin: 0 0 16px; }
        .rp-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }

        .rp-layout { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: start; }
        @media (min-width: 920px) { .rp-layout { grid-template-columns: 280px 1fr; gap: 50px; } }

        .rp-side { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 22px 14px; box-shadow: 0 12px 30px rgba(43,49,117,0.06); }
        @media (min-width: 920px) { .rp-side { position: sticky; top: 96px; max-height: calc(100vh - 120px); overflow-y: auto; } }
        .rp-side__title { display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; padding: 0 10px 14px; border-bottom: 1px solid #EFEFF6; margin-bottom: 8px; }
        .rp-side__nav { display: flex; flex-direction: column; gap: 1px; }
        .rp-side__link { display: block; padding: 9px 12px; border-radius: 9px; border-left: 3px solid transparent; color: #5B5B78; font-weight: 600; font-size: 13.5px; line-height: 1.4; text-decoration: none; transition: background .18s ease, color .18s ease, border-color .18s ease; }
        .rp-side__link:hover { background: #F6F7FC; color: #2B3175; border-left-color: #CC1579; }

        .rp-main { min-width: 0; }
        .rp-block { padding-bottom: 32px; margin-bottom: 32px; border-bottom: 1px solid #ECECF3; scroll-margin-top: 96px; }
        .rp-block:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
        .rp-block__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(19px, 2.4vw, 24px); margin: 0 0 14px; }
        .rp-text { color: #4C4C68; font-size: 15.5px; line-height: 1.85; margin: 0 0 12px; }
        .rp-text:last-of-type { margin-bottom: 0; }
        .rp-note { margin: 16px 0 0; background: #F6F7FC; border: 1px solid #E7E8F1; border-radius: 10px; padding: 13px 16px; color: #5B5B78; font-size: 14px; line-height: 1.7; }

        .rp-tablewrap { margin: 16px 0 0; border: 1px solid #ECECF3; border-radius: 12px; overflow: hidden; }
        .rp-table { width: 100%; border-collapse: collapse; }
        .rp-table td { padding: 14px 18px; border-bottom: 1px solid #F0F0F5; font-size: 14.5px; vertical-align: top; }
        .rp-table tr:last-child td { border-bottom: 0; }
        .rp-table__k { color: #2B3175; font-weight: 600; width: 42%; background: #FAFAFE; }
        .rp-table__v { color: #CC1579; font-weight: 600; }
        @media (max-width: 560px) {
          .rp-table, .rp-table tbody, .rp-table tr, .rp-table td { display: block; width: 100%; }
          .rp-table__k { width: auto; border-bottom: 0; padding-bottom: 4px; }
          .rp-table__v { padding-top: 4px; }
        }
      `}</style>
    </>
  );
}
