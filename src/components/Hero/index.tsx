import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark"
      >
        <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Column - Content */}
          <div className="w-full px-4 lg:w-7/12">
            <div className="mx-auto max-w-[600px] lg:mx-0">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Plan your future without sharing your present.
              </h1>
              <p className="mb-8 text-base text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Droozi lets you share where you’ll be—in advance and on your terms—so friends and colleagues can plan real-life meetups without ever tracking your live location.
              </p>
              <div className="flex w-full flex-col space-y-3 sm:w-auto sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                <Link
                  href="https://apps.apple.com/ae/app/droozi/id6708242315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
                >
                  {/* Apple Icon */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.365 1.43c0 1.14-.417 2.075-1.25 2.805-.833.73-1.79 1.153-2.86 1.07-.14-1.1.39-2.07 1.14-2.83.75-.77 2.05-1.33 2.97-1.05zM20.16 17.34c-.56 1.3-.82 1.88-1.55 3-.98 1.5-2.36 3.36-4.07 3.38-1.52.02-1.92-.99-3.99-.99-2.07 0-2.51.97-3.99 1.01-1.71.03-3.02-1.69-4-3.18C.33 17.2-1.13 9.9 1.6 5.8c1.36-2.03 3.52-3.22 5.99-3.22 1.87 0 3.43 1.02 3.99 1.02.56 0 2.43-1.26 4.6-1.07.91.04 3.47.37 5.12 2.78-.13.08-3.06 1.78-3.03 5.31.03 4.22 3.7 5.62 3.75 5.64z" />
                  </svg>
                  Download for iOS
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.droozi&hl=en"
                  className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 sm:px-8 sm:py-4 sm:text-base"
                  target="_blank"
                >
                  {/* Android Icon */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.6 9.48l1.84-3.18a.4.4 0 00-.14-.55.4.4 0 00-.55.14l-1.87 3.23a7.06 7.06 0 00-9.76 0L5.25 5.89a.4.4 0 10-.69.41l1.84 3.18A6.9 6.9 0 004 14h16a6.9 6.9 0 00-2.4-4.52zM9 12.5a.75.75 0 11.001-1.501A.75.75 0 019 12.5zm6 0a.75.75 0 11.001-1.501A.75.75 0 0115 12.5z" />
                  </svg>
                  Download for Android
                </Link>

              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="relative mt-10 lg:mt-0">
              <Image
                src="/hero-image1.png" 
                alt="Hero Image"
                width={700}
                height={750}
                className="mx-auto lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" />
                <stop offset="1" stopColor="#000" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" />
                <stop offset="1" stopColor="#000" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" />
                <stop offset="1" stopColor="#000" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" />
                <stop offset="1" stopColor="#000" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
