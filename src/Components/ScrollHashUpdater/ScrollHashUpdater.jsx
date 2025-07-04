import { useEffect } from "react";

const useScrollHashUpdater = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        threshold: 1, // 60% in view to trigger
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
};

export default useScrollHashUpdater;
