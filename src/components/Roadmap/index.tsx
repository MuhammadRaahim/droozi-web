// components/Roadmap.jsx

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="
        w-full py-24
        bg-white text-dark
        dark:bg-[#1D242E] dark:text-white
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold">
          What&apos;s on the Horizon
        </h2>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We&apos;re just getting started. Here&apos;s what&apos;s coming next.
        </p>

        {/* Timeline */}
        <div className="mt-20 flex flex-col md:flex-row items-start justify-center gap-20">

          {/* Left Side — Timeline Line */}
          <div className="flex flex-col items-center">
            <span className="w-3 h-3 rounded-full bg-dark dark:bg-white"></span>

            <div className="w-px h-40 bg-gray-400 dark:bg-gray-600"></div>

            <span className="w-3 h-3 rounded-full bg-dark dark:bg-white"></span>

            <div className="w-px h-40 bg-gray-400 dark:bg-gray-600"></div>
          </div>

          {/* Right Side — Content */}
          <div className="text-left">
            {/* Q3 2025 */}
            <h3 className="text-xl font-semibold text-dark dark:text-white">
              Q3 2025
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Improve Map UI</li>
              <li>• Group Chat MVP</li>
              <li>• Notifications</li>
            </ul>

            {/* Q4 2025 */}
            <h3 className="mt-12 text-xl font-semibold text-dark dark:text-white">
              Q4 2025
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Launch Droozi 2.0</li>
              <li>• Google Calendar Integration PoC</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Roadmap;
