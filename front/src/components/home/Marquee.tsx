export default function Marquee() {
  return (
    <section className="bande">

      <div className="bande-track">

        <span>Vision française • Héritage camerounais & guadeloupéen</span>
        <span>La nouvelle génération d'athlètes</span>
        <span>La Force du Tonnerre</span>

        {/* duplication pour boucle */}

        <span>Vision française • Héritage camerounais & guadeloupéen</span>        
        <span>La nouvelle génération d'athlètes</span>
        <span>La Force du Tonnerre</span>

      </div>

    </section>
  );
}