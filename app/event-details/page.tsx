import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Event Details',
  description: 'Event details, schedule, and registration at Sonargoan University.',
  path: '/event-details',
});

export default function EventDetailsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner title="Event Details" breadcrumb={[{label:'Home',href:'/'},{label:'Events',href:'/event'},{label:'Details'}]} />

      {/* TODO: Events */}
      {/* event details */}
      <div className="rts-event-details pt--120">
        <div className="container">
          <div className="row justify-content-md-center justify-content-start">
            <div className="col-lg-7 col-md-10">
              <div className="event-details">
                <div className="event-details__content">
                  <div className="event-details__content--thumb">
                    <img src="/assets/images/campus/event/event-details.jpg" alt="event details" />
                  </div>
                  <div className="event-details__content--text">
                    <div className="rts-section">
                      <h4 className="rts-section-title">About The Event</h4>
                      <p className="description">Join us for the Future Minds Symposium, a thought-provoking educational event designed to inspire and empower individuals to navigate the challenges and opportunities of tomorrow&apos;s world. This symposium brings together leading experts, visionaries, and innovators from various fields to explore cutting-edge ideas and share insights on shaping the future.</p>
                    </div>
                  </div>
                  <div className="event-details__content--feature">
                    {/* single feature */}
                    <div className="single-feature">
                      <p className="feature-heading">Interactive Workshops:</p>
                      <p className="feature-description">Connect with like-minded individuals, professionals, and mentors. Build a network that will support your personal and professional growth, fostering collaboration and idea exchange.</p>
                    </div>
                    {/* single feature */}
                    <div className="single-feature">
                      <p className="feature-heading">INetworking Opportunities:</p>
                      <p className="feature-description">Hear from renowned thought leaders who will delve into topics such as artificial intelligence, sustainability, and the future of work. Gain valuable perspectives to help you thrive.</p>
                    </div>
                    {/* single feature */}
                    <div className="single-feature">
                      <p className="feature-heading">Networking Opportunities:</p>
                      <p className="feature-description">Hear from renowned thought leaders who will delve into topics such as artificial intelligence, sustainability, and the future of work. Gain valuable perspectives.</p>
                    </div>
                    {/* single feature */}
                    <div className="single-feature">
                      <p className="feature-heading">Registration:</p>
                      <p className="feature-description">Secure your spot today and be part of the Future Minds Symposium. Early bird registration is now open at www.Sonargaon University Don&apos;t miss this opportunity to gain valuable insights.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="event-sidebar">
                {/* event information */}
                <div className="event-information">
                  <h5 className="rts-section-title">Event Information</h5>
                  <div className="single-info">
                    {/* single repeat item */}
                    <div className="info-repeat">
                      <div className="left-side"><span><i className="fa-light fa-money-check-dollar"></i></span> Cost:</div>
                      <div className="right-side">
                        <span className="desc price">$86.00</span>
                      </div>
                    </div>
                    {/* single repeat item */}
                    <div className="info-repeat">
                      <div className="left-side"><span><i className="fa-regular fa-calendar-week"></i></span> Date:</div>
                      <div className="right-side">
                        <span className="desc">December 26, 2023</span>
                      </div>
                    </div>
                    {/* single repeat item */}
                    <div className="info-repeat">
                      <div className="left-side"><span><i className="fa-thin fa-users"></i></span> Total Slot:</div>
                      <div className="right-side">
                        <span className="desc">54</span>
                      </div>
                    </div>
                    {/* single repeat item */}
                    <div className="info-repeat">
                      <div className="left-side"><span><i className="fa-regular fa-lock"></i></span> Booked Slot:</div>
                      <div className="right-side">
                        <span className="desc">0</span>
                      </div>
                    </div>
                    {/* book button */}
                  </div>
                  <div className="book-button">
                    <a href="#" className="rts-theme-btn primary">Book Now</a>
                  </div>
                  {/* countdown */}
                  <div className="event-count-down">
                    <div className="count-item">
                      <p><span id="day"></span>day</p>
                    </div>
                    <div className="count-item">
                      <p><span id="hour"></span>hours</p>
                    </div>
                    <div className="count-item">
                      <p><span id="minute"></span>minute</p>
                    </div>
                    <div className="count-item">
                      <p><span id="second"></span>second</p>
                    </div>
                  </div>
                  {/* clear interval */}
                  <div className="event-timeout rt-center mt--20">
                    <div id="timeout"></div>
                  </div>
                </div>
                {/* event venue */}
                <div className="event-venue mt--50">
                  <h5 className="rts-section-title">Event Venue</h5>
                  <div className="event-venu-information">
                    <div className="single-info">
                      {/* single repeat item */}
                      <div className="info-repeat">
                        <div className="left-side bold">Venue:</div>
                        <div className="right-side">
                          <span className="desc">Starry Haven Events Center</span>
                        </div>
                      </div>
                      {/* single repeat item */}
                      <div className="info-repeat">
                        <div className="left-side bold">Location:</div>
                        <div className="right-side">
                          <span className="desc location">Pinecrest Golf Club,123 Fairway
                            Lane, Anytown, USA</span>
                        </div>
                      </div>
                      {/* single repeat item */}
                      <div className="info-repeat">
                        <div className="left-side bold">Phone Number:</div>
                        <div className="right-side">
                          <span className="desc"><a href="callto:121">(+1) 0 221 457 441</a></span>
                        </div>
                      </div>
                      {/* single repeat item */}
                      <div className="info-repeat">
                        <div className="left-side bold">Web Site:</div>
                        <div className="right-side">
                          <span className="desc">
                            <a href="#">www.su.edu.bd</a>
                            {/* social item */}
                            <span className="social-links">
                              <a href="#"><i className="fa-brands fa-facebook"></i></a>
                              <a href="#"><i className="fa-brands fa-instagram"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                              <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                              <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </span>
                          </span>
                        </div>
                      </div>
                      {/* book button */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="event-location mt--60">
              <div className="rts-section">
                <h3 className="rts-section-title">
                  The Event Location
                </h3>
              </div>
            </div>
            <div className="col-12">
              <div className="event-location-map">
                <iframe className="event-location-map-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* event details end */}
      {/* event speaker */}
      <div className="rts-event-speaker mt--40">
        <div className="container">
          <div className="row">
            <div className="rts-section">
              <h3 className="rts-section-title">Event Speakers</h3>
            </div>
          </div>
          {/* event speaker list */}
          <div className="row g-5">
            {/* single speaker item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="event-speaker">
                <div className="event-speaker__details">
                  <div className="speaker-thumb">
                    <img src="/assets/images/speaker/01.jpg" alt="speaker-thumb" />
                    <div className="speaker-social-link">
                      <a href="#"><i className="fa-brands fa-skype"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                  <div className="speaker-meta">
                    <h5 className="speaker__name"><Link href="/faculty-details">Rick Zonson</Link></h5>
                    <span className="designation">Assistant Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single speaker item end */}
            {/* single speaker item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="event-speaker">
                <div className="event-speaker__details">
                  <div className="speaker-thumb">
                    <img src="/assets/images/speaker/02.jpg" alt="speaker-thumb" />
                    <div className="speaker-social-link">
                      <a href="#"><i className="fa-brands fa-skype"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                  <div className="speaker-meta">
                    <h5 className="speaker__name"><Link href="/faculty-details">Thomas Fred</Link></h5>
                    <span className="designation">Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single speaker item end */}
            {/* single speaker item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="event-speaker">
                <div className="event-speaker__details">
                  <div className="speaker-thumb">
                    <img src="/assets/images/speaker/03.jpg" alt="speaker-thumb" />
                    <div className="speaker-social-link">
                      <a href="#"><i className="fa-brands fa-skype"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                  <div className="speaker-meta">
                    <h5 className="speaker__name"><Link href="/faculty-details">Albert Mack</Link></h5>
                    <span className="designation">Head Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single speaker item end */}
            {/* single speaker item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="event-speaker">
                <div className="event-speaker__details">
                  <div className="speaker-thumb">
                    <img src="/assets/images/speaker/04.jpg" alt="speaker-thumb" />
                    <div className="speaker-social-link">
                      <a href="#"><i className="fa-brands fa-skype"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                  <div className="speaker-meta">
                    <h5 className="speaker__name"><Link href="/faculty-details">Micheal Alfred</Link></h5>
                    <span className="designation">Assistant Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single speaker item end */}
          </div>
        </div>
      </div>
      {/* event speaker end */}


      {/* university event list */}
      <div className="rts-event rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section mb--40">
              <h3 className="rts-section-title">Related Event</h3>
            </div>
          </div>
          <div className="row justify-content-center justify-content-md-start g-5">
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-event">
                <div className="event single-event__content">
                  <div className="event__thumb">
                    <img src="/assets/images/campus/event/01.jpg" alt="event thumbnail" />
                  </div>
                  <div className="event__meta">
                    <div className="event__meta--da">
                      <div className="event-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                      <div className="event-time">
                        <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                        <span>10:30 am</span>
                      </div>
                    </div>
                    <h5 className="event__title"> <a href="#">Edu Fest 2023: Igniting Minds Off on Transforming Lives</a></h5>
                  </div>
                  <div className="event-place">
                    <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                    <span>Yarra Park, UK</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single event item end */}
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-event">
                <div className="event single-event__content">
                  <div className="event__thumb">
                    <img src="/assets/images/campus/event/02.jpg" alt="event thumbnail" />
                  </div>
                  <div className="event__meta">
                    <div className="event__meta--da">
                      <div className="event-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 30, 2023</span>
                      </div>
                      <div className="event-time">
                        <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                        <span>10:30 am</span>
                      </div>
                    </div>
                    <h5 className="event__title"> <a href="#">Edu Fest 2023: Igniting Minds Off on Transforming Lives</a></h5>
                  </div>
                  <div className="event-place">
                    <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                    <span>Yarra Park, UK</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single event item end */}
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-event">
                <div className="event single-event__content">
                  <div className="event__thumb">
                    <img src="/assets/images/campus/event/03.jpg" alt="event thumbnail" />
                  </div>
                  <div className="event__meta">
                    <div className="event__meta--da">
                      <div className="event-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>December 03, 2023</span>
                      </div>
                      <div className="event-time">
                        <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                        <span>10:30 am</span>
                      </div>
                    </div>
                    <h5 className="event__title"> <a href="#">Edu Fest 2023: Igniting Minds Off on Transforming Lives</a></h5>
                  </div>
                  <div className="event-place">
                    <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                    <span>Yarra Park, UK</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single event item end */}
          </div>
        </div>
      </div>
      {/* university event list end */}

      <FooterUniversity />
    </>
  );
}
