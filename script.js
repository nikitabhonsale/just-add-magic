document.addEventListener("mousemove", (e) => {
    // create several sparkles per movement
    for (let i = 0; i < 5; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
  
      // random offset so sparkles scatter a bit
      const offsetX = (Math.random() - 0.5) * 40; // between -20 and +20
      const offsetY = (Math.random() - 0.5) * 40;
  
      sparkle.style.left = `${e.pageX + offsetX}px`;
      sparkle.style.top = `${e.pageY + offsetY}px`;
  
      document.body.appendChild(sparkle);
  
      // remove after animation ends
      setTimeout(() => sparkle.remove(), 2000);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("recipesBtn");
    const menu = document.getElementById("recipesMenu");
  
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent click bubbling
      menu.classList.toggle("show");
    });
  
    // close dropdown if clicked outside
    document.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
  
  
  