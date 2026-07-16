import {
  Users,
  BriefcaseBusiness,
  Star,
  Headset,
} from "lucide-react";

const metrics = [
  {
    id: 1,
    value: 10000,
    suffix: "+",
    title: "Skilled Workers",
    subtitle: "Verified professionals",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 2,
    value: 5000,
    suffix: "+",
    title: "Happy Customers",
    subtitle: "Across India",
    icon: BriefcaseBusiness,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    id: 3,
    value: 4.9,
    suffix: "★",
    title: "Average Rating",
    subtitle: "Trusted by users",
    icon: Star,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    title: "Customer Support",
    subtitle: "Always available",
    icon: Headset,
    color: "text-green-600",
    bg: "bg-green-100",
  },
];

export default metrics;