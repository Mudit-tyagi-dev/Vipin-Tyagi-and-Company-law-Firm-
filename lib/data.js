export const cityOffices = [
  {
    slug: "delhi",
    name: "Delhi",
    fullName: "Delhi NCR Office",
    state: "Delhi",
    address: "14th Floor, Connaught Place, New Delhi - 110001",
    phone: "+91 11 4567 8900",
    email: "delhi@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Rajiv Sharma",
      designation: "Managing Partner - North India",
      experience: "28 years",
      specializations: [
        "Corporate Law",
        "Constitutional Law",
        "White Collar Crime",
      ],
      bio: "Advocate Rajiv Sharma is a distinguished legal professional with nearly three decades of experience in complex corporate litigation and constitutional matters. A graduate of the National Law School of India University, Bangalore, he has successfully represented Fortune 500 companies and high-profile individuals in landmark cases.",
      image: "/images/partners/rajiv-sharma.png",
    },
    coordinates: {
      x: 53,
      y: 28,
    },
    serviceAreas: [
      "Delhi",
      "Noida",
      "Gurgaon",
      "Faridabad",
      "Ghaziabad",
      "Greater Noida",
    ],
    testimonials: [
      {
        name: "Amit Kapoor",
        role: "CEO",
        company: "TechVentures India",
        content:
          "Apex Legal Partners provided exceptional guidance during our complex merger. Their strategic approach and attention to detail were instrumental in closing the deal seamlessly.",
        rating: 5,
        image: "/images/testimonials/amit-kapoor.png",
      },
      {
        name: "Priya Mehta",
        role: "Managing Director",
        company: "Horizon Realty",
        content:
          "Their property law expertise saved us from a potentially costly legal dispute. Professional, thorough, and always available when needed.",
        rating: 5,
        image: "/images/testimonials/priya-mehta.png",
      },
    ],
    caseHighlights: [
      {
        title: "Multi-Billion Dollar M&A Transaction",
        category: "Corporate Law",
        description:
          "Represented a leading technology conglomerate in a cross-border acquisition.",
        outcome:
          "Successfully closed INR 5,000 Cr transaction with regulatory approval in record time.",
      },
      {
        title: "High Court Constitutional Challenge",
        category: "Constitutional Law",
        description:
          "Challenged discriminatory provisions in state legislation.",
        outcome:
          "Landmark judgment setting precedent for similar cases across India.",
      },
    ],
    faqs: [
      {
        question: "What are your consultation fees for corporate matters?",
        answer:
          "Our consultation fees vary based on the complexity of the matter. We offer an initial consultation to understand your needs and provide a transparent fee structure. Please contact our office for specific details.",
      },
      {
        question: "Do you handle cases outside Delhi NCR?",
        answer:
          "Yes, our Delhi office coordinates with our pan-India network to handle matters across the country. We have dedicated teams for inter-state litigation and corporate transactions.",
      },
      {
        question: "What documents should I bring for my first consultation?",
        answer:
          "Please bring all relevant documents related to your matter, including any correspondence, contracts, court notices, and identification documents. Our team will review these during the consultation.",
      },
    ],
    gallery: [
      {
        src: "/images/offices/delhi/exterior.png",
        alt: "Delhi Office Exterior",
        category: "Office",
      },
      {
        src: "/images/offices/delhi/reception.png",
        alt: "Delhi Office Reception",
        category: "Interior",
      },
      {
        src: "/images/offices/delhi/conference.png",
        alt: "Conference Room",
        category: "Interior",
      },
      {
        src: "/images/offices/delhi/team.png",
        alt: "Delhi Legal Team",
        category: "Team",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    fullName: "Mumbai Office",
    state: "Maharashtra",
    address: "23rd Floor, Nariman Point, Mumbai - 400021",
    phone: "+91 22 4567 8901",
    email: "mumbai@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Neha Desai",
      designation: "Managing Partner - West India",
      experience: "25 years",
      specializations: ["Securities Law", "Banking & Finance", "Insolvency"],
      bio: "Advocate Neha Desai is one of India's foremost experts in securities law and financial regulations. Her practice spans capital markets, banking disputes, and corporate restructuring. She has advised on some of the largest IPOs and debt restructurings in Indian corporate history.",
      image: "/images/partners/neha-desai.png",
    },
    coordinates: {
      x: 38,
      y: 58,
    },
    serviceAreas: ["Mumbai", "Thane", "Navi Mumbai", "Pune", "Nashik"],
    testimonials: [
      {
        name: "Vikram Malhotra",
        role: "CFO",
        company: "Stellar Pharma Ltd",
        content:
          "Their expertise in securities law was invaluable during our IPO. The team's dedication and professionalism exceeded our expectations.",
        rating: 5,
        image: "/images/testimonials/vikram-malhotra.png",
      },
    ],
    caseHighlights: [
      {
        title: "Landmark IPO Advisory",
        category: "Securities Law",
        description: "Led legal advisory for one of India's largest tech IPOs.",
        outcome:
          "Successfully listed with 3x oversubscription and full regulatory compliance.",
      },
    ],
    faqs: [
      {
        question: "Do you handle SEBI matters?",
        answer:
          "Yes, we have extensive experience representing clients before SEBI and handling all securities-related matters including compliance, investigations, and appeals.",
      },
    ],
    gallery: [
      {
        src: "/images/offices/mumbai/exterior.png",
        alt: "Mumbai Office Exterior",
        category: "Office",
      },
      {
        src: "/images/offices/mumbai/reception.png",
        alt: "Mumbai Office Reception",
        category: "Interior",
      },
    ],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    fullName: "Bangalore Office",
    state: "Karnataka",
    address: "18th Floor, UB City, Vittal Mallya Road, Bangalore - 560001",
    phone: "+91 80 4567 8902",
    email: "bangalore@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Karthik Rao",
      designation: "Managing Partner - South India",
      experience: "22 years",
      specializations: [
        "Technology Law",
        "Startup Advisory",
        "Intellectual Property",
      ],
      bio: "Advocate Karthik Rao has been at the forefront of technology law in India for over two decades. His practice focuses on emerging technologies, data protection, and startup ecosystem. He has advised unicorns and Fortune 500 tech companies on their Indian operations.",
      image: "/images/partners/karthik-rao.png",
    },
    coordinates: {
      x: 46,
      y: 72,
    },
    serviceAreas: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
    testimonials: [
      {
        name: "Sarah Chen",
        role: "Founder",
        company: "NexGen AI",
        content:
          "Karthik and his team understood our tech startup perfectly. Their IP strategy has been crucial for our growth and funding rounds.",
        rating: 5,
        image: "/images/testimonials/sarah-chen.png",
      },
    ],
    caseHighlights: [
      {
        title: "Unicorn Series D Funding",
        category: "Startup Advisory",
        description:
          "Advised a fintech unicorn on $400M Series D funding round.",
        outcome:
          "Completed complex multi-jurisdictional transaction with optimal structure.",
      },
    ],
    faqs: [
      {
        question: "Do you specialize in startup legal needs?",
        answer:
          "Absolutely. Our Bangalore office has a dedicated startup practice covering incorporation, funding rounds, ESOP structures, compliance, and exit strategies.",
      },
    ],
    gallery: [
      {
        src: "/images/offices/bangalore/exterior.png",
        alt: "Bangalore Office Exterior",
        category: "Office",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    fullName: "Hyderabad Office",
    state: "Telangana",
    address: "12th Floor, Hitech City, Hyderabad - 500081",
    phone: "+91 40 4567 8903",
    email: "hyderabad@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Lakshmi Reddy",
      designation: "Senior Partner",
      experience: "20 years",
      specializations: [
        "Real Estate",
        "Infrastructure",
        "Government Contracts",
      ],
      bio: "Advocate Lakshmi Reddy brings extensive experience in real estate and infrastructure projects. She has advised on major infrastructure developments and PPP projects across Telangana and Andhra Pradesh.",
      image: "/images/partners/lakshmi-reddy.png",
    },
    coordinates: {
      x: 50,
      y: 58,
    },
    serviceAreas: ["Hyderabad", "Secunderabad", "Warangal", "Vijayawada"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "chennai",
    name: "Chennai",
    fullName: "Chennai Office",
    state: "Tamil Nadu",
    address: "20th Floor, Anna Salai, Chennai - 600002",
    phone: "+91 44 4567 8904",
    email: "chennai@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Venkatesh Iyer",
      designation: "Senior Partner",
      experience: "24 years",
      specializations: ["Maritime Law", "Manufacturing", "Trade & Commerce"],
      bio: "Advocate Venkatesh Iyer is a leading maritime and trade law expert with extensive experience in port-related matters, shipping disputes, and international trade compliance.",
      image: "/images/partners/venkatesh-iyer.png",
    },
    coordinates: {
      x: 50,
      y: 78,
    },
    serviceAreas: ["Chennai", "Coimbatore", "Madurai", "Trichy"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    fullName: "Kolkata Office",
    state: "West Bengal",
    address: "16th Floor, Park Street, Kolkata - 700016",
    phone: "+91 33 4567 8905",
    email: "kolkata@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Sanjay Banerjee",
      designation: "Senior Partner",
      experience: "26 years",
      specializations: ["Tea Industry", "Eastern Trade", "Labor Law"],
      bio: "Advocate Sanjay Banerjee has deep expertise in eastern India's unique legal landscape, particularly in tea industry matters, labor disputes, and cross-border trade with neighboring countries.",
      image: "/images/partners/sanjay-banerjee.png",
    },
    coordinates: {
      x: 68,
      y: 45,
    },
    serviceAreas: ["Kolkata", "Howrah", "Siliguri", "Durgapur"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    fullName: "Ahmedabad Office",
    state: "Gujarat",
    address: "10th Floor, SG Highway, Ahmedabad - 380054",
    phone: "+91 79 4567 8906",
    email: "ahmedabad@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Mehul Patel",
      designation: "Senior Partner",
      experience: "21 years",
      specializations: ["Textile Industry", "Manufacturing", "Export-Import"],
      bio: "Advocate Mehul Patel specializes in Gujarat's vibrant business ecosystem, with expertise in textile industry regulations, manufacturing compliance, and international trade.",
      image: "/images/partners/mehul-patel.png",
    },
    coordinates: {
      x: 35,
      y: 45,
    },
    serviceAreas: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "pune",
    name: "Pune",
    fullName: "Pune Office",
    state: "Maharashtra",
    address: "8th Floor, Koregaon Park, Pune - 411001",
    phone: "+91 20 4567 8907",
    email: "pune@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Arun Joshi",
      designation: "Senior Partner",
      experience: "19 years",
      specializations: ["Automotive Industry", "IT Services", "Education Law"],
      bio: "Advocate Arun Joshi brings deep expertise in Pune's diverse industrial sectors, from automotive manufacturing to IT services and educational institutions.",
      image: "/images/partners/arun-joshi.png",
    },
    coordinates: {
      x: 40,
      y: 55,
    },
    serviceAreas: ["Pune", "Pimpri-Chinchwad", "Lonavala"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    fullName: "Jaipur Office",
    state: "Rajasthan",
    address: "6th Floor, MI Road, Jaipur - 302001",
    phone: "+91 141 4567 8908",
    email: "jaipur@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Pradeep Singh",
      designation: "Senior Partner",
      experience: "23 years",
      specializations: ["Mining Law", "Tourism", "Heritage Property"],
      bio: "Advocate Pradeep Singh is Rajasthan's foremost expert in mining regulations, tourism law, and heritage property matters.",
      image: "/images/partners/pradeep-singh.png",
    },
    coordinates: {
      x: 42,
      y: 38,
    },
    serviceAreas: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    fullName: "Lucknow Office",
    state: "Uttar Pradesh",
    address: "4th Floor, Hazratganj, Lucknow - 226001",
    phone: "+91 522 4567 8909",
    email: "lucknow@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Alok Verma",
      designation: "Senior Partner",
      experience: "20 years",
      specializations: [
        "Government Affairs",
        "Land Acquisition",
        "Criminal Defense",
      ],
      bio: "Advocate Alok Verma has extensive experience in UP's legal landscape with expertise in government contracts, land matters, and high-profile criminal defense.",
      image: "/images/partners/alok-verma.png",
    },
    coordinates: {
      x: 56,
      y: 35,
    },
    serviceAreas: ["Lucknow", "Kanpur", "Varanasi", "Allahabad"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    fullName: "Chandigarh Office",
    state: "Punjab",
    address: "3rd Floor, Sector 17, Chandigarh - 160017",
    phone: "+91 172 4567 8910",
    email: "chandigarh@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Harpreet Kaur",
      designation: "Senior Partner",
      experience: "18 years",
      specializations: [
        "Agricultural Law",
        "Punjab & Haryana High Court",
        "NRI Matters",
      ],
      bio: "Advocate Harpreet Kaur specializes in agricultural disputes, land matters, and NRI legal issues across Punjab, Haryana, and Himachal Pradesh.",
      image: "/images/partners/harpreet-kaur.png",
    },
    coordinates: {
      x: 48,
      y: 25,
    },
    serviceAreas: ["Chandigarh", "Mohali", "Panchkula", "Ludhiana", "Amritsar"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "kochi",
    name: "Kochi",
    fullName: "Kochi Office",
    state: "Kerala",
    address: "5th Floor, MG Road, Kochi - 682011",
    phone: "+91 484 4567 8911",
    email: "kochi@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Thomas Kurian",
      designation: "Senior Partner",
      experience: "22 years",
      specializations: ["Shipping & Ports", "Tourism", "NRI Property"],
      bio: "Advocate Thomas Kurian is Kerala's leading expert in maritime law, tourism regulations, and NRI property disputes.",
      image: "/images/partners/thomas-kurian.png",
    },
    coordinates: {
      x: 44,
      y: 80,
    },
    serviceAreas: ["Kochi", "Trivandrum", "Calicut", "Thrissur"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "indore",
    name: "Indore",
    fullName: "Indore Office",
    state: "Madhya Pradesh",
    address: "7th Floor, Vijay Nagar, Indore - 452010",
    phone: "+91 731 4567 8912",
    email: "indore@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Rakesh Dubey",
      designation: "Senior Partner",
      experience: "19 years",
      specializations: [
        "Pharmaceutical",
        "Agri-Business",
        "Commercial Disputes",
      ],
      bio: "Advocate Rakesh Dubey brings expertise in central India's pharmaceutical industry, agri-business regulations, and commercial litigation.",
      image: "/images/partners/rakesh-dubey.png",
    },
    coordinates: {
      x: 44,
      y: 48,
    },
    serviceAreas: ["Indore", "Bhopal", "Ujjain", "Gwalior"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    fullName: "Bhubaneswar Office",
    state: "Odisha",
    address: "9th Floor, Janpath, Bhubaneswar - 751001",
    phone: "+91 674 4567 8913",
    email: "bhubaneswar@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Sambit Mohanty",
      designation: "Senior Partner",
      experience: "17 years",
      specializations: ["Mining", "Tribal Rights", "Environmental Law"],
      bio: "Advocate Sambit Mohanty specializes in Odisha's mining sector, tribal rights issues, and environmental compliance matters.",
      image: "/images/partners/sambit-mohanty.png",
    },
    coordinates: {
      x: 62,
      y: 52,
    },
    serviceAreas: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "guwahati",
    name: "Guwahati",
    fullName: "Guwahati Office",
    state: "Assam",
    address: "4th Floor, GS Road, Guwahati - 781005",
    phone: "+91 361 4567 8914",
    email: "guwahati@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Bhaskar Deka",
      designation: "Senior Partner",
      experience: "21 years",
      specializations: ["Tea Industry", "Oil & Gas", "Northeast Development"],
      bio: "Advocate Bhaskar Deka is the leading legal expert for Northeast India, specializing in tea industry matters, oil & gas regulations, and regional development projects.",
      image: "/images/partners/bhaskar-deka.png",
    },
    coordinates: {
      x: 78,
      y: 38,
    },
    serviceAreas: ["Guwahati", "Shillong", "Imphal", "Dibrugarh"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    fullName: "Nagpur Office",
    state: "Maharashtra",
    address: "6th Floor, Civil Lines, Nagpur - 440001",
    phone: "+91 712 4567 8915",
    email: "nagpur@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Vivek Bhonsle",
      designation: "Senior Partner",
      experience: "18 years",
      specializations: ["Mining", "Orange Industry", "Central India Trade"],
      bio: "Advocate Vivek Bhonsle specializes in Vidarbha region's unique legal needs including mining law, agricultural commodities, and regional trade.",
      image: "/images/partners/vivek-bhonsle.png",
    },
    coordinates: {
      x: 50,
      y: 50,
    },
    serviceAreas: ["Nagpur", "Wardha", "Amravati", "Chandrapur"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "patna",
    name: "Patna",
    fullName: "Patna Office",
    state: "Bihar",
    address: "5th Floor, Fraser Road, Patna - 800001",
    phone: "+91 612 4567 8916",
    email: "patna@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Manoj Kumar",
      designation: "Senior Partner",
      experience: "20 years",
      specializations: [
        "Criminal Law",
        "Land Disputes",
        "Government Contracts",
      ],
      bio: "Advocate Manoj Kumar brings extensive experience in Bihar's legal system with expertise in criminal defense, land disputes, and government affairs.",
      image: "/images/partners/manoj-kumar.png",
    },
    coordinates: {
      x: 62,
      y: 38,
    },
    serviceAreas: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    fullName: "Visakhapatnam Office",
    state: "Andhra Pradesh",
    address: "8th Floor, Beach Road, Visakhapatnam - 530002",
    phone: "+91 891 4567 8917",
    email: "vizag@vipintyagilawfirm.in",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    partner: {
      name: "Advocate Srinivas Rao",
      designation: "Senior Partner",
      experience: "19 years",
      specializations: [
        "Ports & Shipping",
        "Steel Industry",
        "Special Economic Zones",
      ],
      bio: "Advocate Srinivas Rao specializes in Visakhapatnam's port-centric economy with expertise in maritime law, heavy industries, and SEZ regulations.",
      image: "/images/partners/srinivas-rao.png",
    },
    coordinates: {
      x: 58,
      y: 58,
    },
    serviceAreas: ["Visakhapatnam", "Vijayawada", "Guntur", "Kakinada"],
    testimonials: [],
    caseHighlights: [],
    faqs: [],
    gallery: [],
  },
];
export const practiceAreas = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    shortDescription:
      "Comprehensive corporate legal services for businesses of all sizes.",
    description:
      "From company formation to complex mergers and acquisitions, our corporate practice provides end-to-end legal support for businesses navigating India's evolving regulatory landscape.",
    icon: "Building2",
    services: [
      "Company Formation",
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Compliance Advisory",
      "Due Diligence",
      "Joint Ventures",
    ],
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    shortDescription:
      "Strategic defense for individuals and corporations facing criminal charges.",
    description:
      "Our criminal defense team brings decades of courtroom experience to protect your rights and reputation with strategic, aggressive representation.",
    icon: "Shield",
    services: [
      "White Collar Crime",
      "Economic Offenses",
      "Bail Applications",
      "Trial Defense",
      "Appeals",
      "Anticipatory Bail",
    ],
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    shortDescription:
      "Expert representation in complex civil disputes across all forums.",
    description:
      "We handle high-stakes civil litigation with a track record of success in commercial disputes, contract enforcement, and recovery proceedings.",
    icon: "Scale",
    services: [
      "Commercial Disputes",
      "Contract Litigation",
      "Recovery Suits",
      "Injunctions",
      "Arbitration",
      "Mediation",
    ],
  },
  {
    slug: "property-law",
    title: "Property Law",
    shortDescription:
      "Complete real estate legal services from acquisition to dispute resolution.",
    description:
      "Our property practice covers all aspects of real estate law, including due diligence, documentation, registration, and litigation.",
    icon: "Home",
    services: [
      "Property Due Diligence",
      "Title Verification",
      "Sale/Purchase Documentation",
      "Land Acquisition",
      "RERA Compliance",
      "Property Disputes",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    shortDescription:
      "Sensitive handling of family matters with discretion and expertise.",
    description:
      "We provide compassionate yet effective legal representation in all family matters, protecting your interests while seeking amicable resolutions where possible.",
    icon: "Users",
    services: [
      "Divorce & Separation",
      "Child Custody",
      "Maintenance",
      "Domestic Violence",
      "Succession",
      "Adoption",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    shortDescription: "Protecting and monetizing your intellectual assets.",
    description:
      "Our IP practice helps creators, inventors, and businesses protect their innovations, brands, and creative works across all IP domains.",
    icon: "Lightbulb",
    services: [
      "Trademark Registration",
      "Patent Filing",
      "Copyright Protection",
      "IP Litigation",
      "Licensing",
      "Trade Secrets",
    ],
  },
  {
    slug: "arbitration",
    title: "Arbitration & ADR",
    shortDescription:
      "Efficient dispute resolution through alternative mechanisms.",
    description:
      "We offer expertise in domestic and international arbitration, providing efficient resolution of complex commercial disputes outside traditional courts.",
    icon: "Gavel",
    services: [
      "Commercial Arbitration",
      "International Arbitration",
      "Mediation",
      "Conciliation",
      "Arbitration Enforcement",
      "Institutional Arbitration",
    ],
  },
  {
    slug: "startup-advisory",
    title: "Startup Advisory",
    shortDescription:
      "Legal partner for India's next generation of entrepreneurs.",
    description:
      "From incorporation to exit, we provide comprehensive legal support tailored to the unique needs of startups and their investors.",
    icon: "Rocket",
    services: [
      "Company Incorporation",
      "Funding Documentation",
      "ESOP Structuring",
      "Founder Agreements",
      "Regulatory Compliance",
      "Exit Strategy",
    ],
  },
];
export const teamMembers = [
  {
    name: "Vipin Tyagi",
    designation: "Founder & Chairman",
    image: "/images/team/owner.webp",
    description:
      "Practicing Legal Practices for the last 20 years. And Past DGC (Civil) of Ghaziabad District Court. He is also a member of the Bar Council of India and has been recognized for his contributions to legal education and advocacy.",
  },
  {
    name: " Sachin Kumar",
    designation: "Advocate",
    image: "/images/team/sachin.jpeg",
    description:
      "Leading corporate and constitutional law expert with 28 years of experience.",
  },
  {
    name: "Advocate Neha Desai",
    designation: "Managing Partner - West India",
    image: "/images/team/3.jpeg",
    description:
      "Securities law specialist with expertise in capital markets and banking.",
  },
  {
    name: "Keshav",
    designation: "Advocate",
    image: "/images/team/kehav.webp",
    description:
      "Technology law pioneer advising India's leading tech companies.",
  },
  {
    name: "Sanchet Mishra",
    designation: "Advocate",
    image: "/images/team/4.jpeg",
    description:
      "Technology law pioneer advising India's leading tech companies.",
  },
  {
    name: "Yogender Dhankad ",
    designation: "Advocate",
    image: "/images/team/yd.jpeg",
    description:
      "Legal Consultant since last 15 Years.",
  },
  {
    name: "Prateek Rai  ",
    designation: "Advocate",
    image: "/images/team/pr.jpeg",
    description:
      "Practicing since last 13 Years.",
  },
];
export const stats = [
  {
    value: "18+",
    label: "Cities Served",
  },
  {
    value: "150+",
    label: "Legal Experts",
  },
  {
    value: "25,000+",
    label: "Cases Handled",
  },
  {
    value: "500+",
    label: "Corporate Clients",
  },
];
export const testimonials = [
  {
    name: "Amit Kapoor",
    role: "CEO",
    company: "TechVentures India",
    content:
      "Apex Legal Partners provided exceptional guidance during our complex merger. Their strategic approach and attention to detail were instrumental in closing the deal seamlessly.",
    rating: 5,
    image: "/images/testimonials/amit-kapoor.png",
  },
  {
    name: "Priya Mehta",
    role: "Managing Director",
    company: "Horizon Realty",
    content:
      "Their property law expertise saved us from a potentially costly legal dispute. Professional, thorough, and always available when needed.",
    rating: 5,
    image: "/images/testimonials/priya-mehta.png",
  },
  {
    name: "Vikram Malhotra",
    role: "CFO",
    company: "Stellar Pharma Ltd",
    content:
      "Their expertise in securities law was invaluable during our IPO. The team's dedication and professionalism exceeded our expectations.",
    rating: 5,
    image: "/images/testimonials/vikram-malhotra.png",
  },
  {
    name: "Ananya Singh",
    role: "Founder",
    company: "EduTech Solutions",
    content:
      "From our Series A to expansion across India, Apex has been our trusted legal partner. They understand startups like no other firm.",
    rating: 5,
    image: "/images/testimonials/ananya-singh.png",
  },
  {
    name: "Rajesh Gupta",
    role: "Chairman",
    company: "Gupta Steel Industries",
    content:
      "Three generations of my family have trusted Apex Legal Partners. Their integrity and expertise are unmatched in the industry.",
    rating: 5,
    image: "/images/testimonials/rajesh-gupta.png",
  },
];
export const successStories = [
  {
    title: "Multi-Billion Dollar Cross-Border M&A",
    category: "Corporate Law",
    client: "Leading Technology Conglomerate",
    challenge:
      "Complex regulatory approvals across multiple jurisdictions for a $2.5 billion acquisition.",
    solution:
      "Coordinated with regulators in India, Singapore, and the EU. Structured the deal to optimize tax efficiency while ensuring full compliance.",
    outcome:
      "Successfully closed the transaction 3 months ahead of schedule with all regulatory approvals secured.",
    image: "/images/cases/ma-deal.png",
  },
  {
    title: "Landmark Constitutional Victory",
    category: "Constitutional Law",
    client: "Industry Association",
    challenge:
      "Challenged unconstitutional provisions affecting thousands of businesses across India.",
    solution:
      "Built a comprehensive constitutional challenge citing fundamental rights violations and discrimination.",
    outcome:
      "Supreme Court ruled in our client's favor, setting a precedent that benefits the entire industry.",
    image: "/images/cases/constitutional.png",
  },
  {
    title: "Complex Property Dispute Resolution",
    category: "Property Law",
    client: "Heritage Hotel Group",
    challenge:
      "Multi-party dispute over prime heritage property valued at over ₹500 crores.",
    solution:
      "Employed strategic litigation combined with mediation to protect client's interests while seeking resolution.",
    outcome:
      "Secured complete title for our client with all opposing claims dismissed.",
    image: "/images/cases/property.png",
  },
];
export const blogPosts = [
  {
    slug: "new-companies-act-amendments-2024",
    title: "Understanding the New Companies Act Amendments 2024",
    excerpt:
      "A comprehensive analysis of the recent amendments to the Companies Act and their implications for corporate governance.",
    category: "Corporate Law",
    author: "Advocate Rajiv Sharma",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "/images/blog/companies-act.png",
  },
  {
    slug: "digital-personal-data-protection-compliance",
    title: "Digital Personal Data Protection Act: Compliance Guide",
    excerpt:
      "Essential compliance requirements under the new data protection law for businesses operating in India.",
    category: "Technology Law",
    author: "Advocate Karthik Rao",
    date: "2024-03-10",
    readTime: "12 min read",
    image: "/images/blog/data-protection.png",
  },
  {
    slug: "rera-updates-homebuyers",
    title: "RERA Updates: Enhanced Protection for Homebuyers",
    excerpt:
      "Recent RERA developments that strengthen homebuyer rights and developer accountability.",
    category: "Property Law",
    author: "Advocate Lakshmi Reddy",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "/images/blog/rera.png",
  },
];
