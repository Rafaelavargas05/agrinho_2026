function setFilter(type) {
  const images = document.querySelectorAll(".card img");

  images.forEach(img => {
    switch(type) {
      case "warm":
        img.style.filter = "sepia(0.3) saturate(1.2) brightness(1.1)";
        break;
      case "green":
        img.style.filter = "hue-rotate(60deg) saturate(1.3)";
        break;
      case "fade":
        img.style.filter = "brightness(1.1) contrast(0.8)";
        break;
      default:
        img.style.filter = "none";
    }
  });
}