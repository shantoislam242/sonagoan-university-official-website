import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageBannerProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  bgImage?: string;
}

/**
 * Inner-page hero banner. Markup generalized from
 * unipix-Main/about.html lines 142–156. Used on every non-home page.
 */
export default function PageBanner({ title, breadcrumb, bgImage }: PageBannerProps) {
  return (
    <section
      className="rts-breadcrumb breadcrumb-height breadcumb-bg"
      style={{ backgroundImage: `url('${bgImage ?? '/assets/images/banner/breadcrumb.jpg'}')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <ul className="breadcrumb">
                {breadcrumb.map((item, i) => {
                  const isLast = i === breadcrumb.length - 1;
                  if (isLast || !item.href) {
                    return (
                      <li
                        key={i}
                        className={`breadcrumb-item${isLast ? ' active' : ''}`}
                        aria-current={isLast ? 'page' : undefined}
                      >
                        {item.label}
                      </li>
                    );
                  }
                  return (
                    <li key={i} className="breadcrumb-item">
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
              <h2 className="section-title">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
