import {
  HiHomeModern,
  HiBuildingOffice2,
  HiWrenchScrewdriver,
  HiChartBarSquare,
  HiUserGroup,
  HiChatBubbleLeftRight,
  HiShieldCheck,
  HiCurrencyDollar,
  HiScale,
  HiHeart,
  HiStar,
} from "react-icons/hi2";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const iconMap = {
  HiHomeModern,
  HiBuildingOffice2,
  HiWrenchScrewdriver,
  HiChartBarSquare,
  HiUserGroup,
  HiChatBubbleLeftRight,
  HiShieldCheck,
  HiCurrencyDollar,
  HiScale,
  HiHeart,
  HiStar,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
};

export default function Icon({ name, className = "w-6 h-6" }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} aria-hidden="true" />;
}
