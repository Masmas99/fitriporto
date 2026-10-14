import BackToTopButton from "./BackToTopButton";
import CurrentYear from "./CurrentYear";
import Tape from "./Tape";
import { Heart, Sparkle } from "./Doodles";

export default function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="footer-strip">
        <Tape color="yellow" className="footer-strip__tape" />
        <div className="footer-strip__identity">
          <p className="footer-strip__name">
            <Sparkle className="footer-strip__star" />
            {name}
          </p>
          <p className="footer-strip__tagline hand">
            Made with curiosity and a little bit of magic <Heart className="footer-strip__heart" />
          </p>
        </div>
        <p className="footer-strip__copy">
          © <CurrentYear /> {name}. All rights reserved.
        </p>
        <BackToTopButton />
      </div>
    </footer>
  );
}
