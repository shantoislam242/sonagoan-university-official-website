import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Bus, Gift, MapPin, Sun, Info, Phone } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Transport Facility',
  description:
    'Sonargaon University runs a free bus service with 20+ buses across Dhaka, with routes, timings, and contact numbers for a comfortable commute.',
  path: '/transport',
});

const FEATURES = [
  { Icon: Gift, title: 'Completely Free', text: 'The bus service is completely free for students.' },
  { Icon: Bus, title: 'Fleet of 20+ Buses', text: 'A large fleet covering major routes across the city.' },
  { Icon: MapPin, title: 'Dhaka Metro Coverage', text: 'From various areas across Dhaka Metro City to the campus.' },
  { Icon: Sun, title: 'Morning (SUN) Batch', text: 'Available for the Morning batch only; no service for the Friday (STAR) batch.' },
];

type Route = { from: string; bus: string; contact: string; dep: string[]; ret: string[] };

const ROUTES: Route[] = [
  { from: 'Technical', bus: 'Dhaka Metro-J 11-2657', contact: '01958-642577', dep: ['07:00 AM', '10:30 AM'], ret: ['04:45 PM'] },
  { from: 'Mograpara', bus: 'Dhaka Metro-B 11-7251', contact: '01958-642578', dep: ['06:20 AM'], ret: ['12:40 PM'] },
  { from: 'Mograpara', bus: 'Dhaka Metro-B 15-3688', contact: '01958-642579', dep: ['09:40 AM'], ret: ['04:45 PM'] },
  { from: 'Gauchhia', bus: 'Dhaka Metro-B 8451', contact: '01958-642580', dep: ['06:20 AM'], ret: ['04:45 PM'] },
  { from: 'Savar', bus: 'Dhaka Metro-J 11-3124', contact: '01958-642581', dep: ['07:00 AM'], ret: ['04:45 PM'] },
  { from: 'Abdullahpur', bus: 'Dhaka Metro 14-1615', contact: '01958-642582', dep: ['06:40 AM'], ret: ['12:40 PM'] },
  { from: 'Abdullahpur', bus: 'Dhaka Metro-B 11-8421', contact: '01958-642593', dep: ['09:45 AM'], ret: ['04:45 PM'] },
  { from: 'Kuril', bus: 'Dhaka Metro-B 11-7357', contact: '01958-642587', dep: ['06:55 AM', '10:00 AM'], ret: ['04:45 PM'] },
  { from: 'Chashara', bus: 'Dhaka Metro-B 15-1651', contact: '01958-642594', dep: ['06:45 AM'], ret: [] },
  { from: 'Kadamtali', bus: 'Dhaka Metro-B 15-7176', contact: '01958-642592', dep: ['07:00 AM'], ret: ['01:20 PM'] },
];

const COVERAGE = ['Technical', 'Mograpara', 'Gauchhia', 'Savar', 'Abdullahpur', 'Kuril', 'Chashara', 'Kadamtali'];

const GALLERY = [
  '/assets/images/transport/bus1.jpg',
  '/assets/images/transport/bus2.png',
  '/assets/images/transport/bus3.jpg',
  '/assets/images/transport/bus4.png',
];

const INSTRUCTIONS = [
  { title: 'Pick-up Points', text: 'Please contact the respective bus drivers or supervisors at the provided numbers to confirm your specific pick-up location and exact time.' },
  { title: 'Special Service, Mohakhali', text: 'A dedicated bus leaves for Mohakhali from SU six days a week at 08:00 AM. For details, contact 01958-642587.' },
  { title: 'Free Service', text: 'The university provides free bus services covering major city areas and outskirts like Mograpara, Gauchhia, Kadamtali, Abdullahpur, and Savar.' },
];

const times = (arr: string[]) => (arr.length ? arr.join(', ') : 'N/A');
const tel = (n: string) => n.replace(/[^0-9+]/g, '');

export default function TransportPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Transport Facility"
        bgImage="/assets/images/transport/hero.webp"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Campus Life', href: '/campus-life' },
          { label: 'Transport' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '74px 0 30px' }}>
        <Container>
          <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
            <span className="tp-eyebrow">Free Bus Service</span>
            <h2 className="tp-title">From home to campus, commute with ease</h2>
            <p className="tp-lead">
              Sonargaon University runs a completely free bus service with 20+ buses across Dhaka, on fixed
              routes and timings, so students and staff enjoy a comfortable daily commute.
            </p>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section style={{ background: '#ffffff', padding: '20px 0 40px' }}>
        <Container>
          <div className="tp-features">
            {FEATURES.map(({ Icon, title, text }) => (
              <article key={title} className="tp-feature">
                <span className="tp-feature__icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section style={{ background: '#F6F7FC', padding: '60px 0' }}>
        <Container>
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <span className="tp-eyebrow">Coverage</span>
            <h3 className="tp-h3">Free University Bus Service</h3>
            <p className="tp-text" style={{ margin: '0 auto 24px' }}>
              Buses cover major city areas and outskirts, connecting these locations to the campus:
            </p>
            <div className="tp-chips">
              {COVERAGE.map((c) => <span key={c} className="tp-chip">{c}</span>)}
            </div>
          </div>
        </Container>
      </section>

      {/* Routes & Timings */}
      <section style={{ background: '#ffffff', padding: '74px 0' }}>
        <Container>
          <div style={{ marginBottom: 34 }}>
            <span className="tp-eyebrow">Schedule</span>
            <h3 className="tp-h3">Bus Routes &amp; Timings</h3>
          </div>

          {/* Desktop table */}
          <div className="tp-tablewrap">
            <table className="tp-table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Bus Number</th>
                  <th>Contact</th>
                  <th>Departure (to SU)</th>
                  <th>Return (from SU)</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES.map((r, i) => (
                  <tr key={i}>
                    <td className="tp-route">{r.from} <span>&rarr; SU</span></td>
                    <td>{r.bus}</td>
                    <td><a href={`tel:${tel(r.contact)}`} className="tp-tel">{r.contact}</a></td>
                    <td>{times(r.dep)}</td>
                    <td>{times(r.ret)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="tp-mlist">
            {ROUTES.map((r, i) => (
              <div key={i} className="tp-mcard">
                <div className="tp-mcard__head">{r.from} <span>&rarr; SU</span></div>
                <div className="tp-mrow"><span>Bus Number</span><b>{r.bus}</b></div>
                <div className="tp-mrow"><span>Contact</span><a href={`tel:${tel(r.contact)}`} className="tp-tel">{r.contact}</a></div>
                <div className="tp-mrow"><span>Departure (to SU)</span><b>{times(r.dep)}</b></div>
                <div className="tp-mrow"><span>Return (from SU)</span><b>{times(r.ret)}</b></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Important Instructions */}
      <section style={{ background: '#F6F7FC', padding: '74px 0' }}>
        <Container>
          <div style={{ marginBottom: 34 }}>
            <span className="tp-eyebrow">Good to Know</span>
            <h3 className="tp-h3">Important Instructions</h3>
          </div>
          <div className="tp-notes">
            {INSTRUCTIONS.map((n) => (
              <article key={n.title} className="tp-note">
                <span className="tp-note__icon"><Info size={20} /></span>
                <h4>{n.title}</h4>
                <p>{n.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section style={{ background: '#ffffff', padding: '74px 0 90px' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="tp-eyebrow">Our Fleet</span>
            <h3 className="tp-h3">Gallery</h3>
          </div>
          <div className="tp-gallery">
            {GALLERY.map((src, i) => (
              <div key={i} className="tp-gallery__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Sonargaon University bus service" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .tp-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 12px; }
        .tp-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(28px, 3.6vw, 42px); line-height: 1.2; margin: 0 0 16px; }
        .tp-h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(23px, 3vw, 32px); margin: 0 0 10px; }
        .tp-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }
        .tp-text { color: #5B5B78; font-size: 16px; line-height: 1.8; max-width: 720px; }

        .tp-features { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 560px) { .tp-features { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1000px) { .tp-features { grid-template-columns: repeat(4, 1fr); } }
        .tp-feature { background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 16px; padding: 26px 24px; }
        .tp-feature__icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 13px; margin-bottom: 16px; color: #fff; background: linear-gradient(135deg, #2B3175, #CC1579); }
        .tp-feature h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16.5px; margin: 0 0 8px; }
        .tp-feature p { color: #5B5B78; font-size: 14px; line-height: 1.65; margin: 0; }

        .tp-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
        .tp-chip { display: inline-flex; align-items: center; background: #fff; border: 1px solid #E5E6EF; color: #2B3175; font-weight: 600; font-size: 14px; padding: 8px 16px; border-radius: 999px; box-shadow: 0 6px 16px rgba(43,49,117,0.05); }

        .tp-tablewrap { overflow-x: auto; border: 1px solid #ECECF3; border-radius: 16px; box-shadow: 0 12px 30px rgba(43,49,117,0.05); }
        .tp-table { width: 100%; border-collapse: collapse; font-size: 14.5px; min-width: 720px; }
        .tp-table th { text-align: left; background: #F6F7FC; color: #2B3175; font-weight: 700; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.03em; padding: 15px 20px; border-bottom: 1px solid #E5E6EF; white-space: nowrap; }
        .tp-table td { padding: 15px 20px; border-bottom: 1px solid #F0F0F5; color: #4C4C68; vertical-align: top; }
        .tp-table tr:last-child td { border-bottom: 0; }
        .tp-route { color: #2B3175; font-weight: 700; white-space: nowrap; }
        .tp-route span { color: #CC1579; font-weight: 600; }
        .tp-tel { color: #CC1579; font-weight: 600; text-decoration: none; }
        .tp-tel:hover { text-decoration: underline; }

        .tp-mlist { display: none; }
        .tp-mcard { border: 1px solid #ECECF3; border-radius: 14px; background: #fff; padding: 4px 18px; margin-bottom: 14px; box-shadow: 0 8px 22px rgba(43,49,117,0.05); }
        .tp-mcard__head { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; padding: 14px 0 12px; border-bottom: 1px solid #ECECF3; }
        .tp-mcard__head span { color: #CC1579; }
        .tp-mrow { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; padding: 12px 0; border-bottom: 1px solid #F2F2F7; }
        .tp-mcard .tp-mrow:last-child { border-bottom: 0; }
        .tp-mrow > span { color: #8A8AA3; font-size: 12.5px; font-weight: 600; }
        .tp-mrow > b { color: #2B3175; font-size: 14px; font-weight: 600; text-align: right; }

        .tp-notes { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 760px) { .tp-notes { grid-template-columns: repeat(3, 1fr); } }
        .tp-note { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 26px 24px; box-shadow: 0 12px 30px rgba(43,49,117,0.05); }
        .tp-note__icon { display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 12px; margin-bottom: 16px; color: #CC1579; background: rgba(204,21,121,0.10); }
        .tp-note h4 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; margin: 0 0 9px; }
        .tp-note p { color: #5B5B78; font-size: 14.5px; line-height: 1.7; margin: 0; }

        .tp-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (min-width: 900px) { .tp-gallery { grid-template-columns: repeat(4, 1fr); } }
        .tp-gallery__item { aspect-ratio: 4 / 3; overflow: hidden; border-radius: 16px; box-shadow: 0 14px 34px rgba(43,49,117,0.12); }
        .tp-gallery__item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .35s ease; }
        .tp-gallery__item:hover img { transform: scale(1.05); }

        @media (max-width: 640px) {
          .tp-tablewrap { display: none; }
          .tp-mlist { display: block; }
        }
      `}</style>
    </>
  );
}
