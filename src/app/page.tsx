import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3A7D44] via-[#5C8D89] to-[#3A7D44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Transform Your
                <span className="text-green-200"> Digital Presence</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                We create stunning websites, drive targeted traffic, and build powerful 
                digital strategies that help your business thrive in the modern marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-[#3A7D44] hover:bg-[#F5E9DA]">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#3A7D44]">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400?text=Modern+digital+workspace+with+multiple+screens+showing+analytics+dashboards+and+web+designs"
                alt="Modern digital workspace with multiple screens showing analytics dashboards and web designs"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F5E9DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#3A7D44] mb-2">500+</div>
              <p className="text-[#333333]">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#3A7D44] mb-2">150+</div>
              <p className="text-[#333333]">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#3A7D44] mb-2">5+</div>
              <p className="text-[#333333]">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#3A7D44] mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-[#5C8D89]/20">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F5E9DA] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-[#3A7D44] rounded"></div>
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Custom websites and web applications built with modern technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Responsive Design</li>
                  <li>• E-commerce Solutions</li>
                  <li>• CMS Development</li>
                  <li>• API Integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-[#5C8D89]/20">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F5E9DA] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-[#5C8D89] rounded"></div>
                </div>
                <CardTitle>Digital Marketing</CardTitle>
                <CardDescription>
                  Strategic marketing campaigns that drive results and grow your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SEO Optimization</li>
                  <li>• Social Media Marketing</li>
                  <li>• PPC Advertising</li>
                  <li>• Content Marketing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-[#5C8D89]/20">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F5E9DA] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-[#3A7D44] rounded"></div>
                </div>
                <CardTitle>Brand Identity</CardTitle>
                <CardDescription>
                  Complete branding solutions that make your business stand out
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Logo Design</li>
                  <li>• Brand Guidelines</li>
                  <li>• Marketing Materials</li>
                  <li>• Brand Strategy</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#3A7D44] hover:bg-[#3A7D44]/90">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-[#F5E9DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://placehold.co/500x400?text=Professional+team+of+digital+marketing+experts+collaborating+in+modern+office"
                alt="Professional team of digital marketing experts collaborating in modern office"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                Why Choose Digital Vagary?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 5 years of experience in digital marketing and web development, 
                we've helped hundreds of businesses achieve their online goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#3A7D44] rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">Expert Team</h3>
                    <p className="text-gray-600">Skilled professionals with proven track records</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#3A7D44] rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">Results-Driven</h3>
                    <p className="text-gray-600">We focus on delivering measurable business outcomes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#3A7D44] rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">24/7 Support</h3>
                    <p className="text-gray-600">Always available to help and support your business</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-[#3A7D44] hover:bg-[#3A7D44]/90">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Digital Vagary transformed our online presence completely. Our website 
                  traffic increased by 300% and conversions doubled within 6 months."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/50x50?text=Professional+headshot+of+Sarah+Johnson+CEO"
                    alt="Sarah Johnson, CEO"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#333333]">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Exceptional service and results! The team really understood our needs 
                  and delivered beyond our expectations. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/50x50?text=Professional+headshot+of+Michael+Chen+Marketing+Director"
                    alt="Michael Chen, Marketing Director"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#333333]">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Marketing Director, GrowthCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional, creative, and always on time. Digital Vagary has been 
                  our trusted partner for all our digital marketing needs."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/50x50?text=Professional+headshot+of+Emily+Rodriguez+Founder"
                    alt="Emily Rodriguez, Founder"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#333333]">Emily Rodriguez</h4>
                    <p className="text-sm text-gray-500">Founder, Creative Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3A7D44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#3A7D44] hover:bg-[#F5E9DA]">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#3A7D44]">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}