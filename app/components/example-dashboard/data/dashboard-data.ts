export const stats = [
  { label: "Total Artifacts", value: "2,847" },
  { label: "Collections", value: "12" },
  { label: "Exhibitions", value: "8" },
  { label: "Researchers", value: "24" },
];

export const recentArtifacts = [
  {
    id: 1,
    title: "Neolithic Pottery",
    period: "3000 BCE",
    image:
      "https://images.unsplash.com/photo-1628074958552-7c9d0b4173b7?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Bronze Age Tool",
    period: "1200 BCE",
    image:
      "https://images.unsplash.com/photo-1644169511545-3b317c048a45?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Ancient Textile",
    period: "500 BCE",
    image:
      "https://images.unsplash.com/photo-1621886292650-520f76c747d6?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Stone Carving",
    period: "800 BCE",
    image:
      "https://images.unsplash.com/photo-1695902263725-96a82974d297?w=400&h=300&fit=crop",
  },
];

export const activeResearchers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Lead Archaeologist",
    avatar: "https://i.pravatar.cc/150?img=1",
    status: "active" as const,
  },
  {
    id: 2,
    name: "Prof. James Wilson",
    role: "Ceramics Specialist",
    avatar: "https://i.pravatar.cc/150?img=13",
    status: "active" as const,
  },
  {
    id: 3,
    name: "Dr. Maria Rodriguez",
    role: "Textile Conservator",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "away" as const,
  },
  {
    id: 4,
    name: "Prof. David Mitchell",
    role: "Ancient Civilizations",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "sabbatical" as const,
  },
  {
    id: 5,
    name: "Dr. Emily Zhang",
    role: "Stone Analysis",
    avatar: "https://i.pravatar.cc/150?img=47",
    status: "active" as const,
  },
];

export const researchAssignments = [
  {
    id: 1,
    researcher: "Dr. Sarah Chen",
    project: "Neolithic Settlement Patterns",
    progress: 85,
    category: "Archaeology",
  },
  {
    id: 2,
    researcher: "Prof. James Wilson",
    project: "Ancient Ceramic Analysis",
    progress: 60,
    category: "Conservation",
  },
  {
    id: 3,
    researcher: "Prof. David Mitchell",
    project: "Bronze Age Trade Routes",
    progress: 95,
    category: "Research",
  },
  {
    id: 4,
    researcher: "Dr. Maria Rodriguez",
    project: "Textile Preservation Study",
    progress: 40,
    category: "Conservation",
  },
];
