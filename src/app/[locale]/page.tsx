"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { skills, work, petProjects, contactsData } from "@/data/data";
import { SkillGroup } from "@/components/SkillGroup";
import { ContactsGroup } from "@/components/ContactsGroup";
import { ExperienceGroup } from "@/components/ExperienceGroup";
import { ProjectsGroup } from "@/components/ProjectsGroup";
import { FlipText } from "@/components/FlipText";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;

  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (nextLocale: Locale) => {
    const parts = pathname.split("/");
    // ['', 'en', ...rest]
    parts[1] = nextLocale;
    router.push(parts.join("/"));
  };

  return (
    <main className="min-h-screen flex justify-center px-4 py-10 bg-[#0e0e0e] text-[#fff]">
      <div className="w-full max-w-5xl grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        {/* LEFT COLUMN */}
        <section className="space-y-10">
          {/* Header */}
          <header className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                <FlipText text={t("roleBadgeLeft")} />
                <span className="h-1 w-1 rounded-full bg-amber-400" />
                <FlipText text={t("roleBadgeRight")} />
              </div>

              {/* Language Switcher */}
              <LanguageSwitcher lang={locale} onChange={handleLangChange} />
            </div>

            <div>
              <h1 className="block text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                <FlipText text={t("name")} />
              </h1>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-400">
                <FlipText text={t("heroText")} speed={10} />
              </p>
            </div>
          </header>

          {/* Work Experience */}
          <section aria-labelledby="experience-title" className="space-y-4">
            <h2
              id="experience-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <FlipText text={t("experienceTitle")} />
            </h2>

            <ExperienceGroup work={work} />
          </section>

          {/* About */}
          <section aria-labelledby="about-title" className="space-y-3">
            <h2
              id="about-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <FlipText text={t("aboutTitle")} />
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              <FlipText text={t("aboutText.0")} className={"mb-3"}/>
              <FlipText text={t("aboutText.1")} nowrap={false} ellipsis={false} className={"mb-3"} cycles = {1} speed={1}/>
              <FlipText text={t("aboutText.2")} nowrap={false} ellipsis={false} cycles = {1} speed={1}/>
            </p>
          </section>
        </section>

        {/* RIGHT COLUMN */}
        <aside className="space-y-10">
          {/* Contacts */}
          <section aria-labelledby="contact-title" className="space-y-3">
            <h2
              id="contact-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <FlipText text={t("contactTitle")} />
            </h2>
            <ContactsGroup location={contactsData.location} links={contactsData.links} />
          </section>

          {/* Skills */}
          <section aria-labelledby="skills-title" className="space-y-4">
            <h2
              id="skills-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <FlipText text={t("skillsTitle")} />
            </h2>

            <div className="space-y-3 text-xs">
              <SkillGroup label={t("skills.advanced")} skills={skills.advanced} />
              <SkillGroup label={t("skills.intermediate")} skills={skills.intermediate} />
            </div>
          </section>

          {/* Pet projects */}
          <section aria-labelledby="projects-title" className="space-y-4">
            <h2
              id="projects-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <FlipText text={t("projectsTitle")} />
            </h2>
            <ProjectsGroup petProjects={petProjects} />
          </section>

          {/* Languages */}
          <section aria-labelledby="languages-title" className="space-y-2">
            <h2
              id="languages-title"
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              <FlipText text={t("languagesTitle")} />
            </h2>
            <p className="text-xs text-neutral-300">
              <FlipText text={t("languagesLine")} />
            </p>
          </section>
        </aside>
      </div>
    </main>
  );
}
