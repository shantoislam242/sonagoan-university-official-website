import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';

export const metadata = buildMetadata({
  title: 'Why Choose SU',
  description:
    'Why choose Sonargaon University UGC-approved recognition, generous scholarships, research-driven teaching, modern facilities, and a vibrant student community.',
  path: '/why-choose-su',
});

const REASONS = [
  {
    n: '01',
    title: 'UGC-Approved & Recognized',
    body: 'Sonargaon University is an approved private university under the University Grants Commission of Bangladesh (UGC ID 97) and the Government of Bangladesh. Our engineering programs are accredited through BAETE, ensuring your degree carries genuine national and professional recognition.',
  },
  {
    n: '02',
    title: 'Scholarships for Every Deserving Student',
    body: 'We make quality education affordable through 50–100% tuition scholarships based on academic results. Students with outstanding SSC and HSC results including Golden A+ holders can qualify for up to 100% tuition waivers, alongside freedom-fighter and other special quotas.',
  },
  {
    n: '03',
    title: 'Strong Academic Foundation',
    body: 'With three faculties Science & Engineering, Business, and Arts & Humanities SU offers a wide range of undergraduate and postgraduate programs. Our teaching follows the Outcome-Based Education (OBE) model, supported by some of the best staff-to-student ratios and a strong Academic Advisory Council.',
  },
  {
    n: '04',
    title: 'Research-Driven',
    body: 'SU ranks among the top private universities in Bangladesh for research-fund spending (UGC Annual Report, 2018). Our professors teach at every level while staying engaged in ground-breaking research and our students compete and win on national and international stages.',
  },
  {
    n: '05',
    title: 'Award-Winning Excellence',
    body: 'Our community has earned distinction across disciplines the a2i National Award 2018, Asia Young Designer Award 2019, recognition as the Best Supporting Architecture School of Bangladesh, the A3F Sustainable Design Award 2019, and most recently honors at the International Science & Innovation Fair (ISIF) 2025.',
  },
  {
    n: '06',
    title: 'Modern Campus & Facilities',
    body: 'Learn in an environment built for growth 15+ specialized labs, a library of 10,000+ books, and free transport across 20+ buses. In 2024, SU opened its permanent campus in Khilgaon, complementing two city campuses at Green Road and Mohakhali.',
  },
  {
    n: '07',
    title: 'A Vibrant Student Life',
    body: 'Beyond the classroom, 28 active clubs run by the Student Welfare Division give students space to lead, create, and connect building skills, friendships, and a sense of belonging.',
  },
  {
    n: '08',
    title: 'A Proven Track Record',
    body: 'Since 2012, SU has educated more than 6,000 students and built an alumni network of over 21,000. We turn ideas into impact and transform lives guided by the belief that together we can create a world of good.',
  },
];

export default function WhyChooseSUPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Why Choose SU"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Why Choose SU' }]}
      />

      {/* ===== Intro ===== */}
      <section style={{ background: '#ffffff', padding: '100px 0 56px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Why SU
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.18, marginBottom: 22 }}>
              Why Choose Sonargaon University
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 18, lineHeight: 1.9, margin: 0 }}>
              At Sonargaon University, we believe quality education should be within everyone&rsquo;s reach.
              From scholarships to research, modern facilities to a vibrant campus community, here&rsquo;s what
              makes SU the right place to begin your journey.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== Reasons ===== */}
      <section style={{ background: '#F6F7FC', padding: '70px 0 100px' }}>
        <Container className="!max-w-[1600px]">
          <div className="why-grid">
            {REASONS.map(({ n, title, body }) => (
              <article key={n} className="why-card">
                <span className="why-num">{n}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 21, margin: '0 0 12px' }}>
                    {title}
                  </h3>
                  <p style={{ color: '#5B5B78', fontSize: 16, lineHeight: 1.85, margin: 0 }}>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .why-grid { display: grid; grid-template-columns: 1fr; gap: 30px; }
        @media (min-width: 768px) { .why-grid { grid-template-columns: 1fr 1fr; } }
        .why-card {
          display: flex; gap: 22px; align-items: flex-start;
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 18px;
          padding: 32px 30px; box-shadow: 0 10px 30px rgba(43,49,117,0.05);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .why-card:hover { transform: translateY(-5px); box-shadow: 0 22px 46px rgba(43,49,117,0.12); }
        .why-num {
          flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(204,21,121,0.10);
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          font-size: 19px; color: #CC1579;
        }
      `}</style>
    </>
  );
}
