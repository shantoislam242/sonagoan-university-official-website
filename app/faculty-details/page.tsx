import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Faculty Member Details',
  description: 'Faculty member profile, bio, and research interests at Sonargoan University.',
  path: '/faculty-details',
});

export default function FacultyDetailsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Faculty Member"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Faculty', href: '/faculty' },
          { label: 'Faculty Member' },
        ]}
      />
      {/* faculty directory */}
      {/* TODO: Faculty Members */}
      <section className="rts-faculty-details  rts-section-padding">
        <div className="container">
          <div className="row sticky-coloum-wrap justify-content-sm-center g-5">
            <div className="col-lg-4 col-md-10 col-sm-10 sticky-coloum-item">
              <div className="faculty-member">
                <div className="faculty-member__details rt-center ">
                  <div className="faculty-member__image">
                    <img src="/assets/images/faculty/mem-1.jpg" alt="member image" />
                  </div>
                  <div className="faculty-member__info">
                    <div className="faculty-member__info--social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:jenni@suwebsite.edu" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>jenni@suwebsite.edu</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+122451247241</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-10">
              <div className="member-info ">
                <div className="member-info__details">
                  <div className="short-info">
                    <h4 className="rts-section-title mb--15">Jennifer Aarons, PhD</h4>
                    <span className="designation">Assistant Professor</span>
                    <p className="description">
                      Katherine Panagakos earned her M.A. in Classics from Tulane University and her Ph.D. in Greek and Latin from The Ohio State University. During her graduate work, she was a student at The American School of Classical Studies at Athens (ASCSA) and was a field walker and camp manager at the Eastern Korinthia Archaeogical Survey (EKAS). Katherine spent three years in a rotating position at schools in the Associated Colleges of the South (Southwestern University in Georgetown, TX; Furman University in Greenville, SC; and Rhodes College in Memphis, TN).
                    </p>
                  </div>
                  <div className="short-info">
                    <h5 className="rts-section-title">Biography</h5>
                    <p className="description">
                      She began teaching primarily Latin and Classics-related courses at SU Website in January of 2008. Katherine serves as the advisor for the Classics National Honor Society (ΗΣΦ) and OGRE (Order of Greco-Roman Enthusiasts), as well as being an active member of the Interdisciplinary Center of Hellenic Studies (ICHS) and the Friends of Hellenic Studies (FHS). Her research focuses on the ancient Greek and Roman novels. Katherine is currently working on three manuscripts. The first focuses on the role of pirates and robbers in the ancient novels and the other two are in collaboration with former students: one is an intermediate Greek text on Aesop&rsquo;s Fables; the other is a collection of essays on suicide in the ancient Greco-Roman world.
                    </p>
                    <h5 className="rts-section-title">Education</h5>
                    <p className="description">Ph.D., The Ohio State University</p>
                    <h5 className="rts-section-title">AREAS OF EXPERTISE</h5>
                    <p className="description">Latin language and literature, Ancient Greek and Roman novels, Augustan Age, Classical mythology, Greco-Romans in film, zombies in popular culture
                    </p>
                  </div>
                  <div className="short-info">
                    <h5 className="rts-section-title">COURSES</h5>
                    <div className="course__single">
                      <ul className="list-unstyled">
                        <li><a href="#">LANG 1220/1221 Beginning Latin I & II</a></li>
                        <li><a href="#">LANG 3760/3761Advanced Greek I and II (Lucian, Longus, and Homer)</a></li>
                        <li><a href="#">GAH 1038 Reacting to the Past</a></li>
                        <li><a href="#">GAH 1401 Classical Myth and Legend</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="short-info">
                    <h5 className="rts-section-title">PUBLICATIONS</h5>
                    <p>Review of Stefan Tilg&rsquo;s Chariton of Aphrodisias and the invention of the Greek Love Novel (Oxford UP, 2010).Bryn Mawr Classical Review. Bryn Mawr, PA: BMCR, 2011.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faculty directory end */}
      <FooterUniversity />
    </>
  );
}
