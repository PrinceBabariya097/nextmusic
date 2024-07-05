"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/courses">all courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Productin</HoveredLink>
            <HoveredLink href="/courses">Advanced Compositon</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contect"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
