import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CalendarPlus,
  Clock,
  MapPin,
  Sparkles,
  Music,
  Flame,
  Sun,
  Heart,
  Gift,
  BookOpen,
  Crown,
  CalendarDays,
} from "lucide-react";
const mapPlate = "https://media.invitestory.in/ever-after-bloom/src/assets/map-plate.jpg";
const car = "https://media.invitestory.in/ever-after-bloom/src/assets/wedding-car.png";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

function buildIcs() {
  const start = new Date(invitation.dateISO);
  const end = new Date(start.getTime() + 6 * 3_600_000);
  const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Pahul & Rounak Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@wedding`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${invitation.couple.bride} & ${invitation.couple.groom} — Anand Karaj & Wedding Celebrations`,
    `LOCATION:${invitation.venue.name}, ${invitation.venue.address}`,
    `DESCRIPTION:Our family warmly welcomes you to celebrate the Anand Karaj and wedding of ${invitation.couple.bride} and ${invitation.couple.groom}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Sparkles,
  Music,
  Flame,
  Sun,
  Heart,
  Gift,
  BookOpen,
  Crown,
};

export function Details() {
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const maps =
    ("mapsUrl" in invitation.venue && invitation.venue.mapsUrl) ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      invitation.venue.mapsQuery,
    )}`;

  return (
    <section id="itinerary" className="relative overflow-hidden px-5 py-24 scroll-mt-6">
      <div id="details" className="absolute -top-10" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--peach) 26%, var(--ivory)) 0%, var(--cream) 45%, var(--ivory) 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Wedding Itinerary"
          title="The Celebrations"
          note="Four days of love, laughter & sacred ceremonies"
        />
        <Ornament className="mt-8" />

        {/* Day selection tabs for quick navigation */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {invitation.itinerary.map((item, idx) => {
            const isSelected = selectedDay === idx;
            return (
              <button
                key={item.date}
                type="button"
                onClick={() => setSelectedDay(idx)}
                className={`relative rounded-full px-4 py-2 font-sans text-xs tracking-wider uppercase transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md font-semibold"
                    : "glass-plate text-primary hover:bg-white/70"
                }`}
              >
                <span>{item.date.split(" ")[0]} Dec · {item.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* 4-Day Timeline Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {invitation.itinerary.map((dayItem, dayIdx) => {
            const isSelected = selectedDay === dayIdx;
            return (
              <Reveal key={dayItem.date} delay={dayIdx * 0.08}>
                <motion.div
                  onClick={() => setSelectedDay(dayIdx)}
                  whileHover={{ y: -4 }}
                  className={`plate paper-grain relative flex h-full flex-col justify-between rounded-[1.8rem] p-6 text-left transition-all cursor-pointer ${
                    isSelected ? "ring-2 ring-gold shadow-lg" : "hover:border-gold/60"
                  }`}
                >
                  <div>
                    {/* Date Badge */}
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-gold/20 px-3 py-1 font-sans text-[0.6rem] font-bold tracking-[0.2em] text-gold-deep uppercase">
                        {dayItem.badge}
                      </span>
                      <span className="font-sans text-[0.68rem] tracking-wider text-muted-foreground uppercase">
                        {dayItem.dayName}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl leading-snug text-primary">
                      {dayItem.date}
                    </h3>
                    <p className="mt-1 font-script text-base italic text-gold-deep">
                      {dayItem.tagline}
                    </p>

                    <div className="my-4 h-px w-full bg-gold/20" />

                    {/* Events list for this day */}
                    <div className="space-y-4">
                      {dayItem.events.map((evt, evtIdx) => {
                        const IconComponent = iconMap[evt.icon] || Sparkles;
                        return (
                          <div key={evtIdx} className="group">
                            <div className="flex items-start gap-2.5">
                              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                                <IconComponent size={13} />
                              </span>
                              <div>
                                <h4 className="font-display text-sm font-semibold text-primary">
                                  {evt.name}
                                </h4>
                                <div className="mt-0.5 flex items-center gap-1 font-sans text-xs font-semibold text-gold-deep">
                                  <Clock size={12} />
                                  <span>{evt.time}</span>
                                </div>
                                <p className="mt-1 font-sans text-[0.74rem] leading-relaxed text-muted-foreground">
                                  {evt.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-gold/15 flex justify-end">
                    <span className="font-script text-xs italic text-primary/60">
                      Celebration · {dayItem.title}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Wedding Venue & Ceremony Details Card */}
        <Reveal delay={0.16} className="mt-14">
          <div className="plate paper-grain rounded-[2.2rem] p-6 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-3 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-gold/25">
              {/* Auspicious Ceremony */}
              <div className="sm:pr-6 pb-6 sm:pb-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gold-deep">
                  <Crown size={18} />
                  <span className="font-sans text-[0.62rem] tracking-[0.3em] uppercase font-bold">
                    Main Ceremony
                  </span>
                </div>
                <h4 className="mt-2 font-display text-2xl text-primary">
                  Anand Karaj
                </h4>
                <p className="mt-1 font-sans text-xs text-muted-foreground">
                  The holy Sikh wedding union
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 font-sans text-xs font-semibold text-primary">
                  <Clock size={13} className="text-gold-deep" />
                  <span>10:00 AM Morning</span>
                </div>
              </div>

              {/* Date */}
              <div className="sm:px-6 py-6 sm:py-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gold-deep">
                  <CalendarDays size={18} />
                  <span className="font-sans text-[0.62rem] tracking-[0.3em] uppercase font-bold">
                    The Wedding Day
                  </span>
                </div>
                <h4 className="mt-2 font-display text-2xl text-primary">
                  19 December 2026
                </h4>
                <p className="mt-1 font-script text-base italic text-gold-deep">
                  Saturday · Auspicious Muhurat
                </p>
                <div className="mt-3 font-sans text-xs text-muted-foreground">
                  Followed by grand celebratory feast
                </div>
              </div>

              {/* Venue */}
              <div className="sm:pl-6 pt-6 sm:pt-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gold-deep">
                  <MapPin size={18} />
                  <span className="font-sans text-[0.62rem] tracking-[0.3em] uppercase font-bold">
                    The Venue
                  </span>
                </div>
                <h4 className="mt-2 font-display text-2xl text-primary">
                  {invitation.venue.name}
                </h4>
                <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground">
                  {invitation.venue.address}
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gold/25 flex flex-wrap justify-center gap-3">
              <motion.a
                href={buildIcs()}
                download="Pahul-Rounak-Wedding.ics"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-sans text-xs tracking-[0.2em] font-semibold text-primary-foreground uppercase shadow-md cursor-pointer"
              >
                <CalendarPlus size={15} strokeWidth={1.8} /> Add to Calendar
              </motion.a>
              <motion.a
                href={maps}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="glass-plate inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3 font-sans text-xs tracking-[0.2em] font-semibold text-primary uppercase shadow-sm cursor-pointer hover:bg-white/70"
              >
                <MapPin size={15} strokeWidth={1.8} className="text-gold-deep" /> Get Directions
              </motion.a>
            </div>
          </div>
        </Reveal>

        {/* Illustrated map plate with the wedding car rolling in */}
        <Reveal delay={0.2} className="mt-12">
          <div className="plate relative overflow-hidden rounded-[2rem]">
            <img
              src={mapPlate}
              alt="Hand-painted illustrated map of the palace and venue"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-64 w-full object-cover sm:h-80"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, color-mix(in oklab, var(--cream) 55%, transparent), transparent 55%)",
              }}
            />
            <motion.img
              src={car}
              alt=""
              aria-hidden
              loading="lazy"
              width={1175}
              height={567}
              className="absolute bottom-2 left-0 w-40 sm:w-56"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 24, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
