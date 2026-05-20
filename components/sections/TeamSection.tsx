import Image from "next/image";

const team = [
  {
    name: "Mario Rossi",
    role: "CEO & Founder",
    image: "/images/team/team-1.jpg",
    partner: true,
  },
  {
    name: "Luca Bianchi",
    role: "Responsabile Produzione",
    image: "/images/team/team-2.jpg",
    partner: true,
  },
  {
    name: "Giuseppe Verdi",
    role: "Direzione Commerciale",
    image: "/images/team/team-3.jpg",
    partner: true,
  },
  {
    name: "Antonio Esposito",
    role: "Controllo Qualità",
    image: "/images/team/team-4.jpg",
  },
  {
    name: "Marco Romano",
    role: "Responsabile Logistica",
    image: "/images/team/team-5.jpg",
  },
  {
    name: "Davide Greco",
    role: "Amministrazione",
    image: "/images/team/team-6.jpg",
  },
  {
    name: "Francesco Ferrara",
    role: "Responsabile Clienti",
    image: "/images/team/team-7.jpg",
  },
  {
    name: "Francesco Ferrara",
    role: "Responsabile Clienti",
    image: "/images/team/team-7.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#046DB6] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#046DB6]/20">
            Il nostro team
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#51606F] sm:text-5xl">
            Persone, esperienza e qualità
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#7e8994]">
            Un team composto da professionisti specializzati nel settore
            dolciario, uniti dalla passione per la qualità e
            dall’attenzione verso il cliente.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 space-y-10">

  {/* TOP ROW */}
  <div className="flex flex-wrap justify-center gap-8">
    {team.slice(0, 3).map((member) => (
      <article
        key={member.name}
        className="w-full max-w-[320px] group overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
          {member.partner && (
            <span className="inline-flex rounded-full bg-[#046DB6]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#046DB6]">
              Socio
            </span>
          )}

          <h3 className="mt-4 text-xl font-semibold text-[#51606F]">
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
          {member.partner && (
            <span className="inline-flex rounded-full bg-[#046DB6]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#046DB6]">
              Socio
            </span>
          )}

          <h3 className="mt-4 text-lg font-semibold text-[#51606F]">
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