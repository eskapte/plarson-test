if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", func);
} else {
    func();
}

function func() {
    console.log("Document is ready");
}