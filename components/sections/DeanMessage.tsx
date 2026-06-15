import Container from '@/components/ui/Container';
import { Quote } from 'lucide-react';

type Props = {
  heading?: string;
  photo: string;
  name: string;
  role: string;
  lead: string;
  paragraphs: string[];
  closing: string;
};

export default function DeanMessage({
  heading = 'A Welcome from the Dean',
  photo,
  name,
  role,
  lead,
  paragraphs,
  closing,
}: Props) {
  return (
    <section style={{ background: 'linear-gradient(180deg, #F6F7FC 0%, #ffffff 100%)', padding: '90px 0' }}>
      <Container className="!max-w-[1600px]">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
            Dean&rsquo;s Message
          </span>
          <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', lineHeight: 1.2, margin: 0, fontSize: 'clamp(26px, 3.2vw, 38px)' }}>
            {heading}
          </h2>
        </div>

        <article className="dean-letter">
          <aside className="dean-letter__side">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={`Dean — ${name}`} className="dean-letter__photo" />
            <h3 className="dean-letter__name">{name}</h3>
            <span className="dean-letter__role">{role}</span>
          </aside>

          <div className="dean-letter__body">
            <span className="dean-letter__quote" aria-hidden><Quote size={24} color="#CC1579" strokeWidth={2.2} /></span>
            <p className="dean-letter__lead">{lead}</p>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="dean-letter__closing">{closing}</p>
          </div>
        </article>
      </Container>

      <style>{`
        .dean-letter {
          position: relative; max-width: 1240px; margin: 0 auto; background: #ffffff;
          border: 1px solid #ECECF3; border-radius: 22px; overflow: hidden;
          box-shadow: 0 24px 60px rgba(43,49,117,0.10);
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 900px) { .dean-letter { grid-template-columns: 320px 1fr; } }
        .dean-letter::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 5px; z-index: 2;
          background: linear-gradient(90deg, #2B3175, #CC1579);
        }
        .dean-letter__side {
          background: linear-gradient(180deg, #F7F8FC 0%, #F2F0F9 100%);
          padding: 52px 34px; text-align: center;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          border-right: 1px solid #ECECF3;
        }
        .dean-letter__photo {
          width: 100%; max-width: 205px; height: 240px; border-radius: 16px; object-fit: cover;
          object-position: top center; margin: 0 auto 18px; display: block;
          box-shadow: 0 16px 34px rgba(43,49,117,0.20); border: 4px solid #ffffff;
        }
        .dean-letter__name { display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 17px; line-height: 1.35; margin-bottom: 6px; }
        .dean-letter__role { display: block; color: #8A8AA3; font-size: 13px; line-height: 1.5; }
        .dean-letter__body { padding: 52px 54px 48px; }
        .dean-letter__quote {
          display: inline-flex; width: 52px; height: 52px; border-radius: 14px;
          background: rgba(204,21,121,0.10); align-items: center; justify-content: center; margin-bottom: 22px;
        }
        .dean-letter__body p { color: #4A4A63; font-size: 16.5px; line-height: 1.95; margin: 0 0 18px; }
        .dean-letter__lead { color: #2B3175 !important; font-weight: 600; font-size: 18.5px !important; }
        .dean-letter__closing {
          color: #CC1579 !important; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          font-size: clamp(19px, 2.2vw, 24px) !important; line-height: 1.45 !important; margin: 22px 0 0 !important;
        }
        @media (max-width: 899px) {
          .dean-letter__side { border-right: none; border-bottom: 1px solid #ECECF3; padding: 40px 26px; }
          .dean-letter__photo { max-width: 180px; height: 210px; }
          .dean-letter__body { padding: 40px 26px 36px; }
        }
      `}</style>
    </section>
  );
}
