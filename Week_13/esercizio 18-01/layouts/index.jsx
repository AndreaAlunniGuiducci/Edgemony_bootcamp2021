import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

export default function DefaultLayout({ children }) {
    const router = useRouter();

    return (
        <>
            <div className={styles.nav}>
                <ul>
                    <li className={`${router.pathname === '/home' && styles.activeBtn}`}>
                        <Link href="/home">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/gallery' && styles.activeBtn}`}>
                        <Link href="/gallery">
                            <a>Gallery</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.content}>{children}</div>

            <div className={styles.footer}>Footer</div>
        </>
    );
}   