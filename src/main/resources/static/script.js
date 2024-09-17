function binaryToDecimal() {
    const binaryInput = document.getElementById("binaryToDecimalInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "localhost:8080/converter/binary-to-decimal", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("binaryToDecimalResult").textContent = xhr.responseText;
        } else {
            console.error("Error:", xhr.statusText);
        }
    };
    xhr.send(JSON.stringify({ binary: binaryInput }));
}

function decimalToBinary() {
    const decimalInput = document.getElementById("decimalToBinaryInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "localhost:8080/converter/decimal-to-binary", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("decimalToBinaryResult").textContent = xhr.responseText;
        } else {
            console.error("Error:", xhr.statusText);
        }
    };
    xhr.send(JSON.stringify({ decimal: decimalInput }));
}

function binaryToHex() {
    const binaryInput = document.getElementById("binaryToHexInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "localhost:8080/converter/binary-to-hex", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("binaryToHexResult").textContent = xhr.responseText;
        } else {
            console.error("Error:", xhr.statusText);
        }
    };
    xhr.send(JSON.stringify({ binary: binaryInput }));
}

function hexToBinary() {
    const hexInput = document.getElementById("hexToBinaryInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "localhost:8080/converter/hex-to-binary", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("hexToBinaryResult").textContent = xhr.responseText;
        } else {
            console.error("Error:", xhr.statusText);
        }
    };
    xhr.send(JSON.stringify({ hex: hexInput }));
}