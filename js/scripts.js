document.addEventListener("DOMContentLoaded", function () {
  const headings = ["Web Developer", "Content Writer", "SEO Specialist"];
  const colors = ["gold", "yellow", "orange",  "goldenrod", ]; // Colors for disco effect
  let index = 0;
  let charIndex = 0;
  let currentHeading = "";
  let colorIndex = 0;

  function typeHeading() {
      const bannerHeading = document.getElementById("banner-heading");
      const spanElement = bannerHeading.querySelector("span");
      if (charIndex < headings[index].length) {
          currentHeading += headings[index].charAt(charIndex);
          spanElement.textContent = `${currentHeading}`;
          charIndex++;
          setTimeout(typeHeading, 100);
      } else {
          setTimeout(() => {
              currentHeading = "";
              charIndex = 0;
              index = (index + 1) % headings.length;
              typeHeading();
          }, 1800); // Adjust delay before starting the next heading
      }

      // Change color to disco effect for span content
      setTimeout(() => {
          spanElement.style.transition = "color 0.9 ease"; // Smooth transition
          spanElement.style.color = colors[colorIndex];
          colorIndex = (colorIndex + 1) % colors.length; // Move to next color
      }, 1500); // Change color every 0.5 second
  }

  typeHeading(); // Start the typing effect
});




document.addEventListener("DOMContentLoaded", function () {
  const spanContents = [
      'Hello <i class="fa-solid fa-handshake text-white"></i>',
      'Namaste <i class="fa-solid fa-hands-praying text-white"></i>',
      'Namaskar <i class="fa-solid fa-hands-praying text-white"></i>'
  ];
  let index = 0;
  let charIndex = 0;
  let currentText = "";
  let isTag = false;

  function typeSpanContent() {
      const spanElement = document.querySelector("#banner-span");
      spanElement.style.color = "yellow"; // Set the color to green

      if (charIndex < spanContents[index].length) {
          if (spanContents[index][charIndex] === '<') isTag = true;
          if (spanContents[index][charIndex] === '>') isTag = false;

          currentText += spanContents[index][charIndex];
          charIndex++;

          if (isTag) {
              typeSpanContent(); // Skip the delay if we are inside a tag
          } else {
              spanElement.innerHTML = `${currentText}`;
              setTimeout(typeSpanContent, 100);
          }
      } else {
          setTimeout(() => {
              currentText = "";
              charIndex = 0;
              index = (index + 1) % spanContents.length;
              typeSpanContent();
          }, 1800); // Adjust delay before starting the next heading
      }
  }

  typeSpanContent(); // Start the typing effect
});

