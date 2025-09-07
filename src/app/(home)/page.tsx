import VideoComponent from "@/components/VideoComponent";
import VideoSkeleton from "@/components/VideoSkeleton";
import { COMPANY_LOGOS } from "@/lib/assets";
import { Suspense } from "react";
import Image from "next/image";
import CountTicker from "@/components/CountTicker";

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
            <h1 className="text-[84px] font-semibold leading-[112px] font-700">
              Empowering <span className="text-accent">consumers</span> through elevated experiences.
            </h1>
            <p className="mt-6 text-lg text-gray-700 font-secondary">
              Designing responsibly and responsively to make a difference!
            </p>
          </div>
          <p className="mt-2 text-gray-600 self-end">
            scroll to learn more
          </p>
        </div>
        <Suspense fallback={<VideoSkeleton />}>
          <VideoComponent url="https://vusgicpr9kf2hrzd.public.blob.vercel-storage.com/folio_home_video_2" />
        </Suspense>

        {/* Images of companies worked for */}
        <div className="flex justify-between mt-20">
          {COMPANY_LOGOS.map((logo) => (
            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={100} loading="lazy" />
          ))}
        </div>
      </section>



      {/* 2) WORK */}
      <section id="work" aria-labelledby="work-heading" className="py-16 border-b bg-black text-white">
        <div className="default-container">
          <div className="flex justify-evenly">
            <CountTicker start={0} end={50} duration={1500} caption="Projects Delivered" easing="out-expo"/>
            <CountTicker start={0} end={15} duration={1500} caption="Clients across the Globe" easing="out-expo"/>
            <CountTicker start={0} end={4} duration={1500} caption="Years of Experience" easing="out-expo"/>
          </div>
          {/* <h2 id="work-heading" className="text-2xl font-semibold">My Work</h2> */}
        </div>

      </section>

      {/* 3) SKILLS / STACK */}
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

      {/* 4) SELECTED WORK */}
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
    </main>
  );
}
