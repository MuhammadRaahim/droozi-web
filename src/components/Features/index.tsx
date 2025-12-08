import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <SectionTitle
            title="Meet IRL, not just online."
            paragraph="Droozi solves the real-world problems of coordinating plans without over-sharing."
            center
          />

          {/* Split Section */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT — Feature Cards */}
            <div className="flex flex-col space-y-5">

              {/* Card 1 */}
              <div className="rounded-xl bg-gray-50 dark:bg-gray-dark p-6 border border-gray-200 dark:border-white/10">
                <div className="flex items-start space-x-4">
                  <span className="text-primary text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                      className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3.98 8.223a6.97 6.97 0 0110.713-3.707m2.454 2.454a6.969 6.969 0 01-3.707 10.713m2.54-6.18a2.25 2.25 0 11-3.182-3.182" />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Missed Connections?
                    </h3>
                    <p className="text-primary font-semibold mt-1">Not Anymore.</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Use date-stamped future pins to share “Chicago • Aug 18–20”
                      with chosen contacts, turning “I was just there!” into
                      “See you there!”
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl bg-gray-50 dark:bg-gray-dark p-6 border border-gray-200 dark:border-white/10">
                <div className="flex items-start space-x-4">
                  <span className="text-primary text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                      className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5M3.75 10.5h16.5M6 10.5v7.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18v-7.5" />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Over-sharing Your Location?
                    </h3>
                    <p className="text-primary font-semibold mt-1">Never Again.</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Your location stays private and fully encrypted until you publish it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl bg-gray-50 dark:bg-gray-dark p-6 border border-gray-200 dark:border-white/10">
                <div className="flex items-start space-x-4">
                  <span className="text-primary text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                      className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M7.5 9.75h9m-9 4.5h6m-3 6.75a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Scattered Invites?
                    </h3>
                    <p className="text-primary font-semibold mt-1">All In One Place.</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Centralized RSVPs and automatic plan sync make coordination easy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/features-phone.png"
                alt="Droozi App"
                width={320}          // reduced from 420
                height={580}         // reduced proportionally
                className="rounded-xl shadow-xl w-full max-w-[220px] md:max-w-[260px] lg:max-w-[300px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
