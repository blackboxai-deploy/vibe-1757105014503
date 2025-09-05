import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About Us - Digital Vagary",
  description: "Learn about Digital Vagary's mission, team, and commitment to delivering exceptional digital marketing and web development solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3A7D44] to-[#5C8D89] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Digital Vagary</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We're passionate about helping businesses thrive in the digital world through 
              innovative solutions and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, Digital Vagary started with a simple mission: to bridge the gap 
                between businesses and their digital potential. What began as a small team of 
                passionate developers and marketers has grown into a full-service digital agency 
                serving clients worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every business deserves a strong digital presence, regardless of 
                size or industry. Our approach combines cutting-edge technology with creative 
                strategies to deliver solutions that not only look great but drive real business results.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have helped over 500 businesses transform their digital 
                presence and achieve their goals through our comprehensive suite of services.
              </p>
            </div>
            <div>
              <img
                src="https://placehold.co/600x500?text=Digital+Vagary+team+working+together+in+modern+office+space+with+laptops+and+collaboration"
                alt="Digital Vagary team working together in modern office space"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[#F5E9DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-[#F5E9DA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-[#3A7D44] rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance customer engagement, and create lasting competitive advantages.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-[#F5E9DA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-[#5C8D89] rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the leading digital agency that transforms how businesses connect with 
                  their audiences through creative, strategic, and technology-driven solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-[#F5E9DA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-[#3A7D44] rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Excellence, integrity, innovation, and collaboration form the foundation of 
                  our work. We believe in transparency and building long-term partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented professionals behind Digital Vagary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <img
                  src="https://placehold.co/200x200?text=Professional+headshot+of+Alex+Thompson+CEO+and+Founder"
                  alt="Alex Thompson, CEO and Founder"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Alex Thompson</h3>
                <p className="text-[#3A7D44] font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  10+ years in digital marketing with expertise in strategy and business development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <img
                  src="https://placehold.co/200x200?text=Professional+headshot+of+Sarah+Miller+Creative+Director"
                  alt="Sarah Miller, Creative Director"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Sarah Miller</h3>
                <p className="text-[#3A7D44] font-medium mb-3">Creative Director</p>
                <p className="text-gray-600 text-sm">
                  Award-winning designer with a passion for creating memorable brand experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <img
                  src="https://placehold.co/200x200?text=Professional+headshot+of+David+Park+Lead+Developer"
                  alt="David Park, Lead Developer"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">David Park</h3>
                <p className="text-[#3A7D44] font-medium mb-3">Lead Developer</p>
                <p className="text-gray-600 text-sm">
                  Full-stack developer specializing in modern web technologies and scalable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <img
                  src="https://placehold.co/200x200?text=Professional+headshot+of+Lisa+Wong+Marketing+Manager"
                  alt="Lisa Wong, Marketing Manager"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Lisa Wong</h3>
                <p className="text-[#3A7D44] font-medium mb-3">Marketing Manager</p>
                <p className="text-gray-600 text-sm">
                  Data-driven marketer with expertise in SEO, PPC, and conversion optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F5E9DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we work with you to achieve your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, goals, and challenges to create the perfect strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Planning</h3>
              <p className="text-gray-600">
                We develop a comprehensive plan with clear timelines, milestones, and deliverables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Execution</h3>
              <p className="text-gray-600">
                Our expert team brings your vision to life with attention to detail and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A7D44] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Optimization</h3>
              <p className="text-gray-600">
                We monitor, analyze, and optimize to ensure continued success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3A7D44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's start a conversation about how we can help your business grow.
          </p>
          <Button asChild size="lg" className="bg-white text-[#3A7D44] hover:bg-[#F5E9DA]">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}