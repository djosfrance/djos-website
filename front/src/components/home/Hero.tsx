export default function Hero() {
  return (
    <section id="hero" className="storm-active">
      <div className="hero-storm hero-storm-back" />
      <div className="hero-storm hero-storm-front" />
      <div className="hero-sky-flash" />
      <div className="hero-lightning hero-lightning-1" />
      <div className="hero-lightning hero-lightning-2" />
      <div className="hero-lightning hero-lightning-3" />
      <div className="hero-noise" />

      <div className="container hero-content">
        <div className="hero-slogan">
          "Le tonnerre après l&apos;<span className="accent">éclair."</span>
        </div>

        <h1 className="hero-title">
          LA VISION DE <span className="accent">DJOS</span>
        </h1>

        <p className="hero-sub">
          Une histoire gravée dans la nuit. Nuit du 14 au 15 avril 1718. Nuit du Vendredi saint. <br/>
          Le philosophe Boureau-Deslandes écrivait après coup : <br/>
          <span className="accent">« Il fit trois coups de tonnerre les plus horribles que j’aie jamais entendus. »</span>
        </p>

        <div className="hero-ctas">
          <a href="#produit" className="btn-primary">
            Commander maintenant
          </a>
          <a href="#histoire" className="btn-secondary">
            Découvrir l&apos;histoire
          </a>
        </div>
      </div>
    </section>
  );
}