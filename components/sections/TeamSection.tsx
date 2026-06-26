import Image from "next/image";

const team = [
  {
    name: "Giuseppe Salerno",
    role: "Owner | CEO | Co-Founder",
    image: "/images/team/GIUSEPPE-SALERNO.webp",
    order: "order-2 md:order-1",
    partner: true,
  },
  {
    name: "Bruno De Rosa",
    role: "Owner | Founder",
    image: "/images/team/BRUNO-DE-ROSA.webp",
    order: "order-1 md:order-2",
    partner: true,
  },
  {
    name: "Pietro Tulimieri",
    role: "Owner | Co-Founder | Sales Manager",
    image: "/images/team/PIETRO-TULIMIERI.webp",
    order: "order-3 md:order-3",
    partner: true,
  },
  {
    name: "Amedeo Rossomando",
    role: "Project Manager",
    image: "/images/team/AMEDEO-ROSSOMANDO.webp",
    order: "order-4 md:order-4",
    partner: true,
  },
  {
    name: "Michele Di Gaetano",
    role: "Senior Production Manager",
    image: "/images/team/MICHELE-DI-GAETANO.webp",
  },
  {
    name: "Antonio Di Gaetano",
    role: "Junior Production Manager",
    image: "/images/team/ANTONIO-DI-GAETANO.webp",
  },
  {
    name: "Alfonso Corrado",
    role: "Production Operator",
    image: "/images/team/ALFONSO-CORRADO.webp",
  },
  {
    name: "Pietro Bruno",
    role: "Production Operator",
    image: "/images/team/PIETRO-BRUNO.webp",
  },
  {
    name: "Nunzio Chiaviello",
    role: "Warehouse Manager",
    image: "/images/team/NUNZIO-CHIAVIELLO.webp",
  },
];

export default function TeamSection() {
  return (

    <section id="team"  className="mt-24">
  <div className="mb-20 text-center">
    <span className="inline-flex w-40 items-center justify-center rounded-full bg-[#046DB6] px-7 py-1 text-center text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] sm:w-auto">
      Il nostro team
    </span>

    <h2 className="mt-6 text-4xl font-semiregular text-[#51606F]">
      
    </h2>

    <p className="mx-auto mt-10 max-w-2xl text-lg text-[#7e8994]">
      
    </p>
  </div>

    
  {/* TOP ROW */}
  <div className="flex flex-wrap justify-center gap-8">
    {team.slice(0, 3).map((member) => (
      <article
        key={member.name}
        className={`${member.order ?? ""} w-full max-w-[320px] group overflow-hidden rounded-[32px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
      >
        <div className="relative h-[420px] w-[320px] overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            width={1536}
            height={1024}
            quality={100}
            className="h-full w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-center p-3 text-center text-[#D1F0FC]">
            <h3 className="text-2xl font-regular">
              {member.name}
            </h3>

            <p className="mt-0 text-sm text-white/80">
              {member.role}
            </p>
          </div>
        </div>
      </article>
    ))}
  </div>
  {/* BOTTOM ROW */}
  <div className="mt-16 flex flex-wrap justify-center gap-6">
    {team.slice(3, 8).map((member) => (
      <article
        key={member.name}
        className="group relative overflow-hidden rounded-[28px] bottom-10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative h-[300px] w-[220px] overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            width={1536}
            height={1024}
            quality={100}
            className="h-full w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-center p-3 text-center text-[#D1F0FC]">
            <h3 className="text-lg font-regular">
              {member.name}
            </h3>

            <p className="mt-0 text-xs text-white/80">
              {member.role}
            </p>
          </div>
        </div>
      </article>
    ))}
  </div>
  </section>
  );
}