import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Car,
  Cat,
  CheckCircle2,
  Clock,
  Dog,
  Heart,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Plane,
  Scissors,
  ShieldCheck,
  Star,
  Waves,
} from "lucide-react";

const animalPhotos = {
  dogRun: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
  cat: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80",
  grooming: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80",
  dogPortrait: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80",
  dogPool: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80",
  smallDog: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80",
  torontoSkyline: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1400&q=80",
  pearsonAirport: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
};

const concepts = [
  {
    id: "resort",
    label: "1. Premium Resort",
    headline: "Boutique pet hotel energy",
    description: "Calm, polished, upscale care for boarding, grooming, travel days, and peace of mind.",
    bestFor: "Premium trust + travel convenience",
  },
  {
    id: "playful",
    label: "2. Playful Photo",
    headline: "Big warmth, big pet personality",
    description: "Cheerful, accessible, photo-rich, and emotionally easy for first-time pet parents.",
    bestFor: "Friendly first impression + animal photos",
  },
  {
    id: "urban",
    label: "3. Friendly Toronto",
    headline: "Neighbourhood utility for busy owners",
    description: "Toronto-specific, practical, and warm, with clear paths for YYZ, Downtown, webcams, and quick booking.",
    bestFor: "Toronto convenience + clear actions",
  },
  {
    id: "original",
    label: "4. Original Direction",
    headline: "Closest to the current Park9 identity",
    description: "A safer brand evolution that modernizes Park9 without making it feel like a totally different company.",
    bestFor: "Brand continuity + cleaner UX",
  },
  {
    id: "simple",
    label: "5. Simple Clean",
    headline: "Less copy, clearer action",
    description: "A lighter, cleaner option: fewer sections, bigger actions, simple service blocks, visible booking, locations, reviews, and client login.",
    bestFor: "Fast decisions + simple client review",
  },
  {
    id: "colourpop",
    label: "6. Colourful Clean",
    headline: "Bright, polished, easy to use",
    description: "A colourful but elevated direction: soft pastel colour blocking, clean service choices, clear booking actions, and very little clutter.",
    bestFor: "Modern warmth + fastest decisions",
  },
];

const pageData = {
  "Dog Playcare": {
    title: "Dog Playcare",
    eyebrow: "Service",
    icon: PawPrint,
    photo: animalPhotos.dogRun,
    summary: "A structured day of supervised play, rest, enrichment, and care for social dogs who need exercise, routine, and safe interaction.",
    hero: "A better day for dogs who love to play.",
    sections: [
      ["What’s included", ["Supervised playgroups matched by size, energy, and temperament", "Rest breaks to prevent overstimulation", "Water, staff monitoring, and routine check-ins", "Optional grooming, pool, or shuttle add-ons"]],
      ["Best for", ["Friendly dogs who enjoy being around other dogs", "Pet parents who need reliable weekday care", "Dogs who benefit from exercise, routine, and stimulation"]],
      ["First visit", ["New dogs complete onboarding before joining playgroups", "Vaccination records and behaviour notes are reviewed in advance", "The team recommends the right playgroup or care plan after assessment"]],
    ],
    faqs: ["Do dogs get rest time?", "Can I watch on webcam?", "Can grooming be added to a playcare day?"],
  },
  "Dog Boarding": {
    title: "Dog Boarding",
    eyebrow: "Service",
    icon: Dog,
    photo: animalPhotos.dogPortrait,
    summary: "Comfortable overnight care for dogs, with feeding routines, daily activity, staff attention, and convenient add-ons before pickup.",
    hero: "Overnight care that feels calm, safe, and personal.",
    sections: [
      ["What’s included", ["Overnight accommodation with daily care routines", "Daytime activity based on temperament and service plan", "Feeding according to owner instructions", "Medication notes and special-care instructions when needed"]],
      ["Great for", ["Vacations and business travel", "Pearson-area drop-off before flights", "Dogs who benefit from activity during boarding stays"]],
      ["Before arrival", ["Bring food, medication, and clear instructions", "Upload vaccine records before check-in", "Add grooming before pickup for a fresh trip home"]],
    ],
    faqs: ["What should I pack?", "Can siblings stay together?", "Can I add grooming before pickup?"],
  },
  "Cat Boarding": {
    title: "Cat Boarding",
    eyebrow: "Service",
    icon: Cat,
    photo: animalPhotos.cat,
    summary: "Quiet, attentive boarding for cats, with calm spaces, feeding routines, litter care, and gentle daily monitoring.",
    hero: "A calmer stay for cats who need quiet care.",
    sections: [
      ["Comfort-first care", ["Quiet spaces away from high-energy dog areas", "Consistent feeding and litter routines", "Gentle staff check-ins", "Medication and special-care notes when applicable"]],
      ["Designed for cats", ["Calmer photography and copy", "Clear separation from dog daycare language", "Transparent guidance on where cats stay and how they are monitored"]],
      ["Before boarding", ["Bring familiar food and written instructions", "Confirm vaccine requirements", "Share behaviour notes, hiding tendencies, and handling preferences"]],
    ],
    faqs: ["Are cats kept separate from dogs?", "Can I bring my cat’s own food?", "How are nervous cats handled?"],
  },
  Grooming: {
    title: "Grooming",
    eyebrow: "Service",
    icon: Scissors,
    photo: animalPhotos.grooming,
    summary: "Professional grooming care for baths, brush-outs, trims, nail care, coat maintenance, and fresh pickup after daycare or boarding.",
    hero: "Clean, fresh, and handled with care.",
    sections: [
      ["Grooming services", ["Bath and brush", "Full groom", "Tidy trim", "Nail trim", "De-shedding and coat-specific care"]],
      ["Easy add-ons", ["Add grooming to daycare", "Book grooming before boarding pickup", "Choose coat-specific services when needed"]],
      ["Booking notes", ["Pricing can vary by coat, size, condition, and service type", "Matted coats may require special handling", "First-time clients can start with a consultation"]],
    ],
    faqs: ["How long does grooming take?", "Can grooming be added to boarding?", "Do prices vary by dog size?"],
  },
  "Pool Rental": {
    title: "Pool Rental",
    eyebrow: "Service",
    icon: Waves,
    photo: animalPhotos.dogPool,
    summary: "Private swim time for dogs who need exercise, enrichment, confidence building, or a fun way to burn energy.",
    hero: "Private swim time for happier, tired-out dogs.",
    sections: [
      ["Great for", ["High-energy dogs who need low-impact exercise", "Dogs who love water and need enrichment", "Dogs building confidence in and around water"]],
      ["How it works", ["Book a private pool session", "Follow safety rules and timing guidelines", "Pair with grooming after a swim when available"]],
      ["Add-ons", ["Pair with playcare", "Pair with grooming after swim", "Use packages when available"]],
    ],
    faqs: ["Is the pool private?", "Do dogs need to know how to swim?", "Can I book pool plus grooming?"],
  },
  Shuttle: {
    title: "Shuttle",
    eyebrow: "Service",
    icon: Car,
    photo: animalPhotos.smallDog,
    summary: "Convenient pickup and drop-off service designed to make daycare, grooming, boarding, and busy Toronto routines easier.",
    hero: "Pet care that fits a busy Toronto day.",
    sections: [
      ["What to know", ["Pickup and drop-off zones are confirmed before booking", "Shuttle timing is arranged in advance", "Service availability may vary by location and schedule", "Shuttle can support daycare, grooming, or boarding routines"]],
      ["Why it helps", ["Removes friction for busy clients", "Supports downtown commutes and travel days", "Makes Park9 feel like a full-service pet care system"]],
      ["Booking details", ["Confirm service area", "Share pickup instructions", "Provide building or contact notes if needed"]],
    ],
    faqs: ["What areas does the shuttle serve?", "Can shuttle be used for grooming only?", "What happens if I miss the pickup window?"],
  },
  Webcams: {
    title: "Live Webcams",
    eyebrow: "Trust feature",
    icon: Camera,
    photo: animalPhotos.dogRun,
    summary: "Live webcam access for returning clients who want peace of mind while their pets are staying or playing at Park9.",
    hero: "Trust you can actually see.",
    sections: [
      ["Camera areas", ["Playrooms", "Lounges", "Pool or activity areas", "Location-specific access"]],
      ["Access", ["Returning clients log in", "New clients learn how webcam access works", "Camera availability may vary by area and schedule"]],
      ["Peace of mind", ["Check in during the day", "See your pet’s environment", "Feel connected while away"]],
    ],
    faqs: ["Who can access webcams?", "Are cameras live all day?", "Are all areas visible?"],
  },
  "Pearson YYZ": {
    title: "Pearson YYZ Location",
    eyebrow: "Location",
    icon: Plane,
    photo: animalPhotos.pearsonAirport,
    summary: "Airport-adjacent pet care for boarding, grooming, travel-day drop-off, and easy check-in near Pearson YYZ.",
    hero: "Built for travel days and longer stays.",
    sections: [
      ["Best for", ["Boarding before flights", "Longer stays", "Grooming before pickup", "Airport-area convenience"]],
      ["Location details", ["Easy travel-day drop-off", "Boarding-focused convenience", "Clear check-in and pickup instructions"]],
      ["Popular services", ["Dog boarding", "Dog playcare", "Grooming", "Shuttle support when available"]],
    ],
    faqs: ["How close is it to Pearson?", "Can I drop off before a flight?", "Can my dog be groomed before pickup?"],
  },
  "Downtown Toronto": {
    title: "Downtown Toronto Location",
    eyebrow: "Location",
    icon: MapPin,
    photo: animalPhotos.torontoSkyline,
    summary: "Convenient downtown pet care for daycare, grooming, recurring bookings, and busy Toronto pet parents.",
    hero: "City pet care for real Toronto routines.",
    sections: [
      ["Best for", ["Daycare during work hours", "Downtown grooming", "Quick recurring bookings", "Condo and commuter routines"]],
      ["Location details", ["Neighbourhood-friendly care", "Easy booking for returning clients", "Clear drop-off and pickup guidance"]],
      ["Popular services", ["Dog playcare", "Grooming", "Shuttle", "New-client onboarding"]],
    ],
    faqs: ["Is there parking nearby?", "Can I book recurring daycare?", "Is grooming available downtown?"],
  },
  Pricing: {
    title: "Pricing & Packages",
    eyebrow: "Support",
    icon: Clock,
    photo: animalPhotos.cat,
    summary: "Clear pricing and package information for daycare, boarding, grooming, pool rental, shuttle service, and add-ons.",
    hero: "Simple pricing, clear next steps.",
    sections: [
      ["Service categories", ["Dog playcare", "Dog boarding", "Cat boarding", "Grooming", "Pool rental", "Shuttle"]],
      ["Package options", ["Multi-day playcare packages", "Boarding add-ons", "Grooming upgrades", "Pool and shuttle options"]],
      ["Important notes", ["Rates can vary by service, location, season, coat, or pet needs", "Confirm final pricing when booking", "Peak periods may require advance planning"]],
    ],
    faqs: ["Are packages available?", "Are there add-on fees?", "Does grooming pricing vary?"],
  },
  Requirements: {
    title: "Vaccines & Requirements",
    eyebrow: "Support",
    icon: ShieldCheck,
    photo: animalPhotos.grooming,
    summary: "Everything new and returning clients need to know about vaccines, forms, temperament notes, and first-visit requirements.",
    hero: "Everything needed before the first visit.",
    sections: [
      ["Dogs", ["Required vaccines", "Temperament assessment", "Behaviour notes", "Medication instructions"]],
      ["Cats", ["Required vaccines", "Feeding instructions", "Litter and medication notes", "Handling preferences"]],
      ["Before booking", ["Create or update your pet profile", "Upload required records", "Share care notes with the team"]],
    ],
    faqs: ["What vaccines are required?", "Do new dogs need an assessment?", "What if my pet needs medication?"],
  },
  About: {
    title: "About Park9",
    eyebrow: "Trust",
    icon: Heart,
    photo: animalPhotos.dogRun,
    summary: "Meet the Park9 team, learn about the care philosophy, and see why pet parents trust Park9 with their dogs and cats.",
    hero: "Pet care built on trust, routine, and real attention.",
    sections: [
      ["Care philosophy", ["Dogs and cats are treated as individuals", "Safety and routine guide every service", "Transparency matters for pet parents"]],
      ["Why Park9", ["Multiple service paths", "Live webcams", "Two Toronto-area locations", "Experienced team care"]],
      ["Proof of care", ["Client reviews", "Facility photos", "Staff knowledge", "Consistent communication"]],
    ],
    faqs: ["How long has Park9 been operating?", "Who cares for the pets?", "What makes Park9 different?"],
  },
  Contact: {
    title: "Contact & Booking",
    eyebrow: "Booking",
    icon: Phone,
    photo: animalPhotos.dogPortrait,
    summary: "One clear place to contact Park9, choose a location, start booking, or access returning-client tools.",
    hero: "Questions, booking, locations, and next steps.",
    sections: [
      ["Contact options", ["Call Park9", "Send a message", "Choose a location", "Start a booking request"]],
      ["Booking paths", ["Book daycare", "Book boarding", "Book grooming", "Ask about shuttle or pool rental"]],
      ["Locations", ["Pearson YYZ", "Downtown Toronto", "Returning-client login", "New-client onboarding"]],
    ],
    faqs: ["Which location should I contact?", "How do I book?", "Where do returning clients log in?"],
  },
  "New Clients": {
    title: "New Clients",
    eyebrow: "Start here",
    icon: CheckCircle2,
    photo: animalPhotos.smallDog,
    summary: "A simple first-time client path for creating a profile, submitting requirements, and booking a Meet & Greet.",
    hero: "Start with a simple Meet & Greet.",
    sections: [
      ["Step 1", ["Choose the service you need", "Select the most convenient location", "Create your pet profile"]],
      ["Step 2", ["Upload vaccine records", "Share care instructions", "Add behaviour and medication notes"]],
      ["Step 3", ["Book a Meet & Greet or first stay", "Receive guidance from the Park9 team", "Start with the right care plan"]],
    ],
    faqs: ["How do I start?", "What records do I need?", "Can I book before uploading vaccines?"],
  },
  "Client Login": {
    title: "Returning Client Login",
    eyebrow: "Returning clients",
    icon: Home,
    photo: animalPhotos.cat,
    summary: "Returning-client access for bookings, pet profile updates, webcam links, and account management.",
    hero: "Fast access for returning clients.",
    sections: [
      ["Quick links", ["Book a service", "Watch webcams", "Update pet profile", "Upload records"]],
      ["Account tools", ["Manage recurring visits", "Review service options", "Keep pet details current"]],
      ["Support", ["Contact the team", "Ask about requirements", "Choose a location"]],
    ],
    faqs: ["Where do I book again?", "Where are webcams?", "How do I update my pet info?"],
  },
};

const pages = Object.keys(pageData).map((id) => ({ id, ...pageData[id] }));
const services = pages.slice(0, 6);
const locationPages = pages.slice(7, 9);
const supportPages = pages.slice(9, 14);
const bookingPages = pages.slice(13, 15);
const allPageGroups = [
  ["Services", pages.slice(0, 7)],
  ["Locations", locationPages],
  ["Support", pages.slice(9, 13)],
  ["Booking", bookingPages],
];

const testimonials = [
  ["It is so important to know that our dogs are well cared for when we are away. Our dogs come back happy and healthy. Thank you Park9!!", "Riley"],
  ["Absolutely amazing place. It's the only place I would trust our 4 legged family member to.", "Juliette"],
  ["The webcams made all the difference. I could check in and see that my dog was relaxed and having fun.", "Jeff"],
  ["Our cat is usually nervous anywhere new, but the Park9 team made the whole stay feel calm and carefully managed.", "Sarah"],
  ["Drop-off before our flight was so easy. Park9 took one stressful part of travel completely off our plate.", "Dr. Moss"],
  ["The staff know our dog by name and understand his quirks. That kind of care is why we keep coming back.", "Dane"],
  ["The grooming team did a beautiful job and actually listened to what we wanted.", "Taylor"],
  ["The pool rental is genius. Our high-energy dog slept like a rock afterward.", "Morgan"],
  ["The new-client process was clear from start to finish. We knew exactly what to bring and expect.", "Avery"],
];

function runChecks() {
  console.assert(concepts.length === 6, "Expected six design options.");
  console.assert(services.length === 6, "Expected six core services.");
  console.assert(allPageGroups.flatMap((group) => group[1]).length === pages.length, "Every page should appear in the page directory.");
  console.assert(testimonials.length === 9 && testimonials.length % 3 === 0, "Testimonials should rotate in groups of three.");
  console.assert(pages.every((page) => page.sections.length > 0 && page.faqs.length > 0), "Every page needs content sections and FAQs.");
}
runChecks();

function FacebookIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M14.2 8.2V6.7c0-.7.5-.9.9-.9h2.1V2.2L14.3 2C11 2 9.2 4 9.2 6.4v1.8H6v3.9h3.2V22h4.1v-9.9h3.2l.6-3.9h-3.8Z" /></svg>;
}

function InstagramIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function LinkedInIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v14H.35V8Zm7.35 0h4.12v1.91h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.16 2.87 5.16 6.6V22h-4.3v-6.83c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V22H7.7V8Z" /></svg>;
}

function Logo({ variant = "original", light = false }) {
  const styles = {
    resort: {
      wrap: "bg-white/70 border border-[#eadfce] shadow-sm rounded-[1.25rem] px-4 py-3",
      par: light ? "text-[#f5efd4]" : "text-[#b7ad6b]",
      k9: light ? "text-[#f0c95a]" : "text-[#8b8d2d]",
      bar: "bg-[#c49a2c]",
      tag: light ? "border-white/40 text-white" : "border-[#b8aa82] text-[#4a4a4a]",
      font: "font-serif",
      mark: "rounded-full",
    },
    playful: {
      wrap: "bg-white border border-[#f4c84d] shadow-sm rounded-[1.25rem] px-4 py-3",
      par: "text-[#d89b1f]",
      k9: "text-[#173d39]",
      bar: "bg-[#d89b1f]",
      tag: "border-[#d89b1f] text-[#173d39]",
      font: "font-serif",
      mark: "rounded-full",
    },
    urban: {
      wrap: light ? "bg-white/10 border border-white/20 rounded-xl px-4 py-3" : "bg-[#dcefe8] border border-[#bad4ca] rounded-xl px-4 py-3",
      par: light ? "text-[#dcefe8]" : "text-[#6f9b8d]",
      k9: light ? "text-[#f0c95a]" : "text-[#183b36]",
      bar: "bg-[#f0c95a]",
      tag: light ? "border-white/35 text-white" : "border-[#78968e] text-[#183b36]",
      font: "font-sans",
      mark: "rounded-md",
    },
    original: {
      wrap: "px-1 py-1",
      par: light ? "text-[#eee6c5]" : "text-[#c9c57f]",
      k9: light ? "text-[#f0c95a]" : "text-[#9f9f34]",
      bar: "bg-[#9f9f34]",
      tag: light ? "border-white/40 text-white" : "border-[#4a4a4a] text-[#4a4a4a]",
      font: "font-serif",
      mark: "rounded-none",
    },
  };

  const s = styles[variant] || styles.original;

  return (
    <div className={`leading-none shrink-0 ${s.wrap}`}>
      <div className="w-[205px] flex flex-col items-center text-center">
        <div className={`${s.font} font-black lowercase tracking-[-0.095em] text-[52px] leading-[0.74] whitespace-nowrap text-center`}>
          <span className={s.par}>par</span>
          <span className={s.k9}>k9</span>
        </div>
        <div className={`mt-3 h-[5px] w-[44px] translate-x-[38px] ${s.bar} ${s.mark}`} />
        <div className={`mt-3 w-[155px] border-y py-2 text-[7.5px] uppercase tracking-[0.075em] font-medium whitespace-nowrap text-center ${s.tag}`}>
          <span className="font-black">Urban</span> Pet Playcare & Resorts
        </div>
      </div>
    </div>
  );
}

function SocialIcons({ dark = false }) {
  const cls = dark ? "bg-white/15 text-white hover:bg-white/25" : "bg-[#f5f0e6] text-[#173d39] hover:bg-[#f0c95a]";
  return (
    <div className="hidden lg:flex gap-2 items-center">
      <a href="https://www.facebook.com/park9dogs/" target="_blank" rel="noreferrer" aria-label="Facebook" className={`h-9 w-9 rounded-full inline-flex items-center justify-center ${cls}`}><FacebookIcon /></a>
      <a href="https://www.instagram.com/park9dogs/" target="_blank" rel="noreferrer" aria-label="Instagram" className={`h-9 w-9 rounded-full inline-flex items-center justify-center ${cls}`}><InstagramIcon /></a>
      <a href="https://www.linkedin.com/company/park9/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`h-9 w-9 rounded-full inline-flex items-center justify-center ${cls}`}><LinkedInIcon /></a>
    </div>
  );
}

function Tabs({ active, setActive, setPage }) {
  const choose = (id) => {
    setActive(id);
    setPage("home");
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur border border-black/10 shadow-2xl rounded-full p-2 flex gap-2 max-w-[94vw] overflow-x-auto">
      <button type="button" onClick={() => choose("selector")} className={`rounded-full px-4 py-2 text-xs md:text-sm font-black whitespace-nowrap ${active === "selector" ? "bg-[#173d39] text-white" : "text-[#173d39] hover:bg-black/5"}`}>
        Compare Options
      </button>
      {concepts.map((concept) => (
        <button key={concept.id} type="button" onClick={() => choose(concept.id)} className={`rounded-full px-4 py-2 text-xs md:text-sm font-black whitespace-nowrap ${active === concept.id ? "bg-[#173d39] text-white" : "text-[#173d39] hover:bg-black/5"}`}>
          {concept.label}
        </button>
      ))}
    </div>
  );
}

function DesignSelector({ setActive, setPage }) {
  const choose = (id) => {
    setActive(id);
    setPage("home");
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  return (
    <div className="min-h-screen bg-[#f7f1e4] text-[#173d39] pb-24">
      <header className="border-b border-black/10 bg-white/85 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-5">
          <Logo variant="original" />
          <div className="hidden md:flex items-center gap-2 text-sm font-black text-[#516966]">
            <span className="rounded-full bg-[#f0c95a] px-4 py-2">Client Review</span>
            <span className="rounded-full bg-[#edf5f1] px-4 py-2">6 complete directions</span>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-5 py-16 lg:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="uppercase tracking-[.28em] text-[#b8861b] font-black mb-5">Park9 redesign concepts</p>
            <h1 className="text-6xl lg:text-8xl font-black tracking-[-.07em] leading-[.86] mb-7">Six ways to make Park9 feel clearer, warmer, and easy to book.</h1>
            <p className="text-xl text-[#526762] leading-relaxed mb-8">Each design keeps the same Park9 essentials — playcare, boarding, grooming, shuttle, webcams, two locations, new-client onboarding, and returning-client access — but gives the brand a different first impression.</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {["New clients", "Returning clients", "Service shoppers"].map((item) => (
                <div key={item} className="rounded-2xl bg-white border border-black/10 p-4 shadow-sm">
                  <CheckCircle2 className="text-[#d6a133] mb-3" />
                  <p className="font-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-white p-5 border border-black/10 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <img src={animalPhotos.dogPortrait} alt="Dog at Park9" className="rounded-[2rem] h-64 w-full object-cover" />
              <img src={animalPhotos.cat} alt="Cat boarding" className="rounded-[2rem] h-64 w-full object-cover mt-10" />
              <img src={animalPhotos.dogRun} alt="Dogs playing" className="rounded-[2rem] h-64 w-full object-cover -mt-10" />
              <img src={animalPhotos.grooming} alt="Dog grooming" className="rounded-[2rem] h-64 w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 pb-20">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {concepts.map((concept) => (
              <button type="button" key={concept.id} onClick={() => choose(concept.id)} className="text-left rounded-[2rem] bg-white border border-black/10 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                <p className="text-sm uppercase tracking-[.2em] text-[#b8861b] font-black mb-4">{concept.label}</p>
                <h2 className="text-3xl font-black tracking-[-.04em] leading-tight mb-4">{concept.headline}</h2>
                <p className="text-[#526762] font-semibold leading-relaxed mb-6">{concept.description}</p>
                <div className="rounded-2xl bg-[#fbf8f1] p-4 mb-6">
                  <p className="text-xs uppercase tracking-[.18em] font-black text-[#8a9a96] mb-1">Best for</p>
                  <p className="font-black">{concept.bestFor}</p>
                </div>
                <span className="font-black inline-flex items-center gap-2">Open direction <ArrowRight size={16} /></span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function Header({ theme = "light", setPage, logoVariant = "original" }) {
  const dark = theme === "dark";
  const goHome = () => { setPage("home"); window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0); };
  const scrollHome = (id) => { setPage("home"); window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 0); };
  const pillClass = `${dark ? "bg-white/10 hover:bg-white/20" : "bg-[#f5f0e6] hover:bg-[#f0c95a]"} rounded-full px-4 py-2 transition whitespace-nowrap`;
  return (
    <header className={`${dark ? "bg-[#173d39] text-white" : "bg-white/90 text-[#173d39]"} sticky top-0 z-40 backdrop-blur border-b border-black/10`}>
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-4">
        <button type="button" onClick={goHome} aria-label="Park9 home"><Logo light={dark} variant={logoVariant} /></button>
        <nav className="hidden xl:flex ml-auto gap-2 font-black text-sm">
          <button type="button" onClick={() => scrollHome("all-pages")} className={pillClass}>Pages</button>
          <button type="button" onClick={() => scrollHome("services")} className={pillClass}>Services</button>
          <button type="button" onClick={() => setPage("Webcams")} className={pillClass}>Webcams</button>
          <button type="button" onClick={() => scrollHome("locations")} className={pillClass}>Locations</button>
          <button type="button" onClick={() => setPage("Pricing")} className={pillClass}>Pricing</button>
          <button type="button" onClick={() => setPage("Requirements")} className={pillClass}>Requirements</button>
          <button type="button" onClick={() => setPage("About")} className={pillClass}>About</button>
        </nav>
        <button type="button" onClick={() => setPage("Client Login")} className={`${dark ? "bg-white text-[#173d39]" : "bg-[#173d39] text-white"} ml-auto xl:ml-0 rounded-full px-4 py-2 font-black text-sm whitespace-nowrap`}>Client Login</button>
        <button type="button" onClick={() => setPage("New Clients")} className="hidden sm:inline-flex bg-[#f0c95a] text-[#173d39] rounded-full px-4 py-2 font-black text-sm whitespace-nowrap">New Clients</button>
        <SocialIcons dark={dark} />
      </div>
    </header>
  );
}

function Stars() {
  return <div className="flex gap-1 text-[#f0b93a]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}</div>;
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setIndex((current) => (current + 3) % testimonials.length), 10000); return () => window.clearInterval(timer); }, []);
  const active = [testimonials[index], testimonials[(index + 1) % testimonials.length], testimonials[(index + 2) % testimonials.length]];
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {active.map(([quote, name], slot) => <div key={slot} className="rounded-[1.5rem] bg-white p-5 min-h-[210px] border border-black/10 shadow-sm overflow-hidden"><AnimatePresence mode="wait" initial={false}><motion.div key={name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}><Stars /><p className="font-black text-lg leading-snug mt-3 mb-2">“{quote}”</p><p className="font-black text-[#65736f]">— {name}</p></motion.div></AnimatePresence></div>)}
    </div>
  );
}

function PrimaryButton({ children, onClick, light = false }) {
  return <button type="button" onClick={onClick} className={`${light ? "bg-white text-[#173d39]" : "bg-[#173d39] text-white"} rounded-full px-7 py-4 font-black inline-flex items-center gap-2`}>{children}<ArrowRight size={17} /></button>;
}

function ServiceGrid({ style = "cards", setPage }) {
  return (
    <div className={style === "urban" ? "grid md:grid-cols-3 gap-4" : "grid md:grid-cols-2 lg:grid-cols-3 gap-5"}>
      {services.map((service) => {
        const Icon = service.icon;
        return <button type="button" onClick={() => setPage(service.id)} key={service.id} className={style === "urban" ? "text-left p-7 rounded-[1.75rem] border border-[#d6e2dc] bg-white hover:bg-[#fff8dc] hover:-translate-y-1 transition shadow-sm" : "text-left rounded-[2rem] bg-white p-6 shadow-sm border border-black/10 hover:-translate-y-1 transition"}><Icon size={34} className="mb-5 text-[#173d39]" /><h3 className="text-2xl font-black mb-2">{service.title}</h3><p className="text-[#516966] font-semibold leading-relaxed mb-5">{service.summary}</p><span className="font-black inline-flex items-center gap-2">View page <ArrowRight size={16} /></span></button>;
      })}
    </div>
  );
}

function getFaqAnswer(question, pageTitle) {
  const lower = question.toLowerCase();

  if (lower.includes("webcam") || lower.includes("cameras")) {
    return "Returning clients can use webcam access to check in on available areas during the day. Camera availability can vary by location, room, schedule, and privacy rules.";
  }
  if (lower.includes("vaccine") || lower.includes("records") || lower.includes("requirements")) {
    return "Vaccination and care requirements should be submitted before a first visit. Park9 should confirm the current list for dogs and cats during booking.";
  }
  if (lower.includes("grooming") || lower.includes("groomed")) {
    return "Grooming can be positioned as an add-on to daycare or boarding when available. Final timing and pricing should be confirmed when booking.";
  }
  if (lower.includes("pack") || lower.includes("bring")) {
    return "Bring food, medication, written care notes, and anything Park9 requests for your pet’s stay. Keep instructions clear and labelled.";
  }
  if (lower.includes("siblings")) {
    return "Pets from the same household may be able to stay together depending on service type, space, temperament, and safety considerations.";
  }
  if (lower.includes("separate from dogs") || lower.includes("cats kept")) {
    return "Cat boarding should be presented as a calm, separate experience with quiet handling and clear routines, not as an afterthought to dog services.";
  }
  if (lower.includes("areas") || lower.includes("shuttle")) {
    return "Shuttle availability should be confirmed by location, timing, and service type. The final site should include the exact service area once Park9 confirms it.";
  }
  if (lower.includes("pricing") || lower.includes("fees") || lower.includes("packages") || lower.includes("vary")) {
    return "Pricing can vary by service, package, location, pet needs, coat condition, and add-ons. The pricing page should give clear starting points and direct clients to confirm final rates.";
  }
  if (lower.includes("parking") || lower.includes("close") || lower.includes("location")) {
    return "Location pages should include address, parking or drop-off details, hours, and the best services for each Park9 location.";
  }
  if (lower.includes("start") || lower.includes("book")) {
    return "New clients should start by choosing a service, creating a pet profile, submitting requirements, and booking a Meet & Greet or first visit.";
  }
  if (lower.includes("medication")) {
    return "Medication instructions should be submitted clearly before the visit, including dosage, timing, storage, and any special handling notes.";
  }

  return `${pageTitle} questions should be answered with clear booking guidance, current requirements, and a direct path to contact Park9 for anything specific to the pet.`;
}

function PageView({ page, setPage, activeConcept }) {
  const Icon = page.icon;
  const [openFaq, setOpenFaq] = useState(null);
  const relatedServices = services.filter((item) => item.id !== page.id).slice(0, 5);
  const isColourPop = activeConcept === "colourpop";
  const pageBg = isColourPop ? "bg-[#f5f1e8]" : "bg-[#fbf8f1]";
  const heroShell = isColourPop
    ? "rounded-[3rem] bg-gradient-to-br from-[#dcefe8] via-[#f5f1e8] to-[#e7ddf3] border border-[#b9cfc7] shadow-xl p-7 lg:p-10"
    : "";
  const detailCardClass = isColourPop
    ? "rounded-[2rem] bg-white p-7 border border-[#d8e2df] shadow-lg"
    : "rounded-[2rem] bg-[#fbf8f1] p-7 border border-black/10 shadow-sm";
  const questionPanelClass = isColourPop
    ? "rounded-[2.5rem] bg-[#244f49] text-white p-8 lg:p-10 border border-[#173d39] shadow-xl"
    : "rounded-[2.5rem] bg-[#173d39] text-white p-8 lg:p-10";

  return (
    <div className={`${pageBg} text-[#173d39] min-h-screen pb-24`}>
      <Header
        setPage={setPage}
        theme={activeConcept === "urban" ? "dark" : "light"}
        logoVariant={activeConcept === "colourpop" ? "playful" : activeConcept}
      />

      <main>
        <section className="max-w-7xl mx-auto px-5 py-10">
          <div className={heroShell}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button type="button" onClick={() => setPage("home")} className="rounded-full bg-white px-5 py-3 font-black border border-black/10 shadow-sm">← Home</button>
              <span className="rounded-full bg-[#f0c95a] px-5 py-3 font-black border border-black/10">{page.title}</span>
            </div>

            <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 items-center">
              <div>
                <p className="uppercase tracking-[.25em] text-[#b8861b] font-black mb-4">{page.eyebrow}</p>
                <h1 className="text-5xl lg:text-7xl font-black tracking-[-.055em] leading-[.9] mb-6">{page.hero}</h1>
                <p className="text-xl text-[#526762] leading-relaxed mb-5">{page.summary}</p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <PrimaryButton onClick={() => setPage("Contact")}>Book now</PrimaryButton>
                  <button type="button" onClick={() => setPage("Requirements")} className="rounded-full bg-white border border-black/10 px-6 py-3 font-black">Requirements</button>
                  <button type="button" onClick={() => setPage("Pricing")} className="rounded-full bg-[#f0c95a] px-6 py-3 font-black">Pricing</button>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-white p-5 shadow-xl border border-black/10">
                <img src={page.photo} alt={page.title} className="h-[420px] w-full object-cover rounded-[2rem] mb-6" />
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-[#f0c95a] flex items-center justify-center"><Icon /></div>
                  <div>
                    <h2 className="text-2xl font-black">{page.title}</h2>
                    <p className="text-[#526762] font-semibold">Service details, booking guidance, and care information.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 border-y border-black/10">
          <div className="max-w-7xl mx-auto px-5">
            <div className="mb-8">
              <p className="uppercase tracking-[.24em] text-[#b8861b] font-black mb-3">{page.title} details</p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-[-.04em]">Everything you need to know.</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {page.sections.map(([heading, items]) => (
                <div key={heading} className={detailCardClass}>
                  <h3 className="text-2xl font-black mb-5">{heading}</h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 font-semibold text-[#526762] leading-snug">
                        <CheckCircle2 className="text-[#d6a133] shrink-0" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div className={questionPanelClass}>
            <h2 className="text-4xl font-black mb-3">Common questions</h2>
            <p className="text-white/70 font-semibold mb-8">Tap a question for a quick answer, or contact Park9 for details specific to your pet.</p>
            <PrimaryButton light onClick={() => setPage("Contact")}>Ask Park9</PrimaryButton>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {page.faqs.map((faq) => {
              const isOpen = openFaq === faq;
              return (
                <button
                  key={faq}
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : faq)}
                  className="text-left rounded-2xl bg-white border border-black/10 p-5 shadow-sm hover:-translate-y-1 transition"
                >
                  <div className="font-black text-lg leading-tight mb-3">{faq}</div>
                  {isOpen ? (
                    <p className="text-sm font-semibold text-[#526762] leading-relaxed">{getFaqAnswer(faq, page.title)}</p>
                  ) : (
                    <p className="text-sm font-black text-[#b8861b]">Tap for answer</p>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
            <div>
              <p className="uppercase tracking-[.24em] text-[#b8861b] font-black mb-3">More services</p>
              <h2 className="text-4xl font-black tracking-[-.04em]">Explore another service.</h2>
            </div>
            <button type="button" onClick={() => setPage("home")} className="rounded-full bg-white border border-black/10 px-5 py-3 font-black">Back to all services</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {relatedServices.map((related) => {
              const RelatedIcon = related.icon;
              return (
                <button key={related.id} type="button" onClick={() => setPage(related.id)} className="text-left rounded-2xl bg-white p-5 border border-black/10 hover:-translate-y-1 transition shadow-sm">
                  <RelatedIcon className="mb-4 text-[#d6a133]" />
                  <h3 className="text-xl font-black mb-2">{related.title}</h3>
                  <p className="text-sm font-semibold text-[#526762]">View service →</p>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

function PageHub({ setPage }) {
  return (
    <section id="all-pages" className="max-w-7xl mx-auto px-5 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8"><div><p className="uppercase tracking-[.24em] text-[#b8861b] font-black mb-3">Site pages</p><h2 className="text-5xl font-black tracking-[-.04em]">Find the right Park9 service.</h2></div><p className="text-[#516966] font-semibold max-w-md">Choose a service, location, or client page to get the information you need.</p></div>
      <div className="space-y-8">{allPageGroups.map(([group, items]) => <div key={group}><h3 className="text-2xl font-black mb-4">{group}</h3><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{items.map((page) => { const Icon = page.icon; return <button type="button" key={page.id} onClick={() => setPage(page.id)} className="text-left rounded-2xl bg-white p-5 border border-black/10 shadow-sm hover:-translate-y-1 hover:bg-[#fff8dc] transition"><Icon className="mb-4 text-[#d6a133]" /><p className="text-xs uppercase tracking-[.18em] font-black text-[#8a9a96] mb-2">{page.eyebrow}</p><h4 className="text-xl font-black mb-2">{page.title}</h4><p className="text-sm font-semibold text-[#516966]">View page →</p></button>; })}</div></div>)}</div>
    </section>
  );
}

function StandardSections({ variant = "resort", setPage }) {
  const isUrban = variant === "urban";
  const isPlayful = variant === "playful";
  const darkBg = isUrban ? "bg-[#28544e]" : "bg-[#173d39]";
  const cardRound = isUrban ? "rounded-[1.75rem]" : "rounded-[2rem]";
  return (
    <>
      <section id="webcams" className={`${darkBg} text-white py-16`}><div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center"><div><Camera className="mb-5" /><h2 className="text-5xl font-black mb-5">Trust you can see.</h2><p className="text-white/75 text-lg leading-relaxed mb-6">Live webcams give new and returning pet parents confidence throughout the day.</p><PrimaryButton light onClick={() => setPage("Webcams")}>Watch webcams</PrimaryButton></div><div className="grid grid-cols-2 gap-4">{["Playroom", "Lounge", "Pool", "Nap"].map((cam) => <button type="button" onClick={() => setPage("Webcams")} key={cam} className="aspect-video rounded-3xl bg-white/10 p-4 flex items-end border border-white/10 hover:bg-white/15 transition text-left"><b>{cam} Cam</b></button>)}</div></div></section>
      <section id="locations" className="max-w-7xl mx-auto px-5 py-16"><div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8"><h2 className="text-5xl font-black tracking-[-.04em]">Two locations. One clear choice.</h2><p className="text-[#516966] font-semibold max-w-md">Choose the Park9 location that fits your day, your commute, and your pet’s care needs.</p></div><div className="grid md:grid-cols-2 gap-6">{locationPages.map((page) => { const Icon = page.icon; return <button type="button" key={page.id} onClick={() => setPage(page.id)} className={`${cardRound} text-left bg-white p-8 shadow-sm border border-black/10 hover:-translate-y-1 transition`}><Icon className="mb-5 text-[#d6a133]" /><h3 className="text-3xl font-black mb-2">{page.title}</h3><p className="font-semibold text-[#516966] leading-relaxed mb-5">{page.summary}</p><span className="font-black inline-flex items-center gap-2">View location <ArrowRight size={16} /></span></button>; })}</div></section>
      <section id="new-clients" className="max-w-7xl mx-auto px-5 py-10"><div className={`${cardRound} ${isPlayful ? "bg-[#ffef9a]" : "bg-white"} p-8 lg:p-10 shadow-sm border border-black/10 grid lg:grid-cols-[.8fr_1.2fr] gap-8`}><div><ShieldCheck className="mb-5 text-[#d6a133]" /><h2 className="text-4xl font-black mb-3">New clients</h2><p className="font-semibold text-[#516966] leading-relaxed">Start with a simple path: create your profile, submit requirements, and book your first visit.</p><button type="button" onClick={() => setPage("New Clients")} className="mt-5 rounded-full bg-[#173d39] text-white px-6 py-3 font-black">Start here</button></div><div className="grid md:grid-cols-3 gap-4">{["Book a Meet & Greet", "Complete your profile", "Upload requirements"].map((step, i) => <button type="button" onClick={() => setPage("New Clients")} key={step} className={`${cardRound} text-left bg-white/80 p-5 border border-black/10 hover:bg-white transition`}><div className="text-3xl font-black text-[#d6a133] mb-2">0{i + 1}</div><h3 className="font-black text-xl leading-tight">{step}</h3></button>)}</div></div></section>
      <section id="support" className="max-w-7xl mx-auto px-5 py-16"><h2 className="text-5xl font-black tracking-[-.04em] mb-8">Helpful information before you book.</h2><div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">{supportPages.map((page) => { const Icon = page.icon; return <button type="button" key={page.id} onClick={() => setPage(page.id)} className="text-left rounded-2xl bg-white p-5 border border-black/10 hover:-translate-y-1 transition shadow-sm"><Icon className="mb-4 text-[#d6a133]" /><h3 className="text-xl font-black mb-2">{page.title}</h3><p className="text-sm font-semibold text-[#516966]">View page →</p></button>; })}</div></section>
      <section id="client-login" className="max-w-7xl mx-auto px-5 py-10"><div className={`${cardRound} ${darkBg} text-white p-8 lg:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center`}><div><h2 className="text-4xl font-black mb-3">Returning client login</h2><p className="text-white/75 font-semibold">Manage bookings, update pet details, and access webcam links from one place.</p></div><PrimaryButton light onClick={() => setPage("Client Login")}>Login</PrimaryButton></div></section>
      <section id="reviews" className="max-w-7xl mx-auto px-5 py-16"><h2 className="text-5xl font-black mb-8">5-paw reviews</h2><Testimonials /></section>
      <section id="final-cta" className="max-w-7xl mx-auto px-5 py-16"><div className={`${cardRound} bg-[#f0c95a] p-8 lg:p-12 text-center`}><h2 className="text-5xl font-black tracking-[-.05em] mb-5">Ready to book a happier stay?</h2><p className="text-lg font-semibold text-[#3d504d] mb-7">Choose a service, pick a location, and start your Park9 visit.</p><div className="flex justify-center gap-3 flex-wrap"><button type="button" onClick={() => setPage("New Clients")} className="rounded-full bg-[#173d39] text-white px-7 py-4 font-black">New Clients</button><button type="button" onClick={() => setPage("Contact")} className="rounded-full bg-white px-7 py-4 font-black">Contact Park9</button></div></div></section>
    </>
  );
}

function Resort({ setPage }) {
  return <div id="top" className="bg-[#f7f1e4] text-[#173d39] pb-24"><Header setPage={setPage} logoVariant="resort" /><section className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center"><div><p className="font-black tracking-[.25em] text-[#a88125] uppercase mb-4">Boutique pet resort</p><h1 className="text-6xl lg:text-8xl font-black tracking-[-.07em] leading-[.86] mb-7">A calmer, more premium stay for dogs and cats.</h1><p className="text-xl text-[#526762] leading-relaxed mb-8">Boarding, playcare, grooming, pool rental, shuttle, cat boarding, and live webcams across YYZ and Downtown Toronto.</p><PrimaryButton onClick={() => setPage("New Clients")}>Book a Meet & Greet</PrimaryButton></div><div className="grid grid-cols-2 gap-4"><img src={animalPhotos.dogPortrait} alt="Happy dog portrait" className="rounded-[3rem] h-[520px] w-full object-cover col-span-1" /><div className="grid gap-4"><img src={animalPhotos.cat} alt="Cat boarding" className="rounded-[2rem] h-[250px] w-full object-cover" /><button type="button" onClick={() => setPage("Webcams")} className="text-left rounded-[2rem] bg-[#173d39] text-white p-7"><Camera className="mb-5" /><h3 className="text-3xl font-black">Live webcams for real peace of mind.</h3></button></div></div></section><section id="services" className="max-w-7xl mx-auto px-5 py-16"><h2 className="text-5xl font-black mb-8">Resort services</h2><ServiceGrid setPage={setPage} /></section><PageHub setPage={setPage} /><StandardSections variant="resort" setPage={setPage} /></div>;
}

function Playful({ setPage }) {
  return <div id="top" className="bg-[#fff8dc] text-[#183b36] pb-24"><Header setPage={setPage} logoVariant="playful" /><section className="max-w-7xl mx-auto px-5 py-14"><div className="rounded-[3rem] bg-[#ffd65a] p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center overflow-hidden"><div><p className="font-black uppercase tracking-[.22em] mb-4">Playcare, boarding & cat stays</p><h1 className="text-6xl lg:text-8xl font-black tracking-[-.06em] leading-[.88] mb-6">Happy pets. Easy days. Zero guesswork.</h1><p className="text-xl font-semibold max-w-xl mb-8">A brighter, friendlier Park9 built around real animal photos, simple choices, and fast booking.</p><PrimaryButton onClick={() => setPage("New Clients")}>Start here</PrimaryButton></div><div className="grid grid-cols-2 gap-4 rotate-1"><img src={animalPhotos.dogRun} alt="Dogs running together" className="rounded-[2.5rem] h-64 w-full object-cover" /><img src={animalPhotos.smallDog} alt="Small happy dog" className="rounded-[2.5rem] h-64 w-full object-cover mt-10" /><img src={animalPhotos.cat} alt="Cat" className="rounded-[2.5rem] h-64 w-full object-cover -mt-8" /><img src={animalPhotos.grooming} alt="Dog grooming" className="rounded-[2.5rem] h-64 w-full object-cover" /></div></div></section><section id="services" className="max-w-7xl mx-auto px-5 py-16"><h2 className="text-5xl font-black mb-8">Pick your pet’s day</h2><ServiceGrid setPage={setPage} /></section><PageHub setPage={setPage} /><StandardSections variant="playful" setPage={setPage} /></div>;
}

function Urban({ setPage }) {
  return <div id="top" className="bg-[#f3efe4] text-[#183b36] pb-24"><Header setPage={setPage} logoVariant="urban" theme="dark" /><section className="max-w-7xl mx-auto px-5 py-14"><div className="rounded-[3rem] bg-[#dcefe8] border border-[#bad4ca] p-8 lg:p-12 grid lg:grid-cols-[1fr_.95fr] gap-10 items-center"><div><p className="uppercase tracking-[.24em] text-[#b8861b] font-black mb-5">Toronto pet care, without the chaos</p><h1 className="text-5xl lg:text-7xl font-black tracking-[-.06em] leading-[.9] mb-7">A friendly city hub for busy pet parents.</h1><p className="text-xl text-[#46615b] font-semibold leading-relaxed mb-8">Urban practicality with warmer, neighbourly Toronto energy: YYZ travel days, downtown routines, webcams, and fast booking for real life.</p><div className="flex flex-wrap gap-3"><PrimaryButton onClick={() => setPage("New Clients")}>Start as a new client</PrimaryButton><button type="button" onClick={() => setPage("Downtown Toronto")} className="rounded-full bg-white border border-[#bad4ca] px-7 py-4 font-black">Downtown location</button><button type="button" onClick={() => setPage("Pearson YYZ")} className="rounded-full bg-[#f0c95a] px-7 py-4 font-black">YYZ location</button></div></div><div className="grid grid-cols-2 gap-4">
          <button type="button" onClick={() => setPage("Downtown Toronto")} className="relative rounded-[2rem] overflow-hidden h-72 col-span-2 text-left">
            <img src={animalPhotos.torontoSkyline} alt="Toronto skyline with CN Tower" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/5" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="uppercase tracking-[.18em] text-white/80 font-black text-sm mb-1">Downtown Toronto</p>
              <h3 className="text-3xl font-black">City care with local convenience.</h3>
            </div>
          </button>

          <button type="button" onClick={() => setPage("Pearson YYZ")} className="relative rounded-[1.5rem] overflow-hidden text-left min-h-[180px]">
            <img src={animalPhotos.pearsonAirport} alt="Pearson airport" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 p-6 text-white">
              <Plane className="mb-6 text-[#f0c95a]" />
              <h3 className="text-2xl font-black">Pearson YYZ</h3>
            </div>
          </button>

          <button type="button" onClick={() => setPage("Client Login")} className="rounded-[1.5rem] bg-[#183b36] text-white p-6 text-left">
            <Home className="mb-6" />
            <h3 className="text-2xl font-black">Client login</h3>
          </button>
        </div></div></section><section id="services" className="max-w-7xl mx-auto px-5 py-16"><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"><h2 className="text-5xl font-black tracking-[-.05em]">Built for Toronto pet routines.</h2><p className="font-semibold text-[#516966] max-w-md">Organized, friendly, and practical for city pet parents.</p></div><ServiceGrid style="urban" setPage={setPage} /></section><PageHub setPage={setPage} /><StandardSections variant="urban" setPage={setPage} /></div>;
}

function SimpleClean({ setPage }) {
  const featuredServices = ["Dog Playcare", "Dog Boarding", "Grooming", "Shuttle"].map((id) => pageData[id]);

  return (
    <div id="top" className="bg-[#f8f6ef] text-[#173d39] pb-24">
      <Header setPage={setPage} logoVariant="original" />

      <section className="max-w-6xl mx-auto px-5 py-14 lg:py-20 text-center">
        <p className="uppercase tracking-[.24em] text-[#b8861b] font-black mb-5">Simple Clean Direction</p>
        <h1 className="text-5xl lg:text-7xl font-black tracking-[-.06em] leading-[.9] mb-6">Dog daycare, boarding, grooming, and pet care made simple.</h1>
        <p className="text-xl text-[#526762] leading-relaxed max-w-3xl mx-auto mb-8">A cleaner Park9 direction with fewer sections, bigger actions, clear service cards, visible booking, locations, reviews, webcams, and client login.</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <PrimaryButton onClick={() => setPage("New Clients")}>Book now</PrimaryButton>
          <button type="button" onClick={() => setPage("Client Login")} className="rounded-full bg-white border border-[#d8e2df] px-7 py-4 font-black">Client Login</button>
          <button type="button" onClick={() => setPage("Contact")} className="rounded-full bg-[#f0c95a] px-7 py-4 font-black">Contact</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="grid md:grid-cols-3 gap-4">
          <button type="button" onClick={() => setPage("Contact")} className="rounded-3xl bg-white border border-black/10 p-6 text-center shadow-sm hover:-translate-y-1 transition"><Phone className="mx-auto mb-3 text-[#b8861b]" /><h3 className="font-black text-xl">Call or contact</h3><p className="font-semibold text-[#526762]">Fast answers for availability and care questions.</p></button>
          <button type="button" onClick={() => setPage("Downtown Toronto")} className="rounded-3xl bg-white border border-black/10 p-6 text-center shadow-sm hover:-translate-y-1 transition"><MapPin className="mx-auto mb-3 text-[#b8861b]" /><h3 className="font-black text-xl">Two locations</h3><p className="font-semibold text-[#526762]">Pearson YYZ and Downtown Toronto.</p></button>
          <button type="button" onClick={() => setPage("Webcams")} className="rounded-3xl bg-white border border-black/10 p-6 text-center shadow-sm hover:-translate-y-1 transition"><Camera className="mx-auto mb-3 text-[#b8861b]" /><h3 className="font-black text-xl">Webcam access</h3><p className="font-semibold text-[#526762]">Peace of mind for returning clients.</p></button>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-5 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p className="uppercase tracking-[.22em] text-[#b8861b] font-black mb-3">Services</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-[-.04em]">Choose what your pet needs.</h2>
          </div>
          <button type="button" onClick={() => setPage("Pricing")} className="rounded-full bg-white border border-black/10 px-5 py-3 font-black">View pricing</button>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <button type="button" key={service.title} onClick={() => setPage(service.title)} className="text-left rounded-[2rem] bg-white p-7 border border-black/10 shadow-sm hover:-translate-y-1 transition">
                <Icon className="mb-5 text-[#b8861b]" size={34} />
                <h3 className="text-3xl font-black mb-3">{service.title}</h3>
                <p className="text-[#526762] font-semibold leading-relaxed mb-5">{service.summary}</p>
                <span className="font-black inline-flex items-center gap-2">View service <ArrowRight size={16} /></span>
              </button>
            );
          })}
        </div>
      </section>

      <section id="all-pages" className="max-w-6xl mx-auto px-5 py-10">
        <div className="rounded-[2rem] bg-white border border-black/10 p-6 lg:p-8 shadow-sm">
          <h2 className="text-3xl font-black mb-5">Quick links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Dog Playcare", "Dog Boarding", "Cat Boarding", "Grooming", "Pool Rental", "Shuttle", "Webcams", "Requirements", "Pricing", "Contact", "New Clients", "Client Login"].map((item) => (
              <button key={item} type="button" onClick={() => setPage(item)} className="rounded-full bg-[#f8f6ef] hover:bg-[#f0c95a] px-4 py-3 font-black text-sm transition">{item}</button>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="max-w-6xl mx-auto px-5 py-14">
        <div className="mb-8">
          <p className="uppercase tracking-[.22em] text-[#b8861b] font-black mb-3">Two locations</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-[-.04em]">Easy care in Downtown Toronto and near Pearson YYZ.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <button
            type="button"
            onClick={() => setPage("Downtown Toronto")}
            className="relative overflow-hidden text-left rounded-[2rem] min-h-[360px] shadow-sm hover:-translate-y-1 transition"
          >
            <img src={animalPhotos.torontoSkyline} alt="Downtown Toronto with CN Tower" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
            <div className="relative z-10 p-8 text-white flex h-full flex-col justify-end">
              <MapPin className="mb-5 text-[#f0c95a]" />
              <p className="uppercase tracking-[.18em] text-white/75 font-black mb-2">Downtown Toronto</p>
              <h3 className="text-3xl font-black mb-3">City convenience for busy pet parents.</h3>
              <p className="font-semibold text-white/90 max-w-md">Daycare, grooming, recurring visits, and easy access for Toronto routines.</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPage("Pearson YYZ")}
            className="relative overflow-hidden text-left rounded-[2rem] min-h-[360px] shadow-sm hover:-translate-y-1 transition"
          >
            <img src={animalPhotos.pearsonAirport} alt="Pearson airport travel concept" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
            <div className="relative z-10 p-8 text-white flex h-full flex-col justify-end">
              <Plane className="mb-5 text-[#f0c95a]" />
              <p className="uppercase tracking-[.18em] text-white/75 font-black mb-2">Pearson YYZ</p>
              <h3 className="text-3xl font-black mb-3">Perfect for travel days and longer stays.</h3>
              <p className="font-semibold text-white/90 max-w-md">Convenient boarding, grooming before pickup, and airport-adjacent drop-off.</p>
            </div>
          </button>
        </div>
      </section>

      <section id="reviews" className="max-w-6xl mx-auto px-5 py-14">
        <h2 className="text-4xl font-black mb-8">What pet parents say</h2>
        <Testimonials />
      </section>

      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="rounded-[2rem] bg-[#173d39] text-white p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-4xl font-black mb-3">Ready to book?</h2>
            <p className="text-white/75 font-semibold">Start as a new client, check requirements, or contact Park9 directly.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <PrimaryButton light onClick={() => setPage("New Clients")}>New Clients</PrimaryButton>
            <button type="button" onClick={() => setPage("Contact")} className="rounded-full bg-[#f0c95a] text-[#173d39] px-6 py-4 font-black">Contact</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ColourPop({ setPage }) {
  const colourServices = [
    { id: "Dog Playcare", bg: "bg-[#FFE1EC]", text: "text-[#263238]", badge: "bg-[#B54D7A] text-white" },
    { id: "Dog Boarding", bg: "bg-[#D9CCFF]", text: "text-[#263238]", badge: "bg-[#6F5AA8] text-white" },
    { id: "Grooming", bg: "bg-[#BDE0FE]", text: "text-[#263238]", badge: "bg-[#3F63B5] text-white" },
    { id: "Cat Boarding", bg: "bg-[#FFF4C7]", text: "text-[#263238]", badge: "bg-[#D69F22] text-white" },
    { id: "Pool Rental", bg: "bg-[#CFF7E2]", text: "text-[#263238]", badge: "bg-[#2D8C6A] text-white" },
    { id: "Shuttle", bg: "bg-[#FFD6A5]", text: "text-[#263238]", badge: "bg-[#E07A5F] text-white" },
  ];

  return (
    <div id="top" className="bg-[#FFF7F2] text-[#263238] pb-24 overflow-hidden">
      <Header setPage={setPage} logoVariant="playful" />

      <section className="max-w-7xl mx-auto px-5 py-12 lg:py-20">
        <div className="rounded-[3rem] bg-gradient-to-br from-[#FFE1EC] via-[#FFF4C7] to-[#D9CCFF] border border-[#F1C6D7] p-8 lg:p-12 shadow-xl grid lg:grid-cols-[1fr_.85fr] gap-10 items-center">
          <div>
            <p className="uppercase tracking-[.22em] text-[#B54D7A] font-black mb-4">Colourful Clean Direction</p>
            <h1 className="text-6xl lg:text-8xl font-black tracking-[-.07em] leading-[.84] mb-6">Pet care that's simple and premium.</h1>
            <p className="text-xl font-semibold text-[#5D4B73] max-w-2xl mb-8">A lighter Park9 concept with polished pastels, clear service choices, and no clutter.</p>
            <div className="flex gap-3 flex-wrap">
              <button type="button" onClick={() => setPage("New Clients")} className="rounded-full bg-[#B54D7A] text-white px-8 py-5 text-lg font-black shadow-sm">Book Now</button>
              <button type="button" onClick={() => setPage("Client Login")} className="rounded-full bg-white border border-[#F1C6D7] px-8 py-5 text-lg font-black shadow-sm">Client Login</button>
              <button type="button" onClick={() => setPage("Contact")} className="rounded-full bg-[#3F63B5] text-white px-8 py-5 text-lg font-black shadow-sm">Contact Park9</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 rotate-1">
            <img src={animalPhotos.dogRun} alt="Dogs playing" className="rounded-[2rem] h-52 w-full object-cover border-4 border-white shadow-lg" />
            <img src={animalPhotos.cat} alt="Cat boarding" className="rounded-[2rem] h-52 w-full object-cover border-4 border-white shadow-lg mt-8" />
            <img src={animalPhotos.torontoSkyline} alt="Toronto skyline" className="rounded-[2rem] h-52 w-full object-cover border-4 border-white shadow-lg -mt-8" />
            <img src={animalPhotos.pearsonAirport} alt="Pearson airport" className="rounded-[2rem] h-52 w-full object-cover border-4 border-white shadow-lg" />
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-5 py-12">
        <div className="text-center mb-8">
          <p className="uppercase tracking-[.22em] text-[#B54D7A] font-black mb-3">Start here</p>
          <h2 className="text-5xl lg:text-6xl font-black tracking-[-.05em]">What does your pet need?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {colourServices.map((item) => {
            const service = pageData[item.id];
            const Icon = service.icon;
            return (
              <button type="button" key={item.id} onClick={() => setPage(item.id)} className={`${item.bg} ${item.text} rounded-[2rem] p-7 text-left min-h-[220px] shadow-sm hover:-translate-y-1 hover:shadow-xl transition border border-white/80`}>
                <div className={`h-16 w-16 rounded-2xl ${item.badge} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon size={34} strokeWidth={2.7} />
                </div>
                <h3 className="text-3xl font-black mb-3">{service.title}</h3>
                <p className="font-bold leading-snug opacity-90">{service.summary}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section id="locations" className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid lg:grid-cols-2 gap-5">
          <button type="button" onClick={() => setPage("Downtown Toronto")} className="relative overflow-hidden rounded-[2.5rem] min-h-[340px] text-left border border-white shadow-lg">
            <img src={animalPhotos.torontoSkyline} alt="Downtown Toronto" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
              <MapPin className="mb-4 text-[#FFE1EC]" />
              <h3 className="text-4xl font-black mb-2">Downtown Toronto</h3>
              <p className="font-bold text-white/90">Daycare, grooming, and city convenience.</p>
            </div>
          </button>

          <button type="button" onClick={() => setPage("Pearson YYZ")} className="relative overflow-hidden rounded-[2.5rem] min-h-[340px] text-left border border-white shadow-lg">
            <img src={animalPhotos.pearsonAirport} alt="Pearson YYZ" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
              <Plane className="mb-4 text-[#BDE0FE]" />
              <h3 className="text-4xl font-black mb-2">Pearson YYZ</h3>
              <p className="font-bold text-white/90">Boarding, travel days, and longer stays.</p>
            </div>
          </button>
        </div>
      </section>

      <section id="all-pages" className="max-w-7xl mx-auto px-5 py-12">
        <div className="rounded-[2.5rem] bg-white p-8 border border-[#F1C6D7] shadow-xl">
          <h2 className="text-4xl font-black mb-6">Quick links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Dog Playcare", "Dog Boarding", "Cat Boarding", "Grooming", "Pool Rental", "Shuttle", "Webcams", "Pricing", "Requirements", "Contact", "New Clients", "Client Login"].map((item) => (
              <button key={item} type="button" onClick={() => setPage(item)} className="rounded-full bg-[#FFF7F2] hover:bg-[#FFE1EC] border border-[#F1C6D7] px-4 py-3 font-black transition">{item}</button>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-7xl mx-auto px-5 py-12">
        <h2 className="text-5xl font-black mb-8 text-center">Happy pets. Happy people.</h2>
        <Testimonials />
      </section>
    </div>
  );
}

function OriginalDirection({ setPage }) {
  return <div id="top" className="bg-[#fbf8f1] text-[#173d39] pb-24"><Header setPage={setPage} logoVariant="original" /><section className="relative overflow-hidden"><div className="absolute -top-28 -right-28 h-96 w-96 rounded-full bg-[#f0c95a]/30 blur-3xl" /><div className="absolute top-48 -left-24 h-72 w-72 rounded-full bg-[#8fc9bd]/30 blur-3xl" /><div className="max-w-7xl mx-auto px-5 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center"><div><div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#eadfce] px-4 py-2 text-sm font-bold text-[#3d5b57] shadow-sm mb-6"><ShieldCheck size={18} /> Toronto pet care with real transparency</div><h1 className="text-5xl lg:text-7xl font-black tracking-[-0.05em] leading-[0.92] mb-7">More than daycare. <span className="text-[#f0b93a]">A better stay</span> for your pet.</h1><p className="text-xl text-[#526762] leading-relaxed max-w-xl mb-8">Park9 is Toronto’s pet playcare, boarding, grooming, shuttle, and pool destination, with dedicated care for dogs and cats, live webcams, caring staff, and two GTA locations.</p><div className="flex flex-wrap gap-4"><PrimaryButton onClick={() => setPage("New Clients")}>Book a Meet & Greet</PrimaryButton><button type="button" onClick={() => setPage("Client Login")} className="inline-flex bg-white text-[#173d39] border border-[#d8e2df] rounded-full px-7 py-4 font-black">Client Login</button></div></div><div className="rounded-[2.5rem] bg-[#173d39] p-5 shadow-2xl rotate-1"><div className="rounded-[2rem] bg-gradient-to-br from-[#f0c95a] via-[#f7d99a] to-[#8fc9bd] min-h-[520px] p-8 flex flex-col justify-between overflow-hidden relative"><PawPrint className="absolute right-8 top-8 h-28 w-28 text-white/25 rotate-12" /><div className="relative z-10 rounded-3xl bg-white/85 p-5 shadow-sm max-w-xs"><b>Built for pet parents</b><p className="text-sm text-[#526762] font-semibold">Live webcams, thoughtful onboarding, and clear service paths.</p></div><div className="relative z-10"><div className="text-[8rem] leading-none font-black text-white/70 tracking-[-0.1em]">K9</div><div className="rounded-3xl bg-white p-6 shadow-lg max-w-md ml-auto"><h3 className="text-2xl font-black mb-2">Happy pets. Calm humans.</h3><p className="text-[#526762] font-semibold">Warm, clean, premium, and friendly pet care.</p></div></div></div></div></div></section><section id="services" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-5"><h2 className="text-5xl font-black mb-8">Everything dogs and cats need.</h2><ServiceGrid setPage={setPage} /></div></section><PageHub setPage={setPage} /><StandardSections variant="original" setPage={setPage} /></div>;
}

export default function Park9Website() {
  const [active, setActive] = useState("selector");
  const [page, setPage] = useState("home");

  const navigateToPage = (nextPage) => {
    setPage(nextPage);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const activePage = useMemo(() => pages.find((item) => item.id === page), [page]);

  if (activePage) {
    return <PageView page={activePage} setPage={navigateToPage} activeConcept={active} />;
  }

  return (
    <>
      <Tabs active={active} setActive={setActive} setPage={navigateToPage} />
      {active === "selector" && <DesignSelector setActive={setActive} setPage={navigateToPage} />}
      {active === "resort" && <Resort setPage={navigateToPage} />}
      {active === "playful" && <Playful setPage={navigateToPage} />}
      {active === "urban" && <Urban setPage={navigateToPage} />}
      {active === "original" && <OriginalDirection setPage={navigateToPage} />}
      {active === "simple" && <SimpleClean setPage={navigateToPage} />}
      {active === "colourpop" && <ColourPop setPage={navigateToPage} />}
    </>
  );
}
