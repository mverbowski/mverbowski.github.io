// JavaScript source code
var testVariable = 300;
var cars = ["Toyota", "Honda", "BMW"];

var myJSONObject = {
    "bindings": [
            { "ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*" },
            { "ircEvent": "PRIVMSG", "method": "deleteURI", "regex": "^delete.*" },
            { "ircEvent": "PRIVMSG", "method": "randomURI", "regex": "^random.*" }
    ]
};


myData = JSON.parse(text, function (key, value) {
    var type;
    if (value && typeof value === 'object') {
        type = value.type;
        if (typeof type === 'string' && typeof window[type] === 'function') {
            return new (window[type])(value);
        }
    }
    return value;
});


    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
        testVariable = 360;
        go();
    }
    function go() {
        alert("JavaScript works!");
        alert("testVariable in this js file is: " + testVariable);
    }
function jsonPull() {
    alert("Hi");
    var obj = jQuery.parseJSON('{ "name": "John" }');
    alert(obj.name === "John");
}

function runFromJ() {
    alert("this is run from Jscript");
}
