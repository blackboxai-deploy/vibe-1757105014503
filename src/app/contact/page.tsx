"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3A7D44] to-[#5C8D89] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's start the conversation 
              about your project and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-[#5C8D89]/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#333333]">Send Us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-[#333333]">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 border-[#5C8D89]/30 focus:border-[#3A7D44] focus:ring-[#3A7D44]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#333333]">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 border-[#5C8D89]/30 focus:border-[#3A7D44] focus:ring-[#3A7D44]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-[#333333]">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 border-[#5C8D89]/30 focus:border-[#3A7D44] focus:ring-[#3A7D44]"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-[#333333]">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 border-[#5C8D89]/30 focus:border-[#3A7D44] focus:ring-[#3A7D44]"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-[#333333]">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-[#5C8D89]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A7D44] focus:border-[#3A7D44]"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#333333]">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1 border-[#5C8D89]/30 focus:border-[#3A7D44] focus:ring-[#3A7D44]"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#3A7D44] hover:bg-[#3A7D44]/90 text-white py-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#333333] mb-6">
                  Let's Start Something Great Together
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help your business thrive in the digital world. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-[#5C8D89]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#F5E9DA] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-[#3A7D44] text-xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#333333] mb-1">Email Us</h3>
                        <p className="text-gray-600">info@digitalvagary.com</p>
                        <p className="text-sm text-gray-500 mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#5C8D89]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#F5E9DA] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-[#3A7D44] text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#333333] mb-1">Call Us</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Mon-Fri: 9AM-6PM EST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#5C8D89]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#F5E9DA] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-[#3A7D44] text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#333333] mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          123 Business Avenue<br />
                          Suite 100<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#5C8D89]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#F5E9DA] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-[#3A7D44] text-xl">💬</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#333333] mb-1">Follow Us</h3>
                        <div className="flex space-x-3 mt-2">
                          <a
                            href="#"
                            className="w-8 h-8 bg-[#3A7D44] text-white rounded-full flex items-center justify-center hover:bg-[#3A7D44]/90 transition-colors"
                            aria-label="Facebook"
                          >
                            <span className="text-xs font-bold">f</span>
                          </a>
                          <a
                            href="#"
                            className="w-8 h-8 bg-[#5C8D89] text-white rounded-full flex items-center justify-center hover:bg-[#5C8D89]/90 transition-colors"
                            aria-label="Twitter"
                          >
                            <span className="text-xs font-bold">𝕏</span>
                          </a>
                          <a
                            href="#"
                            className="w-8 h-8 bg-[#3A7D44] text-white rounded-full flex items-center justify-center hover:bg-[#3A7D44]/90 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <span className="text-xs font-bold">in</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-[#5C8D89]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#333333] mb-3">
                  How quickly can you start my project?
                </h3>
                <p className="text-gray-600">
                  Most projects can begin within 1-2 weeks of signing the contract. 
                  Rush projects may be accommodated based on our current workload and your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#5C8D89]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#333333] mb-3">
                  Do you work with businesses outside the US?
                </h3>
                <p className="text-gray-600">
                  Yes! We work with clients worldwide. We have experience working across different 
                  time zones and can accommodate various communication preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#5C8D89]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#333333] mb-3">
                  What's included in your pricing?
                </h3>
                <p className="text-gray-600">
                  Our pricing includes all design and development work, project management, 
                  revisions, and post-launch support. We provide detailed proposals with 
                  clear breakdowns of all included services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3A7D44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of satisfied clients who have grown their businesses with Digital Vagary.
          </p>
          <Button asChild size="lg" className="bg-white text-[#3A7D44] hover:bg-[#F5E9DA]">
            <a href="#contact-form">Start Your Project Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
}