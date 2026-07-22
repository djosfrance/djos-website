export default function Hero() {
  return (
    <section id="hero" className="storm-active relative overflow-hidden">
      <div className="hero-storm hero-storm-back" />
      <div className="hero-storm hero-storm-front" />
      <div className="hero-sky-flash" />
      <div className="hero-lightning hero-lightning-1" />
      <div className="hero-lightning hero-lightning-2" />
      <div className="hero-lightning hero-lightning-3" />
      <div className="hero-noise" />

      <div className="container mx-auto px-5 sm:px-8">
        <div className="hero-content flex items-center justify-center text-center">
          <div>

            <div className="hero-slogan text-xl sm:text-2xl lg:text-4xl">
              "Le tonnerre après <span className="accent">l&apos;éclair.</span>"
            </div>

            <h1 className="
              hero-title
              mt-6
              text-5xl
              leading-[0.9]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            ">
              LE TONNERRE DE <span className="accent-djos">DJOS</span>
            </h1>

            <p className="
              hero-sub
              mx-auto
              mt-8
              max-w-3xl
              text-base
              leading-relaxed
              sm:text-lg
              lg:text-xl
            ">
              Nuit du 14 au 15 avril 1718.<br/>
              <span className="accent">
                « Il fit trois coups de tonnerre les plus horribles que j’aie jamais entendus. »<br/>
              </span>
              — André-François Boureau-Deslandes
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}