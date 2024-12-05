/* eslint-disable react/prop-types */
import { Button, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";
/* import { Link } from "react-router-dom"; */

const links = [
  {
    name: "Home",
    href: "./home",
    key: 1,
  },
  {
    name: "Events",
    href: "./events",
    key: 2,
  },
  {
    name: "Services",
    href: "./services",
    key: 3,
  },
  {
    name: "Videos",
    href: "./videos",
    key: 4,
  },
];

export function Nav({ img }) {
  return (
    <Navbar fluid rounded className=" bg-black">
      <Navbar.Brand href="#">
        <img src={img} className="mr-3 h-12 sm:h-20" />
        <span className="self-center whitespace-nowrap text-2xl hidden md:block font-bold dark:text-white ultra-regular">
          UCO FREESTYLE
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 rock-salt-regular">
        <Button color="gray">Proximo Evento</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {links.map((e) => (
          // eslint-disable-next-line react/jsx-key, react-hooks/rules-of-hooks
          <Navbar.Link
            href={e.href}
            key={e.key}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            active={"." + useLocation().pathname === e.href}
            className="rock-salt-regular text-lg text-center"
          >
            {e.name}
          </Navbar.Link>
          // eslint-disable-next-line react/jsx-key
          /* <Link to={e.href} >{e.name}</Link>
           */
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
