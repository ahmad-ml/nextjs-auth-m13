import { SignInbutton } from "@/components/buttons";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
            <Image
                src="/logo.svg"
                alt="logo"
                width={216}
                height={30}
                />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/about'}>about</Link>
                </li>
                <li>
                    <Link href={'/blog'}>blog</Link>
                </li>
                <li>
                    <Link href={'/user'}>users</Link>
                </li>
                <li>
                    <SignInbutton />
                </li>

            </ul>
        </nav>
    );
}