import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Countdown from "./ui/Timer";
import { useSectionObserver } from "@/hooks/intersection-observer";

export function ContainerScrollAnimation() {
  useSectionObserver("home", "Home");
  return (
    <section
      id="home"
      className="flex flex-col overflow-hidden mt-8 backdrop-blur-sm text-gray-950 dark:text-gray-50 dark:text-opacity-90"
    >
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-6xl  mb-3 text-gray-700 dark:text-gray-50 sm:mb-5 leading-tight font-medium">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                Cyber
                <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-green-500 to-blue-600 text-transparent bg-clip-text">
                  X
                </span>
                elerate 3.0
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 font-serif">
              Empowering the next generation of cybersecurity enthusiasts
              through{" "}
              <span className="text-blue-500 dark:text-green-400 font-bold">
                cutting-edge competitions
              </span>{" "}
              and{" "}
              <span className="text-indigo-500 dark:text-indigo-400 font-bold">
                unparalleled opportunities.
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 sm:mb-8 font-serif">
              Join us in a journey to explore, compete, and excel in the
              ever-evolving world of{" "}
              <span className="bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 inline-block sm:mb-8 text-transparent bg-clip-text">
                Cybersecurity Excellence.
              </span>
            </p>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 mb-2 mt-2">
          <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 mr-2 ml-2">
            <Countdown eventDate="Feburary 9, 2026 08:30:00" />
            <Image
              src="/kali.png"
              alt="hero"
              height={820}
              width={1200}
              className="rounded-2xl object-cover sm:object-top shadow-lg"
              draggable={false}
            />
          </div>
          <p className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Let&apos;s get started! Happy Hacking
            </span>
            <span className="2xl">🧑‍💻</span>
          </p>
        </div>
      </ContainerScroll>
    </section>
  );
}
