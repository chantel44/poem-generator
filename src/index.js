function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "In the blue sky just a few specks of gray",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
