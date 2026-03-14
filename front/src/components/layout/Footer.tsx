export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <p className="footer-desc">
            Une maison portée par l&apos;héritage laissé, la vision éclairée et la transcendance totale.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#produit">La Vision</a></li>
            <li><a href="#histoire">L&apos;histoire</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@djos.fr">contact@djos.fr</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© DJOS 2026 — Tous droits réservés.</p>
        <div className="footer-bottom-links">
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}