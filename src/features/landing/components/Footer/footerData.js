import {
  Wrench,
  Hammer,
  Paintbrush,
  Car,
  Sparkles,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const services = [
  {
    name: "Electrician",
    icon: Wrench,
  },
  {
    name: "Plumber",
    icon: Hammer,
  },
  {
    name: "Painter",
    icon: Paintbrush,
  },
  {
    name: "Mechanic",
    icon: Car,
  },
];

export const quickLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Become a Worker",
    href: "#become-worker",
  },
  {
    title: "About",
    href: "#why-choose",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const contact = [
  {
    icon: MapPin,
    value: "Kavali, Andhra Pradesh",
  },
  {
    icon: Phone,
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    value: "support@worksphare.com",
  },
];

export const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
];

export const footerFeatures = [
  {
    icon: Sparkles,
    text: "Trusted Professionals",
  },
  {
    icon: ShieldCheck,
    text: "Secure Bookings",
  },
];