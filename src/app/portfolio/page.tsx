"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "EcoHealth Wellness Center",
      category: "web-development",
      image: "https://placehold.co/400x300?text=Modern+wellness+center+website+with+green+natural+design+and+appointment+booking",
      description: "Complete website redesign for a wellness center with booking system and patient portal.",
      tags: ["Web Design", "E-commerce", "Booking System"],
    },
    {
      id: 2,
      title: "GreenLeaf Organic Store",
      category: "digital-marketing",
      image: "https://placehold.co/400x300?text=Organic+store+social+media+marketing+campaign+with+natural+green+imagery",
      description: "Digital marketing campaign that increased organic store sales by 250%.",
      tags: ["SEO", "Social Media", "Content Marketing"],
    },
    {
      id: 3,
      title: "Natural Skincare Brand",
      category: "branding",
      image: "https://placehold.co/400x300?text=Natural+skincare+brand+identity+with+beige+and+green+color+palette",
      description: "Complete brand identity for premium natural skincare line.",
      tags: ["Logo Design", "Packaging", "Brand Guidelines"],
    },
    {
      id: 4,
      title: "Mindful Therapy Practice",
      category: "web-development",
      image: "https://placehold.co/400x300?text=Calming+therapy+practice+website+with+soft+blue+green+colors+and+appointment+system",
      description: "Professional website for therapy practice with secure patient forms.",
      tags: ["Web Development", "HIPAA Compliance", "Forms"],
    },
    {
      id: 5,
      title: "Sustainable Living Blog",
      category: "digital-marketing",
      image: "https://placehold.co/400x300?text=Sustainable+living+blog+with+nature+inspired+content+and+green+theme",
      description: "Content marketing strategy that grew blog readership by 400%.",
      tags: ["Content Strategy", "SEO", "Analytics"],
    },
    {
      id: 6,
      title: "Herbal Medicine Clinic",
      category: "branding",
      image: "https://placehold.co/400x300?text=Herbal+medicine+clinic+branding+with+natural+green+and+beige+elements",
      description: "Brand identity and marketing materials for holistic health clinic.",
      tags: ["Brand Identity", "Print Design", "Signage"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "branding", label: "Branding" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3A7D44] to-[#5C8D89] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses 
              transform their digital presence
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-[#F5E9DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`${
                  activeFilter === category.id
                    ? "bg-[#3A7D44] text-white hover:bg-[#3A7D44]/90"
                    : "border-[#3A7D44] text-[#3A7D44] hover:bg-[#3A7D44] hover:text-white"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-[#5C8D89]/20">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.description}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#333333] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#F5E9DA] text-[#3A7D44] text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-[#3A7D44] hover:bg-[#3A7D44]/90"
                  >
                    <Link href="/contact">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[#F5E9DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Project Results
            </h2>
            <p className="text-xl text-gray-600">
              The measurable impact of our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">+300%</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Traffic Increase</h3>
              <p className="text-gray-600">Average organic traffic growth across all projects</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#5C8D89] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">+250%</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Sales Growth</h3>
              <p className="text-gray-600">Average sales increase for e-commerce clients</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">95%</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Client Retention</h3>
              <p className="text-gray-600">Clients who continue working with us long-term</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#5C8D89] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4.9★</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Client Rating</h3>
              <p className="text-gray-600">Average client satisfaction rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-[#333333] mb-8 leading-relaxed">
            "Digital Vagary didn't just build us a website - they transformed our entire 
            digital strategy. Our online presence now truly reflects our brand values and 
            connects with our audience in ways we never imagined possible."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://placehold.co/80x80?text=Professional+headshot+of+Dr.+Amanda+Green+wellness+center+owner"
              alt="Dr. Amanda Green"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-left">
              <h4 className="font-semibold text-[#333333]">Dr. Amanda Green</h4>
              <p className="text-gray-600">Founder, EcoHealth Wellness Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3A7D44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's work together to create a project that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#3A7D44] hover:bg-[#F5E9DA]">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#3A7D44]">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}