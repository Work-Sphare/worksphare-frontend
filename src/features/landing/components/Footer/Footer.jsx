import logo from "../../../../assets/logos/workspare-icon.png";

import FooterCTA from "./FooterCTA";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";

import {
  services,
  quickLinks,
  contact,
  socialLinks,
} from "./footerData";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative mt-40 bg-slate-950 text-white"
    >
      {/* Floating CTA */}

      <div className="absolute -top-32 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6">
        <FooterCTA />
      </div>

      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 pt-72 pb-10">

        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="WorkSphare"
                loading="lazy"
                className="h-14 w-14"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  WorkSphare
                </h2>

                <p className="text-sm text-slate-400">
                  Connecting Skills • Building Trust
                </p>

              </div>

            </div>

            <p className="mt-8 max-w-md leading-8 text-slate-400">
              WorkSphare connects customers with trusted professionals for
              everyday services while creating meaningful opportunities for
              skilled workers across India.
            </p>

            <div className="mt-8">
              <SocialLinks links={socialLinks} />
            </div>

          </div>

          {/* Services */}

          <FooterColumn
            title="Services"
            items={services}
            type="services"
          />

          {/* Quick Links */}

          <FooterColumn
            title="Quick Links"
            items={quickLinks}
            type="links"
          />

          {/* Contact */}

          <FooterColumn
            title="Contact"
            items={contact}
            type="contact"
          />

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 WorkSphare. All rights reserved.
          </p>

          <div className="flex gap-8">

            <a
              href="#"
              className="hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;