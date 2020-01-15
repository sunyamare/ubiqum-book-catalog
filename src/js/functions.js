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

// modal functions from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
