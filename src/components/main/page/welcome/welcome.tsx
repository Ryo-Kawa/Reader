import Image from "next/image";
import { BASE_PATH } from "@/components/home";

export default function Welcome() {
    return (
        <section>
            <Image src={`${BASE_PATH}./image/welcome.svg`} alt="天文気象部へようこそ！" width={200} height={150}></Image>
        </section>
    );
}