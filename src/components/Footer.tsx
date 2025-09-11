import Image from "next/image";
import AnimatedText from "./AnimatedText";
import instagramIcon from "@/assets/others/instagram.svg";
import linkedinIcon from "@/assets/others/linkedin.svg";

export default function Footer() {
  return (
    <footer id="site-footer" className="scroll-mt-[120px]">
      <div className="default-container my-20 space-y-10">
        <div>
          <AnimatedText
            text="Let’s talk"
            className="text-[84px] font-600 font-semibold uppercase leading-[1]"
            wordDelay={0}
            baseDelay={0}
            as="h2"
          />
          <AnimatedText
            text="design & business."
            className="text-[84px] font-600 font-semibold uppercase leading-[1]"
            wordDelay={0}
            baseDelay={0}
            as="h2"
          />
          <AnimatedText
            text="let’s make an impact."
            className="text-[84px] font-600 font-semibold uppercase leading-[1]"
            wordDelay={0}
            baseDelay={0}
            as="h2"
          />
        </div>
        <hr />
        <div className="flex gap-4 items-center justify-between text-3xl font-[500] mb-10">
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/raashibhandari/"
              className="uppercase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="bg-accent p-2 rounded-full inline mr-4"
                src={instagramIcon}
                alt="Instagram"
                width={32} // var(--text-3xl)
                height={32}
              />
              <span className="underline">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/raashi-bhandari/"
              className="uppercase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="bg-accent p-2 rounded-full inline mr-4"
                src={linkedinIcon}
                alt="Linked In"
                width={32}
                height={32}
              />
              <span className="underline">Linked In</span>
            </a>
          </div>
          <a className="uppercase" href="mailto:raashibhandari@gmail.com">
            <span className="underline">raashibhandari@gmail.com</span>
          </a>
        </div>
        {/* <InstagramGallery /> */}
      </div>
      <div className="bg-black text-white py-20">
        <div className="default-container space-y-10">
          <button className="w-full mb-20 text-7xl rounded-full p-4 border border-white hover:bg-white hover:text-black transition-all duration-500">
            <a href="mailto:raashibhandari@gmail.com">raashibhandari@gmail.com</a>
          </button>
          <hr className="opacity-50"/>
          <div className="flex justify-between">
            <p>Raashi Bhandari</p>
            <div className="flex gap-4">
              <a
                className="underline"
                href="https://www.linkedin.com/in/raashi-bhandari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="underline"
                href="https://www.instagram.com/raashibhandari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="underline"
                href="https://www.behance.net/raashibhandari"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </div>
          </div>
          <hr className="opacity-50"/>
        </div>
      </div>
    </footer>
  );
}
