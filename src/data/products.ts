export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Robotics Starter Kit",
    description: "Perfect for beginners, this robotics kit includes everything needed to build and program your first robot. Learn coding basics while having fun with hands-on projects.",
    price: 89.99,
    images: [
      "/images/robotics-kit-1.jpg",
      "/images/robotics-kit-2.jpg",
      "/images/robotics-kit-3.jpg"
    ],
    category: "Robotics",
    features: [
      "Arduino-compatible microcontroller",
      "Step-by-step project guide",
      "Basic sensors and motors",
      "USB programming cable",
      "Rechargeable battery pack"
    ]
  },
  {
    id: 2,
    name: "Chemistry Lab Kit",
    description: "Explore the fascinating world of chemistry with this comprehensive lab kit. Includes safe experiments and detailed instructions for young scientists.",
    price: 69.99,
    images: [
      "/images/chemistry-kit-1.jpg",
      "/images/chemistry-kit-2.jpg",
      "/images/chemistry-kit-3.jpg"
    ],
    category: "Science",
    features: [
      "20+ safe experiments",
      "Lab safety equipment",
      "Chemical reagents",
      "Detailed experiment guide",
      "STEM activity cards"
    ]
  },
  {
    id: 3,
    name: "Coding Adventure Kit",
    description: "Learn programming fundamentals through fun, interactive projects. Perfect for kids interested in computer science and game development.",
    price: 79.99,
    images: [
      "/images/coding-kit-1.jpg",
      "/images/coding-kit-2.jpg",
      "/images/coding-kit-3.jpg"
    ],
    category: "Programming",
    features: [
      "Visual programming interface",
      "Game development projects",
      "Interactive tutorials",
      "Progress tracking",
      "Online learning platform access"
    ]
  }
]; 