"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var newTextField = document.querySelector(".new-line");
    var list = document.querySelector(".list");

    var createButton = document.querySelector(".create");
    createButton.addEventListener("click", function () {
        var text = newTextField.value;
        if (text === "") {
            return;
        }

        var li = document.createElement("li");
        createBasicLi(text);

        function deleteLine() {
            list.removeChild(li);
        }

        function edit() {
            var tempText = li.children[0].innerText;
            li.innerHTML = "<input type='text' />\
            <button type='button'>Decline</button>\
            \<button type='button'>Save</button>";
            li.children[0].value = tempText;
            li.children[1].addEventListener("click", decline);
            li.children[2].addEventListener("click", save);
        }

        function decline() {
            createBasicLi(text);
        }

        function save() {
            var tempText = li.children[0].value;
            text = li.children[0].value;
            createBasicLi(tempText);
        }

        function createBasicLi(text) {
            li.innerHTML = "<span></span>\
                <button type='button'>X</button>\
                \<button type='button'>Edit</button>";
            li.children[0].innerText = text;
            li.children[1].addEventListener("click", deleteLine);
            li.children[2].addEventListener("click", edit);
        }

        list.appendChild(li);
        newTextField.value = "";
    });
});