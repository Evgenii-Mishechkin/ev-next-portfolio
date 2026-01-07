"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { skills, work, petProjects, contactsData } from "@/data/data";
import { SkillGroup } from "@/components/SkillGroup";
import { ContactsGroup } from "@/components/ContactsGroup";
import { ExperienceGroup } from "@/components/ExperienceGroup";
import { ProjectsGroup } from "@/components/ProjectsGroup";
import { Scrambled } from "@/components/FlipBoardText";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;

  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (nextLocale: Locale) => {
    const parts = pathname.split("/");
    parts[1] = nextLocale;
    router.push(parts.join("/"));
  };

  return (
    <main className="relative min-h-screen flex justify-center px-4 py-10 text-[#fff] overflow-hidden">
      <div className="w-full max-w-5xl grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        {/* LEFT COLUMN */}
        <section className="space-y-10 transition-[height] duration-300 min-h-[135px]">
          {/* Header */}
          <header className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                <Scrambled text={t("roleBadgeLeft")} />
                <span className="h-1 w-1 rounded-full bg-amber-400" />
                <Scrambled text={t("roleBadgeRight")} />
              </div>

              {/* Language Switcher */}
              <LanguageSwitcher lang={locale} onChange={handleLangChange} />
            </div>

            <div>
              <h1 className="block text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                <Scrambled text={t("name")} />
              </h1>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-400">
                <Scrambled text={t("heroText")} />
              </p>
            </div>
          </header>

          {/* Work Experience */}
          <section
            aria-labelledby="experience-title"
            className="space-y-4 transition-[height] duration-300 min-h-[356px]"
          >
            <h2
              id="experience-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <Scrambled text={t("experienceTitle")} />
            </h2>

            <ExperienceGroup work={work} />
          </section>

          {/* About */}
          <section
            aria-labelledby="about-title"
            className="space-y-3 min-h-[220px] transition-[height] duration-300"
          >
            <h2
              id="about-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <Scrambled text={t("aboutTitle")} />
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed ">
              <Scrambled text={t("aboutText.0")}/>
              <Scrambled text={t("aboutText.1")}/>
              <Scrambled text={t("aboutText.2")}/>
            </p>
          </section>
        </section>

        {/* RIGHT COLUMN */}
        <aside className="space-y-10">
          {/* Contacts */}
          <section
            aria-labelledby="contact-title"
            className="space-y-3 transition-[height] duration-300"
          >
            <h2
              id="contact-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <Scrambled text={t("contactTitle")} />
            </h2>
            <ContactsGroup location={contactsData.location} links={contactsData.links} />
          </section>

          {/* Skills */}
          <section
            aria-labelledby="skills-title"
            className="space-y-4 transition-[height] duration-300"
          >
            <h2
              id="skills-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <Scrambled text={t("skillsTitle")} />
            </h2>

            <div className="space-y-3 text-xs">
              <SkillGroup label={t("skills.advanced")} skills={skills.advanced} />
              <SkillGroup label={t("skills.intermediate")} skills={skills.intermediate} />
            </div>
          </section>

          {/* Pet projects */}
          <section
            aria-labelledby="projects-title"
            className="space-y-4 transition-[height] duration-300"
          >
            <h2
              id="projects-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <Scrambled text={t("projectsTitle")} />
            </h2>
            <ProjectsGroup petProjects={petProjects} />
          </section>

          {/* Languages */}
          <section
            aria-labelledby="languages-title"
            className="space-y-2 transition-[height] duration-300"
          >
            <h2
              id="languages-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <Scrambled text={t("languagesTitle")} />
            </h2>
            <p className="text-xs text-neutral-300">
              <Scrambled text={t("languagesLine")} />
            </p>
          </section>
        </aside>
      </div>
    </main>
  );
}
