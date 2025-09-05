import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Our Services - Digital Vagary",
  description: "Comprehensive digital marketing and web development services including SEO, PPC, social media marketing, web design, and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3A7D44] to-[#5C8D89] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business succeed online
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <Card className="hover:shadow-xl transition-shadow duration-300 border-[#5C8D89]/20">
              <CardHeader>
                <div className="w-20 h-20 bg-[#F5E9DA] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-10 h-10 bg-[#3A7D44] rounded"></div>
                </div>
                <CardTitle className="text-2xl">Web Development</CardTitle>
                <CardDescription>
                  Custom websites and web applications built with cutting-edge technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">What's Included:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Responsive Web Design</li>
                    <li>• E-commerce Solutions</li>
                    <li>• Content Management Systems</li>
                    <li>• API Development & Integration</li>
                    <li>• Performance Optimization</li>
                    <li>• Security Implementation</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold text-[#3A7D44] mb-2">Starting at $2,999</p>
                  <p className="text-sm text-gray-500 mb-4">Custom pricing based on project scope</p>
                  <Button asChild className="w-full bg-[#3A7D44] hover:bg-[#3A7D44]/90">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Digital Marketing */}
            <Card className="hover:shadow-xl transition-shadow duration-300 border-[#5C8D89]/20">
              <CardHeader>
                <div className="w-20 h-20 bg-[#F5E9DA] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-10 h-10 bg-[#5C8D89] rounded"></div>
                </div>
                <CardTitle className="text-2xl">Digital Marketing</CardTitle>
                <CardDescription>
                  Strategic marketing campaigns that drive traffic, leads, and sales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">What's Included:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Search Engine Optimization (SEO)</li>
                    <li>• Pay-Per-Click Advertising (PPC)</li>
                    <li>• Social Media Marketing</li>
                    <li>• Content Marketing</li>
                    <li>• Email Marketing</li>
                    <li>• Analytics & Reporting</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold text-[#5C8D89] mb-2">Starting at $1,499/mo</p>
                  <p className="text-sm text-gray-500 mb-4">Flexible packages available</p>
                  <Button asChild className="w-full border-[#5C8D89] text-[#5C8D89] hover:bg-[#5C8D89] hover:text-white" variant="outline">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Brand Identity */}
            <Card className="hover:shadow-xl transition-shadow duration-300 border-[#5C8D89]/20">
              <CardHeader>
                <div className="w-20 h-20 bg-[#F5E9DA] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-10 h-10 bg-[#3A7D44] rounded"></div>
                </div>
                <CardTitle className="text-2xl">Brand Identity</CardTitle>
                <CardDescription>
                  Complete branding solutions that make your business memorable
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">What's Included:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Logo Design & Development</li>
                    <li>• Brand Guidelines</li>
                    <li>• Marketing Materials</li>
                    <li>• Brand Strategy</li>
                    <li>• Visual Identity System</li>
                    <li>• Brand Voice & Messaging</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold text-[#3A7D44] mb-2">Starting at $1,999</p>
                  <p className="text-sm text-gray-500 mb-4">Complete brand packages</p>
                  <Button asChild className="w-full border-[#3A7D44] text-[#3A7D44] hover:bg-[#3A7D44] hover:text-white" variant="outline">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-[#F5E9DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized services to support your digital growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F5E9DA] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[#3A7D44] rounded"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#333333]">UI/UX Design</h3>
                <p className="text-gray-600 text-sm mb-4">
                  User-centered design that improves engagement and conversions
                </p>
                <p className="font-semibold text-[#3A7D44]">From $899</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F5E9DA] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[#5C8D89] rounded"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#333333]">Consulting</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Strategic guidance for your digital transformation journey
                </p>
                <p className="font-semibold text-[#5C8D89]">$199/hour</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F5E9DA] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[#3A7D44] rounded"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#333333]">Maintenance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ongoing support and updates for your digital assets
                </p>
                <p className="font-semibold text-[#3A7D44]">$299/month</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F5E9DA] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[#5C8D89] rounded"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#333333]">Analytics</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Data-driven insights to optimize your digital performance
                </p>
                <p className="font-semibold text-[#5C8D89]">$499/month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              Our proven process ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://placehold.co/600x400?text=Team+collaboration+process+diagram+showing+discovery+planning+execution+optimization+workflow"
                alt="Team collaboration process showing workflow stages"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#333333]">Discovery & Strategy</h3>
                  <p className="text-gray-600">
                    We dive deep into your business goals, target audience, and competitive landscape 
                    to create a tailored strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#333333]">Design & Development</h3>
                  <p className="text-gray-600">
                    Our creative team brings your vision to life with stunning designs and 
                    robust development practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#333333]">Launch & Optimize</h3>
                  <p className="text-gray-600">
                    We launch your project with precision and continuously optimize 
                    based on real-world data and feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F5E9DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-[#333333]">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and complexity. A standard website typically 
                takes 4-8 weeks, while comprehensive digital marketing campaigns are ongoing with 
                initial setup taking 2-3 weeks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-[#333333]">Do you provide ongoing support?</h3>
              <p className="text-gray-600">
                Yes! We offer various maintenance and support packages to ensure your digital 
                assets continue to perform optimally. Our team is always available for updates, 
                troubleshooting, and strategic guidance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-[#333333]">What makes Digital Vagary different?</h3>
              <p className="text-gray-600">
                Our unique approach combines strategic thinking, creative excellence, and technical 
                expertise. We focus on delivering measurable results while building long-term 
                partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3A7D44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's discuss your project and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#3A7D44] hover:bg-[#F5E9DA]">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#3A7D44]">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}