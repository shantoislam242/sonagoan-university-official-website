import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Research',
  description: 'Research at Sonargoan University — labs, publications, and projects.',
  path: '/research',
});

export default function ResearchPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner title="Research" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Research' }]} />

      {/* campus life */}
      <div className="rts-campus-life rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="campus-life">
              <div className="campus-life__content">
                <h1 className="rts-section-title">Research Centers</h1>
                <p className="description w-680">
                  From Nobel Prize winners to undergraduates, all members of the Sonargaon University
                  community are engaged in the creation of knowledge.
                </p>
                <div className="campus-video">
                  <img src="/assets/images/campus/research.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* campus life end */}

      {/* funfact */}
      <div className="rts-funfact v_3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-lg-12 col-xl-10">
              <div className="rts-funfact-wrapper">
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">15 Institutes</h2>
                  <p>Cross interdisciplinary boundaries</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">15 Libraries</h2>
                  <p>Hold over 12 million items</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">$1.82 Billion</h2>
                  <p>Sponsored research budget</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* funfact end */}

      {/* research enterprise */}
      {/* single section */}
      <div className="rts-campus-section rts-section-padding pb-0 v_3">
        <div className="container">
          <div className="row">
            <div className="rts-section rt-center mb--45">
              <h3 className="rts-section-title">The Research Enterprise</h3>
            </div>
          </div>
          {/* TODO: Research Publications */}
          <div className="row g-5">
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/12.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Interdisciplinary Research</a></h5>
                    <p className="item-description">At the intersection of disciplines is where new ideas emerge and innovative research happens</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/13.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Institutes, Labs &amp; Centers</a></h5>
                    <p className="item-description">Fifteen independent labs, centers, and institutes engage faculty and students from university.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/14.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Other Research Centers &amp; Labs</a></h5>
                    <p className="item-description">Academic departments sponsor numerous other research centers and labs.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
          </div>
        </div>
      </div>
      {/* single section end */}
      {/* research enterprise end */}

      {/* reasearch area */}
      <section className="rts-research-section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-research-section__content">
              <div className="research-image">
                <img src="/assets/images/campus/research-2.jpg" alt="research" />
              </div>
              <div className="rts-section">
                <h3 className="rts-section-title">
                  Medicine Research: Advancing Healthcare
                  Through Discovery
                </h3>
                <p className="description">Embarking on the frontiers of knowledge, Medicine Research is a dynamic and groundbreaking endeavor dedicated to unraveling the mysteries of health and disease. At the innovation and compassionate care, researchers in medicine tirelessly explore, question, and innovate to shape the future of healthcare.
                </p>
              </div>
            </div>
            {/* research item */}
            <div className="research__items">
              {/* apply content */}
              <div className="row justify-content-sm-center justify-content-md-start g-5">
                <div className="col-lg-4 col-md-6 col-sm-11">
                  <div className="research-procedure">
                    <div className="research-image">
                      <img src="/assets/images/apply/01.jpg" alt="application-thumb" />
                    </div>
                    <div className="rt-serial">01</div>
                    <div className="icon">
                      <img src="/assets/images/icon/14.svg" alt="" />
                    </div>
                    <a href="#">Biomedical Research</a>
                    <p>Genomic Medicine: Investigating the role of genetics in health and disease to personalize medical treatments.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-11">
                  <div className="research-procedure primary-style">
                    <div className="research-image">
                      <img src="/assets/images/apply/01.jpg" alt="application-thumb" />
                    </div>
                    <div className="rt-serial">02</div>
                    <div className="icon">
                      <img src="/assets/images/icon/15.svg" alt="" />
                    </div>
                    <a href="#">Clinical Trials</a>
                    <p>Conducting controlled experiments to the safety and efficacy of new medical drugs, or interventions.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-11">
                  <div className="research-procedure">
                    <div className="research-image">
                      <img src="/assets/images/apply/01.jpg" alt="application-thumb" />
                    </div>
                    <div className="rt-serial">03</div>
                    <div className="icon">
                      <img src="/assets/images/icon/16.svg" alt="" />
                    </div>
                    <a href="#">Public Health Research</a>
                    <p>Addressing population-level health issues, studying epidemiology, preventive measures, and health policy.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* research text */}
            <div className="research__text">
              <div className="research__text--single">
                <h5 className="rts-section-title">Exploration of Human Health</h5>
                <p className="description">Delving into the intricacies of the human body, Medicine Research seeks to understand the fundamental processes governing health. From decoding the complexities of our genetic makeup to scrutinizing cellular interactions, researchers illuminate the pathways to well-being.</p>
              </div>
              <div className="research__text--single">
                <h5 className="rts-section-title">Translating Discoveries to Care:</h5>
                <p className="description">Beyond the laboratory bench, Medicine Research is about translation. It&apos;s about taking cutting-edge discoveries and transforming them into tangible treatments and interventions. Bridging the gap between theory and practice, researchers strive to make a real-world impact on patient outcomes.</p>
              </div>
              <div className="research__text--single">
                <h5 className="rts-section-title">Collaboration and Interdisciplinary Insights:</h5>
                <p className="description">In the spirit of progress, Medicine Research thrives on collaboration. Researchers from diverse backgrounds—clinicians, scientists, technologists, and ethicists—come together to pool their expertise, fostering interdisciplinary insights that drive innovation forward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* reasearch area end */}

      <FooterUniversity />
    </>
  );
}
