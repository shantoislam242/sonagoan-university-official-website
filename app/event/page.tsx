import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Events',
  description: 'Upcoming events, fairs, lectures, and conferences at Sonargoan University.',
  path: '/event',
});

export default function EventPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner title="Events" breadcrumb={[{label:'Home',href:'/'},{label:'Events'}]} />

      {/* university event list */}
      {/* TODO: Events */}
      <div className="rts-event rts-section-padding">
        <div className="container">
          <div className="row justify-content-sm-center justify-content-md-start g-5">
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
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
                        <span>November 28, 2023</span>
                      </div>
                      <div className="event-time">
                        <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                        <span>10:30 am</span>
                      </div>
                    </div>
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
                        <span>November 28, 2023</span>
                      </div>
                      <div className="event-time">
                        <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                        <span>10:30 am</span>
                      </div>
                    </div>
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
                    <img src="/assets/images/campus/event/04.jpg" alt="event thumbnail" />
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
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
                    <img src="/assets/images/campus/event/05.jpg" alt="event thumbnail" />
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
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
                    <img src="/assets/images/campus/event/06.jpg" alt="event thumbnail" />
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
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
                    <img src="/assets/images/campus/event/04.jpg" alt="event thumbnail" />
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
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
                    <img src="/assets/images/campus/event/05.jpg" alt="event thumbnail" />
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
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
                    <img src="/assets/images/campus/event/06.jpg" alt="event thumbnail" />
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
                    <h5 className="event__title"> <Link href="/event-details">Edu Fest 2023: Igniting Minds Off on Transforming Lives</Link></h5>
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
