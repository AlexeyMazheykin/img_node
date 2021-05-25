fetch('./images.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return render(data)
    });
function render (data) {
    const row = document.querySelector(".row");


    data.forEach(el => {
        const col = document.createElement("div");
        col.classList.add("col-3")
        const img = document.createElement('img');
        img.src = el;
        col.appendChild(img);
        row.appendChild(col);
    })
}