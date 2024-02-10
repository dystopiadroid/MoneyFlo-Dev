import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

function NavbarMain() {
  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <Link className="font-bold text-white hover:cursor-pointer">
          <p className="font-bold text-inherit text-2xl">MoneyFlo</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden text-lg gap-9 sm:flex " justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="income">
            Incomes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="investment">
            Investments
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="expense">
            Expenses
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="https://github.com/dystopiadroid">
            <img src="github.svg" className="h-10 w-10 invert"></img>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="https://www.linkedin.com/in/balaji-pj-ba8a83217/">
            <img src="linkedin.svg" className="h-12 w-12"></img>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarMain;