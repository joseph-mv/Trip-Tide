import React, { useEffect, useRef } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import "./Features.css"; // Import the CSS file

const FeatureSection = () => {
  const features = [
    { icon: 'fas fa-route', title: 'Route Destinations', description: 'Find and explore destinations along your travel route.' },
    { icon: 'fas fa-save', title: 'Save Your Itinerary', description: 'Save and reuse your travel plans for future trips.' },
    // { icon: 'fas fa-map-marked-alt', title: 'Personalized Trips', description: 'Get recommendations tailored to your preferences.' },
    { icon: 'fas fa-calendar-alt', title: 'Easy Planning', description: 'Plan your trips effortlessly with our tools.' },
    { icon: 'fas fa-star', title: 'Top Destinations', description: 'Explore the best destinations around the world.' },
    // { icon: 'fas fa-comments', title: 'User Reviews', description: 'Read reviews and ratings from other trippers.' },
     // { icon: 'fas fa-cloud-sun', title: 'Real-Time Weather Updates', description: 'Get up-to-date weather information for your destinations.' },
    // { icon: 'fas fa-wallet', title: 'Travel Budget Planner', description: 'Estimate and manage your travel expenses with ease.' },
    { icon: 'fas fa-map', title: 'Interactive Map', description: 'Explore and select destinations using an interactive map.' },
    // { icon: 'fas fa-shield-alt', title: 'Travel Safety Tips', description: 'Stay informed with safety tips for your destinations.' },
    { icon: 'fas fa-route', title: 'Custom Itineraries', description: 'Create and customize your own travel plans.' },
    // { icon: 'fas fa-calendar-day', title: 'Local Events & Attractions', description: 'Discover local events and attractions during your stay.' },
    // { icon: 'fas fa-check-circle', title: 'Travel Documentation Checklist', description: 'Keep track of important documents and items for travel.' },
    // { icon: 'fas fa-language', title: 'Language Translation', description: 'Translate languages and communicate effectively while traveling.' },
    // { icon: 'fas fa-bed', title: 'Accommodation Finder', description: 'Find and book accommodations that suit your needs.' },
    // { icon: 'fas fa-book', title: 'Travel Diary', description: 'Document your travel experiences and memories digitally.' },
  ];
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      const handleWheel = (e) => {
        console.log(e.deltaY);
        if (e.deltaY !== 0) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY;
        }
      };

      scrollContainer.addEventListener("wheel", handleWheel);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className="feature-section">
      <h2 className="feature-heading">Our Features</h2>
      <div className="feature-scroll" ref={scrollRef}>
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
