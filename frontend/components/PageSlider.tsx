"use client";

import { useEffect, useRef, useState } from "react";

const sections = ["about", "skills", "projects", "contact"];

export default function PageSlider() {
  const [page, setPage] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const container = document.getElementById("page-container");

    if (!container) return;

    const handleScroll = () => {
      const sectionElements = sections
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (sectionElements.length === 0) return;

      const containerTop = container.getBoundingClientRect().top;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sectionElements.forEach((section, index) => {
        const distance = Math.abs(
          section.getBoundingClientRect().top - containerTop
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setPage(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    // Set the correct page when the component loads
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPage = sections.length - 1 - Number(event.target.value);

    setPage(newPage);

    const container = document.getElementById("page-container");
    const section = document.getElementById(sections[newPage]);

    if (!container || !section) return;

    container.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
     className="
     fixed
     left-3
     top-0
     bottom-0
     z-50
     md:left-6
  "
>
    
      <div className="page-slider-wrapper">
        {/* Vertical Page Slider */}
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max={sections.length - 1}
          step="1"
          value={sections.length - 1 - page}
          onChange={handleSliderChange}
          className="page-slider"
          aria-label="Navigate between portfolio pages"
        />

        {/* Page Numbers */}
        <div className="page-slider-labels">
          <span className={page === 0 ? "active" : ""}>01</span>
          <span className={page === 1 ? "active" : ""}>02</span>
          <span className={page === 2 ? "active" : ""}>03</span>
          <span className={page === 3 ? "active" : ""}>04</span>
        </div>
      </div>
    </div>
  );
}