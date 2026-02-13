export const tools = {
    navigate: (navigateFn, path: string) => {
      navigateFn(path);
    },
  
    scroll: (direction: string) => {
      window.scrollBy({
        top: direction === "down" ? 600 : -600,
        behavior: "smooth",
      });
    },
  
    highlightProduct: (target: string) => {
      const el = document.querySelector(`[data-product="${target}"]`);
      if (!el) return false;
  
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ai-highlight");
  
      setTimeout(() => el.classList.remove("ai-highlight"), 2500);
      return true;
    }
  };
  