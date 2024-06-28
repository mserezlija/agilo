import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/logo.png";
import MenuIcon from "@/public/images/burger-menu.svg";
import styles from "@/components/main-header/main-header.module.css";

export default function MainHeader() {
  return (
    <header className={styles["main-header"]}>
      <div className={styles["menu"]}>
        <Link href="/">
          <div>
            <Image src={MenuIcon} alt="Menu" width={25} height={25} priority />
          </div>
        </Link>
      </div>
      <div className={styles["logo"]}>
        <Link href="/" className={styles["logo-link"]}>
          <Image
            src={Logo}
            alt="Medusajs logo"
            priority
            style={{
              width: "85px",
              height: "auto",
            }}
          />
        </Link>
      </div>
    </header>
  );
}
