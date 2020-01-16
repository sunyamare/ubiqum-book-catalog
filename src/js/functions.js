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

function findContent() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("animals");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}
