import React from "react";
function References({ lang, setPage }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  const projects = [
    {
      title: isHR
        ? "Apartman uz more"
        : isEN
        ? "Seaside Apartment"
        : "Ferienwohnung am Meer",
      location: "Pisak, Croatia",
      image: "/ref1.jpg",
    },
    {
      title: isHR
        ? "Elegantna spavaća soba"
        : isEN
        ? "Elegant Bedroom"
        : "Elegantes Schlafzimmer",
      location: "Omiš, Croatia",
      image: "/ref2.jpg",
    },
    {
      title: isHR
        ? "Terasa s pogledom"
        : isEN
        ? "Terrace with View"
        : "Terrasse mit Aussicht",
      location: "Brela, Croatia",
      image: "/ref3.jpg",
    },
    {
      title: isHR
        ? "Kuhinja & dnevni boravak"
        : isEN
        ? "Kitchen & Living"
        : "Küche & Wohnen",
      location: "Makarska, Croatia",
      image: "/ref4.jpg",
    },
    {
      title: isHR
        ? "Svijetli dnevni boravak"
        : isEN
        ? "Bright Living Room"
        : "Helles Wohnzimmer",
      location: "Omiš, Croatia",
      image: "/ref5.jpg",
    },
    {
      title: isHR
        ? "Outdoor Lounge"
        : isEN
        ? "Outdoor Lounge"
        : "Outdoor Lounge",
      location: "Brela, Croatia",
      image: "/ref6.jpg",
    },
  ];

  return (
<section className="bg-[#f7f2ed] min-h-screen pt-20">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

          {/* LEFT */}
          <div className="flex items-center px-8 md:px-16 py-16">

            <div className="max-w-xl">

<h1 className="font-serif text-5xl md:text-6xl text-[#2f3a40] leading-tight whitespace-pre-line mb-8">
                {isHR
                  ? "Projekti &\ninspiracija"
                  : isEN
                  ? "Projects & Inspirations"
                  : "Referenzen & Inspirationen"}
              </h1>

              <div className="w-20 h-[1px] bg-[#c6a27b] mb-8"></div>

              <p className="text-[#5f6a70] text-lg leading-relaxed max-w-md">
                {isHR
                  ? "Odabrani projekti, skladni interijeri i prostori uređeni s osjećajem za stil i atmosferu."
                  : isEN
                  ? "Selected projects, thoughtful interiors and spaces designed with atmosphere and character."
                  : "Einblicke in ausgewählte Projekte, stilvolle Raumgestaltung und individuelle Wohnkonzepte."}
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden">

            <img
              src="/references-hero.jpg"
              alt="References"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#f7f2ed] via-[#f7f2ed]/92 to-transparent"></div>

          </div>

        </div>

        {/* MOBILE */}
        <div className="lg:hidden relative h-[320px] overflow-hidden">

          <img
            src="/references-hero.jpg"
            alt="References"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35"></div>

          <div className="relative z-10 h-full flex items-center px-8 pt-16">

            <div>

              <h1 className="font-serif text-5xl text-white leading-tight mb-6">
                {isHR
                  ? "Projekti & inspiracija"
                  : isEN
                  ? "Projects & Inspirations"
                  : "Referenzen & Inspirationen"}
              </h1>

              <div className="w-16 h-[1px] bg-white/70 mb-6"></div>

              <p className="text-white/90 leading-relaxed max-w-sm">
                {isHR
                  ? "Odabrani projekti i inspiracija za stilsku i individualnu prostoriju."
                  : isEN
                  ? "Selected projects and inspiration for stylish and individual living spaces."
                  : "Ausgewählte Projekte und Inspirationen für stilvolle Wohnkonzepte."}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="font-serif text-4xl text-[#2f3a40] mb-6">
            {isHR
              ? "Odabrani projekti"
              : isEN
              ? "Selected Projects"
              : "Ausgewählte Projekte"}
          </h2>

          <div className="w-16 h-[1px] bg-[#c6a27b] mx-auto"></div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <button
              key={index}
              className="bg-white text-left rounded-[28px] overflow-hidden border border-[#eee5dc] hover:shadow-md transition"
            >

              <div className="aspect-[4/3] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-7">

                <h3 className="font-serif text-2xl text-[#2f3a40] mb-3">
                  {project.title}
                </h3>

                <p className="text-sm tracking-[0.18em] uppercase text-[#8a8f93] mb-6">
                  {project.location}
                </p>

                <span className="text-[#b68c63] tracking-[0.08em] text-sm uppercase">
                  {isHR
                    ? "Više detalja"
                    : isEN
                    ? "View Project"
                    : "Mehr entdecken"}
                </span>

              </div>

            </button>
          ))}

        </div>

      </section>

    </section>
  );
}

export default References;


