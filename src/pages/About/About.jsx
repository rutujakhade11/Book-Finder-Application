import aboutImg from "../../images/about-img.jpg"; // Importing the about image; ensure the path is correct

// About component to display information about BookFinder
const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="p-6 md:p-12">
        {/* Section title for the About page */}
        <div className="section-title mb-8">
          <h2 className="text-2xl font-bold text-black uppercase">About</h2>
        </div>

        {/* Grid layout for the image and text */}
        <div className="grid gap-8 md:gap-16 md:grid-cols-2">
          {/* About image section */}
          <div className="about-img">
            <img
              src={aboutImg}
              alt="About BookFinder"
              className="max-w-full h-auto transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
          </div>

          {/* About text section */}
          <div className="about-text">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              About BookFinder
            </h2>

            {/* Description paragraphs about BookFinder */}
            <p className="text-base md:text-lg opacity-80 mb-6">
              BookFinder is a smart and user-friendly platform designed to help readers discover, locate, and access books easily across various online and offline sources. Whether you're searching for academic references, novels, or rare editions, BookFinder provides accurate results and streamlined navigation.
            </p>
            <p className="text-base md:text-lg opacity-80 mb-6">
              Our mission is to simplify the process of finding books by integrating modern search technologies, user recommendations, and digital library connections. BookFinder aims to empower readers, students, and researchers by offering an organized and transparent way to access the literature they need.
            </p>
            <p className="text-base md:text-lg opacity-80 mb-6">
              We ensure that all book-related information is obtained from verified sources, adhering to legal and copyright regulations. Any use of third-party materials, images, or descriptions is credited appropriately, maintaining our commitment to ethical and responsible practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
