import Image from "next/image";
import Eximg from "/public/logo.png"
import Link from "next/link";

function Logo() {
    return (
        <header className={`absolute w-full z-10`}>
            <div className={`mt-[43px] ml-[120px] container`}>
                <Link href='/'>
                    <Image src={Eximg} alt={`logo-img`} width={217} height={65} />
                </Link>
            </div>
        </header>
    )
}

export default Logo;