const container = document.querySelector(".container");
let grid = "";

for (let i = 1; i < 13; i++) {
  let n = i < 10 ? "0" + i : i;
  grid += `<div class="grid">
        <img src="images/thumbnails/${n}.jpg"/>
      </div>`;
}

container.innerHTML = grid;
