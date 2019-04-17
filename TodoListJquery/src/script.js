"use strict";

$(document).ready(function () {
    var newTextField = $(".new-line");
    var list = $(".list");

    var createButton = $(".create");
    createButton.click(function () {
        var text = newTextField.val();
        if (text === "") {
            return;
        }

        var li = $("<li>");
        createBasicLi(text);
        var children = li.children();

        function deleteLine() {
            li.remove();
        }

        function edit() {
            var tempText = children.eq(0).text();
            li.html("<input type='text' />\
            <button type='button'>Decline</button>\
            \<button type='button'>Save</button>");
            children = li.children();
            children.eq(0).val(tempText);
            children.eq(1).click(decline);
            children.eq(2).click(save);
        }

        function decline() {
            createBasicLi(text);
        }

        function save() {
            var tempText = children.eq(0).val();
            text = children.eq(0).val();
            createBasicLi(tempText);
        }

        function createBasicLi(text) {
            li.html("<span></span>\
                <button type='button'>X</button>\
                <button type='button'>Edit</button>");
            children = li.children();
            children.eq(0).text(text);
            children.eq(1).click(deleteLine);
            children.eq(2).click(edit);
        }

        list.append(li);
        newTextField.val("");
    });
});