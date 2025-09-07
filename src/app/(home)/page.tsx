import VideoComponent from "@/components/VideoComponent";
import VideoSkeleton from "@/components/VideoSkeleton";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { COMPANY_LOGOS } from "@/lib/assets";
import { Suspense } from "react";
import Image from "next/image";
import CountTicker from "@/components/CountTicker";
import RotatingStarIcon from "@/components/RotatingStarIcon";
import workImage from "@/assets/home-work/work1.png";
import workImage2 from "@/assets/home-work/work2.png";
import workImage3 from "@/assets/home-work/work3.png";

export const metadata = {
  title: "Raashi Bhandari",
  description: "Raashi Bhandari Portfolio",
}

export default function Home() {
  return (
    <main id="content" className="mx-auto">
      {/* 1) HERO / INTRO */}
      <section id="hero" aria-label="Introduction" className="default-container py-10">
        <div className="flex justify-between pb-8">
          <div className="max-w-9/12">
            <AnimatedText
              text="Empowering consumers through elevated experiences."
              as="h1"
              className="text-[84px] font-semibold leading-[112px] font-700"
              baseDelay={0}
              wordDelay={100}
              highlightWords={{ "consumers": "text-accent" }}
            />
            <AnimatedText
              text="Designing responsibly and responsively to make a difference!"
              as="p"
              className="mt-6 text-lg text-gray-700 font-secondary"
              baseDelay={500}
              wordDelay={0}
            />
          </div>
          <p className="mt-2 text-gray-600 self-end">
            scroll to learn more
          </p>
        </div>

        <AnimatedSection delay={500} threshold={0.05}>
          <Suspense fallback={<VideoSkeleton />}>
            <VideoComponent url="https://vusgicpr9kf2hrzd.public.blob.vercel-storage.com/folio_home_video_2" />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection animationType="fade" delay={200} threshold={0.5} duration={1200}>
          {/* Images of companies worked for */}
          <div className="flex justify-between mt-20">
            {COMPANY_LOGOS.map((logo) => (
              <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={100} loading="lazy" />
            ))}
          </div>
        </AnimatedSection>
      </section>



      {/* 2) WORK */}
      <AnimatedSection delay={0}>
        <section id="work" aria-labelledby="work-heading" className="py-16 border-b bg-black text-white">
          <div className="default-container">
            <div className="flex justify-evenly">
              <CountTicker start={0} end={50} duration={1500} caption="Projects Delivered" easing="out-expo" />
              <CountTicker start={0} end={15} duration={1500} caption="Clients across the Globe" easing="out-expo" />
              <CountTicker start={0} end={4} duration={1500} caption="Years of Experience" easing="out-expo" />
            </div>
            <div className="flex gap-4 items-center mt-20 mb-10">
              <RotatingStarIcon />
              <h2 className="text-[52px] font-700 font-bold">My Work</h2>
            </div>
            <div className="grid grid-cols-[1.375fr_1fr] gap-12">
              <div>
                <div className="overflow-hidden">
                  <Image src={workImage} alt="UX/UI Research, Design ,Testing & Strategy" 
                  className="w-full h-auto hover:scale-105 transition-all duration-300" loading="lazy" />
                </div>
                <h3 className="mt-2 text-[32px] font-semibold">UX/UI Research, Design ,Testing & Strategy</h3>
              </div>
              <div>
                <div className="flex flex-col gap-12">
                  <div>
                    <div className="overflow-hidden">
                      <Image src={workImage2} alt="Branding & Business Strategy" className="w-full h-auto hover:scale-105 transition-all duration-300" loading="lazy" />
                    </div>
                    <h3 className="mt-2 text-[32px] font-semibold">Branding & Business Strategy</h3>
                  </div>
                  <div>
                    <div className="overflow-hidden">
                      <Image src={workImage3} alt="Social Media Marketing & Management" className="w-full h-auto hover:scale-105 transition-all duration-300" loading="lazy" />
                    </div>
                    <h3 className="mt-2 text-[32px] font-semibold">Social Media Marketing & Management</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* <h2 id="work-heading" className="text-2xl font-semibold">My Work</h2> */}
          </div>
        </section>
      </AnimatedSection>

      {/* 3) SKILLS / STACK */}
      <AnimatedSection delay={0}>
        <section id="skills" aria-labelledby="skills-heading" className="default-container py-16 border-b">
          <h2 id="skills-heading" className="text-2xl font-semibold">Skills & Tools</h2>
          <p className="mt-3 text-gray-700">A snapshot of the technologies I use regularly.</p>
          <ul role="list" className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>HTML5</li>
            <li>CSS/Tailwind</li>
            <li>Testing Library/Jest</li>
            <li>Performance & A11y</li>
          </ul>
        </section>
      </AnimatedSection>

      {/* 4) SELECTED WORK */}
      <AnimatedSection delay={0}>
        <section id="work" aria-labelledby="work-heading" className="py-16 border-b bg-black">
          <div className="default-container">
            <h2 id="work-heading" className="text-2xl font-semibold">Selected Work</h2>
            <p className="mt-3 text-gray-700">A few projects and case studies.</p>
            <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <li>
                <article aria-labelledby="proj-1-title" className="border rounded-xl p-4">
                  <header>
                    <h3 id="proj-1-title" className="text-lg font-medium">Project One</h3>
                  </header>
                  <p className="mt-2 text-gray-700">Brief one-liner about impact and scope.</p>
                  <p className="mt-2 text-sm text-gray-600">
                    <time dateTime="2024-06">Jun 2024</time> · React, Next.js
                  </p>
                  <footer className="mt-3">
                    <a href="/work/project-one" className="underline text-sm">Read case study →</a>
                  </footer>
                </article>
              </li>
              <li>
                <article aria-labelledby="proj-2-title" className="border rounded-xl p-4">
                  <header>
                    <h3 id="proj-2-title" className="text-lg font-medium">Project Two</h3>
                  </header>
                  <p className="mt-2 text-gray-700">Brief one-liner about impact and scope.</p>
                  <p className="mt-2 text-sm text-gray-600">
                    <time dateTime="2025-01">Jan 2025</time> · TypeScript, Performance
                  </p>
                  <footer className="mt-3">
                    <a href="/work/project-two" className="underline text-sm">Read case study →</a>
                  </footer>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
