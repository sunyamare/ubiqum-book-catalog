async function apiCall() {
    console.log("fetching data ...");
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
apiCall().then(
    result => (
        console.log("done fetching"), (data = result.books), console.log(data)
    )
);

// search function from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/ (quite altered)
const findContent = () => {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    const indexedTitle = document.getElementsByClassName("indexedTitle");
    const indexedDesc = document.getElementsByClassName("indexedDesc");
    const flipCards = document.getElementsByClassName("flip-card");

    for (i = 0; i < indexedTitle.length; i++) {
        const indexedContent =
            indexedTitle[i].innerHTML + indexedDesc[i].innerHTML;
        console.log(indexedContent);
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
        window.location.replace("index.html#!");
    }
});
