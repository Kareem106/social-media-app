"use client"

import { useState } from "react"
import {Search , Sun , User , Mail , ShoppingCart , ChevronDown , Menu ,X } from "lucide-react"

export default function HeaderActions({ menuItems }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-5">
        {menuItems.map((item, index) =>
          item.items ? (
            <div
              key={index}
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
              className="relative"
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
                {item.label} <ChevronDown className="h-4 w-4" />
              </button>

              {openDropdown === item.label && (
                <div className="absolute left-0 top-3 mt-2 w-32 bg-white dark:bg-gray-900 shadow-md rounded-md border border-border py-2 z-50">
                  {item.items.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-3 py-1.5 text-sm text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-foreground"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          )
        )}
      </nav>

      {/* Right Side Icons */}
      <div className="flex items-center gap-2">
        {/* Search Input */}
        <div className="relative hidden sm:block w-full max-w-[180px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input
            type="text"
            placeholder="Search Here"
            className="pl-10 pr-4 py-2 text-sm bg-[#f8f9fa] rounded-[5px] border border-border text-foreground placeholder:text-muted-foreground w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <button className="text-muted-foreground hover:text-foreground">
            <Sun className="h-6 w-6" />
          </button>

          <button className="text-muted-foreground hover:text-foreground">
            <Mail className="h-6 w-6" />
          </button>

          <button className="relative text-muted-foreground hover:text-foreground">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              1
            </span>
          </button>

          <div className="bg-primary rounded-full p-2 text-white">
            <User className="h-6 w-6" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground ml-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 min-h-screen bg-background border-t border-border py-3 space-y-2 shadow-md z-50">
          {menuItems.map((item, index) =>
            item.items ? (
              <details key={index} className="px-4 my-5">
                <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-blue-600 flex items-center justify-between">
                  {item.label}
                  <ChevronDown className="h-4 w-4 inline" />
                </summary>
                <div className="mt-1 space-y-1 pl-4">
                  {item.items.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-foreground"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={index}
                href={item.href}
                className="block px-4 text-sm font-medium text-muted-foreground hover:text-blue-600"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </>
  )
}
