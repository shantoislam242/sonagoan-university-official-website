import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Mail, Phone, User } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Admission Officer List',
  description:
    'Contact the admission officers of Sonargaon University for help with admission, program selection, and enrollment.',
  path: '/admission-officer-list',
});

const EMAIL = 'suadm.data27@gmail.com';

type Officer = { name: string; phone: string; photo?: string };

const OFFICERS: Officer[] = [
  { name: 'Tanvir Hasan', phone: '+880 1999-914395' },
  { name: 'Md. Majibur Rahman', phone: '+880 1955-529721' },
  { name: 'Sanjana Sadia', phone: '+880 1955-529724' },
  { name: 'Tawhidur Rahman', phone: '+880 1780-330044' },
  { name: 'Md. Mashiur Rahman Prodhan', phone: '+880 1992-077001' },
  { name: 'Md. Tanzil Ahmed Tamim', phone: '+880 1780-330055' },
  { name: 'Md. Ariful Islam', phone: '+880 1775-000888' },
  { name: 'Md. Azizul Haque', phone: '+880 1907-165597' },
  { name: 'Ekramunnesa Joya', phone: '+880 1955-529725' },
  { name: 'Afsana Ferdous', phone: '+880 1959-204957' },
  { name: 'Khadiza Haque Rimi', phone: '+880 1955-529722' },
];

export default function AdmissionOfficerListPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Admission Officer List"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
          { label: 'Admission Officer List' },
        ]}
      />

      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container>
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 54px' }}>
            <span className="aol-eyebrow">Admission Office</span>
            <h2 className="aol-title">Talk to an Admission Officer</h2>
            <p className="aol-lead">
              Our admission officers are here to guide you through program selection, requirements, waivers,
              and enrollment. Reach out to any of them directly.
            </p>
          </div>

          <div className="aol-grid">
            {OFFICERS.map((o) => {
              const tel = o.phone.replace(/[^0-9+]/g, '');
              return (
                <article key={o.name} className="aol-card">
                  <div className="aol-card__photo-wrap">
                    {o.photo ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={o.photo} alt="" aria-hidden className="aol-card__bg" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={o.photo} alt={o.name} className="aol-card__photo" />
                      </>
                    ) : (
                      <span className="aol-card__placeholder" aria-hidden>
                        <User size={46} strokeWidth={1.5} />
                      </span>
                    )}
                  </div>
                  <div className="aol-card__body">
                    <h3 className="aol-card__name">{o.name}</h3>
                    <p className="aol-card__role">Admission Officer</p>
                    <div className="aol-card__contact">
                      <a href={`mailto:${EMAIL}`} className="aol-card__row">
                        <Mail size={15} />
                        <span>{EMAIL}</span>
                      </a>
                      <a href={`tel:${tel}`} className="aol-card__row">
                        <Phone size={15} />
                        <span>{o.phone}</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .aol-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px; }
        .aol-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(28px, 3.6vw, 42px); line-height: 1.2; margin: 0 0 16px; }
        .aol-lead { color: #5B5B78; font-size: 17px; line-height: 1.8; margin: 0; }

        .aol-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 540px) { .aol-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .aol-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px) { .aol-grid { grid-template-columns: repeat(4, 1fr); } }

        .aol-card {
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 16px; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .aol-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .aol-card__photo-wrap { position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6; overflow: hidden; aspect-ratio: 1 / 1; }
        .aol-card__bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0; }
        .aol-card__photo { position: relative; z-index: 1; width: 100%; height: 100%; object-fit: contain; object-position: center; display: block; }
        .aol-card__placeholder { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: #fff; background: linear-gradient(150deg, #2B3175 0%, #3a2c74 55%, #CC1579 150%); }

        .aol-card__body { padding: 18px 20px 20px; display: flex; flex-direction: column; flex: 1; }
        .aol-card__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16.5px; line-height: 1.3; margin: 0 0 4px; }
        .aol-card__role { color: #CC1579; font-size: 12.5px; font-weight: 600; margin: 0 0 14px; }
        .aol-card__contact { margin-top: auto; display: flex; flex-direction: column; gap: 9px; padding-top: 13px; border-top: 1px solid #F0F0F5; }
        .aol-card__row { display: inline-flex; align-items: center; gap: 9px; color: #5B5B78; font-size: 13px; text-decoration: none; word-break: break-all; transition: color .2s ease; }
        .aol-card__row svg { color: #2B3175; flex-shrink: 0; }
        .aol-card__row:hover { color: #CC1579; }
        .aol-card__row:hover svg { color: #CC1579; }
      `}</style>
    </>
  );
}
