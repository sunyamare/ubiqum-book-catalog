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
