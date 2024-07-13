/* eslint-disable react/prop-types */
import { Button, Navbar } from "flowbite-react";

export function Nav({img}) {
  return (
    <Navbar fluid rounded className=" bg-black">
      <Navbar.Brand href="#">
        <img src={img} className="mr-3 h-12 sm:h-20" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white ultra-regular">UCO FREESTYLE</span>
      </Navbar.Brand>
      <div className="flex md:order-2 rock-salt-regular">
        <Button color="gray">Proximo Evento</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" color="red" active className="rock-salt-regular">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" color="red" className="rock-salt-regular">Eventos</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}