import Link from "next/link";
import { useRouter } from "next/router";
import { ImageComponent } from "../ImageComponent";
import { Socials } from "../Socials";
import { ThemeSwitch } from "../theme/ThemeSwitch";

export const Header = () => {
    const path = useRouter().pathname;

    return (
        <header className="header">
            <div className="container">
              
                <Link href="/">
                    <a className="logo">
                        <ImageComponent src="/images/logo/logo-rowinvanamsterdam.svg" alt="rowinvanamsterdam logo" title="rowinvanamsterdam logo" />
                     </a>
                </Link>

                <nav className="navigation">
                    {/* <Link href="/"><a className={`navigation__item ${path === '/' ? "navigation__item--active" : ""}`}>Home</a></Link>
                    <Link href="/about"><a className={`navigation__item ${path === '/about' ? "navigation__item--active" : ""}`}>About</a></Link>
                    <Link href="/contact"><a className={`navigation__item ${path === '/contact' ? "navigation__item--active" : ""}`}>Contact</a></Link> */}
                </nav>

                <div className="actions">
                    <Socials />
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    );
};
