import VideoComponent from "@/components/VideoComponent";
import VideoSkeleton from "@/components/VideoSkeleton";
import { COMPANY_LOGOS } from "@/lib/assets";
import { Suspense } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main id="content" className="mx-auto max-w-7xl px-4">
      {/* 1) HERO / INTRO */}
      <section id="hero" aria-label="Introduction" className="py-10">
        <div className="flex justify-between pb-8">
          <div className="max-w-9/12">
            <h1 className="text-7xl font-semibold leading-20 ">
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
          <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={100} />
        ))}
      </div>
      </section>










      {/* 2) WORK */}
      <section id="work" aria-labelledby="work-heading" className="py-16 border-b bg-black">
        <h2 id="work-heading" className="text-2xl font-semibold">Work</h2>
        <p className="mt-3 text-gray-700">
          Short bio goes here. Summarize your background, areas of expertise, and
          what problems you love to solve.
        </p>
        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1">City, Country</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Experience</dt>
            <dd className="mt-1">X+ years</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Focus</dt>
            <dd className="mt-1">React • Next.js • TypeScript • Web Perf</dd>
          </div>
        </dl>
      </section>

      {/* 3) SKILLS / STACK */}
      <section id="skills" aria-labelledby="skills-heading" className="py-16 border-b">
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
      <section id="work" aria-labelledby="work-heading" className="py-16 border-b">
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
      </section>

      {/* 5) CONTACT / CTA */}
      <section id="contact" aria-labelledby="contact-heading" className="py-16">
        <h2 id="contact-heading" className="text-2xl font-semibold">Let’s work together</h2>
        <p className="mt-3 text-gray-700">
          Interested in collaborating or have a role in mind? Drop a note.
        </p>
        <address className="not-italic mt-6">
          <a className="underline" href="mailto:you@example.com">you@example.com</a>
        </address>
      </section>
    </main>
  );
}
