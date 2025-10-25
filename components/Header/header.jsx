import Image from "next/image"
import logo from "@/public/assets/images/logo-mini.svg"
import HeaderActions from "../ui/HeaderActions"
 
export default function Header() {
  const menuItems = [
    { label: "HOME", href: "#" },
    {
      label: "COMMUNITY",
      items: ["Feed", "Groups", "Members"],
    },
    {
      label: "PAGES",
      items: ["About", "Contact", "FAQ"],
    },
    {
      label: "BLOG",
      items: ["All Posts", "Categories", "Authors"],
    },
    {
      label: "SHOP",
      items: ["Products", "Cart", "Checkout"],
    },
  ]

  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex h-20 items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={40} height={40} />
            <span className="text-xl md:text-3xl font-semibold text-foreground">
              SocialV
            </span>
          </div>

           <HeaderActions menuItems={menuItems} />
        </div>
      </div>
    </header>
  )
}
