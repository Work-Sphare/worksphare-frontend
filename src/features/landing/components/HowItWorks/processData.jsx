import {
  Search,
  Users,
  CalendarDays,
  CheckCircle,
  UserPlus,
  FileText,
  PhoneCall,
  Wallet,
} from "lucide-react";

export const customerJourney = [
  {
    step: 1,
    title: "Search Service",
    description: "Find nearby professionals",
    icon: Search,
  },
  {
    step: 2,
    title: "Choose Worker",
    description: "Compare ratings & reviews",
    icon: Users,
  },
  {
    step: 3,
    title: "Book Instantly",
    description: "Select date & time",
    icon: CalendarDays,
  },
  {
    step: 4,
    title: "Get Work Done",
    description: "Pay after completion",
    icon: CheckCircle,
  },
];

export const workerJourney = [
  {
    step: 1,
    title: "Register",
    description: "Create your worker profile",
    icon: UserPlus,
  },
  {
    step: 2,
    title: "Complete Profile",
    description: "Add skills & experience",
    icon: FileText,
  },
  {
    step: 3,
    title: "Receive Jobs",
    description: "Accept nearby bookings",
    icon: PhoneCall,
  },
  {
    step: 4,
    title: "Earn Money",
    description: "Get paid securely",
    icon: Wallet,
  },
];