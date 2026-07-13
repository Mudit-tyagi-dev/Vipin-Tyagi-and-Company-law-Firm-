export const cityOffices = [
  { slug: 'srinagar', name: 'Srinagar', state: 'Jammu & Kashmir', coordinates: { cx: 147, cy: 70 } },
  { slug: 'jammu', name: 'Jammu', state: 'Jammu & Kashmir', coordinates: { cx: 145, cy: 107 } },
  { slug: 'shimla', name: 'Shimla', state: 'Himachal Pradesh', coordinates: { cx: 195, cy: 144 } },
  { slug: 'chandigarh', name: 'Chandigarh', state: 'Chandigarh', coordinates: { cx: 175, cy: 160 } },
  { slug: 'dehradun', name: 'Dehradun', state: 'Uttarakhand', coordinates: { cx: 210, cy: 168 } },
  { slug: 'nainital', name: 'Nainital', state: 'Uttarakhand', coordinates: { cx: 240, cy: 196 } },
  { slug: 'delhi', name: 'Delhi', state: 'Delhi', coordinates: { cx: 188, cy: 210 } },
  { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan', coordinates: { cx: 160, cy: 255 } },
  { slug: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', coordinates: { cx: 275, cy: 260 } },
  { slug: 'allahabad', name: 'Prayagraj', state: 'Uttar Pradesh', coordinates: { cx: 290, cy: 285 } },
  { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', coordinates: { cx: 90, cy: 340 } },
  { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra', coordinates: { cx: 100, cy: 435 } },
  { slug: 'pune', name: 'Pune', state: 'Maharashtra', coordinates: { cx: 125, cy: 450 } },
  { slug: 'nagpur', name: 'Nagpur', state: 'Maharashtra', coordinates: { cx: 230, cy: 380 } },
  { slug: 'hyderabad', name: 'Hyderabad', state: 'Telangana', coordinates: { cx: 215, cy: 465 } },
  { slug: 'bangalore', name: 'Bangalore', state: 'Karnataka', coordinates: { cx: 200, cy: 560 } },
  { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal', coordinates: { cx: 418, cy: 345 } },
];

export const practiceAreas = [
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    shortDescription: 'Comprehensive corporate legal services for businesses of all sizes.',
    description: "From company formation to complex mergers and acquisitions, our corporate practice provides end-to-end legal support for businesses navigating India's evolving regulatory landscape.",
    icon: 'Building2',
    services: [
      'Company Formation',
      'Mergers & Acquisitions',
      'Corporate Governance',
      'Compliance Advisory',
      'Due Diligence',
      'Joint Ventures',
    ],
  },
  {
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    shortDescription: 'Strategic defense for individuals and corporations facing criminal charges.',
    description: 'Our criminal defense team brings decades of courtroom experience to protect your rights and reputation with strategic, aggressive representation.',
    icon: 'Shield',
    services: [
      'White Collar Crime',
      'Economic Offenses',
      'Bail Applications',
      'Trial Defense',
      'Appeals',
      'Anticipatory Bail',
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    shortDescription: 'Expert representation in complex civil disputes across all forums.',
    description: 'We handle high-stakes civil litigation with a track record of success in commercial disputes, contract enforcement, and recovery proceedings.',
    icon: 'Scale',
    services: [
      'Commercial Disputes',
      'Contract Litigation',
      'Recovery Suits',
      'Injunctions',
      'Arbitration',
      'Mediation',
    ],
  },
  {
    slug: 'property-law',
    title: 'Property Law',
    shortDescription: 'Complete real estate legal services from acquisition to dispute resolution.',
    description: 'Our property practice covers all aspects of real estate law, including due diligence, documentation, registration, and litigation.',
    icon: 'Home',
    services: [
      'Property Due Diligence',
      'Title Verification',
      'Sale/Purchase Documentation',
      'Land Acquisition',
      'RERA Compliance',
      'Property Disputes',
    ],
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    shortDescription: 'Sensitive handling of family matters with discretion and expertise.',
    description: 'We provide compassionate yet effective legal representation in all family matters, protecting your interests while seeking amicable resolutions where possible.',
    icon: 'Users',
    services: [
      'Divorce & Separation',
      'Child Custody',
      'Maintenance',
      'Domestic Violence',
      'Succession',
      'Adoption',
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    shortDescription: 'Protecting and monetizing your intellectual assets.',
    description: 'Our IP practice helps creators, inventors, and businesses protect their innovations, brands, and creative works across all IP domains.',
    icon: 'Lightbulb',
    services: [
      'Trademark Registration',
      'Patent Filing',
      'Copyright Protection',
      'IP Litigation',
      'Licensing',
      'Trade Secrets',
    ],
  },
  {
    slug: 'arbitration',
    title: 'Arbitration & ADR',
    shortDescription: 'Efficient dispute resolution through alternative mechanisms.',
    description: 'We offer expertise in domestic and international arbitration, providing efficient resolution of complex commercial disputes outside traditional courts.',
    icon: 'Gavel',
    services: [
      'Commercial Arbitration',
      'International Arbitration',
      'Mediation',
      'Conciliation',
      'Arbitration Enforcement',
      'Institutional Arbitration',
    ],
  },
  {
    slug: 'startup-advisory',
    title: 'Startup Advisory',
    shortDescription: "Legal partner for India's next generation of entrepreneurs.",
    description: 'From incorporation to exit, we provide comprehensive legal support tailored to the unique needs of startups and their investors.',
    icon: 'Rocket',
    services: [
      'Company Incorporation',
      'Funding Documentation',
      'ESOP Structuring',
      'Founder Agreements',
      'Regulatory Compliance',
      'Exit Strategy',
    ],
  },
];

export const teamMembers = [
  {
    name: 'Vipin Tyagi',
    designation: 'Founder & Senior Advocate',
    image: '/images/team/vp.jpeg',
    description:
      'Practicing Legal Practices for the last 22+ years. And Former DGC (Civil) of Ghaziabad District Court. He is also a member of the Supreme Court of India and has been recognized for his contributions to legal education and advocacy.',
  },
  {
    name: 'Yogender Dhankad',
    designation: 'Advocate',
    image: '/images/team/yd.jpeg',
  },
  {
    name: 'Prateek Rai',
    designation: 'Advocate',
    image: '/images/team/pr.jpeg',
  },
  {
    name: 'Lovely kaur',
    designation: 'Advocate',
    image: '/images/team/lovely.jpeg',
  },
  {
    name: 'Sachin Kumar',
    designation: 'Advocate',
    image: '/images/team/sachin.jpeg',
  },
  {
    name: 'Himanshu Bhadauria',
    designation: 'Advocate',
    image: '/images/team/himansu.jpeg',
  },
  {
    name: 'Shivam Sharma',
    designation: 'Advocate',
    image: '/images/team/3.jpeg',
    description: '',
  },
  {
    name: 'Keshav Tyagi',
    designation: 'Advocate',
    image: '/images/team/kehav.webp',
  },
  {
    name: 'Sanchet Mishra',
    designation: 'Advocate',
    image: '/images/team/4.jpeg',
  },
];

export const stats = [
  {
    value: '18+',
    label: 'Cities Served',
  },
  {
    value: '150+',
    label: 'Legal Experts',
  },
  {
    value: '25,000+',
    label: 'Cases Handled',
  },
  {
    value: '700+',
    label: 'Corporate Clients',
  },
];

export const testimonials = [
  {
    name: 'Advocate Keshav Tyagi',
    role: 'Client',
    company: 'Google Review',
    content:
      'Vipin Tyagi & Company is a highly professional law firm that works with dedication, ambition, and commitment toward achieving the best outcomes for its clients.',
    rating: 5,
    image: '/images/testimonials/client-1.jpg',
  },
  {
    name: 'Yogendra Kumar Dhankad',
    role: 'Client',
    company: 'Google Review',
    content:
      'Excellent legal services and consistent dedication. Wishing the firm continued success and growth in serving clients with integrity and professionalism.',
    rating: 5,
    image: '/images/testimonials/client-2.jpg',
  },
  {
    name: 'Mayank Burmee',
    role: 'Matrimonial Case Client',
    company: 'Google Review',
    content:
      'Advocate Vipin Tyagi combines legal knowledge with practical experience. He patiently addressed my concerns and provided valuable guidance in my matrimonial matter.',
    rating: 5,
    image: '/images/testimonials/client-3.jpg',
  },
  {
    name: 'Ajay Baghel',
    role: 'Client',
    company: 'Google Review',
    content:
      'I received tremendous support and guidance throughout my legal matter. I am grateful for the assistance and professional approach provided by the firm.',
    rating: 5,
    image: '/images/testimonials/client-4.jpg',
  },
  {
    name: 'Pawan Sharma',
    role: 'Client',
    company: 'Google Review',
    content:
      'I was facing significant difficulties before consulting Advocate Vipin Tyagi. After meeting him, I received the legal support and confidence I needed to move forward.',
    rating: 5,
    image: '/images/testimonials/client-5.jpg',
  },
  {
    name: 'Vikas Bijalwan',
    role: 'Client',
    company: 'Google Review',
    content: 'Best Services....Given by Mr. Vipin ji...',
    rating: 5,
    image: '/images/testimonials/client-6.jpg',
  },
];
