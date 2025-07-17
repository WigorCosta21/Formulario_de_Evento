const input = document.getElementById("profile-photo")
const fileName = document.getElementById("file-name")

input.addEventListener("change", () => {
    let file = document.querySelector("input[type=file]").files[0]

    fileName.innerText = file.name
})