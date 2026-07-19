"use client";

import { useState } from "react";
import FadeIn from "@/components/common/FadeIn";
import styles from "./ProductSection.module.css";

export default function ProductSection() {

  const [size, setSize] = useState("50");
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "/images/tonnerre-de-djos-face.png", alt: "Tonnerre de DJOS - Vue face" },
    { src: "/images/tonnerre-de-djos-dos.png", alt: "Né dans la Ville du Dragon - Vue côté" },
  ];

  const prices: Record<string, number> = {
    "30": 30,
    "50": 50,
    "100": 100
  };

  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <FadeIn>
      <section id="produit" className="section">
        <div className="produit-grid">

          {/* CAROUSEL */}
          <div className={styles.carouselWrapper}>
            <div className={`produit-tilt ${styles.carousel}`}>
              <div className="produit-smoke" />
                <div className="produit-shine" />
                  <img
                    key={currentImage}
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    className={styles.carouselImg}
                  />
                </div>

                {/* CONTRÔLES EN DEHORS DU CAROUSEL */}
                <div className={styles.controls}>
                  <button onClick={prevImage} className={styles.arrow} aria-label="Image précédente">‹</button>
                  <div className={styles.dots}>
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`${styles.dot} ${i === currentImage ? styles.dotActive : ""}`}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button onClick={nextImage} className={styles.arrow} aria-label="Image suivante">›</button>
                </div>
              </div>

              {/* CONTENU */}
              <div className="produit-content">
                <p className="section-kicker">La Vision</p>
                  <h2 className="produit-title">
              La puissance du dragon.
              <br />
              Contenue dans un seul flacon. Inimitable. Pure.
            </h2>

            <p className="produit-sub">
              Le ciel voit tout. Contrôle tout. Il n'oublie rien.
            </p>

            <div className="produit-price">
              {prices[size]} €
            </div>

            <div className="tailles">
              <button className={`taille-btn ${size === "30" ? "active" : ""}`} onClick={() => setSize("30")}>30 ML</button>
              <button className={`taille-btn ${size === "50" ? "active" : ""}`} onClick={() => setSize("50")}>50 ML</button>
              <button className={`taille-btn ${size === "100" ? "active" : ""}`} onClick={() => setSize("100")}>100 ML</button>
            </div>

            <div className="produit-actions">
              <a href="mailto:contact@djos.fr" className="btn-primary">
                Commander — {prices[size]} €
              </a>
            </div>

            <p className="produit-note">Livraison offerte dès 50 € d'achats • Paiement sécurisé • Retours 30 jours</p>
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
