let submitBtnEl = document.getElementById("submitBtn");
let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

function nameCheck(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
}

function urlCheck(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
}
siteNameInputEl.addEventListener("blur", nameCheck);
siteUrlInputEl.addEventListener("blur", urlCheck);





bookmarkFormEl.addEventListener("submit", function() {
    event.preventDefault();

    function nameCheck(event) {
        if (event.target.value === "") {
            siteNameErrMsgEl.textContent = "Required*";
        } else {
            siteNameErrMsgEl.textContent = "";
        }
    }

    function urlCheck(event) {
        if (event.target.value === "") {
            siteUrlErrMsgEl.textContent = "Required*";
        } else {
            siteUrlErrMsgEl.textContent = "";
        }
    }
    siteNameInputEl.addEventListener("change", nameCheck);
    siteUrlInputEl.addEventListener("change", urlCheck);


});

submitBtnEl.addEventListener("click", function() {

    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";

    }

    if (siteUrlInputEl.value === "") {

        siteUrlErrMsgEl.textContent = "Required*";
    } else {

        siteUrlErrMsgEl.textContent = "";
    }





    let divCon = document.getElementById("bookmarksList");
    divCon.classList.remove("d-none");
    divCon.style.listStyle = "none";

    let listEl = document.createElement("li");
    let listHead = document.createElement("h1");
    listHead.id = "replyHead";
    listHead.classList.add("replyHead");
    listHead.textContent = siteNameInputEl.value;
    let listPara = document.createElement("p");
    let listAnchor = document.createElement("a");
    listAnchor.classList.add("replyPara");
    listAnchor.textContent = siteUrlInputEl.value;
    listAnchor.setAttribute("href", siteUrlInputEl.value);
    listPara.appendChild(listAnchor);
    listEl.appendChild(listHead);
    listEl.appendChild(listPara);
    divCon.appendChild(listEl);
});