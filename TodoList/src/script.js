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
        li.innerHTML = "<span></span>\
       <button type='button'>X</button>\
       \<button type='button'>Edit</button>";
        li.children[0].innerText = text;
        li.children[1].addEventListener("click", function () {
            list.removeChild(li);
        });
        li.children[2].addEventListener("click", function () {
            //TODO редактирование
            var temp = document.createElement("input");
            temp.setAttribute("type", "text");
            temp.setAttribute("value", li.children[0].innerText);

            function removeChildren(li) {
                while (li.lastChild) {
                    li.removeChild(li.lastChild);
                }
            }

            removeChildren(li);

            li.appendChild(temp);
            li.innerHTML = "<span></span>\
            <button type='button'>X</button>\
            \<button type='button'>Edit</button>";
            li.children[0].innerText = text;
            li.children[1].addEventListener("click", function () {
                list.removeChild(li);
            });

        });

        list.appendChild(li);
        newTextField.value = "";
    });
});