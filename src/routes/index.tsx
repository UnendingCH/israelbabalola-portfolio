import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import israelAsset from "@/assets/israel.png.asset.json";

const SITE_URL = "https://babalola-folio.lovable.app/";
const WHATSAPP = "https://wa.me/2349047254866";
const CV_LINK =
  "https://drive.google.com/file/d/1ERDqrB_EDoM_Feq1ZIgv4gAnw_tIft6n/view?usp=drivesdk";
const LINKEDIN = "https://www.linkedin.com/in/israel-babalola-o/";
const INSTAGRAM = "https://www.instagram.com/babalola.israel?igsh=Mjg4YnFtdzY1ampn";
const DRIBBBLE = "https://dribbble.com/babalolaisrael089";
const BEHANCE = "https://www.behance.net/israelbabalola0";

const OTHER_DESIGNS: { id: string; caption: string }[] = [
  { id: "1EYbNhyd0T7cAW26XrTinPNrDidm0tz_L", caption: "Book reading campaign for MLA hub" },
  { id: "1bagmO7DjeIlRG-mKgJ2ff_6jKbM90Aab", caption: "Marketing design for Gold Clothiers" },
  { id: "1myjlH0aF1ESj2f0KIfUym40sWpcmpzrm", caption: "Church Flyer campaign for RCCG TLC Uyo" },
  { id: "173nsymGmzdFCt8WgvQIC2c7NhEwXZax7", caption: "Bible study Campaign design" },
  { id: "1jXLqqdAwbPXsBsjGgH5Z0jWxxGAAXjCP", caption: "Legal Baby's Carousel Design 1" },
  { id: "1rOS5TMzjkYlHlHmZmSHCqEfRfVQ7nFB7", caption: "Legal Baby's Carousel Design 2" },
  { id: "1vBc0GnQje7y_TKMOvHIK9M37IUSpcIrf", caption: "Legal Baby's Carousel Design 3" },
  { id: "1P3tTlzl6p3ez5CrhnHF8n7xKvRgbp2u3", caption: "Legal Baby's Carousel Design 4" },
  { id: "1UBR0gjogAhXtSEsjBiAClk7iQBSU9MSa", caption: "Legal Baby's Carousel Design 5" },
  { id: "1UNg4m7v07yY5iQ-fc7W_TbbNd7Gs6tnB", caption: "Legal Baby's Carousel Design 6" },
  { id: "1XTgRZXIxE8WZcBA-K5LM7CdyaQAAHm-0", caption: "Legal Baby's flyer Design" },
  { id: "1maGYN_8RQYP1vWONIRYK3ZFZFyqew3-E", caption: "Legal Baby's New Month Flyer" },

  { id: "1UpYhghvSQYTtWSOBEoxpoI1fPlbhO4om", caption: "Larmda's marketing design" },
  { id: "1PE_NsoPOFTm3m8kJfdNyRtlQ52gwy_cB", caption: "Legal Baby new month design" },
  { id: "1PsaqlcrOTRpZ7hDV7GJRqqv5kt3No1Yh", caption: "Larmda's campaign design" },
  { id: "1m5h92E_OojLelQemlwCISfWvqAYCqJuH", caption: "Gloria's LinkedIn followers flyer design" },
];

const CERTIFICATIONS: { id: string; title: string }[] = [
  { id: "126QSTtizvfAHblcxcD-brXAhVFlGunNb", title: "Product Design (UI/UX) - TechCrush Africa" },
  {
    id: "1B4xz1-M5rq2SumMLhgHWaLBQObhc2sjH",
    title: "User Experience Design Fundamentals - IBM SkillsBuild",
  },
];

const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Israel Babalola",
  jobTitle: "UI/UX and Graphic Designer",
  url: "https://babalola-folio.lovable.app",
  email: "babalolaisrael089@gmail.com",
  telephone: "+2349047254866",
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  sameAs: [
    "https://www.linkedin.com/in/israel-babalola-o/",
    "https://www.instagram.com/babalola.israel",
    "https://dribbble.com/babalolaisrael089",
    "https://www.behance.net/israelbabalola0",
  ],
  knowsAbout: [
    "UI/UX Design",
    "Graphic Design",
    "Brand Identity",
    "Product Design",
    "Figma",
    "Design Systems",
    "Packaging Design",
    "Social Media Design",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Product Design (UI/UX Design)",
      credentialCategory: "Certificate",
      recognizedBy: { "@type": "Organization", name: "TechCrush Africa" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "User Experience Design Fundamentals",
      credentialCategory: "Certificate",
      recognizedBy: { "@type": "Organization", name: "IBM SkillsBuild" },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Israel Babalola - UI/UX & Graphic Designer | Lagos, Nigeria | Remote" },
      {
        name: "description",
        content:
          "Israel Babalola is a UI/UX and graphic designer based in Lagos, Nigeria. 6 years across product design, brand identity, and campaign visuals. Open to remote projects and full-time roles worldwide.",
      },
      {
        property: "og:title",
        content: "Israel Babalola - UI/UX & Graphic Designer | Lagos, Nigeria | Remote",
      },
      {
        property: "og:description",
        content:
          "6 years across product design, brand identity, and campaign visuals. Open to remote projects and full-time roles worldwide.",
      },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:title", content: "Israel Babalola - UI/UX & Graphic Designer" },
      {
        name: "twitter:description",
        content:
          "UI/UX and graphic designer based in Lagos, Nigeria. Open to remote projects worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(PERSON_LD) }],
  }),
  component: Index,
});

const COLORS = {
  bgLight: "#e8e8e8",
  bgDark: "#0a0a0a",
  cardDark: "#111111",
  coral: "#03BFFF",
  textLight: "#1a1a1a",
  textDark: "#ffffff",
  muted: "#888888",
  border: "#222222",
};

const driveImg = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;
const HERO_IMG = israelAsset.url;
const HERO_ALT = "Israel Babalola - UI/UX and Graphic Designer based in Lagos, Nigeria";

const PROJECTS = [
  {
    img: driveImg("1YzQ4gI-5woFkzCHon5nJ9WcoSf_z9HzQ"),
    link: "https://www.figma.com/proto/WeOE9kq0gMQu987UJMPU2k/My-Test-File?node-id=669-1528&t=rMOAS2elBugjvVBy-1&scaling=min-zoom&content-scaling=fixed&page-id=525%3A2",
    year: "(2026)",
    title: "HiredeyGo. Recruitment Platform",
    alt: "UI/UX design for HiredeyGo recruitment platform mobile app and dashboard",
    paragraphs: [
      "HiredeyGo came to me as a pre-launch recruitment platform with a genuinely complex problem: two completely different user types - job seekers and recruiters - sharing the same product but needing it to do opposite things.",
      "I started with user research and ran usability testing with 8 participants to understand where decisions were getting made and where friction was building up. From there I mapped both flows and designed 20+ screens across the mobile app and admin dashboard.",
      "Everything was built in Figma and handed off with annotated, developer-ready specs. I stayed in close contact with the front-end and mobile developers throughout to make sure nothing got lost between design and build.",
    ],
    tags: ["UI/UX Design", "Mobile App", "Dashboard"],
  },
  {
    img: driveImg("1gGKawVL3wOnxIcEjC6Y_J0713fa0g09s"),
    link: "https://www.behance.net/gallery/243459077/KareWell-Health-NGO-Website-UI-design",
    year: "(2026)",
    title: "KareWell. Healthcare NGO Website",
    alt: "Healthcare website UI design for KareWell NGO",
    paragraphs: [
      "KareWell is a non-profit healthcare organization. The brief was straightforward but the stakes were real: the people coming to this site often need care urgently, and a confusing or slow-loading page costs more than a bad UX score.",
      "I designed a mobile-responsive website with accessibility as a hard constraint from day one - not something retrofitted at the end. Clean visual hierarchy, honest information architecture, and a structure that puts the most critical content where people look first.",
      "Delivered wireframes, high-fidelity mockups, and an interactive prototype for stakeholder review and sign-off.",
    ],
    tags: ["Website Design", "Healthcare", "Accessibility"],
  },
  {
    img: driveImg("18cZU8eMIH01rWgJChapM3U0f2mQ5VkUh"),
    link: "https://drive.google.com/uc?export=view&id=1PsGVD2ZVeLM5xw0CcnY1-GAYXDmi7bnm",
    year: "(2025)",
    title: "Zorevia. Brand Identity System",
    alt: "Brand identity system design for Zorevia",
    paragraphs: [
      "Zorevia needed a brand identity that could hold up at scale - consistent across a pitch to investors, a post on social media, and a corporate document handed across a table.",
      "I built it from scratch: custom logo, full 8-page brand guideline, color system, and type hierarchy. The work covered every major touchpoint so that whoever uses the brand months or years from now has a clear reference point and does not have to guess.",
    ],
    tags: ["Branding", "Logo Design", "Guidelines"],
  },
  {
    img: driveImg("1ykAT7Jvr8y3n4h-9an-HhHst_BCEtDXU"),
    link: "https://drive.google.com/drive/folders/12u9jCuGPjw1RJihcx7GQ5qtd0ypbyNti?usp=sharing",
    year: "(2025)",
    title: "Sage Capita. Real Estate Visual System",
    alt: "Social media visual system for Sage Capita real estate company",
    paragraphs: [
      "Sage Capita is a real estate investment company that was producing social content without a visual system to keep it coherent. Output was inconsistent and turnaround was slow.",
      "I built a scalable template library for all their social channels and led design across every platform. Within three months, audience engagement went up 30 percent. Over the same period, conversion-focused investor materials contributed to a 25 percent lift in sales activity.",
      "The templates are still in use, which means the work keeps compounding instead of expiring with one campaign cycle.",
    ],
    tags: ["Social Media", "Brand System", "Marketing"],
  },
  {
    img: "",
    link: "",
    year: "(2026)",
    title: "Remi Botanicals. West African Hot Sauce Brand",
    alt: "Packaging and brand identity design for Remi Botanicals West African hot sauce concept brand",
    comingSoon: true,
    paragraphs: [
      "Remi Botanicals is a concept brand I designed to explore West African flavors in the premium hot sauce category - a space that has grown fast internationally but rarely centers African origin stories at the product level.",
      "The work covers the full brand identity: name, logo, color system, label design, and packaging mockups. The design brief was to create something that could sit on a shelf at a specialty grocer in London or New York and immediately communicate both quality and origin.",
      "This is a spec project, built to the same standard as client work - full design brief, brand rationale, and production-ready files.",
    ],
    tags: ["Packaging Design", "Brand Identity", "CPG"],
  },
];

const SERVICES = [
  {
    n: "01",
    title: "Brand Identity",
    desc: "I build visual systems from the ground up. Logo, color, typography, brand guidelines - designed to stay consistent whether someone sees your brand on a pitch deck, an Instagram story, or a product screen.",
  },
  {
    n: "02",
    title: "UI/UX and Product Design",
    desc: "From early wireframes to Figma prototypes ready for handoff, I design interfaces around how people actually behave. I do the user research, map the flows, run usability tests, and stay involved until the product ships.",
  },
  {
    n: "03",
    title: "Social Media and Campaign Design",
    desc: "Campaign visuals that perform. At two companies, the work drove measurable jumps in engagement and reach. I build reusable template libraries so your team can keep output consistent without starting from scratch on every post.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Israel's work transformed how we show up visually. The templates he built are still running our social channels months later, and the engagement numbers speak for themselves.",
    name: "Abraham Akpe",
    role: "Team Lead, Sage Capita",
    avatarId: "1zHdo3u6TeEpSDaUk5obiPFQOZzlvEegs",
  },
  {
    quote:
      "He took what felt like a vague brand idea and turned it into a complete, professional identity system. It looks exactly like what we needed before we even knew what we needed.",
    name: "Shegun Sikiru",
    role: "Founder, Zorevia",
    avatarId: "165CcrNmzNj1bXQ7GyWDNDiP-iiVyXgxJ",
  },
  {
    quote:
      "Before the bootcamp I had no idea what a design system even was. After it I landed an internship. Israel teaches in a way that makes the industry feel accessible, not intimidating.",
    name: "David Felix",
    role: "Bootcamp Graduate",
    avatarId: "1cPGh-3XILdXGsM8N2Oi85XO18G52j5WN",
  },
];

const FAQS = [
  {
    q: "What kind of design work do you take on?",
    a: "UI/UX design, brand identity, product design, and social media campaign visuals. Most projects involve some combination of two or more of these.",
  },
  {
    q: "Are you available for remote work?",
    a: "Yes. I work remotely with clients across Nigeria and internationally. My timezone is WAT (West Africa Time, UTC+1).",
  },
  {
    q: "How do you typically start a new project?",
    a: "With a call. I ask about the business problem, the audience, the timeline, and what success actually looks like. That shapes everything from the deliverable format to how much research is needed upfront.",
  },
  {
    q: "What tools do you use?",
    a: "Figma for UI/UX design and prototyping, Adobe Photoshop and Illustrator for brand and print work, and Framer for select web projects. I document everything and deliver organized Figma files with clear handoff specs.",
  },
  {
    q: "Do you work with startups or established companies?",
    a: "Both. My experience includes pre-launch startups (HiredeyGo), NGOs (KareWell), fintech companies (Vouchender), and growth-stage businesses (Sage Capita).",
  },
  {
    q: "How long does a typical project take?",
    a: "Brand identity projects usually run 2 to 4 weeks. UI/UX projects vary by scope but most fall between 3 and 8 weeks. Campaign and social design work can move faster depending on volume.",
  },
  {
    q: "Can I see more work not shown in the portfolio?",
    a: "Yes. Send me a WhatsApp message or email and I will share what is relevant to your needs.",
  },
  {
    q: "Do you teach or mentor designers?",
    a: "I run a free graphic design bootcamp in Nigeria. Over 160 students have come through the program and more than a dozen have secured internships in design-related roles.",
  },
];

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("[data-cursor='view']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return (
    <div
      ref={dotRef}
      className="hidden md:flex items-center justify-center fixed top-0 left-0 rounded-full pointer-events-none"
      style={{
        width: hovering ? 80 : 8,
        height: hovering ? 80 : 8,
        background: "#fff",
        mixBlendMode: "difference",
        zIndex: 9999,
        transition: "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1)",
        color: "#000",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      {hovering ? "View" : ""}
    </div>
  );
}

function Nav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#other-designs", label: "Other Designs" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#certifications", label: "Certifications" },
    { href: "#intro", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-6 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(232,232,232,0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 500, color: "#333" }}>
          Israel Babalola - Design and Strategy
        </span>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          className="flex flex-col items-center justify-center gap-[5px]"
          style={{
            width: 40,
            height: 40,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ width: 22, height: 2, background: "#1a1a1a", display: "block" }} />
          <span style={{ width: 22, height: 2, background: "#1a1a1a", display: "block" }} />
          <span style={{ width: 22, height: 2, background: "#1a1a1a", display: "block" }} />
        </button>
      </nav>
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 70,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />
      <aside
        role="dialog"
        aria-label="Navigation"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(85vw, 380px)",
          background: COLORS.bgDark,
          color: "#fff",
          zIndex: 80,
          padding: "32px 28px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          boxShadow: "-20px 0 60px rgba(0,0,0,0.3)",
        }}
      >
        <div className="flex items-center justify-between">
          <span style={{ fontSize: 12, color: COLORS.muted, letterSpacing: "0.05em" }}>
            // Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              width: 36,
              height: 36,
              background: "transparent",
              border: "1px solid #333",
              borderRadius: "50%",
              color: "#fff",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-1 mt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "14px 0",
                fontSize: 22,
                fontWeight: 500,
                color: "#fff",
                borderBottom: "1px solid #222",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

function MarqueeName({
  text,
  behind = false,
}: {
  text: string;
  light?: boolean;
  behind?: boolean;
}) {
  const seg = `${text} ${text} ${text} ${text} `;
  return (
    <div
      className="absolute left-0 right-0 overflow-hidden pointer-events-none"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: behind ? 1 : 3,
        mixBlendMode: behind ? "normal" : "difference",
      }}
    >
      <div className="marquee-track flex whitespace-nowrap">
        <span
          style={{
            fontSize: "clamp(80px, 12vw, 150px)",
            fontWeight: 700,
            color: behind ? "#1a1a1a" : "#ffffff",
            letterSpacing: "-0.02em",
            paddingRight: "2rem",
          }}
        >
          {seg}
        </span>
        <span
          aria-hidden
          style={{
            fontSize: "clamp(80px, 12vw, 150px)",
            fontWeight: 700,
            color: behind ? "#1a1a1a" : "#ffffff",
            letterSpacing: "-0.02em",
            paddingRight: "2rem",
          }}
        >
          {seg}
        </span>
      </div>
    </div>
  );
}

function SocialIcons({ color = "#666" }: { color?: string }) {
  return (
    <div className="flex flex-col gap-3" style={{ color }}>
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-black transition-colors"
        style={{ fontSize: 14 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.337v-8.49H5.667v8.49h2.672zM7.003 8.586a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.335 9.751v-4.65c0-2.475-1.34-3.626-3.127-3.626-1.44 0-2.085.793-2.445 1.35V9.847H10.09c.036.755 0 8.49 0 8.49h2.676v-4.74c0-.24.018-.48.087-.65.193-.48.63-.978 1.367-.978.963 0 1.35.735 1.35 1.812v4.556h2.768z" />
        </svg>
        LinkedIn
      </a>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-black transition-colors"
        style={{ fontSize: 14 }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        Instagram
      </a>
      <a
        href={DRIBBBLE}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-black transition-colors"
        style={{ fontSize: 14 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834c0-.015.002-.03.003-.045 3.592-.026 6.718-.448 9.531-1.281.266.533.526 1.069.777 1.609-3.481 1.03-6.201 3.149-8.115 6.377-1.432-1.719-2.296-3.927-2.296-6.338 0-.441.037-.874.1-1.322zm3.539 7.147c1.724-3.021 4.161-4.884 7.308-5.596.933 2.479 1.722 5.03 2.379 7.662-3.551 1.061-7.355.222-9.687-2.066zm11.728 1.338c-.68-2.552-1.445-5.006-2.328-7.364 1.825-.39 3.86-.356 6.116.1-.515 3.133-2.218 5.822-4.488 7.664 0-.133-.3-.2-.3-.4z" />
        </svg>
        Dribbble
      </a>
      <a
        href={BEHANCE}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-black transition-colors"
        style={{ fontSize: 14 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 1.95H15v.194c0 2.035 1.505 3.291 3.74 3.291 1.47 0 2.52-.686 2.959-1.4h2.536zM15 13.5h6.538c-.103-1.458-1.105-2.4-2.79-2.4-1.627 0-2.746.942-2.748 2.4zm-5.7-2.4H6v4.8h3.773c1.564 0 2.468-.938 2.468-2.4 0-1.6-.908-2.4-2.941-2.4zM6 7h4.136c1.9 0 2.771 1.014 2.771 2.4 0 1.4-.87 2.4-2.771 2.4H6V7z" />
        </svg>
        Behance
      </a>
    </div>
  );
}

function HeroCTAs({ darkBg = false }: { darkBg?: boolean }) {
  const primary: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 22px",
    borderRadius: 100,
    background: COLORS.coral,
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    border: `1px solid ${COLORS.coral}`,
    transition: "all 0.3s ease",
  };
  const ghost: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 22px",
    borderRadius: 100,
    background: "#0a0a0a",
    color: COLORS.textDark,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid #0a0a0a",
    transition: "all 0.3s ease",
  };
  return (
    <div className="flex flex-wrap gap-3">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={primary}>
        Start a Project
      </a>
      <a href={CV_LINK} target="_blank" rel="noopener noreferrer" style={ghost}>
        Download CV
      </a>
    </div>
  );
}

function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!imgRef.current) return;
    const el = imgRef.current;
    const tween = gsap.to(el, {
      scale: 1.6,
      yPercent: -15,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 1.2 },
    });
    const floatTween = gsap.to(el, {
      y: "+=20",
      duration: 2.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      floatTween.kill();
    };
  }, []);
  return (
    <section
      className="relative w-full overflow-hidden min-h-[100svh]"
      style={{ background: COLORS.bgLight }}
    >
      <MarqueeName text="Israel Babalola." behind />
      <img
        ref={imgRef}
        src={HERO_IMG}
        alt={HERO_ALT}
        className="absolute h-[60vh] sm:h-[75vh] md:h-[85vh]"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "auto",
          maxWidth: "90vw",
          objectFit: "contain",
          filter: "grayscale(100%) contrast(1.1)",
          zIndex: 2,
        }}
      />
      <div
        className="absolute right-[5vw] bottom-[6%] md:bottom-[12%] max-w-[90vw]"
        style={{ zIndex: 3, textAlign: "right" }}
      >
        <div
          style={{
            fontSize: "clamp(12px, 1.6vw, 18px)",
            fontWeight: 500,
            color: "#1a1a1a",
            lineHeight: 1.3,
          }}
        >
          UI/UX · Brand · Product · Lagos, Nigeria · Open to Remote
        </div>
        <div
          className="mt-2 flex items-center justify-end gap-2"
          style={{ fontSize: 12, color: "#2f7d32" }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#3fae45",
              display: "inline-block",
            }}
          />
          <span>Open to new projects</span>
        </div>
        <div className="mt-4 flex justify-end">
          <HeroCTAs />
        </div>
      </div>
      <div className="absolute left-[5vw] bottom-[6%] md:bottom-[12%]" style={{ zIndex: 3 }}>
        <SocialIcons />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden px-[5vw] py-20 md:py-[120px]"
      style={{ background: COLORS.bgDark }}
    >
      <span
        style={{
          position: "absolute",
          top: 40,
          left: "5vw",
          color: COLORS.coral,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        // Intro
      </span>
      <h2
        className="reveal"
        style={{
          fontSize: "clamp(28px, 4.5vw, 56px)",
          fontWeight: 600,
          color: "#fff",
          lineHeight: 1.15,
          maxWidth: 1000,
        }}
      >
        I've been doing this for <span style={{ color: COLORS.coral }}>6 years</span>, across UI/UX,
        product design, and brand identity, and the thread running through all of it is the same:
        design that actually does something.
      </h2>
      <div className="reveal" style={{ marginTop: 40, maxWidth: 620, marginLeft: "auto" }}>
        <p style={{ fontSize: 16, color: COLORS.muted, lineHeight: 1.7 }}>
          I built a 20-screen recruitment platform for HiredeyGo from research to developer handoff.
          I redesigned a healthcare website for an NGO so users could find care faster. At Sage
          Capita, a visual system I put together drove a 30 percent jump in audience engagement in
          three months and contributed to a 25 percent lift in sales. At Vouchender, the campaign
          work reached 150 percent more people.
        </p>
        <p style={{ fontSize: 16, color: COLORS.muted, lineHeight: 1.7, marginTop: 20 }}>
          Beyond client work, I run a free graphic design bootcamp in Nigeria. Over 160 students
          have come through it and more than a dozen have landed internships in design.
        </p>
        <p style={{ fontSize: 16, color: "#bbb", lineHeight: 1.7, marginTop: 20 }}>
          If you need someone who moves fast, thinks in systems, and ships work that holds up under
          real conditions, let's talk.
        </p>
        <a
          href="#projects"
          className="inline-block reveal"
          style={{
            marginTop: 40,
            padding: "16px 32px",
            border: "1px solid #333",
            borderRadius: 100,
            color: "#fff",
            fontSize: 14,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS.coral;
            e.currentTarget.style.borderColor = COLORS.coral;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "#333";
          }}
        >
          See My Work →
        </a>
        <div style={{ marginTop: 32, fontSize: 12, color: "#555" }}>Last updated: June 2026</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      className="relative overflow-hidden px-[5vw] pt-16 pb-20 md:pt-20 md:pb-[120px]"
      style={{ background: COLORS.bgDark }}
    >
      <span
        style={{
          position: "absolute",
          top: 40,
          left: "5vw",
          color: COLORS.coral,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        // Services
      </span>
      <div className="mt-20 flex flex-col gap-16 md:gap-28">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            className="reveal grid gap-6 md:gap-16 grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          >
            <div
              style={{
                fontSize: "clamp(120px, 14vw, 200px)",
                fontWeight: 100,
                color: "transparent",
                WebkitTextStroke: "1px #444",
                lineHeight: 0.8,
              }}
            >
              {s.n}
            </div>
            <div>
              <h3
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: COLORS.muted,
                  maxWidth: 640,
                  marginTop: 16,
                  lineHeight: 1.7,
                }}
              >
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-[5vw] pt-16 pb-20 md:pt-20 md:pb-[120px]"
      style={{ background: COLORS.bgDark }}
    >
      <span
        style={{
          position: "absolute",
          top: 40,
          left: "5vw",
          color: COLORS.coral,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        // Projects
      </span>
      <div className="mt-20 flex flex-col gap-12 md:gap-20">
        {PROJECTS.map((p) => {
          const Media = p.comingSoon ? (
            <div
              className="relative overflow-hidden flex items-center justify-center min-h-[280px] md:min-h-[500px]"
              style={{ background: "#0d0d0d", borderRight: "1px solid #1f1f1f" }}
            >
              <div className="text-center px-6">
                <div
                  style={{
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Remi Botanicals
                </div>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 12,
                    color: COLORS.coral,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Coming Soon
                </div>
              </div>
            </div>
          ) : (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              className="relative overflow-hidden group block"
              style={{ background: "#1a1a1a" }}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 min-h-[280px] md:min-h-[500px]"
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(0,0,0,0.15)" }}
              >
                <div
                  className="rounded-full flex items-center justify-center font-medium"
                  style={{
                    width: 100,
                    height: 100,
                    background: COLORS.coral,
                    color: "#fff",
                    fontSize: 13,
                  }}
                >
                  View →
                </div>
              </div>
            </a>
          );
          return (
            <article
              key={p.title}
              className="reveal grid gap-0 overflow-hidden grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
              style={{ borderRadius: 16 }}
            >
              {Media}
              <div className="flex flex-col p-6 md:p-12" style={{ background: COLORS.cardDark }}>
                <div style={{ fontSize: 14, color: "#666", marginBottom: 16 }}>{p.year}</div>
                <h3
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  {p.title}
                </h3>
                <div style={{ marginTop: 20 }}>
                  {p.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: 15,
                        color: COLORS.muted,
                        lineHeight: 1.7,
                        marginTop: i === 0 ? 0 : 14,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div style={{ marginTop: "auto", paddingTop: 24, borderTop: "1px solid #222" }}>
                  {p.tags.map((t) => (
                    <div
                      key={t}
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid #222",
                        fontSize: 14,
                        color: "#aaa",
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function OtherDesigns() {
  return (
    <section
      id="other-designs"
      className="relative overflow-hidden"
      style={{
        background: COLORS.bgDark,
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <span
        style={{
          display: "block",
          color: COLORS.coral,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.05em",
          paddingLeft: "5vw",
          marginBottom: 8,
        }}
      >
        // Other Designs
      </span>
      <h2
        style={{
          paddingLeft: "5vw",
          color: "#fff",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 600,
          lineHeight: 1.1,
          marginBottom: 32,
        }}
      >
        Other Designs
      </h2>
      <div className="other-designs-viewport">
        <div className="other-designs-track">
          {[...OTHER_DESIGNS, ...OTHER_DESIGNS].map((d, i) => (
            <a
              className="other-designs-item"
              key={i}
              href={`https://drive.google.com/file/d/${d.id}/view?usp=drive_link`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              aria-label={d.caption}
            >
              <div className="other-designs-image">
                <img src={driveImg(d.id)} alt={d.caption} loading="lazy" />
              </div>
              <div className="other-designs-caption">{d.caption}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-[5vw] py-20 md:py-[120px]"
      style={{ background: COLORS.bgDark, borderTop: "1px solid #222" }}
    >
      <span
        style={{
          position: "absolute",
          top: 40,
          left: "5vw",
          color: COLORS.coral,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        // Certifications
      </span>
      <h2
        className="reveal"
        style={{
          marginTop: 40,
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 600,
          color: "#fff",
          lineHeight: 1.1,
        }}
      >
        Certifications
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {CERTIFICATIONS.map((c) => (
          <a
            key={c.id}
            href={`https://drive.google.com/file/d/${c.id}/view?usp=drive_link`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="view"
            className="reveal block overflow-hidden group"
            style={{ background: COLORS.cardDark, border: "1px solid #1f1f1f", borderRadius: 16 }}
          >
            <div style={{ background: "#0d0d0d", overflow: "hidden" }}>
              <img
                src={driveImg(c.id)}
                alt={c.title}
                loading="lazy"
                className="w-full transition-transform duration-700"
                style={{ display: "block", objectFit: "cover", maxHeight: 520, width: "100%" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            <div style={{ padding: "20px 24px", fontSize: 15, color: "#ddd", fontWeight: 500 }}>
              {c.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-[5vw] py-20 md:py-[120px]"
      style={{ background: COLORS.bgDark, borderTop: "1px solid #222" }}
    >
      <span
        style={{
          position: "absolute",
          top: 40,
          left: "5vw",
          color: COLORS.coral,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        // Testimonials
      </span>
      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="reveal flex flex-col p-8"
            style={{ background: COLORS.cardDark, border: "1px solid #1f1f1f", borderRadius: 16 }}
          >
            <div style={{ fontSize: 40, color: COLORS.coral, lineHeight: 0.8, fontWeight: 700 }}>
              "
            </div>
            <blockquote
              style={{
                marginTop: 12,
                fontSize: 16,
                color: "#ddd",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              {t.quote}
            </blockquote>
            <figcaption
              style={{
                marginTop: "auto",
                paddingTop: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <img
                src={driveImg(t.avatarId)}
                alt={`${t.name} - ${t.role}`}
                loading="lazy"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "1px solid #2a2a2a",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: 13, color: COLORS.muted, marginTop: 4 }}>{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function LogoMarquee() {
  const logos = ["HiredeyGo", "Sage Capita", "Vouchender", "KareWell", "Zorevia"];
  const set = [...logos, ...logos, ...logos];
  return (
    <section
      className="overflow-hidden"
      style={{ background: COLORS.bgDark, padding: "40px 0", borderTop: "1px solid #222" }}
    >
      <div className="marquee-track flex whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center" style={{ paddingRight: 0 }}>
            {set.map((l, i) => (
              <span
                key={`${k}-${i}`}
                style={{
                  margin: "0 40px",
                  color: "#888",
                  fontSize: 22,
                  fontWeight: 600,
                  opacity: 0.6,
                  letterSpacing: "-0.01em",
                }}
              >
                {l}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="relative overflow-hidden px-[5vw] py-20 md:py-[120px]"
      style={{ background: COLORS.bgDark, borderTop: "1px solid #222" }}
    >
      <span
        style={{
          position: "absolute",
          top: 40,
          left: "5vw",
          color: COLORS.coral,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        // FAQ
      </span>
      <h2
        className="reveal"
        style={{
          marginTop: 40,
          fontSize: "clamp(32px, 5vw, 64px)",
          fontWeight: 600,
          color: "#fff",
          lineHeight: 1.1,
        }}
      >
        Common questions
      </h2>
      <div className="mt-12 max-w-4xl">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: "1px solid #222" }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left"
                style={{
                  padding: "20px 0",
                  background: "transparent",
                  color: "#fff",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  fontWeight: 500,
                }}
                aria-expanded={isOpen}
              >
                <span>{f.q}</span>
                <span
                  style={{
                    color: COLORS.coral,
                    fontSize: 22,
                    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: isOpen ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <p
                  style={{
                    paddingBottom: 20,
                    fontSize: 15,
                    color: COLORS.muted,
                    lineHeight: 1.7,
                    maxWidth: 720,
                  }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 20px",
    borderRadius: 100,
    border: "1px solid #1a1a1a",
    color: "#1a1a1a",
    fontSize: 14,
    fontWeight: 500,
    background: "transparent",
    transition: "all 0.3s ease",
    textDecoration: "none",
  };
  const primaryStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 26px",
    borderRadius: 100,
    background: COLORS.coral,
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    textDecoration: "none",
    border: `1px solid ${COLORS.coral}`,
  };
  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = COLORS.coral;
    e.currentTarget.style.borderColor = COLORS.coral;
    e.currentTarget.style.color = "#fff";
  };
  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.borderColor = "#1a1a1a";
    e.currentTarget.style.color = "#1a1a1a";
  };
  return (
    <section
      id="contact"
      className="relative overflow-hidden flex flex-col items-center justify-center px-[5vw] py-20 md:py-[120px]"
      style={{ background: COLORS.bgLight, minHeight: "100vh" }}
    >
      <div className="text-center max-w-3xl" style={{ zIndex: 4 }}>
        <h2
          style={{
            fontSize: "clamp(40px, 7vw, 96px)",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Let's work together
        </h2>
        <p style={{ marginTop: 20, fontSize: 16, color: "#444", lineHeight: 1.6 }}>
          I'm open to new projects and remote roles. A quick WhatsApp call is the fastest way to
          connect. I usually respond within 24 hours.
        </p>
        <div className="mt-6 flex justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={primaryStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.83 11.83 0 0 0 12.04 0C5.49 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.16-3.4-8.44z" />
            </svg>
            Start a WhatsApp Call
          </a>
        </div>
      </div>
      <div className="relative flex flex-col items-center mt-10" style={{ zIndex: 4 }}>
        <img
          src={HERO_IMG}
          alt={HERO_ALT}
          className="h-[40vh] sm:h-[50vh] md:h-[60vh]"
          style={{
            width: "auto",
            maxWidth: "80vw",
            objectFit: "contain",
            filter: "grayscale(100%) contrast(1.1)",
          }}
        />
        <div className="flex flex-wrap justify-center gap-3" style={{ marginTop: 10 }}>
          <a
            href="mailto:babalolaisrael089@gmail.com"
            style={btnStyle}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            aria-label="Send email"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span className="break-all">babalolaisrael089@gmail.com</span>
          </a>
          <a
            href="tel:+2349047254866"
            style={btnStyle}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            aria-label="Call phone"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +234 904 725 4866
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            aria-label="Chat on WhatsApp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.83 11.83 0 0 0 12.04 0C5.49 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.16-3.4-8.44z" />
            </svg>
            WhatsApp
          </a>
        </div>
        <div className="mt-4 flex flex-col items-center gap-2">
          <SocialIcons color="#333" />
          <div style={{ fontSize: 14, color: "#333" }}>Office: Lagos, Nigeria</div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer
      style={{
        background: COLORS.bgDark,
        color: "#aaa",
        padding: "32px 5vw",
        borderTop: "1px solid #222",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
        <div style={{ fontSize: 13 }}>© 2026 Israel Babalola. All rights reserved.</div>
        <div style={{ fontSize: 13, color: "#888" }}>
          UI/UX & Graphic Designer · Lagos, Nigeria · Available for remote work worldwide.
        </div>
        <div
          className="flex flex-wrap justify-center md:justify-end gap-4"
          style={{ fontSize: 13 }}
        >
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#intro" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
      <div style={{ marginTop: 16, fontSize: 11, color: "#444", textAlign: "right" }}>
        Last updated: June 2026
      </div>
    </footer>
  );
}

function BackToTop({
  lenis,
  menuOpen,
}: {
  lenis: React.MutableRefObject<Lenis | null>;
  menuOpen: boolean;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const visible = show && !menuOpen;
  return (
    <button
      onClick={() => lenis.current?.scrollTo(0, { duration: 1.2 })}
      className="fixed rounded-full flex items-center justify-center transition-all"
      style={{
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        background: "#fff",
        border: "1px solid #ddd",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        zIndex: 60,
        color: "#1a1a1a",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#1a1a1a";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "#1a1a1a";
      }}
      aria-label="Back to top"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}

function Index() {
  const lenisRef = useRef<Lenis | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
    });

    return () => {
      cancelAnimationFrame(id);
      ctx.revert();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <main style={{ background: COLORS.bgLight }}>
      <CustomCursor />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BackToTop lenis={lenisRef} menuOpen={menuOpen} />
      <Hero />
      <Intro />
      <Services />
      <Projects />
      <OtherDesigns />
      <Testimonials />
      <Certifications />
      <LogoMarquee />
      <FAQ />
      <Contact />
      <SiteFooter />
    </main>
  );
}
