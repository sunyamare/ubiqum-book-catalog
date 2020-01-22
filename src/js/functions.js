async function apiCall() {
  const url = "https://api.myjson.com/bins/zyv02";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
let data = [];
apiCall().then(result => ((data = result.books), buildHTML(data)));

// build html content
const buildHTML = data => {
  let contentSection = document.getElementById("contentSection");
  for (let i = 0; i < data.length; i++) {
    let previous;
    if (i === 0) {
      previous = data.length - 1;
    } else {
      previous = i - 1;
    }
    let next;
    if (i === data.length - 1) {
      next = 0;
    } else {
      next = i + 1;
    }
    const content = `<div class='flip-card item'> <div class='flip-card-inner'> <div class='flip-card-front'> <img src='${data[i].cover}' alt='Book Cover' width='220' height='314.19'/> </div><div class='flip-card-back'> <div class='book-info'> <p class='title indexedTitle'>${data[i].title}</p><p class='desc indexedDesc indexedContent'>${data[i].description}</p><p> <a class='button' href='#img${i}' >Large Cover</a > </p></div></div></div></div><div class='lightbox animate' id='img${i}'> <a class='lightboxClose' href='#!'><span> X </span></a> <a class='lightboxPrev' href='#img${previous}'><span> < </span></a> <a class='lightboxNext' href='#img${next}'><span> > </span></a> </a> <img class='animate' src='${data[i].detail}'/> </div>`;
    const html = new DOMParser().parseFromString(content, "text/html");
    contentSection.innerHTML += html.firstChild.innerHTML;
  }
};

// search function from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/ (quite altered)
const findContent = () => {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  const indexedTitle = document.getElementsByClassName("indexedTitle");
  const indexedDesc = document.getElementsByClassName("indexedDesc");
  const flipCards = document.getElementsByClassName("flip-card");

  for (let i = 0; i < indexedTitle.length; i++) {
    const indexedContent = indexedTitle[i].innerHTML + indexedDesc[i].innerHTML;
    if (!indexedContent.toLowerCase().includes(input)) {
      flipCards[i].style.display = "none";
    } else {
      flipCards[i].style.display = "block";
    }
  }
};

// go to index#! if escape is presses (to close image detail view)
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    window.location.replace("#!");
  }
});
