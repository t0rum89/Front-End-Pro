const url = "https://jsonplaceholder.typicode.com/users";

const createContent = (result) => {
  const body = document.querySelector("body");

  const mainTitle = document.createElement("h1");
  mainTitle.innerText = "USERS";
  mainTitle.classList.add("main-title");
  body.appendChild(mainTitle);
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  body.appendChild(wrapper);
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("slider-container");
  wrapper.appendChild(sliderContainer);
  const sliderTrack = document.createElement("div");
  sliderTrack.classList.add("slider-track");
  sliderContainer.appendChild(sliderTrack);

  const buttonPrev = document.createElement("button");
  buttonPrev.innerText = "Prev";
  buttonPrev.classList.add("button", "button-prev");
  body.appendChild(buttonPrev);

  const buttonNext = document.createElement("button");
  buttonNext.innerText = "Next";
  buttonNext.classList.add("button", "button-next");
  body.appendChild(buttonNext);

  let offset = 0;

  document.querySelector(".button-prev").addEventListener("click", () => {
    offset -= 266;
    if (offset < 0) {
      offset = 2394;
    }
    sliderTrack.style.left = -offset + "px";
  });

  document.querySelector(".button-next").addEventListener("click", () => {
    offset += 266;
    if (offset > 2394) {
      offset = 0;
    }
    sliderTrack.style.left = -offset + "px";
  });

  result.forEach((element) => {
    sliderTrack.insertAdjacentHTML(
      "beforeend",
      `
      <div class=usercard>
        <div class="usercard__title usercard-item">
          <h3 class=usercard-item__title>${element.name}</h3>
        </div>
        <div class="usercard__info usercard-item">
          <p class=usercard-item__text><strong>Username</strong>: ${element.username}</p>
          <p class=usercard-item__text><strong>City</strong>: ${element.address.city}</p>
          <p class=usercard-item__text><strong>E-mail</strong>: ${element.email}</p>
          <p class=usercard-item__text><strong>Web</strong>: ${element.website}</p>
        </div>
      </div>
      `
    );
  });
};

fetch(url)
  .then((data) => data.json())
  .then((result) => createContent(result))
  .catch((error) => console.log(error));
