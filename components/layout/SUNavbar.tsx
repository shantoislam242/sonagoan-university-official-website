'use client';

import { useState, useEffect } from 'react';
import {
  Menu, X, Search,
  User, ChevronDown, ChevronRight, LayoutGrid,
  GraduationCap, CheckCircle, Building, BookOpen, Calendar, Mail, Phone,
} from 'lucide-react';
import Container from '../ui/Container';
import {
  FacebookBrandIcon, LinkedinBrandIcon, YoutubeBrandIcon,
} from './BrandIcons';
import SUSearchOverlay from './SUSearchOverlay';
import {
  applyUrl, topLinks, quickAccessItems, mainNav, socials,
  type QuickAccessItem, type MainNavGroup,
} from '@/lib/nav-config';


// Icon map for QuickAccessItem.iconName → component. Source uses a
// DynamicLucideIcon that resolves all 1000+ lucide icons; we only need
// the small set the static config references.
const ICON_MAP = {
  User, GraduationCap, CheckCircle, Building, BookOpen, Calendar, Mail, Phone,
} as const;

function QuickAccessIcon({
  name,
  size,
  className,
}: {
  name: QuickAccessItem['iconName'];
  size?: number;
  className?: string;
}) {
  const Icon = ICON_MAP[name];
  return <Icon size={size} className={className} />;
}

// Helper for the named middle-bar quick-action buttons (ERP, Convoc.
// Reg., Verification). Falls back to '#' if the named entry is absent.
function resolveQuickAccessHref(name: string): string {
  const hit = quickAccessItems.find((q) => q.name === name);
  return hit?.href ?? '#';
}

export default function SUNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (name: string) => {
    setOpenMobileSection((prev) => (prev === name ? null : name));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [mobileMenuOpen]);

  // Mobile drawer "Quick Links" derives from the main_nav Admission
  // group children. If Admission group is absent, fall back to empty.
  const mobileQuickLinks = mainNav.find((g) => g.name === 'Admission')?.items ?? [];

  return (
    <nav
      className="fixed w-full flex flex-col transition-all duration-300"
      style={{
        // Inline position defends against template style.css. Inline
        // z-index defends against template's banner/hero images which
        // often carry z-index: 99/100 in template CSS and would
        // otherwise paint over the sticky bar.
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      {/* 1. TOP BAR */}
      <div
        className={`hidden md:flex items-center overflow-hidden transition-all duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
        style={{ height: isScrolled ? 0 : 36 }}
      >
        {/* Left Side - Magenta Background. Items hug the left edge of
            the viewport (no centered Container), matching source design.
            Each <a> gets inline white color because template style.css's
            wider `a { color: ... }` rules override inherited color. */}
        <div
          className="flex-grow h-full flex items-center pr-4"
          style={{ background: '#CC1579', paddingLeft: 24 }}
        >
          <div className="flex items-center gap-1 font-medium" style={{ fontSize: 12 }}>
            {topLinks.map((link, idx) => (
              <div key={link.name} className="flex items-center">
                <a
                  href={link.isDisabled || !link.href ? '#' : link.href}
                  {...(link.isExternal && link.href && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`px-2 relative group uppercase tracking-wider transition-colors ${
                    link.isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  style={{ color: 'rgba(255,255,255,0.95)' }}
                  aria-disabled={link.isDisabled || undefined}
                >
                  {link.name}
                </a>
                {idx < topLinks.length - 1 && <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Socials with Dark Blue Background.
            Each <a> gets inline color because template style.css has
            wider `a { color: var(--rt-…) }` rules that override the
            inherited white from the parent, making links invisible on
            the navy bg. Inline color: '#ffffff' beats stylesheet. */}
        <div className="h-full flex items-center px-10" style={{ background: '#2B3175' }}>
          <div className="flex items-center gap-6 font-medium" style={{ fontSize: 12 }}>
            {socials.facebookUrl && (
              <a
                href={socials.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors"
                style={{ color: '#ffffff' }}
              >
                <FacebookBrandIcon size={12} />
                <span className="uppercase tracking-widest">Facebook</span>
              </a>
            )}
            {socials.linkedinUrl && (
              <a
                href={socials.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors"
                style={{ color: '#ffffff' }}
              >
                <LinkedinBrandIcon size={12} />
                <span className="uppercase tracking-widest">LinkedIn</span>
              </a>
            )}
            {socials.youtubeUrl && (
              <a
                href={socials.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors"
                style={{ color: '#ffffff' }}
              >
                <YoutubeBrandIcon size={14} />
                <span className="uppercase tracking-widest">Youtube</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BAR - Logo & Action Buttons — inline bg + padding
          defeats template style.css overrides. When scrolled, the bar
          matches the bottom-nav gray (#f3f4f6) so the sticky state reads
          as a single unified strip. */}
      <div
        className={`relative transition-all duration-500 border-b ${isScrolled ? 'border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : 'border-gray-100'}`}
        style={{
          background: isScrolled ? '#f3f4f6' : '#ffffff',
          paddingTop: isScrolled ? 10 : 16,
          paddingBottom: isScrolled ? 10 : 16,
          zIndex: 999,
        }}
      >
        <Container className="flex justify-between items-center !max-w-[1600px]">
          {/* Logo — inline `height` defeats template `img { height: auto }`
              rule at style.css:9764 which would otherwise let the logo
              render at its natural PNG size (way too small). */}
          <a href="/" aria-label="Sonargaon University — Home" className="flex items-center shrink-0">
            <img
              src="/assets/images/logo/su-logo.png"
              alt="Sonargaon University"
              style={{
                height: isScrolled ? 36 : 42,
                width: 'auto',
                maxWidth: '42vw',
                objectFit: 'contain',
                transition: 'height 500ms',
              }}
            />
          </a>

          {/* Compact Scroll Navigation — only when scrolled. Wider gap
              + larger NavGroup padding so items don't crush together. */}
          {isScrolled && (
            <div
              className="hidden lg:flex items-center justify-center"
              style={{ gap: 24 }}
            >
              {mainNav.map((group) => (
                <NavGroup key={group.name} group={group} compact />
              ))}
            </div>
          )}

          {/* Right side: Secondary buttons + Apply Now + Mobile toggle */}
          <div className="flex items-center gap-1 lg:gap-3 -mr-3 lg:mr-0">
            <div className={`flex items-center gap-3 ${isScrolled ? 'lg:hidden' : ''}`}>
              <a
                href={resolveQuickAccessHref('ERP')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-lg font-bold whitespace-nowrap transition-all shadow-sm border border-gray-100"
                style={{ padding: '10px 18px', fontSize: '14px', color: '#374151' }}
              >
                <User size={16} className="text-accent" />
                ERP
              </a>
              <a
                href={resolveQuickAccessHref('Convoc. Reg.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-lg font-bold whitespace-nowrap transition-all shadow-sm border border-gray-100"
                style={{ padding: '10px 18px', fontSize: '14px', color: '#374151' }}
              >
                <GraduationCap size={16} className="text-accent" />
                Convoc. Reg.
              </a>
              <a
                href={resolveQuickAccessHref('Verification')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-lg font-bold whitespace-nowrap transition-all shadow-sm border border-gray-100"
                style={{ padding: '10px 18px', fontSize: '14px', color: '#374151' }}
              >
                <CheckCircle size={16} className="text-accent" />
                Verification
              </a>
            </div>

            {/* Apply Now — inline styles defend against template style.css
                cascade conflicts (which strip Tailwind gradient + sizing via
                wider `a {…}` selectors). */}
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 rounded-lg font-bold whitespace-nowrap transition-all shadow-md hover:shadow-lg hover:brightness-110 shrink-0"
              style={{
                padding: '10px 22px',
                fontSize: '14px',
                background: 'linear-gradient(to right, #2B3175, #CC1579)',
                color: '#ffffff',
              }}
            >
              Apply Now
            </a>

            {/* Quick Access grid — only when scrolled. Extra left margin
                creates breathing room after the Apply Now button. */}
            {isScrolled && (
              <div className="hidden lg:block group relative" style={{ marginLeft: 12 }}>
                <button
                  aria-label="Quick access"
                  className="rounded-lg transition-colors"
                  style={{
                    padding: 10,
                    background: '#eff6ff',
                    border: '1px solid #dbeafe',
                    color: '#2B3175',
                  }}
                >
                  <LayoutGrid size={20} />
                </button>
                <div className="invisible absolute right-0 top-full z-50 mt-2 w-[320px] translate-y-2 rounded-xl border border-gray-100 bg-white p-3 opacity-0 shadow-premium transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="grid grid-cols-3 gap-1">
                    {quickAccessItems.map((item) => {
                      const isLive = !!item.href && !item.isDisabled;
                      return (
                        <a
                          key={item.name}
                          href={isLive ? item.href : '#'}
                          {...(item.isExternal && isLive && { target: '_blank', rel: 'noopener noreferrer' })}
                          className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg text-center transition-colors hover:bg-accent/5 ${
                            !isLive ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          aria-disabled={!isLive || undefined}
                        >
                          <QuickAccessIcon name={item.iconName} size={22} className="text-primary" />
                          <span className="text-[12px] font-medium text-gray-700 leading-tight">{item.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Search Toggle */}
            {!mobileMenuOpen && (
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="lg:hidden p-2 text-primary relative z-[70]"
              >
                <Search size={24} />
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-primary relative z-[70]"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>
      </div>

      {/* 3. BOTTOM BAR - Nav Links — inline `height: 60` per user spec.
          Items centred. Inline bg defeats template style.css. */}
      {!isScrolled && (
        <div
          className="hidden lg:block backdrop-blur-md"
          style={{ background: '#f3f4f6' }}
        >
          <Container className="!max-w-[1600px]">
            <div className="flex items-center" style={{ height: 60 }}>
              <div className="mx-auto flex items-center justify-center gap-0.5 xl:gap-1">
                {mainNav.map((group) => (
                  <NavGroup key={group.name} group={group} />
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Mobile Menu */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 bg-black/40 z-[50] transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-[min(85vw,340px)] overflow-y-auto overscroll-contain bg-white z-[55] shadow-2xl transform transition-transform duration-300 pb-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="px-4 pt-8 pb-3">
          <h3 className="text-base font-bold text-primary">Menu</h3>
        </div>

        <div className="px-4">
          {mainNav.map((group) => {
            const isOpen = openMobileSection === group.name;
            return (
              <div key={group.name} className="border-b border-gray-100 last:border-b-0">
                {group.hasDropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleMobileSection(group.name)}
                    aria-expanded={isOpen}
                    className="w-full py-3 text-[14px] font-semibold text-primary flex justify-between items-center"
                  >
                    {group.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <a
                    href={group.href ?? '#'}
                    className="block py-3 text-[14px] font-semibold text-primary"
                  >
                    {group.name}
                  </a>
                )}
                {group.items.length > 0 && isOpen && (
                  <div className="pb-2 pl-3 flex flex-col gap-1">
                    {group.items.map((child) => (
                      <a
                        key={child.name}
                        href={child.isDisabled ? '#' : child.href}
                        {...(child.isExternal && !child.isDisabled && { target: '_blank', rel: 'noopener noreferrer' })}
                        className={`py-1.5 text-[13px] font-medium transition-colors ${
                          child.isDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:text-accent'
                        }`}
                        aria-disabled={child.isDisabled || undefined}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Apply Now */}
        <div className="px-4 pt-3">
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold text-center shadow-md transition-all"
          >
            Apply Now
          </a>
        </div>

        {/* Quick Links — derived from main_nav Admission group */}
        {mobileQuickLinks.length > 0 && (
          <div className="mt-4 px-4 pt-4 border-t border-gray-100">
            <h4 className="text-[13px] font-bold text-primary mb-2.5">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {mobileQuickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.isDisabled ? '#' : link.href}
                  {...(link.isExternal && !link.isDisabled && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`text-[12.5px] transition-colors py-1 ${
                    link.isDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:text-accent'
                  }`}
                  aria-disabled={link.isDisabled || undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Services — from quickAccessItems */}
        <div className="mt-4 px-4 pt-4 pb-4 border-t border-gray-100">
          <h4 className="text-[13px] font-bold text-primary mb-3">Services</h4>
          <div className="grid grid-cols-3 gap-2">
            {quickAccessItems.map((item) => {
              const isLive = !!item.href && !item.isDisabled;
              return (
                <a
                  key={item.name}
                  href={isLive ? item.href : '#'}
                  {...(item.isExternal && isLive && { target: '_blank', rel: 'noopener noreferrer' })}
                  onClick={() => isLive && setMobileMenuOpen(false)}
                  className={`flex flex-col items-center justify-center gap-1.5 py-3 px-1 rounded-lg bg-gray-50 hover:bg-accent/5 active:bg-accent/10 transition-colors text-center ${
                    !isLive ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-disabled={!isLive || undefined}
                >
                  <QuickAccessIcon name={item.iconName} size={20} className="text-primary" />
                  <span className="text-[10.5px] font-semibold text-gray-700 leading-tight">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <SUSearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
}

function NavGroup({
  group,
  compact = false,
}: {
  group: MainNavGroup;
  compact?: boolean;
}) {
  const linkClass = compact
    ? 'h-12 flex items-center gap-1.5 text-[14px] font-bold whitespace-nowrap text-gray-800 hover:text-accent transition-colors'
    : 'px-1.5 xl:px-5 flex items-center gap-0.5 xl:gap-1.5 text-[12px] xl:text-[15px] font-medium whitespace-nowrap text-gray-800 hover:text-accent transition-all relative h-[60px]';

  return (
    <div className="group relative">
      <a
        href={group.href ?? '#'}
        className={linkClass}
      >
        {group.name}
        {group.hasDropdown && <ChevronDown size={compact ? 12 : 13} className="hidden xl:block opacity-80" />}
        {!compact && (
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all group-hover:w-full" />
        )}
      </a>
      {group.items.length > 0 && (
        <div className="invisible absolute left-0 top-full z-50 min-w-[280px] translate-y-2 rounded-lg border border-gray-100 bg-white py-3 opacity-0 shadow-premium transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          {(group.title || group.name) && (
            <div className="px-5 pt-1 pb-3 border-b border-gray-200">
              <div className="text-[15px] font-bold text-gray-900">{group.title ?? group.name}</div>
            </div>
          )}
          <div className="py-2">
            {group.items.map((child) => (
              <a
                key={child.name}
                href={child.isDisabled ? '#' : child.href}
                {...(child.isExternal && !child.isDisabled && { target: '_blank', rel: 'noopener noreferrer' })}
                className={`group/item block px-5 py-2.5 text-sm font-medium transition-colors ${
                  child.isDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-accent/5 hover:text-accent'
                }`}
                aria-disabled={child.isDisabled || undefined}
              >
                <span className="inline-flex items-center gap-2">
                  {child.name}
                  {!child.isDisabled && (
                    <ChevronRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
                    />
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
