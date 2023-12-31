import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import React from "react";

const HeaderTop = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Mock Data for the Mobile Nav-Menu
  const menuItems = [
    "Home",
    "About us",
    "Services",
    "work",
    "Team",
    "Contact us",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      {/* Company Logoo */}

      <NavbarContent className=" px-0" justify="start">
        <NavbarBrand>
          <Image
            src="../../assets/logo1.png"
            width={100}
            height={70}
            alt="NextUI"
            style={{ minWidth: "100px" }}
          ></Image>
        </NavbarBrand>
      </NavbarContent>

      {/* Nav Links */}

      <NavbarContent
        className="hidden lg:flex gap-4 uppercase px-0 mx-0"
        justify="center"
      >
        {/* {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              className="font-helvetica uppercase"
              href={item}
              style={{ color: "#000", fontSize: "14px" }}
            >
              {item}
            </Link>
          </NavbarItem>
        ))} */}
        <NavbarItem>
          <Link
            className="font-helvetica uppercase"
            href='/'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            Home
          </Link>

          <Link
            className="font-helvetica uppercase"
            href='/about'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            ABOUT US
          </Link>

          <Link
            className="font-helvetica uppercase"
            href='/services'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            SERVICES
          </Link>

          <Link
            className="font-helvetica uppercase"
            href='/work'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            work
          </Link>

          <Link
            className="font-helvetica uppercase"
            href='/team'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            Team
          </Link>

          <Link
            className="font-helvetica uppercase"
            href='/contact'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Image src="../../assets/icons/Search.svg" alt="Search"></Image>
        <Image src="../../assets/icons/icon-bag.svg" alt="icon-bag"></Image>
        <Image
          src="../../assets/icons/Account-icon.svg"
          alt="Account"
          className="-lg:hidden"
        ></Image>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      {/* Mobile Nav Menu Links */}

      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full justify-end uppercase"
              style={{ fontFamily: "helvetica" }}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}

        <NavbarMenuItem>
          <Link
            className="font-helvetica uppercase w-full justify-center uppercase"
            href='/'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            Home
          </Link>

          <Link
            className="font-helvetica uppercase w-full justify-center uppercase"
            href='/about'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            ABOUT US
          </Link>

          <Link
            className="font-helvetica uppercase w-full justify-center uppercase"
            href='/services'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            SERVICES
          </Link>

          <Link
            className="font-helvetica uppercase w-full justify-center uppercase"
            href='/work'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            work
          </Link>

          <Link
            className="font-helvetica uppercase w-full justify-center uppercase"
            href='/team'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            Team
          </Link>

          <Link
            className="font-helvetica uppercase w-full justify-center uppercase"
            href='/contact'
            style={{ color: "#000", fontSize: "14px", marginRight: 10 }}
          >
            Contact us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default HeaderTop;
