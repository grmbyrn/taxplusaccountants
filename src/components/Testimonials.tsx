import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Paul Clarke",
      company: "Match Fit",
      role: "Owner",
      content: [
        "I’ve used John and Tax Plus Accountants Drogheda since 2012 and as a small sole-trader business I’ve found him and his team to be excellent. Their attention to detail and knowledge is first-class and they really ‘get’ the complexities and growing pains of small businesses.",
        "John has always been very quick to reply and respond to my queries and has never failed to help me with any matter causing concern or when I needed some advice. Overall the value I’ve enjoyed has been fantastic. It’s no surprise that John’s business is growing from strength to strength.",
      ],
      rating: 5,
      industry: "Coaching",
    },
    {
      name: "Tony",
      company: "Impulse Agencies",
      role: "Founder & CEO",
      content: [
        "Over the years our business, Impulse Agencies, has enjoyed a great working relationship with John and all the team at Tax Plus Accountants.",
        "We feel comfortable in the knowledge that we can receive a quick and accurate answer to the smallest of queries that may arise to knowing that we can expect our Year End Accounts and Periodic Management Accounts to arrive on time – every time!",
        "It has been a huge asset to have such valuable and professional guidance available here locally in Drogheda, and we wish John and all at Tax Plus Accounting every continued success.",
      ],
      rating: 5,
    },
    {
      name: "James Wilson",
      company: "Wilson Family Restaurant",
      role: "Restaurant Owner",
      content: [
        "The team at Premier Accounting saved us thousands in tax optimization and helped us navigate the complexities of restaurant finances. Their proactive approach and attention to detail is unmatched. Highly recommend!",
      ],
      rating: 5,
    },
    {
      name: "Amanda Foster",
      company: "Foster Consulting Group",
      role: "Managing Partner",
      content: [
        "Premier Accounting's financial planning services helped us scale from a 2-person consultancy to a 12-person firm. Their strategic insights and cash flow management expertise were crucial to our growth.",
      ],
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <section
      id="testimonials"
      className="py-20 bg-background border-t border-slate-200"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-amber-500 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl text-balance">
            Trusted by Irish Businesses
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12  ">
          <Card className="border border-slate-200 shadow-2xl shadow-slate-300 rounded-2xl bg-white">
            <CardContent className="p-12 text-center">
              <blockquote className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-8">
                {Array.isArray(current.content) ? (
                  current.content.map((para, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {para}
                    </p>
                  ))
                ) : (
                  <p>{current.content}</p>
                )}
              </blockquote>

              <div className="border-t border-border pt-8">
                <div className="text-xl font-bold text-foreground mb-2">
                  {current.name} / {current.company}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-amber-500"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
              98%
            </div>
            <div className="text-base md:text-lg font-semibold text-foreground mb-1">
              Client Satisfaction
            </div>
            <div className="text-sm text-muted-foreground">
              Based on annual surveys
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
              4.9/5
            </div>
            <div className="text-base md:text-lg font-semibold text-foreground mb-1">
              Average Rating
            </div>
            <div className="text-sm text-muted-foreground">
              From verified reviews
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
              95%
            </div>
            <div className="text-base md:text-lg font-semibold text-foreground mb-1">
              Client Retention
            </div>
            <div className="text-sm text-muted-foreground">
              Long-term partnerships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
