import Image from "next/image";
import Icon from "@/components/Icon";
import PaperClip from "@/components/PaperClip";
import PlaceholderText from "@/components/PlaceholderText";
import SectionHeading from "@/components/SectionHeading";
import Tape from "@/components/Tape";
import { Sparkle } from "@/components/Doodles";
import { certificates, certificateStatus } from "@/data/certificates";

export default function Certificates() {
  const tilts = [-0.8, 1, -0.6];
  const tapes = ["yellow", "pink", "blue"];

  return (
    <section id="certificates" className="section certificates" aria-labelledby="certificates-title">
      <div className="sheet sheet--holes" style={{ "--tilt": "0.3deg" }} data-reveal>
        <PaperClip variant="binder" color="yellow" className="sheet__binder sheet__binder--left" />
        <Tape color="pink" className="sheet__corner-tape sheet__corner-tape--tr" />

        <SectionHeading
          id="certificates-title"
          number="05"
          kicker="Lisensi & Sertifikasi"
          title="MY CERTIFICATES"
          highlight="CERTIFICATES"
          note="bukti belajar & pencapaian"
        />

        <p className="certificates__notice" role="note">
          <span className="stamp">VERIFIED</span>
          Sertifikat resmi kompetensi dan prestasi yang telah diraih oleh Fitri Muliawati.
        </p>

        <div className="certificates__grid">
          {certificates.map((cert, index) => {
            const statusInfo = certificateStatus[cert.status] || {
              label: "Verified",
              icon: "award",
            };
            const tilt = tilts[index % tilts.length];
            const tapeColor = tapes[index % tapes.length];

            return (
              <article
                key={cert.id}
                className={`certificate-card certificate-card--${cert.accent}`}
                style={{ "--tilt": `${tilt}deg` }}
                aria-labelledby={`cert-title-${cert.id}`}
              >
                <Tape color={tapeColor} className="certificate-card__tape" />

                {/* Header kartu sertifikat */}
                <div className="certificate-card__header">
                  <span className="certificate-card__number">{cert.number}</span>
                  <span className={`certificate-card__status certificate-card__status--${cert.status}`}>
                    <Icon name={statusInfo.icon} size={13} />
                    <span>{statusInfo.label}</span>
                  </span>
                </div>

                {/* Stempel medali / seal dekoratif */}
                <div className="certificate-card__seal" aria-hidden="true">
                  <div className="certificate-card__seal-inner">
                    <Icon name="award" size={24} />
                  </div>
                  <Sparkle className="certificate-card__sparkle" />
                </div>

                {/* Gambar Pratinjau Sertifikat (jika ada) */}
                {cert.image && (
                  <div className="certificate-card__preview">
                    <Image
                      src={cert.image}
                      alt={`Pratinjau ${cert.title}`}
                      width={480}
                      height={340}
                      className="certificate-card__img"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Isi sertifikat */}
                <div className="certificate-card__body">
                  <span className="certificate-card__category">{cert.category}</span>
                  <h3 id={`cert-title-${cert.id}`} className="certificate-card__title">
                    <PlaceholderText value={cert.title} />
                  </h3>

                  <div className="certificate-card__meta">
                    <p className="certificate-card__issuer">
                      <Icon name="award" size={15} />
                      <PlaceholderText value={cert.issuer} />
                    </p>
                    <p className="certificate-card__date">
                      <Icon name="calendar" size={15} />
                      <PlaceholderText value={cert.date} />
                    </p>
                  </div>

                  <p className="certificate-card__desc">{cert.description}</p>
                </div>

                {/* Footer kartu / Tombol aksi */}
                <div className="certificate-card__footer">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--small btn--yellow certificate-card__btn"
                    >
                      <span>Lihat Sertifikat PDF</span>
                      <Icon name="externalLink" size={14} />
                    </a>
                  ) : (
                    <div className="certificate-card__pending-note">
                      <Icon name="clock" size={14} />
                      <span>Link verifikasi akan aktif setelah dikonfirmasi</span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
