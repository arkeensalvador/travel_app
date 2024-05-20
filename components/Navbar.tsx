import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="relative flexBetween max-container 
    padding-container z-3 py-5">
      <link rel="stylesheet" href="" />
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt={"logo"} width={74} height={29} />


      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
        type="button"
        title="Login"
        icon="/user.svg"
        variant="btn_dark_green"
        />
      </div>

      <Image 
      src="menu.svg"
      alt="Menu"
      width={30}
      height={30}
      className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar
