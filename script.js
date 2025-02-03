document.querySelector("#click").addEventListener('click',() => {
    document.querySelector("#home h1").textContent = "こんばんわ！";
});

document.querySelector("#submitBtn").addEventListener("click", (event) => {
    event.preventDefault(); // デフォルトの送信を防ぐ
    alert("送信されました");
});
