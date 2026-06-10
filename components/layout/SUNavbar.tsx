'use client';

import { useState, useEffect } from 'react';
import {
  Menu, X, Search,
  User, ChevronDown, ChevronRight, LayoutGrid,
  GraduationCap, CheckCircle, BookOpen, Image, Compass, Archive,
  Users, Globe, ClipboardList, Building2, Award,
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

// ─────────────────────────────────────────────────────────────────
//  SOURCE-PARITY NOTE
//  Template style.css sets `html { font-size: 10px }`, so every rem-based
//  Tailwind utility (text-sm, px-5, gap-6 …) would render at 62.5%. To
//  match the source project pixel-for-pixel, ALL sizing here is pinned to
//  absolute px — either inline `style` or `*-[Npx]` arbitrary utilities.
//  Inline colours stay as cascade defenses against template's wider
//  `a { color: var(--rt-…) }` / `img { height: auto }` / `footer{}` rules.
//  See docs/superpowers/specs/2026-06-10-navbar-footer-source-parity-design.md
// ─────────────────────────────────────────────────────────────────

// Icon map for QuickAccessItem.iconName → component. Source uses a
// DynamicLucideIcon that resolves all 1000+ lucide icons; we only need
// the small set the static config references.
const ICON_MAP = {
  BookOpen, GraduationCap, Image, Compass, Archive,
  Users, Globe, ClipboardList, Building2, Award, CheckCircle,
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
  // Quick-access grid panel. JS-controlled (open on hover AND click) because
  // the CSS group-hover reveal proved unreliable inside the template's CSS
  // environment; inline visibility styles also beat any template cascade.
  const [quickOpen, setQuickOpen] = useState(false);

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
        // Inline position + high z-index defend against template's
        // banner/hero images which carry z-index 99/100 in template CSS.
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      {/* 1. TOP BAR — source height 40px (h-10), collapses to 0 on scroll. */}
      <div
        className={`hidden md:flex items-center overflow-hidden transition-all duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
        style={{ height: isScrolled ? 0 : 40 }}
      >
        {/* Left — magenta. Items live inside the same Container as the
            middle/bottom bars, so the first link aligns with the logo's
            left edge (source design). */}
        <div
          className="flex-grow h-full flex items-center pr-[16px]"
          style={{ background: '#CC1579' }}
        >
          <Container className="w-full !max-w-[1600px] flex items-center">
            <div className="flex items-center gap-[4px] font-medium" style={{ fontSize: 11 }}>
              {topLinks.map((link, idx) => (
                <div key={link.name} className="flex items-center">
                  <a
                    href={link.isDisabled || !link.href ? '#' : link.href}
                    {...(link.isExternal && link.href && { target: '_blank', rel: 'noopener noreferrer' })}
                    className={`px-[8px] relative group uppercase tracking-wider transition-colors ${
                      link.isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    style={{ color: 'rgba(255,255,255,0.9)' }}
                    aria-disabled={link.isDisabled || undefined}
                  >
                    {link.name}
                  </a>
                  {idx < topLinks.length - 1 && <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>}
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Right — navy social strip. Inline white colour beats template's
            wider `a { color: var(--rt-…) }` which would hide links on navy. */}
        <div className="h-full flex items-center px-[40px]" style={{ background: '#2B3175' }}>
          <div className="flex items-center gap-[24px] font-medium" style={{ fontSize: 11 }}>
            {socials.facebookUrl && (
              <a
                href={socials.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[6px] transition-colors hover:text-accent"
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
                className="flex items-center gap-[6px] transition-colors hover:text-accent"
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
                className="flex items-center gap-[6px] transition-colors hover:text-accent"
                style={{ color: '#ffffff' }}
              >
                <YoutubeBrandIcon size={14} />
                <span className="uppercase tracking-widest">Youtube</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BAR — Logo & actions. Source: white (scrolled →
          white/95 + backdrop-blur), py 16 → 8 when scrolled. */}
      <div
        className={`relative transition-all duration-500 border-b ${
          isScrolled
            ? 'border-gray-50 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
            : 'border-gray-100'
        }`}
        style={{
          background: isScrolled ? 'rgba(255,255,255,0.95)' : '#ffffff',
          paddingTop: isScrolled ? 8 : 16,
          paddingBottom: isScrolled ? 8 : 16,
          zIndex: 999,
        }}
      >
        <Container className="flex justify-between items-center !max-w-[1600px]">
          {/* Logo — inline height defeats template `img { height: auto }`. */}
          <a href="/" aria-label="Sonargaon University — Home" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/logo/su-logo.png"
              alt="Sonargaon University"
              style={{
                height: isScrolled ? 32 : 40,
                width: 'auto',
                maxWidth: '42vw',
                objectFit: 'contain',
                transition: 'height 500ms',
              }}
            />
          </a>

          {/* Compact scroll nav — only when scrolled. */}
          {isScrolled && (
            <div className="hidden lg:flex items-center justify-center gap-[2px] xl:gap-[4px]">
              {mainNav.map((group) => (
                <NavGroup key={group.name} group={group} compact />
              ))}
            </div>
          )}

          {/* Right side: secondary buttons + Apply Now + mobile toggle */}
          <div className="flex items-center gap-[4px] lg:gap-[12px] -mr-[12px] lg:mr-0">
            <div className={`flex items-center gap-[12px] ${isScrolled ? 'lg:hidden' : ''}`}>
              <a
                href={resolveQuickAccessHref('ERP')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-[8px] bg-gray-50 hover:bg-gray-100 rounded-[8px] font-semibold whitespace-nowrap transition-all shadow-sm border border-gray-100"
                style={{ padding: '10px 16px', fontSize: 14, color: '#374151' }}
              >
                <User size={16} className="text-accent" />
                ERP
              </a>
              <a
                href={resolveQuickAccessHref('Convoc. Reg.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-[8px] bg-gray-50 hover:bg-gray-100 rounded-[8px] font-semibold whitespace-nowrap transition-all shadow-sm border border-gray-100"
                style={{ padding: '10px 16px', fontSize: 14, color: '#374151' }}
              >
                <GraduationCap size={16} className="text-accent" />
                Convoc. Reg.
              </a>
              <a
                href={resolveQuickAccessHref('Verification')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-[8px] bg-gray-50 hover:bg-gray-100 rounded-[8px] font-semibold whitespace-nowrap transition-all shadow-sm border border-gray-100"
                style={{ padding: '10px 16px', fontSize: 14, color: '#374151' }}
              >
                <CheckCircle size={16} className="text-accent" />
                Verification
              </a>
            </div>

            {/* Apply Now — inline gradient + sizing beats template cascade. */}
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-[8px] rounded-[8px] font-semibold whitespace-nowrap transition-all shadow-md hover:shadow-lg hover:brightness-110 shrink-0"
              style={{
                padding: '10px 20px',
                fontSize: 14,
                background: 'linear-gradient(to right, #2B3175, #CC1579)',
                color: '#ffffff',
              }}
            >
              Apply Now
            </a>

            {/* Quick Access grid — only when scrolled. Opens on hover and
                on click; visibility driven by JS state + inline styles. */}
            {isScrolled && (
              <div
                className="hidden lg:block relative"
                onMouseEnter={() => setQuickOpen(true)}
                onMouseLeave={() => setQuickOpen(false)}
              >
                <button
                  type="button"
                  aria-label="Quick access"
                  aria-expanded={quickOpen}
                  onClick={() => setQuickOpen((v) => !v)}
                  className="rounded-[8px] transition-colors"
                  style={{
                    padding: 10,
                    background: '#eff6ff',
                    border: '1px solid #dbeafe',
                    color: '#2B3175',
                  }}
                >
                  <LayoutGrid size={20} />
                </button>
                <div
                  className="absolute right-0 top-full z-50 mt-[8px] w-[320px] rounded-[12px] p-[12px] shadow-premium transition-all duration-200"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #f3f4f6',
                    visibility: quickOpen ? 'visible' : 'hidden',
                    opacity: quickOpen ? 1 : 0,
                    transform: quickOpen ? 'translateY(0)' : 'translateY(8px)',
                    pointerEvents: quickOpen ? 'auto' : 'none',
                  }}
                >
                  <div className="grid grid-cols-3 gap-[4px]">
                    {quickAccessItems.map((item) => {
                      const isLive = !!item.href && !item.isDisabled;
                      return (
                        <a
                          key={item.name}
                          href={isLive ? item.href : '#'}
                          {...(item.isExternal && isLive && { target: '_blank', rel: 'noopener noreferrer' })}
                          onClick={() => isLive && setQuickOpen(false)}
                          className={`flex flex-col items-center justify-center gap-[6px] p-[12px] rounded-[8px] text-center transition-colors hover:bg-accent/5 ${
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
                className="lg:hidden p-[8px] text-primary relative z-[70]"
              >
                <Search size={24} />
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-[8px] text-primary relative z-[70]"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>
      </div>

      {/* 3. BOTTOM BAR - Nav Links — height 56px. Source uses bg-white/95 +
          blur, but because the SU layout pushes content below the fixed
          navbar (body paddingTop), there's no hero behind the bar for the
          blur to tint — so white reads as invisible. A light solid #F3F4F6
          keeps the bar visibly distinct without touching the hero. */}
      {!isScrolled && (
        <div
          className="hidden lg:block border-b border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          style={{ background: '#F3F4F6' }}
        >
          <Container className="!max-w-[1600px]">
            <div className="flex items-center" style={{ height: 56 }}>
              <div className="mx-auto flex items-center justify-center gap-[2px] xl:gap-[4px]">
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
        className={`lg:hidden fixed inset-y-0 right-0 w-[min(85vw,340px)] overflow-y-auto overscroll-contain bg-white z-[55] shadow-2xl transform transition-transform duration-300 pb-[24px] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="px-[16px] pt-[32px] pb-[12px]">
          <h3 className="text-[16px] font-bold text-primary">Menu</h3>
        </div>

        <div className="px-[16px]">
          {mainNav.map((group) => {
            const isOpen = openMobileSection === group.name;
            return (
              <div key={group.name} className="border-b border-gray-100 last:border-b-0">
                {group.hasDropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleMobileSection(group.name)}
                    aria-expanded={isOpen}
                    className="w-full py-[12px] text-[14px] font-semibold text-primary flex justify-between items-center"
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
                    className="block py-[12px] text-[14px] font-semibold text-primary"
                  >
                    {group.name}
                  </a>
                )}
                {group.items.length > 0 && isOpen && (
                  <div className="pb-[8px] pl-[12px] flex flex-col gap-[4px]">
                    {group.items.map((child) => (
                      <a
                        key={child.name}
                        href={child.isDisabled ? '#' : child.href}
                        {...(child.isExternal && !child.isDisabled && { target: '_blank', rel: 'noopener noreferrer' })}
                        className={`py-[6px] text-[13px] font-medium transition-colors ${
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
        <div className="px-[16px] pt-[12px]">
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-[12px] bg-primary hover:bg-primary/90 text-white rounded-[8px] text-[14px] font-bold text-center shadow-md transition-all"
          >
            Apply Now
          </a>
        </div>

        {/* Quick Links — derived from main_nav Admission group */}
        {mobileQuickLinks.length > 0 && (
          <div className="mt-[16px] px-[16px] pt-[16px] border-t border-gray-100">
            <h4 className="text-[13px] font-bold text-primary mb-[10px]">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[6px]">
              {mobileQuickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.isDisabled ? '#' : link.href}
                  {...(link.isExternal && !link.isDisabled && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`text-[12.5px] transition-colors py-[4px] ${
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
        <div className="mt-[16px] px-[16px] pt-[16px] pb-[16px] border-t border-gray-100">
          <h4 className="text-[13px] font-bold text-primary mb-[12px]">Services</h4>
          <div className="grid grid-cols-3 gap-[8px]">
            {quickAccessItems.map((item) => {
              const isLive = !!item.href && !item.isDisabled;
              return (
                <a
                  key={item.name}
                  href={isLive ? item.href : '#'}
                  {...(item.isExternal && isLive && { target: '_blank', rel: 'noopener noreferrer' })}
                  onClick={() => isLive && setMobileMenuOpen(false)}
                  className={`flex flex-col items-center justify-center gap-[6px] py-[12px] px-[4px] rounded-[8px] bg-gray-50 hover:bg-accent/5 active:bg-accent/10 transition-colors text-center ${
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
  // Source-exact px sizing. Non-compact: px 6/20, height 56, font 12/15.
  // Compact (scrolled): height 44, px 4/12, font 11/14, bold.
  const linkClass = compact
    ? 'h-[44px] px-[4px] xl:px-[12px] flex items-center gap-[2px] xl:gap-[4px] text-[11px] xl:text-[14px] font-bold whitespace-nowrap text-gray-800 hover:text-accent transition-colors'
    : 'px-[6px] xl:px-[20px] h-[56px] flex items-center gap-[2px] xl:gap-[6px] text-[12px] xl:text-[15px] font-medium whitespace-nowrap text-gray-800 hover:text-accent transition-all relative';

  return (
    <div className="group relative">
      <a
        href={group.href ?? '#'}
        className={linkClass}
      >
        {group.name}
        {group.hasDropdown && <ChevronDown size={compact ? 12 : 13} className="hidden xl:block opacity-80" />}
        {!compact && (
          <span className="absolute bottom-0 left-0 w-0 h-[4px] bg-accent transition-all group-hover:w-full" />
        )}
      </a>
      {group.items.length > 0 && (
        <div className="invisible absolute left-0 top-full z-50 min-w-[280px] translate-y-2 rounded-[8px] border border-gray-100 bg-white py-[12px] opacity-0 shadow-premium transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          {(group.title || group.name) && (
            <div className="px-[20px] pt-[4px] pb-[12px] border-b border-gray-200">
              <div className="text-[15px] font-bold text-gray-900">{group.title ?? group.name}</div>
            </div>
          )}
          <div className="py-[8px]">
            {group.items.map((child) => (
              <a
                key={child.name}
                href={child.isDisabled ? '#' : child.href}
                {...(child.isExternal && !child.isDisabled && { target: '_blank', rel: 'noopener noreferrer' })}
                className={`group/item block px-[20px] py-[10px] text-[14px] font-medium transition-colors ${
                  child.isDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-accent/5 hover:text-accent'
                }`}
                aria-disabled={child.isDisabled || undefined}
              >
                <span className="inline-flex items-center gap-[8px]">
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
