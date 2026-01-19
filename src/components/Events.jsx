import { useRouter } from "next/navigation";
import { PinContainer } from "@/components/ui/3d-pin";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define event data outside the component to avoid recreating on each render
const eventItems = [
  {
    id: "1",
    route: "/events/projectxplosion",
    title: "ProjectXplosion",
    description:
      "Showcase your innovative ideas where creativity meets technology. Present your projects across various domains, compete with the best, and win exciting cash prizes!",
    imageSrc: "/temp3.png",
    gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500",
  },
  {
    id: "2",
    route: "/events/hackoff-ctf",
    title: "HACKOFF CTF",
    description:
      "Engage in thrilling cyber challenges at Capture The Flag (CTF) event! Test your hacking skills, solve puzzles, and decode hidden messages to capture the hidden flag.",
    imageSrc: "/temp2.png",
    gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500",
  },
  {
    id: "3",
    route: "/events/code-sprint-odyssey",
    title: "CodeSprint Odyssey",
    description:
      "In this fast-paced event, teams of three will take turns at the keyboard—switching every 5 minutes—to tackle coding challenges.",
    imageSrc: "/temp5.png",
    gradient: "bg-gradient-to-br from-red-500 via-pink-500 to-purple-500",
  },
];

export default function Events() {
  const router = useRouter();
  useSectionObserver("events", "Events");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const navigateToEvent = (eventId) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <section id="events" className="relative h-full w-full py-20 md:py-24">
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"></div>
      <SectionHeading> Events </SectionHeading>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12 place-items-center py-20 stagger-children"
          )}
        >
          {eventItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => navigateToEvent(item.id)}
              className={cn(
                "cursor-pointer hover-scale animate-fade-up",
                isVisible && "is-visible"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <PinContainer title={item.route}>
                <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4 font-serif">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                  <div
                    className={`flex-1 w-full rounded-lg overflow-hidden ${item.gradient}`}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={`${item.title} Banner`}
                      width={336}
                      height={200}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
        <div
          className="flex justify-center items-center mt-8"
          onClick={() => router.push("/events")}
        >
          <button
            className="px-6 py-3 sm:px-8 sm:py-4 text-md sm:text-lg font-medium font-serif
               text-white bg-gradient-to-r from-blue-500 to-teal-400 
               rounded-full shadow-lg 
               hover:from-teal-400 hover:to-blue-500 
               transition-all hover-scale 
               dark:from-teal-400 dark:to-blue-500 
               dark:hover:from-blue-500 dark:hover:to-teal-400"
            style={{ borderRadius: "3rem" }}
          >
            View All Events →
          </button>
        </div>
      </div>
    </section>
  );
}
