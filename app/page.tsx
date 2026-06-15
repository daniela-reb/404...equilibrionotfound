import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">

      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="fixed inset-0 -z-10" />

      <div className="flex items-center justify-center mt-48">

        <main className="w-full max-w-3xl p-6 sm:p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">

          <div className="flex flex-col gap-6 text-center sm:text-left">

            <p className="text-xl sm:text-2xl leading-relaxed">
              Dire tutto quello che proviamo dentro si può?
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              La mia esperienza, finora, mi dice di no.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              Spesso, quando ci mostriamo per quello che siamo davvero, scoppia il caos: il mondo si spaventa, si allontana, sparisce.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              E allora iniziamo a ridimensionarci, a diventare più piccoli.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              Finché diventiamo due persone: una fuori e una dentro.
            </p>

            <p className="text-sm sm:text-base italic opacity-90">
              Siamo tutti così? Non lo so… scopriamolo insieme.
            </p>

          </div>

        </main>
      </div>
    </div>
  );
}