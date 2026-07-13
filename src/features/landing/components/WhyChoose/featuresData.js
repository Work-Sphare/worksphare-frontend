import {
  ShieldCheck,
  Zap,
  Wallet,
  Star,
  MapPinned,
  Headset,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Verified Workers",
    description: "Background verified professionals you can trust.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 2,
    title: "Instant Booking",
    description: "Book a nearby worker in just a few taps.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Secure Payments",
    description: "Transparent pricing with secure transactions.",
    icon: Wallet,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    id: 4,
    title: "Trusted Ratings",
    description: "Choose workers based on genuine reviews.",
    icon: Star,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    id: 5,
    title: "Nearby Workers",
    description: "Find professionals close to your location.",
    icon: MapPinned,
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    id: 6,
    title: "24×7 Support",
    description: "Our support team is always here to help.",
    icon: Headset,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

export default features;