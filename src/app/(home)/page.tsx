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
import AnimatedImageList from "@/components/AnimatedImageList";
import { THINGS_I_DO } from "@/assets/things-i-do/manifest";
import quoteIcon from "@/assets/others/quote_icon.svg";
import { TESTIMONIALS } from "@/assets/testimonials/manifest";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "Raashi Bhandari",
  description: "Raashi Bhandari Portfolio",
};

export default function Home() {
  return (
    <main id="content" className="mx-auto">
      {/* 1) HERO / INTRO */}
      <section
        id="hero"
        aria-label="Introduction"
        className="default-container py-10"
      >
        <div className="flex justify-between pb-8">
          <div className="max-w-9/12">
            <AnimatedText
              text="Empowering consumers through elevated experiences."
              as="h1"
              className="text-[84px] font-semibold leading-[104px] font-700"
              baseDelay={0}
              wordDelay={100}
              highlightWords={{ consumers: "text-accent" }}
            />
            <AnimatedText
              text="Designing responsibly and responsively to make a difference!"
              as="p"
              className="mt-6 text-lg text-gray-700 font-secondary"
              baseDelay={500}
              wordDelay={0}
            />
          </div>
          <p className="mt-2 text-gray-600 self-end">scroll to learn more</p>
        </div>

        <AnimatedSection delay={500} threshold={0.05}>
          <Suspense fallback={<VideoSkeleton />}>
            <VideoComponent url="https://vusgicpr9kf2hrzd.public.blob.vercel-storage.com/folio_home_video_2" />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection
          animationType="fade"
          delay={200}
          threshold={0.8}
          duration={1200}
        >
          {/* Images of companies worked for */}
          <div className="flex justify-between mt-20">
            {COMPANY_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={100}
                loading="lazy"
              />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 2) WORK */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="py-16 border-b bg-black text-white"
      >
        <div className="default-container">
          <div className="flex justify-evenly">
            <CountTicker
              start={0}
              end={50}
              duration={1800}
              caption="Projects Delivered"
              easing="out-expo"
            />
            <CountTicker
              start={0}
              end={15}
              duration={1800}
              caption="Clients across the Globe"
              easing="out-expo"
            />
            <CountTicker
              start={0}
              end={4}
              duration={1800}
              caption="Years of Experience"
              easing="out-expo"
            />
          </div>
          <div className="flex gap-4 items-center mt-20 mb-10">
            <RotatingStarIcon />
            <h2 className="text-[52px] font-700 font-bold">My Work</h2>
          </div>
          <div className="grid grid-cols-[1.375fr_1fr] gap-12">
            <div>
              <div className="overflow-hidden">
                <Image
                  src={workImage}
                  alt="UX/UI Research, Design ,Testing & Strategy"
                  className="w-full h-auto hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-2 text-[32px] font-semibold">
                UX/UI Research, Design ,Testing & Strategy
              </h3>
            </div>
            <div>
              <div className="flex flex-col gap-12">
                <div>
                  <div className="overflow-hidden">
                    <Image
                      src={workImage2}
                      alt="Branding & Business Strategy"
                      className="w-full h-auto hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-2 text-[32px] font-semibold">
                    Branding & Business Strategy
                  </h3>
                </div>
                <div>
                  <div className="overflow-hidden">
                    <Image
                      src={workImage3}
                      alt="Social Media Marketing & Management"
                      className="w-full h-auto hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-2 text-[32px] font-semibold">
                    Social Media Marketing & Management
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <h2 id="work-heading" className="text-2xl font-semibold">My Work</h2> */}
        </div>
      </section>

      {/* 3) THINGS I DO */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="default-container py-16 border-b"
      >
        <div className="flex gap-4 items-center mb-10">
          <RotatingStarIcon />
          <AnimatedText
            text="Things I do"
            className="text-[52px] font-700 font-bold"
            wordDelay={0}
            baseDelay={0}
          />
        </div>
        <AnimatedImageList data={THINGS_I_DO} />
      </section>

      {/* 4) QUOTE */}
      <section
        id="quote"
        aria-labelledby="quote-heading"
        className="py-28 border-b bg-black text-white"
      >
        <div className="flex flex-col justify-center items-center max-w-[70%] mx-auto text-center text-[72px] font-medium leading-[110%]">
          <AnimatedSection
            delay={0}
            animationType="rotateY"
            className="mb-8"
            threshold={0.5}
          >
            <span aria-hidden="true" className="text-accent">
              <Image src={quoteIcon} alt="Quote" width={80} height={80} />
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0} threshold={0.5}>
            I believe every experience should tell a compelling story that
            resonates with consumers, leaving them with a lasting sense of
            positivity and connection.
          </AnimatedSection>
        </div>
      </section>
      {/* 5) WHAT OTHERS ARE SAYING */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="default-container py-16"
      >
        <div className="flex gap-4 items-center mb-10">
          <RotatingStarIcon />
          <AnimatedText
            text="What others are saying"
            className="text-[52px] font-700 font-bold"
            wordDelay={0}
            baseDelay={0}
          />
        </div>
        <Carousel data={TESTIMONIALS.map((item) => ({
            body: item.quote,
            imageSrc: item.imageSrc,
            caption: item.name,
            subcaption: item.position,
            imageFilter: "accent"
        }))} />
        {/* <AnimatedImageList data={TESTIMONIALS} /> */}
      </section>
      {/* 6) MY PROCESS */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="bg-black text-white py-16"
      >
        <div className="default-container flex gap-4 items-center mb-10">
          <RotatingStarIcon />
          <AnimatedText
            text="My process"
            className="text-[52px] font-700 font-bold"
            wordDelay={0}
            baseDelay={0}
          />
        </div>
        {/* <AnimatedImageList data={OUR_PROCESS} /> */}
      </section>
    </main>
  );
}
