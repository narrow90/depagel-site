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
    image: "/images/team/team-3.jpg",
    order: "order-3 md:order-3",
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
    <section id="team"className="bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex w-40 items-center justify-center rounded-full bg-[#046DB6] px-7 py-1 text-center text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] sm:w-auto">
            Il nostro team
          </span>

          <h2 className="mt-6 text-4xl font-regular tracking-tight text-[#51606F] sm:text-5xl">
            
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#7e8994]">
            
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 space-y-10">

  {/* TOP ROW */}
  <div className="flex flex-wrap justify-center gap-8">
    {team.slice(0, 3).map((member) => (
      <article
        key={member.name}
        className={`${member.order ?? ""} w-full max-w-[320px] group overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
      >
        <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full border-4 border-[#D1F0FC]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-6 text-center">
          

          <h3 className="mt-4 text-xl font-regular text-[#51606F]">
            {member.name}
          </h3>

          <p className="mt-2 text-sm text-[#7e8994]">
            {member.role}
          </p>
        </div>
      </article>
    ))}
  </div>

  {/* BOTTOM ROW */}
  <div className="flex flex-wrap justify-center gap-8">
    {team.slice(3, 8).map((member) => (
      <article
        key={member.name}
        className="w-[180px] group overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[#D1F0FC]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-6 text-center">
          

          <h3 className="mt-4 text-sm font-regular text-[#51606F]">
            {member.name}
          </h3>

          <p className="mt-2 text-sm text-[#7e8994]">
            {member.role}
          </p>
        </div>
      </article>
    ))}
  </div>

</div>
      </div>
    </section>
  );
}