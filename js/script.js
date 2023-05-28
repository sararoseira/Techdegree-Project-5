const container = document.querySelector(".container");
let grid = "";

const pics = [
  {
    file_name: "01.jpg",
    title: "Hay Bales",
    caption:
      "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
  },
  {
    file_name: "02.jpg",
    title: "Lake",
    caption:
      "The lake was so calm today. We had a great view of the snow on the mountains from here.",
  },
  {
    file_name: "03.jpg",
    title: "Canyon",
    caption:
      "I hiked to the top of the mountain and got this picture of the canyon and trees below",
  },
  {
    file_name: "04.jpg",
    title: "Iceberg",
    caption:
      "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
  },
  {
    file_name: "05.jpg",
    title: "Desert",
    caption:
      "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
  },
  {
    file_name: "06.jpg",
    title: "Fall",
    caption:
      "Fall is coming, I love when the leaves on the trees start to change color.",
  },
  {
    file_name: "07.jpg",
    title: "Plantation",
    caption: "I drove past this plantation yesterday, everything is so green!",
  },
  {
    file_name: "08.jpg",
    title: "Dunes",
    caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!",
  },
  {
    file_name: "09.jpg",
    title: "Countryside Lane",
    caption: "We enjoyed a quiet stroll down this countryside lane.",
  },
  {
    file_name: "10.jpg",
    title: "Sunset",
    caption: "Sunset at the coast! The sky turned a lovely shade of orange.",
  },
  {
    file_name: "11.jpg",
    title: "Cave",
    caption:
      "I did a tour of a cave today and the view of the landscape below was breathtaking.",
  },
  {
    file_name: "12.jpg",
    title: "Bluebells",
    caption:
      "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
  },
];

for (let i = 0; i < pics.length; i++) {
  const pic = pics[i];
  grid += `<div class="grid">
        <a href="images/${pic.file_name}" data-lightbox="gallery" data-title="${pic.caption}";
          ><img src="images/thumbnails/${pic.file_name}"
        /></a>
      </div>`;
}

container.innerHTML = grid;

const searchB = document.querySelector("#words");
const pictures = document.querySelectorAll("a");

const searchHandler = function () {
  const userWord = searchB.value.toLowerCase();

  for (let i = 0; i < pictures.length; i++) {
    const caption = pictures[i].getAttribute("data-title").toLowerCase();

    if (!caption.includes(userWord)) {
      pictures[i].style.display = "none";
    } else {
      pictures[i].style.display = "inline";
    }
  }
};

searchB.addEventListener("keyup", searchHandler);
