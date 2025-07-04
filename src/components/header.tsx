"use client";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import { audienceVariants } from "@/lib/audienceVariants";

export default function Header({ audience = "default" }: { audience?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const variant = audienceVariants[audience] ?? audienceVariants["default"];

  return (
    <header className="flex items-center justify-between gap-3 border-b px-4 md:px-8 py-4 relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {variant?.icon ? (
          <span className="text-2xl">{variant.icon}</span>
        ) : (
          <Leaf className="h-7 w-7 text-primary" />
        )}
        <h1 className="text-lg font-medium tracking-loose">
          <span
            className={
              variant?.accentColor ? variant.accentColor : "text-primary"
            }
          >
            the ai forest
          </span>
        </h1>
      </div>

      {/* Desktop/Tablet Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <Link href="/login" className="hover:text-primary transition-colors">
          Login
        </Link>

        <div className="relative">
          <button className="peer hover:text-primary transition-colors">
            About
          </button>
          <div className="absolute left-0 top-full mt-2 hidden peer-hover:flex hover:flex flex-col bg-background border rounded-md shadow-lg">
            <Link href="/about/what-is-the-ai-forest" className="px-4 py-2 hover:bg-muted">
              What Is The AI Forest?
            </Link>
            <Link href="/about/vision-statement" className="px-4 py-2 hover:bg-muted">
              Vision Statement
            </Link>
            <Link href="/about/history" className="px-4 py-2 hover:bg-muted">
              History
            </Link>
          </div>
        </div>

        <div className="relative">
          <button className="peer hover:text-primary transition-colors">
            Impact
          </button>
          <div className="absolute left-0 top-full mt-2 hidden peer-hover:flex hover:flex flex-col bg-background border rounded-md shadow-lg">
            <Link
              href="/impact/carbon-sequestration"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted"
            >Carbon Sequestration</Link>
            <Link
              href="/impact/water-retention"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted"
            >Water Retention</Link>
            <Link
              href="/impact/biodiversity"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted"
            >Biodiversity</Link>
            <Link
              href="/impact/soil-organic-matter"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted"
            >Soil Organic Matter</Link>
          </div>
        </div>

        <div className="relative">
          <button className="peer hover:text-primary transition-colors">
            Publication
          </button>
          <div className="absolute left-0 top-full mt-2 hidden peer-hover:flex hover:flex flex-col bg-background border rounded-md shadow-lg">
            <Link
              href="/publication/news"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted"
            >News</Link>
            <Link
              href="/publication/data"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted"
            >Data</Link>
            <Link
              href="/publication/docs"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted"
            >Documents</Link>
            <Link
              href="/publication/media"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted"
            >Media</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-muted transition"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6  text-gray-600" />
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Slide-out Panel */}
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-background shadow-lg z-50 flex flex-col transform transition-transform ease-in-out duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-medium">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="hover:bg-muted p-1 rounded-md"
              >
                <X className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-1 p-4 text-sm font-medium text-foreground">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded hover:bg-muted"
              >
                Login
              </Link>

              <div className="flex flex-col">
                <span className="p-2 font-semibold">About</span>
                <Link
                  href="/about/what-is-the-ai-forest"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >
                  What Is The AI Forest?
                </Link>
                <Link
                  href="/about/vision-statement"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >
                  Vision Statement
                </Link>
                <Link
                  href="/about/history"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >
                  History
                </Link>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/impact"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded hover:bg-muted font-semibold"
                >
                  Impact
                </Link>
                <Link
                  href="/impact/carbon-sequestration"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >Carbon Sequestration</Link>
                <Link
                  href="/impact/water-retention"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >Water Retention</Link>
                <Link
                  href="/impact/biodiversity"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >Biodiversity</Link>
                <Link
                  href="/impact/soil-organic-matter"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >Soil Organic Matter</Link>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/publication"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded hover:bg-muted font-semibold"
                >
                  Publication
                </Link>
                <Link
                  href="/publication/news"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >News</Link>
                <Link
                  href="/publication/data"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >Data</Link>
                <Link
                  href="/publication/docs"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >Documents</Link>
                <Link
                  href="/publication/media"
                  onClick={() => setMenuOpen(false)}
                  className="pl-4 py-2 rounded hover:bg-muted"
                >Media</Link>
              </div>

            </nav>
          </div>
        </>
      )}
    </header>
  );
}
