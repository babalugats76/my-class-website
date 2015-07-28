$(document).ready(function() {
    $("<select />").appendTo("#navigation div"), $("<option />", {
        selected: "selected",
        value: "",
        text: "Go to..."
    }).appendTo("#navigation div select"), $("#navigation div ul li a").each(function() {
        var t = $(this);
        $("<option />", {
            value: t.attr("href"),
            text: t.text()
        }).appendTo("#navigation select")
    }), $("#navigation select").change(function() {
        window.location = $(this).find("option:selected").val()
    })
});