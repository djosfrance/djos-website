export default function Marquee() {
  return (
    <section className="bande">

      <div className="bande-track">

        <span>Performance française • Héritage camerounais & guadeloupéen</span>
        <span>Paris influence le monde</span>
        <span>La Force du Tonnerre</span>

        {/* duplication pour boucle */}

        <span>Performance française • Héritage camerounais & guadeloupéen</span>        
        <span>Paris influence le monde</span>
        <span>La Force du Tonnerre</span>

      </div>

    </section>
  );
}