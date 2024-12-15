import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "../assets/logo.jpg";

export function FooterUco() {
  return (
    <Footer className=" rounded-2xl flex place-content-center">
      <div className="w-full bg-black rounded-2xl p-5">
        <div className="grid p-5 m-5 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex place-content-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img src={logo} className=" h-32" alt="" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Acerca de " />
              <FooterLinkGroup col>
                <FooterLink href="#">
                  PRODUCTORA DE ARTISTAS Y EVENTOS
                </FooterLink>
                <FooterLink href="#">TUNUYAN, MENDOZA</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Contactos" />
              <FooterLinkGroup col>
                <FooterLink href="#">2622515403</FooterLink>
                <FooterLink href="#">2622515403</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 me-5 flex space-x-6 sm:mt-0 sm:justify-center">
            <BsFacebook
              onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/profile.php?id=100084222968062 ")
              }
              size={40}
              className="cursor-pointer hover:animate-bounce m-4"
            />

            <BsInstagram
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/ucofreestyle")
              }
              size={40}
              className="cursor-pointer hover:animate-bounce m-4"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
