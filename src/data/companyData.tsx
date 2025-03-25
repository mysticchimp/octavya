
import { Apple, Chrome, Database, Monitor, Smartphone, Cpu, Cloud, PieChart, Zap, ShoppingCart, Globe, Briefcase, Codepen, Code, Truck, Coffee, Gift, Package, Award, Heart, Compass, Headphones, Watch, Sunset, Film, Camera, Send, Radio, Home, Figma, Layout, DollarSign, FileText, BarChart2 } from "lucide-react";
import { ReactNode } from "react";

export interface Company {
  id: string;
  name: string;
  logo: string;
  employeeCount: number;
  workPolicy: string;
  location: string;
  website: string;
  mission: string;
  vision: string;
  overview: string;
  leadership: {
    name: string;
    title: string;
    tenure: string;
    linkedin: string;
    image: string;
  }[];
  teamStats: {
    genderSplit: { name: string; value: number }[];
    functionSplit: { name: string; value: number }[];
    officeLocations: { name: string; coordinates: number[]; employees: number }[];
  };
  icon: ReactNode;
}

export const companies: Company[] = [
  {
    id: "apple",
    name: "Apple Inc.",
    logo: "lovable-uploads/a7c73d6d-8a3d-4ae7-805f-3e2b11b82cf4.png",
    employeeCount: 164000,
    workPolicy: "Hybrid",
    location: "Cupertino, CA",
    website: "https://apple.com",
    mission: "To bring the best user experience to customers through innovative hardware, software, and services.",
    vision: "To make great products that enrich people's lives and help them achieve their dreams.",
    overview: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, Mac, iPad, and wearables, home, and accessories.",
    leadership: [
      {
        name: "Tim Cook",
        title: "Chief Executive Officer",
        tenure: "13 years",
        linkedin: "https://linkedin.com/in/timcook",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
      },
      {
        name: "Luca Maestri",
        title: "Chief Financial Officer",
        tenure: "10 years",
        linkedin: "https://linkedin.com/in/lucamaestri",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Craig Federighi",
        title: "Senior VP of Software Engineering",
        tenure: "15 years",
        linkedin: "https://linkedin.com/in/craigfederighi",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
      },
      {
        name: "Deirdre O'Brien",
        title: "Senior VP of Retail + People",
        tenure: "8 years",
        linkedin: "https://linkedin.com/in/deirdreobrien",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 65 },
        { name: 'Female', value: 33 },
        { name: 'Non-binary', value: 2 }
      ],
      functionSplit: [
        { name: 'Engineering', value: 48 },
        { name: 'Design', value: 18 },
        { name: 'Sales', value: 15 },
        { name: 'Marketing', value: 12 },
        { name: 'Operations', value: 7 }
      ],
      officeLocations: [
        { name: 'Cupertino', coordinates: [-122.0322, 37.3318], employees: 25000 },
        { name: 'Austin', coordinates: [-97.7431, 30.2672], employees: 15000 },
        { name: 'London', coordinates: [-0.1276, 51.5074], employees: 8000 }
      ]
    },
    icon: <Apple className="w-4 h-4" />
  },
  {
    id: "microsoft",
    name: "Microsoft Corporation",
    logo: "lovable-uploads/5cb59849-56e0-48a6-a443-8dc8e5696254.png",
    employeeCount: 221000,
    workPolicy: "Hybrid",
    location: "Redmond, WA",
    website: "https://microsoft.com",
    mission: "To empower every person and every organization on the planet to achieve more.",
    vision: "To become the leading provider of technology and cloud computing solutions.",
    overview: "Microsoft Corporation is a multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    leadership: [
      {
        name: "Satya Nadella",
        title: "Chief Executive Officer",
        tenure: "10 years",
        linkedin: "https://linkedin.com/in/satyanadella",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Amy Hood",
        title: "Chief Financial Officer",
        tenure: "11 years",
        linkedin: "https://linkedin.com/in/amyhood",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      {
        name: "Scott Guthrie",
        title: "EVP of Cloud + AI",
        tenure: "17 years",
        linkedin: "https://linkedin.com/in/scottgu",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Kathleen Hogan",
        title: "Chief People Officer",
        tenure: "9 years",
        linkedin: "https://linkedin.com/in/kathleenhogan",
        image: "https://images.unsplash.com/photo-1550525811-e5869dd03032"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 62 },
        { name: 'Female', value: 36 },
        { name: 'Non-binary', value: 2 }
      ],
      functionSplit: [
        { name: 'Engineering', value: 45 },
        { name: 'Product', value: 20 },
        { name: 'Sales', value: 18 },
        { name: 'Marketing', value: 10 },
        { name: 'Operations', value: 7 }
      ],
      officeLocations: [
        { name: 'Redmond', coordinates: [-122.1215, 47.6740], employees: 55000 },
        { name: 'New York', coordinates: [-74.0060, 40.7128], employees: 12000 },
        { name: 'London', coordinates: [-0.1276, 51.5074], employees: 8000 }
      ]
    },
    icon: <Monitor className="w-4 h-4" />
  },
  {
    id: "meta",
    name: "Meta Platforms Inc.",
    logo: "lovable-uploads/4145578c-40f6-4200-a7f3-21f4789d147e.png",
    employeeCount: 87314,
    workPolicy: "Remote",
    location: "Menlo Park, CA",
    website: "https://meta.com",
    mission: "To give people the power to build community and bring the world closer together.",
    vision: "To help bring the metaverse to life and focus on creating social experiences.",
    overview: "Meta Platforms, Inc. develops products that enable people to connect and share with friends and family through mobile devices, personal computers, virtual reality headsets, and in-home devices.",
    leadership: [
      {
        name: "Mark Zuckerberg",
        title: "Chief Executive Officer",
        tenure: "20 years",
        linkedin: "https://linkedin.com/in/markzuckerberg",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Susan Li",
        title: "Chief Financial Officer",
        tenure: "2 years",
        linkedin: "https://linkedin.com/in/susanli",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      {
        name: "Chris Cox",
        title: "Chief Product Officer",
        tenure: "14 years",
        linkedin: "https://linkedin.com/in/chriscox",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Javier Olivan",
        title: "Chief Operating Officer",
        tenure: "3 years",
        linkedin: "https://linkedin.com/in/javiolivan",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 58 },
        { name: 'Female', value: 39 },
        { name: 'Non-binary', value: 3 }
      ],
      functionSplit: [
        { name: 'Engineering', value: 42 },
        { name: 'Product', value: 25 },
        { name: 'Sales', value: 15 },
        { name: 'Marketing', value: 12 },
        { name: 'Operations', value: 6 }
      ],
      officeLocations: [
        { name: 'Menlo Park', coordinates: [-122.1817, 37.4529], employees: 35000 },
        { name: 'New York', coordinates: [-74.0060, 40.7128], employees: 15000 },
        { name: 'Singapore', coordinates: [103.8198, 1.3521], employees: 10000 }
      ]
    },
    icon: <Database className="w-4 h-4" />
  },
  {
    id: "google",
    name: "Google LLC",
    logo: "lovable-uploads/2c1c1100-32eb-4083-85f3-ee8e89d93f4c.png",
    employeeCount: 156500,
    workPolicy: "Hybrid",
    location: "Mountain View, CA",
    website: "https://google.com",
    mission: "To organize the world's information and make it universally accessible and useful.",
    vision: "To provide access to the world's information in one click.",
    overview: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, including online advertising technologies, a search engine, cloud computing, software, and hardware.",
    leadership: [
      {
        name: "Sundar Pichai",
        title: "Chief Executive Officer",
        tenure: "8 years",
        linkedin: "https://linkedin.com/in/sundarpichai",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Ruth Porat",
        title: "Chief Financial Officer",
        tenure: "9 years",
        linkedin: "https://linkedin.com/in/ruthporat",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      {
        name: "Jeff Dean",
        title: "Chief Scientist",
        tenure: "14 years",
        linkedin: "https://linkedin.com/in/jeffdean",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Prabhakar Raghavan",
        title: "SVP, Google Knowledge",
        tenure: "10 years",
        linkedin: "https://linkedin.com/in/prabhakarraghavan",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 60 },
        { name: 'Female', value: 37 },
        { name: 'Non-binary', value: 3 }
      ],
      functionSplit: [
        { name: 'Engineering', value: 60 },
        { name: 'Product', value: 15 },
        { name: 'Sales', value: 10 },
        { name: 'Marketing', value: 8 },
        { name: 'Operations', value: 7 }
      ],
      officeLocations: [
        { name: 'Mountain View', coordinates: [-122.0838, 37.3861], employees: 45000 },
        { name: 'New York', coordinates: [-74.0060, 40.7128], employees: 20000 },
        { name: 'London', coordinates: [-0.1276, 51.5074], employees: 15000 }
      ]
    },
    icon: <Chrome className="w-4 h-4" />
  },
  {
    id: "amazon",
    name: "Amazon.com Inc.",
    logo: "lovable-uploads/8fdb59bd-9717-4d10-a3c4-1efda9284342.png",
    employeeCount: 1540000,
    workPolicy: "Hybrid",
    location: "Seattle, WA",
    website: "https://amazon.com",
    mission: "To be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online.",
    vision: "To be the world's most customer-centric company, building a place where people can find and discover virtually anything they want to buy online.",
    overview: "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally. It operates through three segments: North America, International, and Amazon Web Services (AWS).",
    leadership: [
      {
        name: "Andy Jassy",
        title: "Chief Executive Officer",
        tenure: "3 years",
        linkedin: "https://linkedin.com/in/andyjassy",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Brian Olsavsky",
        title: "Chief Financial Officer",
        tenure: "8 years",
        linkedin: "https://linkedin.com/in/brianolsavsky",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Dave Clark",
        title: "CEO Worldwide Consumer",
        tenure: "6 years",
        linkedin: "https://linkedin.com/in/daveclark",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Beth Galetti",
        title: "Senior VP Human Resources",
        tenure: "9 years",
        linkedin: "https://linkedin.com/in/bethgaletti",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 61 },
        { name: 'Female', value: 37 },
        { name: 'Non-binary', value: 2 }
      ],
      functionSplit: [
        { name: 'Operations', value: 45 },
        { name: 'Engineering', value: 30 },
        { name: 'Sales', value: 10 },
        { name: 'Marketing', value: 8 },
        { name: 'Product', value: 7 }
      ],
      officeLocations: [
        { name: 'Seattle', coordinates: [-122.3321, 47.6062], employees: 75000 },
        { name: 'New York', coordinates: [-74.0060, 40.7128], employees: 25000 },
        { name: 'London', coordinates: [-0.1276, 51.5074], employees: 18000 }
      ]
    },
    icon: <ShoppingCart className="w-4 h-4" />
  },
  // Adding more companies
  {
    id: "nvidia",
    name: "NVIDIA Corporation",
    logo: "lovable-uploads/8d71b2c9-7b4d-4a9b-b0a6-f3f1dd58f6c1.png",
    employeeCount: 26196,
    workPolicy: "Hybrid",
    location: "Santa Clara, CA",
    website: "https://nvidia.com",
    mission: "To be the leading computing platform for AI and accelerated computing.",
    vision: "To create an AI-ready enterprise and accelerate innovation across industries.",
    overview: "NVIDIA Corporation designs and manufactures computer graphics processors, chipsets, and related multimedia software. The company operates through two segments: Graphics and Compute & Networking.",
    leadership: [
      {
        name: "Jensen Huang",
        title: "Chief Executive Officer",
        tenure: "30 years",
        linkedin: "https://linkedin.com/in/jensenhuang",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Colette Kress",
        title: "Chief Financial Officer",
        tenure: "10 years",
        linkedin: "https://linkedin.com/in/colettekress",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      {
        name: "Manuvir Das",
        title: "Head of Enterprise Computing",
        tenure: "4 years",
        linkedin: "https://linkedin.com/in/manuvirdas",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Deepu Talla",
        title: "VP and GM, Embedded Edge",
        tenure: "11 years",
        linkedin: "https://linkedin.com/in/deeputalla",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 75 },
        { name: 'Female', value: 24 },
        { name: 'Non-binary', value: 1 }
      ],
      functionSplit: [
        { name: 'Engineering', value: 70 },
        { name: 'Research', value: 15 },
        { name: 'Sales', value: 8 },
        { name: 'Marketing', value: 4 },
        { name: 'Operations', value: 3 }
      ],
      officeLocations: [
        { name: 'Santa Clara', coordinates: [-121.9552, 37.3541], employees: 15000 },
        { name: 'Bangalore', coordinates: [77.5946, 12.9716], employees: 4000 },
        { name: 'London', coordinates: [-0.1276, 51.5074], employees: 2000 }
      ]
    },
    icon: <Cpu className="w-4 h-4" />
  },
  {
    id: "netflix",
    name: "Netflix Inc.",
    logo: "lovable-uploads/a6e2f75a-6ea3-42b0-afb5-2c990fe89fec.png",
    employeeCount: 12800,
    workPolicy: "Flexible",
    location: "Los Gatos, CA",
    website: "https://netflix.com",
    mission: "To entertain the world through storytelling.",
    vision: "To become the world's leading streaming entertainment service with impactful content.",
    overview: "Netflix, Inc. provides entertainment services. It offers TV series, documentaries, feature films, and mobile games across various genres and languages. The company provides members the ability to receive streaming content through a host of internet-connected devices.",
    leadership: [
      {
        name: "Ted Sarandos",
        title: "Co-CEO and Chief Content Officer",
        tenure: "4 years",
        linkedin: "https://linkedin.com/in/tedsarandos",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Greg Peters",
        title: "Co-CEO and COO",
        tenure: "1 year",
        linkedin: "https://linkedin.com/in/gregpeters",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Spencer Neumann",
        title: "Chief Financial Officer",
        tenure: "5 years",
        linkedin: "https://linkedin.com/in/spencerneumann",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Bela Bajaria",
        title: "Chief Content Officer",
        tenure: "3 years",
        linkedin: "https://linkedin.com/in/belabajaria",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 55 },
        { name: 'Female', value: 43 },
        { name: 'Non-binary', value: 2 }
      ],
      functionSplit: [
        { name: 'Content', value: 35 },
        { name: 'Engineering', value: 30 },
        { name: 'Product', value: 15 },
        { name: 'Marketing', value: 12 },
        { name: 'Operations', value: 8 }
      ],
      officeLocations: [
        { name: 'Los Gatos', coordinates: [-121.9624, 37.2358], employees: 5000 },
        { name: 'Los Angeles', coordinates: [-118.2437, 34.0522], employees: 3500 },
        { name: 'London', coordinates: [-0.1276, 51.5074], employees: 1500 }
      ]
    },
    icon: <Film className="w-4 h-4" />
  },
  // Generate more companies to reach 100 in total
  // Adding more variety with different industries and profiles
  {
    id: "salesforce",
    name: "Salesforce Inc.",
    logo: "lovable-uploads/76d4f0a6-8e6c-43b3-8b2f-99a386c1e443.png",
    employeeCount: 73000,
    workPolicy: "Remote-first",
    location: "San Francisco, CA",
    website: "https://salesforce.com",
    mission: "To empower companies to connect with their customers in a whole new way.",
    vision: "To create a trusted cloud platform for customer success.",
    overview: "Salesforce, Inc. is an American cloud-based software company that provides customer relationship management (CRM) software and applications focused on sales, customer service, marketing automation, analytics, and application development.",
    leadership: [
      {
        name: "Marc Benioff",
        title: "Chief Executive Officer",
        tenure: "23 years",
        linkedin: "https://linkedin.com/in/marcbenioff",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Amy Weaver",
        title: "Chief Financial Officer",
        tenure: "3 years",
        linkedin: "https://linkedin.com/in/amyweaver",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      {
        name: "Bret Taylor",
        title: "Vice Chair and Co-CEO",
        tenure: "5 years",
        linkedin: "https://linkedin.com/in/brettaylor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Gavin Patterson",
        title: "President and Chief Revenue Officer",
        tenure: "5 years",
        linkedin: "https://linkedin.com/in/gavinpatterson",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 58 },
        { name: 'Female', value: 40 },
        { name: 'Non-binary', value: 2 }
      ],
      functionSplit: [
        { name: 'Sales', value: 40 },
        { name: 'Engineering', value: 28 },
        { name: 'Customer Success', value: 20 },
        { name: 'Marketing', value: 7 },
        { name: 'Operations', value: 5 }
      ],
      officeLocations: [
        { name: 'San Francisco', coordinates: [-122.4194, 37.7749], employees: 28000 },
        { name: 'Indianapolis', coordinates: [-86.1581, 39.7684], employees: 10000 },
        { name: 'London', coordinates: [-0.1276, 51.5074], employees: 8000 }
      ]
    },
    icon: <Cloud className="w-4 h-4" />
  },
  {
    id: "tesla",
    name: "Tesla Inc.",
    logo: "lovable-uploads/12a88e9e-e28d-4c5a-8b14-4c37fed4db25.png",
    employeeCount: 127855,
    workPolicy: "On-site",
    location: "Austin, TX",
    website: "https://tesla.com",
    mission: "To accelerate the world's transition to sustainable energy.",
    vision: "To create the most compelling car company of the 21st century by driving the world's transition to electric vehicles.",
    overview: "Tesla, Inc. designs, develops, manufactures, sells and leases electric vehicles and energy generation and storage systems, and offers services related to its sustainable energy products.",
    leadership: [
      {
        name: "Elon Musk",
        title: "Chief Executive Officer",
        tenure: "20 years",
        linkedin: "https://linkedin.com/in/elonmusk",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Zachary Kirkhorn",
        title: "Chief Financial Officer",
        tenure: "5 years",
        linkedin: "https://linkedin.com/in/zacharykirkhorn",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Drew Baglino",
        title: "SVP, Powertrain and Energy Engineering",
        tenure: "14 years",
        linkedin: "https://linkedin.com/in/drewbaglino",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Robyn Denholm",
        title: "Chair of the Board",
        tenure: "6 years",
        linkedin: "https://linkedin.com/in/robyndenholm",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 78 },
        { name: 'Female', value: 21 },
        { name: 'Non-binary', value: 1 }
      ],
      functionSplit: [
        { name: 'Manufacturing', value: 50 },
        { name: 'Engineering', value: 30 },
        { name: 'Research', value: 10 },
        { name: 'Sales', value: 7 },
        { name: 'Operations', value: 3 }
      ],
      officeLocations: [
        { name: 'Austin', coordinates: [-97.7431, 30.2672], employees: 35000 },
        { name: 'Fremont', coordinates: [-121.9886, 37.5485], employees: 48000 },
        { name: 'Shanghai', coordinates: [121.4737, 31.2304], employees: 20000 }
      ]
    },
    icon: <Zap className="w-4 h-4" />
  },
  {
    id: "ibm",
    name: "IBM Corporation",
    logo: "lovable-uploads/7e4af8a0-e3b2-4897-9f2d-c50e6fc5da41.png",
    employeeCount: 280000,
    workPolicy: "Hybrid",
    location: "Armonk, NY",
    website: "https://ibm.com",
    mission: "To lead in the creation, development and manufacture of the industry's most advanced information technologies.",
    vision: "To discover and develop ways in which advanced information technology can transform the world's businesses and industries.",
    overview: "International Business Machines Corporation (IBM) is an American multinational technology corporation that produces and sells computer hardware, middleware, and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology.",
    leadership: [
      {
        name: "Arvind Krishna",
        title: "Chief Executive Officer",
        tenure: "4 years",
        linkedin: "https://linkedin.com/in/arvindkrishna",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "James Kavanaugh",
        title: "Chief Financial Officer",
        tenure: "7 years",
        linkedin: "https://linkedin.com/in/jameskavanaugh",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Gary Cohn",
        title: "Vice Chairman",
        tenure: "3 years",
        linkedin: "https://linkedin.com/in/garycohn",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Bridget van Kralingen",
        title: "SVP, Global Markets",
        tenure: "10 years",
        linkedin: "https://linkedin.com/in/bridgetvankralingen",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 65 },
        { name: 'Female', value: 34 },
        { name: 'Non-binary', value: 1 }
      ],
      functionSplit: [
        { name: 'Consulting', value: 40 },
        { name: 'Engineering', value: 25 },
        { name: 'Research', value: 15 },
        { name: 'Sales', value: 15 },
        { name: 'Operations', value: 5 }
      ],
      officeLocations: [
        { name: 'Armonk', coordinates: [-73.7135, 41.1099], employees: 12000 },
        { name: 'Bangalore', coordinates: [77.5946, 12.9716], employees: 40000 },
        { name: 'London', coordinates: [-0.1276, 51.5074], employees: 10000 }
      ]
    },
    icon: <Codepen className="w-4 h-4" />
  },
  {
    id: "oracle",
    name: "Oracle Corporation",
    logo: "lovable-uploads/e1d77d5e-c41e-4a55-9d82-b50dbc94b21b.png",
    employeeCount: 143000,
    workPolicy: "Hybrid",
    location: "Austin, TX",
    website: "https://oracle.com",
    mission: "To help people see data in new ways, discover insights, and unlock endless possibilities.",
    vision: "To become the trusted provider of enterprise cloud computing solutions.",
    overview: "Oracle Corporation is an American multinational computer technology corporation that sells database software and technology, cloud engineered systems, and enterprise software products.",
    leadership: [
      {
        name: "Larry Ellison",
        title: "Chairman and CTO",
        tenure: "44 years",
        linkedin: "https://linkedin.com/in/larryellison",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Safra Catz",
        title: "Chief Executive Officer",
        tenure: "8 years",
        linkedin: "https://linkedin.com/in/safracatz",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      {
        name: "Mike Sicilia",
        title: "EVP, Vertical Industries",
        tenure: "9 years",
        linkedin: "https://linkedin.com/in/mikesicilia",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Edward Screven",
        title: "Chief Corporate Architect",
        tenure: "26 years",
        linkedin: "https://linkedin.com/in/edwardscreven",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 68 },
        { name: 'Female', value: 31 },
        { name: 'Non-binary', value: 1 }
      ],
      functionSplit: [
        { name: 'Engineering', value: 45 },
        { name: 'Sales', value: 25 },
        { name: 'Support', value: 15 },
        { name: 'Marketing', value: 8 },
        { name: 'Operations', value: 7 }
      ],
      officeLocations: [
        { name: 'Austin', coordinates: [-97.7431, 30.2672], employees: 20000 },
        { name: 'Bangalore', coordinates: [77.5946, 12.9716], employees: 35000 },
        { name: 'Amsterdam', coordinates: [4.9041, 52.3676], employees: 15000 }
      ]
    },
    icon: <Database className="w-4 h-4" />
  },
  // Continue adding more companies...
  {
    id: "amd",
    name: "Advanced Micro Devices",
    logo: "lovable-uploads/45db0fc7-c2de-4c9c-a854-8a46e850fdf6.png",
    employeeCount: 25000,
    workPolicy: "Hybrid",
    location: "Santa Clara, CA",
    website: "https://amd.com",
    mission: "To build great products that accelerate next-generation computing experiences.",
    vision: "To be the high-performance computing leader.",
    overview: "Advanced Micro Devices, Inc. is an American multinational semiconductor company that develops computer processors and related technologies for business and consumer markets.",
    leadership: [
      {
        name: "Lisa Su",
        title: "Chief Executive Officer",
        tenure: "10 years",
        linkedin: "https://linkedin.com/in/lisasu",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      {
        name: "Devinder Kumar",
        title: "Chief Financial Officer",
        tenure: "11 years",
        linkedin: "https://linkedin.com/in/devinderkumar",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Rick Bergman",
        title: "EVP of Computing and Graphics",
        tenure: "6 years",
        linkedin: "https://linkedin.com/in/rickbergman",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Mark Papermaster",
        title: "Chief Technology Officer",
        tenure: "14 years",
        linkedin: "https://linkedin.com/in/markpapermaster",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 70 },
        { name: 'Female', value: 29 },
        { name: 'Non-binary', value: 1 }
      ],
      functionSplit: [
        { name: 'Engineering', value: 65 },
        { name: 'Research', value: 20 },
        { name: 'Sales', value: 8 },
        { name: 'Marketing', value: 5 },
        { name: 'Operations', value: 2 }
      ],
      officeLocations: [
        { name: 'Santa Clara', coordinates: [-121.9552, 37.3541], employees: 8000 },
        { name: 'Austin', coordinates: [-97.7431, 30.2672], employees: 6000 },
        { name: 'Bangalore', coordinates: [77.5946, 12.9716], employees: 5000 }
      ]
    },
    icon: <Cpu className="w-4 h-4" />
  },
  {
    id: "intel",
    name: "Intel Corporation",
    logo: "lovable-uploads/88d6c7fe-f3b1-4b3a-9da0-fb476fe5f469.png",
    employeeCount: 131900,
    workPolicy: "Hybrid",
    location: "Santa Clara, CA",
    website: "https://intel.com",
    mission: "To create world-changing technology that enriches the lives of every person on earth.",
    vision: "To be the trusted performance leader that unleashes the potential of data.",
    overview: "Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California. It is the world's largest semiconductor chip manufacturer by revenue.",
    leadership: [
      {
        name: "Patrick Gelsinger",
        title: "Chief Executive Officer",
        tenure: "3 years",
        linkedin: "https://linkedin.com/in/patrickgelsinger",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "David Zinsner",
        title: "Chief Financial Officer",
        tenure: "2 years",
        linkedin: "https://linkedin.com/in/davidzinsner",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Ann Kelleher",
        title: "EVP and GM of Technology Development",
        tenure: "12 years",
        linkedin: "https://linkedin.com/in/annkelleher",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      {
        name: "Gregory Bryant",
        title: "EVP and GM of Client Computing",
        tenure: "7 years",
        linkedin: "https://linkedin.com/in/gregorybryant",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      }
    ],
    teamStats: {
      genderSplit: [
        { name: 'Male', value: 72 },
        { name: 'Female', value: 27 },
        { name: 'Non-binary', value: 1 }
      ],
      functionSplit: [
        { name: 'Engineering', value: 55 },
        { name: 'Manufacturing', value: 25 },
        { name: 'Research', value: 10 },
        { name: 'Sales', value: 7 },
        { name: 'Operations', value: 3 }
      ],
      officeLocations: [
        { name: 'Santa Clara', coordinates: [-121.9552, 37.3541], employees: 40000 },
        { name: 'Hillsboro', coordinates: [-122.9898, 45.5231], employees: 20000 },
        { name: 'Chandler', coordinates: [-111.8413, 33.3062], employees: 12000 }
      ]
    },
    icon: <Cpu className="w-4 h-4" />
  }
  // Continue for about 100 companies in total
];
