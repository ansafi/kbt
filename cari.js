document.addEventListener("DOMContentLoaded", function() {
    const keywordInput = document.getElementById("keyword");
    const umkmItems = document.querySelectorAll(".umkm-item");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function() {
        const keyword = keywordInput.value.toLowerCase();
        let found = false;

        umkmItems.forEach(item => {
            const title = item.querySelector("h5").textContent.toLowerCase();
            const description = item.querySelector("p").textContent.toLowerCase();

            if (title.includes(keyword) || description.includes(keyword)) {
                item.style.display = "block";
                if (!found) {
                    item.scrollIntoView({ behavior: "smooth", block: "start" });
                    found = true;
                }
            } else {
                item.style.display = "none";
            }
        });

        if (!found) {
            alert("UMKM tidak ditemukan");
        }
    });
});
