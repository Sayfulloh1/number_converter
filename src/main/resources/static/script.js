function binaryToDecimal() {
    const binaryInput = document.getElementById("binaryToDecimalInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/converter/binary-to-decimal", true); // Added http://
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("binaryToDecimalResult").textContent = "Output is: "+xhr.responseText;
        } else {
            console.error("Error:", xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send(JSON.stringify({ binary: binaryInput }));
}

function decimalToBinary() {
    const decimalInput = document.getElementById("decimalToBinaryInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/converter/decimal-to-binary", true); // Added http://
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("decimalToBinaryResult").textContent = "Output is: "+xhr.responseText;
        } else {
            console.error("Error:", xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send(JSON.stringify({ decimal: decimalInput }));
}

function binaryToHex() {
    const binaryInput = document.getElementById("binaryToHexInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/converter/binary-to-hex", true); // Added http://
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("binaryToHexResult").textContent = "Output is: "+xhr.responseText;
        } else {
            console.error("Error:", xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send(JSON.stringify({ binary: binaryInput }));
}

function hexToBinary() {
    const hexInput = document.getElementById("hexToBinaryInput").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/converter/hex-to-binary", true); // Added http://
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("hexToBinaryResult").textContent = "Output is: "+xhr.responseText;
        } else {
            console.error("Error:", xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send(JSON.stringify({ hex: hexInput }));
}
