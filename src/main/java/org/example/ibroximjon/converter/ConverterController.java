package org.example.ibroximjon.converter;

import jakarta.validation.Valid;
import org.example.ibroximjon.converter.request.BinaryToDecimalRequest;
import org.example.ibroximjon.converter.request.BinaryToHexRequest;
import org.example.ibroximjon.converter.request.HexToBinaryRequest;
import org.example.ibroximjon.converter.request.DecimalToBinaryRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/converter")
public class ConverterController {

    @PostMapping("/binary-to-decimal")
    public ResponseEntity<String> binaryToDecimal(@Valid @RequestBody BinaryToDecimalRequest request) {
        try {
            // Validate binary input format
            if (!request.getBinary().matches("[01]+")) {
                return ResponseEntity.badRequest().body("Invalid binary input format.");
            }

            long decimal = Long.parseLong(request.getBinary(), 2);
            return ResponseEntity.ok(String.valueOf(decimal));
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid input format.");
        }
    }

    @PostMapping("/decimal-to-binary")
    public ResponseEntity<String> decimalToBinary(@Valid @RequestBody DecimalToBinaryRequest request) {
        try {
            // Validate decimal input format
            if (request.getDecimal() < 0) {
                return ResponseEntity.badRequest().body("Decimal value cannot be negative.");
            }

            String binary = request.doubleToBinary(request.getDecimal());
            return ResponseEntity.ok(binary);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid input format.");
        }
    }

    @PostMapping("/hex-to-binary")
    public ResponseEntity<String> hexToBinary(@Valid @RequestBody HexToBinaryRequest request) {
        try {
            // Validate hexadecimal input format
            if (!request.getHex().matches("[0-9a-fA-F]+")) {
                return ResponseEntity.badRequest().body("Invalid hexadecimal input format.");
            }

            String binary = request.hexToBinary(request.getHex());
            return ResponseEntity.ok(binary);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid input format.");
        }
    }


    @PostMapping("/binary-to-hex")
    public ResponseEntity<String> binaryToHex(@Valid @RequestBody BinaryToHexRequest request) {
        return ResponseEntity.ok(request.binaryToHexNumber());
    }
}