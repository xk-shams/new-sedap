import styles from "@/styles/Aside.module.css";
import Image from "next/image";

export default function SearchBtn(props) {
  const { img, num, back } = props;
  return (
    <>
      <button className={styles.searchBtn} style={{ backgroundColor: back }}>
        <Image src={img} alt="gg" width={28} height={28} />
        <span className={styles.topNum}>{num}</span>
      </button>
    </>
  );
}
