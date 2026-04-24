/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Clock, Utensils, CalendarDays, 
  Briefcase, PartyPopper, CheckCircle2, Star, Menu, X, ArrowRight
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.2 }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-light/90 backdrop-blur-md border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold text-brand-orange">
              Balaji Tiffin
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-brand-dark hover:text-brand-orange transition-colors">About</a>
            <a href="#services" className="text-brand-dark hover:text-brand-orange transition-colors">Services</a>
            <a href="#menu" className="text-brand-dark hover:text-brand-orange transition-colors">Menu</a>
            <a href="#pricing" className="text-brand-dark hover:text-brand-orange transition-colors">Pricing</a>
            <a href="#contact" className="px-5 py-2.5 bg-brand-orange text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
              Order Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-brand-dark p-2 focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-md"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-light border-t border-brand-dark/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-orange/10 hover:text-brand-orange transition-colors">About</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-orange/10 hover:text-brand-orange transition-colors">Services</a>
              <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-orange/10 hover:text-brand-orange transition-colors">Menu</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-orange/10 hover:text-brand-orange transition-colors">Pricing</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-orange bg-brand-orange/10 text-center mt-4">Order Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 lg:pt-48 md:pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-yellow/20 text-brand-orange px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              <span className="text-sm font-medium tracking-wide uppercase">Delivering in Karimpur</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
              Ghar Ka Swad, <br/>
              <span className="text-brand-orange italic">Roz Aapke Saath.</span>
            </h1>
            <p className="text-base sm:text-lg text-warm-gray mb-8 max-w-lg">
              Fresh, hygienic, and nutritious home-style meals for students, working professionals, and families. 
              Taste the love of home-cooked food every day.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="#pricing" className="px-8 py-4 bg-brand-orange text-white rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-center">
                View Plans <ArrowRight size={20} />
              </a>
              <a href="#menu" className="px-8 py-4 bg-transparent border border-brand-dark/20 text-brand-dark rounded-full font-medium hover:border-brand-dark transition-colors text-center w-full sm:w-auto">
                Today's Menu
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/indianthali/800/600" 
                alt="Delicious Indian Thali" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 max-w-[calc(100%-2rem)] sm:max-w-none">
              <div className="bg-green-100 p-2 sm:p-3 rounded-full text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="font-serif font-bold text-lg sm:text-xl text-brand-dark">100%</p>
                <p className="text-xs sm:text-sm text-warm-gray">Hygiene Maintained</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            <img src="https://picsum.photos/seed/ingredients/400/500" alt="Fresh ingredients" className="rounded-2xl w-full h-[200px] sm:h-[300px] object-cover sm:mt-8 shadow-lg" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/cooking/400/500" alt="Cooking process" className="rounded-2xl w-full h-[200px] sm:h-[300px] object-cover shadow-lg" referrerPolicy="no-referrer" />
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6">Established in 2022 by Rajesh Sharma</h3>
            <p className="text-warm-gray mb-6 text-lg">
              Balaji Tiffin Service was born out of a simple idea: everyone deserves a hot, comforting, home-cooked meal, no matter how busy their life is.
            </p>
            <p className="text-warm-gray mb-8 text-lg">
              We focus on quality ingredients, traditional cooking methods, and affordable pricing to deliver food that truly feels like it’s made at home.
            </p>
            
            <div className="space-y-4">
              {[
                "Fresh & Quality Ingredients",
                "Traditional Cooking Methods",
                "Strict Hygiene Standards",
                "Affordable Daily Plans"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-brand-orange"><CheckCircle2 size={20} /></div>
                  <span className="font-medium text-brand-dark">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Daily Tiffin Service",
      desc: "Lunch & Dinner delivery. Freshly cooked veg meals delivered hot to your door."
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Monthly Subscription",
      desc: "Budget-friendly plans with flexible meal options and consistent delivery."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate Orders",
      desc: "Bulk meal supply for offices with timely delivery for your team."
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Event Catering",
      desc: "Delicious custom menu options for small gatherings and house parties."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl">What We Offer</h3>
          <p className="text-warm-gray mt-4 text-lg">
            From daily essentials to special occasions, we bring home-style cooking to your table.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-brand-dark/5"
            >
              <div className="w-16 h-16 bg-brand-yellow/20 text-brand-orange rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold font-serif mb-3">{service.title}</h4>
              <p className="text-warm-gray leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-brand-dark text-brand-light overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img src="https://picsum.photos/seed/pattern/800/800" alt="Pattern" className="w-full h-full object-cover mix-blend-overlay" referrerPolicy="no-referrer" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-brand-yellow font-medium tracking-wider uppercase mb-2">Weekly Menu</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6">A glimpse of our daily platter</h3>
            <p className="text-brand-light/70 text-lg mb-8">
              We ensure variety so you never get bored. Our menu rotates daily to bring you comfort food with a mix of special delicacies.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-serif text-brand-yellow mb-6 border-b border-white/10 pb-4">Standard Daily Items</h4>
              <ul className="space-y-4 mb-8">
                {['Chapati (4 pcs) - Soft and hot', 'Dal (Different every day)', 'Seasonal Sabzi (Aloo Gobhi, Bhindi, etc.)', 'Steamed Rice', 'Fresh Salad & Pickle'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="bg-brand-orange/20 rounded-2xl p-6 border border-brand-orange/30">
                <h5 className="font-bold text-brand-yellow mb-2 text-xl font-serif">Special Days</h5>
                <p className="flex items-center gap-2 mb-2"><Star size={16} className="text-brand-yellow"/> Paneer Dish (Twice a week)</p>
                <p className="flex items-center gap-2 mb-2"><Star size={16} className="text-brand-yellow"/> Pulao / Fried Rice variations</p>
                <p className="flex items-center gap-2"><Star size={16} className="text-brand-yellow"/> Sweet Dish (Weekly treat)</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="hidden lg:block relative"
          >
            <div className="rounded-[2rem] overflow-hidden">
               <img src="https://picsum.photos/seed/menu/600/800" alt="Delicious Food" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      meals: "1 Meal / Day",
      price: "₹2500",
      period: "/month",
      features: ["Lunch OR Dinner", "Standard Menu", "Free Delivery (within 3km)", "Cancel anytime"],
      popular: false
    },
    {
      name: "Standard",
      meals: "2 Meals / Day",
      price: "₹3500",
      period: "/month",
      features: ["Lunch AND Dinner", "Standard Menu", "Free Delivery (within 3km)", "Weekend customization"],
      popular: true
    },
    {
      name: "Premium",
      meals: "Custom Diet",
      price: "₹4500",
      period: "/month",
      features: ["2 Meals / Day", "Customized Diet Options", "Less oil / Less spicy", "Premium Packaging"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="text-center max-w-2xl mx-auto mb-16"
        >
           <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-2">Pricing Plans</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl">Simple, affordable monthly subscriptions</h3>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className={`rounded-3xl p-8 ${plan.popular ? 'bg-brand-dark text-white ring-4 ring-brand-orange shadow-2xl md:scale-105 z-10' : 'bg-brand-light border border-brand-dark/10'}`}
            >
              {plan.popular && <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">Most Popular</span>}
              <h4 className={`text-2xl font-serif font-bold ${plan.popular ? 'text-brand-yellow' : 'text-brand-dark'}`}>{plan.name}</h4>
              <p className={`mt-2 ${plan.popular ? 'text-white/70' : 'text-warm-gray'}`}>{plan.meals}</p>
              
              <div className="my-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={plan.popular ? 'text-white/70' : 'text-warm-gray'}>{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className={plan.popular ? 'text-brand-yellow flex-shrink-0 mt-0.5' : 'text-brand-orange flex-shrink-0 mt-0.5'} />
                    <span className={plan.popular ? 'text-white/90' : 'text-brand-dark'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full text-center py-4 rounded-xl font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-brand-orange text-white hover:bg-orange-600' 
                    : 'bg-white text-brand-dark border border-brand-dark/20 hover:border-brand-dark hover:bg-brand-dark/5'
                }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl">What our customers say</h3>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm relative">
            <div className="text-brand-yellow mb-6 flex">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <p className="text-xl font-serif italic text-brand-dark mb-6 leading-relaxed">
              "Best tiffin service I've found in Karimpur. As a PG student, I missed mom's food, but Balaji Tiffin feels just like home."
            </p>
            <div>
              <p className="font-bold text-lg">Rahul Verma</p>
              <p className="text-warm-gray text-sm">Student</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm relative">
             <div className="text-brand-yellow mb-6 flex">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <p className="text-xl font-serif italic text-brand-dark mb-6 leading-relaxed">
              "Very affordable and reliable service. The delivery is always on time, and the quality of dal and sabzi is consistently excellent."
            </p>
            <div>
              <p className="font-bold text-lg">Priya Singh</p>
              <p className="text-warm-gray text-sm">Working Professional</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-2">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6">Start your subscription today</h3>
            <p className="text-warm-gray text-lg mb-10">
              Drop your details below or call us directly. We'll be happy to set up your daily tiffin delivery.
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-brand-light rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-warm-gray mb-1">Call us directly</p>
                  <a href="tel:+919876543210" className="text-2xl font-serif font-bold text-brand-dark hover:text-brand-orange transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-warm-gray">House No. 45, Near Main Market,<br/>Karimpur, Punjab – 140001</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-warm-gray">Mon - Sat: 7:00 AM – 9:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href="mailto:info@balajitiffin.in" className="text-warm-gray hover:text-brand-orange">info@balajitiffin.in</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="bg-brand-dark text-white p-10 rounded-[2rem] shadow-2xl"
          >
            <h4 className="text-2xl font-serif mb-6">Request Callback</h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange text-white placeholder-white/30" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange text-white placeholder-white/30" placeholder="+91 ----------" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Interested Plan</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange text-white placeholder-white/30 appearance-none">
                  <option className="text-black" value="basic">Basic Plan</option>
                  <option className="text-black" value="standard">Standard Plan</option>
                  <option className="text-black" value="premium">Premium Plan</option>
                  <option className="text-black" value="trial">Trial / Contact Me</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange text-white placeholder-white/30 resize-none" placeholder="Any specific dietary requirements?"></textarea>
              </div>
              <button className="w-full py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-12 lg:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-serif text-2xl font-bold text-brand-orange mb-4">Balaji Tiffin Service</h2>
            <p className="text-white/60 mb-6 max-w-sm">Order fresh, hygienic, and affordable home-style meals in Karimpur. Subscribe today!</p>
            <div className="flex space-x-4">
              {/* Optional Social placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-brand-orange hover:bg-white/10 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-brand-orange hover:bg-white/10 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 text-lg tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Our Services</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Weekly Menu</a></li>
              <li><a href="#pricing" className="hover:text-brand-orange transition-colors">Pricing Plans</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 text-lg tracking-wide uppercase">Legal</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Cancellation & Refund</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Balaji Tiffin Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased text-brand-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Menu />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

