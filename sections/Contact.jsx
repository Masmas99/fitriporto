import ContactCard from "@/components/ContactCard";
import CopyButton from "@/components/CopyButton";
import Icon from "@/components/Icon";
import PaperClip from "@/components/PaperClip";
import SectionHeading from "@/components/SectionHeading";
import StickyNote from "@/components/StickyNote";
import Tape from "@/components/Tape";
import { Envelope, Star } from "@/components/Doodles";
import { contact, socialLinks } from "@/data/site";

export default function Contact() {
  const { email } = contact;
  const emailReady = Boolean(email.href);
  const tilts = [-1.5, 1, -0.8, 1.6];

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="sheet sheet--torn-top" style={{ "--tilt": "0.6deg" }} data-reveal>
        <PaperClip variant="binder" color="dark" className="sheet__binder sheet__binder--right" />
        <Tape color="pink" className="sheet__corner-tape sheet__corner-tape--tl" />

        <div className="contact__grid">
          <div className="contact__intro">
            <SectionHeading
              id="contact-title"
              number="04"
              kicker="Contact"
              title="SAY HELLO!"
              highlight="HELLO!"
            />
            <p className="contact__message">
              Mau ngobrol, berkolaborasi, atau sekadar menyapa? Pintuku selalu
              terbuka. Kontak resmi akan segera ditambahkan di sini.
            </p>

            <div className="contact__cta">
              {emailReady ? (
                <>
                  <a className="btn btn--yellow" href={email.href}>
                    <Icon name="mail" size={18} />
                    Kirim Email
                  </a>
                  <CopyButton text={email.value} />
                </>
              ) : (
                <p className="pending-note" role="note">
                  <Icon name="clock" size={18} />
                  Tombol kirim email akan aktif setelah alamat email dikonfirmasi.
                </p>
              )}
            </div>

            <div className="contact__envelope" aria-hidden="true">
              <Envelope className="float float--slow" />
              <Star className="contact__star" filled />
            </div>
          </div>

          <div className="contact__cards">
            <ContactCard label={email.label} value={email.value} href={email.href} icon="mail" tilt={tilts[0]} />
            {socialLinks.map((s, i) => (
              <ContactCard
                key={s.id}
                label={s.label}
                value={s.value}
                href={s.href}
                icon={s.icon}
                tilt={tilts[(i + 1) % tilts.length]}
              />
            ))}
            <StickyNote color="yellow" tilt={-3} className="contact__sticky">
              <p className="hand">Let&apos;s create something together ✿</p>
            </StickyNote>
          </div>
        </div>
      </div>
    </section>
  );
}
