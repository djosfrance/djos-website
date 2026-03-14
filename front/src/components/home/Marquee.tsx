export default function Marquee() {
  return (
    <section className="bande">

      <div className="bande-track">

        <span>Fabriqué en France</span>
        <span>Paris influence le monde</span>
        <span>La Puissance du Ciel</span>
        <span>La Vision de DJOS</span>

        {/* duplication pour boucle */}

        <span>Fabriqué en France</span>
        <span>Paris influence le monde</span>
        <span>La Puissance du Ciel</span>
        <span>La Vision de DJOS</span>

      </div>

    </section>
  );
}