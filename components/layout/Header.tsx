import Link from "next/link";
import { Socials } from "../Socials";
import { ThemeSwitch } from "../theme/ThemeSwitch";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">RVA</h1>

                <nav className="navigation">
                    <Link href="/">Home</Link>
                </nav>

                <div className="actions">
                    <Socials />
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    );
};
