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

  const navigation = document.createElement("div");
  navigation.classList.add("navigation");
  body.appendChild(navigation);
  const buttonPrev = document.createElement("button");
  buttonPrev.innerText = "Prev";
  buttonPrev.classList.add("button", "button-prev");
  navigation.appendChild(buttonPrev);

  const buttonNext = document.createElement("button");
  buttonNext.innerText = "Next";
  buttonNext.classList.add("button", "button-next");
  navigation.appendChild(buttonNext);

  let activeIndex = 0;
  const cardWidth = 266;
  const cardsAmount = 10;

  const onSliderUpdate = () => {
    sliderTrack.style.transform = `translateX(-${activeIndex * cardWidth}px)`;
  };
  document.querySelector(".button-prev").addEventListener("click", () => {
    activeIndex = activeIndex > 0 ? activeIndex - 1 : cardsAmount - 1;
    onSliderUpdate();
  });

  document.querySelector(".button-next").addEventListener("click", () => {
    activeIndex = activeIndex < cardsAmount - 1 ? activeIndex + 1 : 0;
    onSliderUpdate();
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
