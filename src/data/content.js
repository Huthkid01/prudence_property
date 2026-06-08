export const heroSlides = [
  {
    id: 1,
    eyebrow: "Prudence Property",
    headline: "Property Management You Can Trust",
    subheadline:
      "We provide reliable residential and commercial property management services focused on protecting property value, improving resident satisfaction, and ensuring smooth day-to-day operations.",
    supportingText:
      "Our team is committed to responsive service, operational excellence, and long-term property success.",
    primaryCta: { text: "Request a Consultation", to: "/contact" },
    secondaryCta: { text: "Learn More", to: "/about" },
    image: "/images/hero-slide-1.png",
    alt: "Luxury modern villa with swimming pool and contemporary architecture",
  },
  {
    id: 2,
    eyebrow: "Residential Excellence",
    headline: "Well-Managed Homes & Communities",
    subheadline:
      "From elegant family homes to vibrant residential estates, we deliver attentive management that keeps residents satisfied and properties in excellent condition.",
    supportingText:
      "Tenant relations, rent collection, inspections, and financial reporting — all handled with care and professionalism.",
    primaryCta: { text: "Request a Consultation", to: "/contact" },
    secondaryCta: { text: "View Services", to: "/services#residential" },
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    alt: "Beautiful modern family home",
  },
  {
    id: 3,
    eyebrow: "Urban Living",
    headline: "Apartments & Condominiums Managed With Care",
    subheadline:
      "Expert oversight for blocks of flats, luxury apartments, and condominium communities — ensuring smooth operations and lasting property value.",
    supportingText:
      "Facility maintenance, lease administration, and community management tailored to multi-unit living.",
    primaryCta: { text: "Request Proposal", to: "/contact" },
    secondaryCta: { text: "Explore Gallery", to: "/gallery" },
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    alt: "Modern apartment block and condominium building",
  },
];

export const homeGalleryPreview = [
  {
    id: 1,
    category: "Residential Homes",
    title: "Modern Family Home",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    category: "Luxury Apartments",
    title: "Luxury Living Space",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    category: "Condominiums",
    title: "Urban Condominium",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    category: "Residential Homes",
    title: "Suburban Estate",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    category: "Condominiums",
    title: "High-Rise Condominium",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    span: "col-span-1 row-span-2",
  },
  {
    id: 7,
    category: "Luxury Apartments",
    title: "Premium Apartment Block",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export const contactInfo = {
  phone: "0815 952 4123",
  whatsapp: "2348159524123",
  email: "prudenceproperty6@gmail.com",
  address: "15 Ayangburen Road, Ikorodu, Lagos, Nigeria",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=15+Ayangburen+Road,+Ikorodu,+Lagos,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "FaFacebookF" },
  { label: "Twitter", href: "https://twitter.com", icon: "FaXTwitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "FaLinkedinIn" },
  { label: "Instagram", href: "https://instagram.com", icon: "FaInstagram" },
];

export const servicesPreview = [
  {
    title: "Residential Property Management",
    description:
      "Comprehensive management for single-family homes, apartments, and residential communities.",
    icon: "HiHomeModern",
    path: "/services#residential",
  },
  {
    title: "Commercial Property Management",
    description:
      "Professional oversight for office buildings, retail spaces, and commercial assets.",
    icon: "HiBuildingOffice2",
    path: "/services#commercial",
  },
  {
    title: "Facility & Maintenance Services",
    description:
      "Proactive maintenance and rapid response to keep properties in top condition.",
    icon: "HiWrenchScrewdriver",
    path: "/services#facility",
  },
  {
    title: "Real Estate Services",
    description:
      "Expert consulting, marketing, and investment guidance for property owners.",
    icon: "HiChartBarSquare",
    path: "/services#real-estate",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced Team",
    description:
      "Seasoned professionals with deep expertise in property management and real estate operations.",
    icon: "HiUserGroup",
  },
  {
    title: "Reliable Communication",
    description:
      "Clear, timely updates for owners, tenants, and residents at every stage of management.",
    icon: "HiChatBubbleLeftRight",
  },
  {
    title: "Professional Service",
    description:
      "Consistent, high-quality service delivered with integrity and attention to detail.",
    icon: "HiShieldCheck",
  },
  {
    title: "Property Value Protection",
    description:
      "Strategic management practices designed to preserve and enhance your investment.",
    icon: "HiCurrencyDollar",
  },
];

export const testimonials = [
  {
    quote: "Professional, responsive, and highly reliable management team.",
    author: "Property Owner",
    role: "Residential Client",
  },
  {
    quote:
      "Prudence Property has consistently demonstrated professionalism and exceptional attention to detail. We highly value their responsiveness and dedication to resident satisfaction.",
    author: "Community Board Member",
    role: "Commercial Property",
  },
  {
    quote:
      "Their maintenance team stays ahead of issues before they become problems. Our tenants consistently report high satisfaction with the service they receive.",
    author: "Estate Manager",
    role: "Multi-Unit Property",
  },
  {
    quote:
      "Since partnering with Prudence Property, our occupancy rates have improved and rent collection has never been smoother or more transparent.",
    author: "Landlord",
    role: "Residential Portfolio",
  },
  {
    quote:
      "Excellent financial reporting and clear communication. I always know exactly how my properties are performing and where every naira is accounted for.",
    author: "Real Estate Investor",
    role: "Portfolio Owner",
  },
  {
    quote:
      "The leasing process was seamless and professional. They found quality tenants quickly and handled every detail with impressive efficiency.",
    author: "Property Developer",
    role: "New Development",
  },
];

export const coreValues = [
  {
    title: "Integrity",
    description:
      "We operate with honesty, professionalism, and accountability in every interaction.",
    icon: "HiScale",
  },
  {
    title: "Community",
    description:
      "We believe successful property management creates safe, welcoming, and well-connected communities.",
    icon: "HiHeart",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering high-quality service and maintaining strong operational standards.",
    icon: "HiStar",
  },
];

export const servicesDetail = [
  {
    id: "residential",
    title: "Residential Property Management",
    description:
      "Full-service management for residential properties, ensuring tenant satisfaction and owner peace of mind.",
    icon: "HiHomeModern",
    features: [
      "Tenant Relations",
      "Rent Collection",
      "Property Inspections",
      "Financial Reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "commercial",
    title: "Commercial Property Management",
    description:
      "Strategic management of commercial assets with focus on occupancy, compliance, and ROI.",
    icon: "HiBuildingOffice2",
    features: [
      "Lease Administration",
      "Facility Oversight",
      "Vendor Coordination",
      "Asset Protection",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "facility",
    title: "Facility & Maintenance Services",
    description:
      "Comprehensive maintenance programs that protect property condition and minimize downtime.",
    icon: "HiWrenchScrewdriver",
    features: [
      "Preventive Maintenance",
      "Repairs Coordination",
      "Property Upkeep",
      "Emergency Response",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    id: "real-estate",
    title: "Real Estate Services",
    description:
      "Advisory and marketing services to help you make informed property decisions.",
    icon: "HiChartBarSquare",
    features: [
      "Property Consulting",
      "Property Marketing",
      "Investment Guidance",
      "Market Analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
];

export const careerPositions = [
  "Property Administrator",
  "Maintenance Technician",
  "Property Manager",
  "Leasing Coordinator",
];

export const galleryCategories = [
  "All",
  "Residential Homes",
  "Luxury Apartments",
  "Condominiums",
  "Commercial Buildings",
  "Managed Properties",
];

export const galleryImages = [
  {
    id: 1,
    category: "Residential Homes",
    title: "Modern Family Home",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    height: "h-64",
  },
  {
    id: 2,
    category: "Luxury Apartments",
    title: "Luxury Living Space",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    height: "h-80",
  },
  {
    id: 3,
    category: "Condominiums",
    title: "Urban Condominium",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    height: "h-72",
  },
  {
    id: 4,
    category: "Commercial Buildings",
    title: "Corporate Office Tower",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    height: "h-64",
  },
  {
    id: 5,
    category: "Managed Properties",
    title: "Managed Community",
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    height: "h-80",
  },
  {
    id: 6,
    category: "Residential Homes",
    title: "Suburban Estate",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    height: "h-72",
  },
  {
    id: 7,
    category: "Luxury Apartments",
    title: "Premium Apartment Interior",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    height: "h-64",
  },
  {
    id: 8,
    category: "Condominiums",
    title: "High-Rise Condominium",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    height: "h-80",
  },
  {
    id: 9,
    category: "Commercial Buildings",
    title: "Retail Complex",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    height: "h-72",
  },
  {
    id: 10,
    category: "Managed Properties",
    title: "Property Portfolio",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    height: "h-64",
  },
  {
    id: 11,
    category: "Residential Homes",
    title: "Contemporary Residence",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    height: "h-80",
  },
  {
    id: 12,
    category: "Luxury Apartments",
    title: "Penthouse View",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    height: "h-72",
  },
];

export const pageMeta = {
  home: {
    title: "Prudence Property | Property Management You Can Trust",
    description:
      "Reliable residential and commercial property management services focused on protecting property value and resident satisfaction.",
  },
  about: {
    title: "About Us | Prudence Property",
    description:
      "Learn about Prudence Property's mission, values, and commitment to professional property management in Lagos, Nigeria.",
  },
  services: {
    title: "Our Services | Prudence Property",
    description:
      "Residential and commercial property management, facility maintenance, and real estate services tailored to your needs.",
  },
  gallery: {
    title: "Property Gallery | Prudence Property",
    description:
      "Explore our portfolio of residential, commercial, and managed properties across Lagos and beyond.",
  },
  careers: {
    title: "Careers | Prudence Property",
    description:
      "Join the Prudence Property team. Explore career opportunities in property management and real estate.",
  },
  contact: {
    title: "Contact Us | Prudence Property",
    description:
      "Get in touch with Prudence Property for consultations, proposals, and property management inquiries.",
  },
};
