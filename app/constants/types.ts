export interface DropdownData {
  id: string;
  name: string;
  src: string;
  href: string;
}

export interface Address {
  country: string;
  logo: string;
  address: string;
}

export interface FooterList {
  name: string;
  items: {
    name: string;
    link: string;
  }[];
}

export interface HeaderList {
  name: string;
  icon: string;
  link: string;
  isMobileOnly: boolean;
  items?: {
    name: string;
    icon: string;
    link: string;
  }[];
}
export interface FooterListItem {
  name: string;
  link: string;
}

export interface ServiceCardType {
  bannerTitle: string;
  carddescription: string;
  serviceCardImage: string;
  slug: {
    current: string;
  };
}

export interface Process {
  name: string;
  logo: string;
  description?: string;
}

export interface SubmenuItems {
  name: string;
  icon: string;
  link: string;
}

export interface ProjectList {
  id: string;
  name: string;
  thumbnail: string;
  title: string;
  subTitle: string;
  points: string[];
  link: string;
}

export interface Job {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  positions: string;
}

export interface Member {
  name: string;
  icon: string;
  postion: string;
  details: string;
}

export interface Info {
  icon: string;
  title: string;
  link: string;
}

export interface ServiceBanner {
  title: string;
  subtitle: string;
  coverImage: string;
  alternate?: string;
}

export interface ShowCaseCard extends Card {
  thumbnail: string;
}

export interface TechnologyIcon {
  icon: string;
  alternate: string;
}

export interface Card {
  title: string;
  subtitle?: string;
  description: string;
  logo: string;
  link?: string;
  alternate: string;
}

export interface LearnUiUxCard {
  title: string;
  image: string;
  alternate: string;
  analyst: string;
  strategist: string;
  points: string[];
}
export interface MethodologySliderItem {
  title: string;
  description: string;
}

export interface Myths {
  title: string;
  description?: string;
  image: string;
  alternate: string;
  points: string[];
}

export interface ReviewCard {
  name: string;
  subtitle: string;
  description: string;
  review: string;
}

export interface BlogCard {
  name: string;
  date: string;
  description: string;
  image: string;
  link: string;
  type: string;
  slug: any;
}

export interface ServicesInfo {
  title: string;
  subtitle: string;
  image: string;
  alternate: string;
  description: string;
}

export interface DialogBoxData {
  name: string;
  dialogHeading?: string;
  slug: {
    current: string;
  };
}

export interface DialogConstantData {
  name: string;
  title: string;
  link: string;
}

export interface ProjectData {
  bannerTitle: string;
  thumbnail: string;
  slug: {
    current: string;
  };
  review: {
    summary: string;
    name: string;
    designation: string;
    image: string;
  };
}
export interface CompanyEssence {
  logo: string;
  title: string;
  alternate: string;
  description: string;
}

export interface ConsultantData {
  image: string;
  name: string;
  email: string;
  phone: string;
  link: string;
  description: string;
}

export interface TestimonialData {
  thumbnail: string;
  name: string;
  subTitle: string;
  review: {
    image: string;
    name: string;
    rating: number;
    designation: string;
    summary: string;
    logo: string;
  };
  slug: {
    current: string;
  };
}
