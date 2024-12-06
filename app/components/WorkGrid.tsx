'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        quote: "Consistently delivered high-quality work and showed great attention to detail.",
        author: "Srujan Lander",
        company: "Upcoming SDE at F5 Networks"
    }
];

export default function WorkGrid() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative min-h-[400px]">
            {/* Background Text */}

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mt-4 mb-8 relative z-10">
                
                {/* Work Experience Section */}
                <div className="rounded-xl border border-gray-800 p-4 md:p-6 hover:border-gray-700 transition-all duration-300 bg-[#0A0A0B]/90 backdrop-blur-sm">
                 <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
                <span className="text-[10rem] md:text-[10rem] lg:text-[14rem] font-bold text-white/5 tracking-wider">
                    Work
                </span>
            </div>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Fibroid Centers of Texas</h2>
                        <p className="text-gray-400">Software Developer</p>
                    </div>

                    <div className="mb-4 text-gray-400 text-sm">
                        <span>2023 - Present</span>
                    </div>

                    <ul className="space-y-3">
                        <li className="text-gray-300 flex items-start gap-2">
                            <span className="text-gray-500 mt-1.5">•</span>
                            Developed and maintained the clinic&apos;s web presence
                        </li>
                        <li className="text-gray-300 flex items-start gap-2">
                            <span className="text-gray-500 mt-1.5">•</span>
                            Implemented responsive design principles
                        </li>
                        <li className="text-gray-300 flex items-start gap-2">
                            <span className="text-gray-500 mt-1.5">•</span>
                            Integrated healthcare customer support system with Bland AI
                        </li>
                        <li className="text-gray-300 flex items-start gap-2">
                            <span className="text-gray-500 mt-1.5">•</span>
                            Optimized site performance and SEO
                        </li>
                    </ul>
                </div>

                {/* Testimonials Section */}
                <div className="rounded-xl border border-gray-800 p-4 md:p-6 hover:border-gray-700 transition-all duration-300 bg-[#0A0A0B]/90 backdrop-blur-sm">
                    <h2 className="text-xl font-semibold mb-6">Testimonials</h2>
                    
                    <div className="relative">
                        <div className="absolute -left-2 top-0 text-4xl text-gray-700">&apos;</div>
                        <div className="relative min-h-[150px]">
                            <blockquote 
                                className="pl-6 relative transition-opacity duration-500"
                                key={currentTestimonial}
                            >
                                <p className="text-gray-300 italic mb-4">
                                    {testimonials[currentTestimonial].quote}
                                </p>
                                <footer className="text-sm">
                                    <p className="text-gray-400">{testimonials[currentTestimonial].author}</p>
                                    <p className="text-gray-500">{testimonials[currentTestimonial].company}</p>
                                </footer>
                            </blockquote>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button 
                                onClick={prevTestimonial}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex gap-2 items-center">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                                        }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button 
                                onClick={nextTestimonial}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}