package org.example.ibroximjon.converter.request;

import lombok.Data;

@Data
public class BinaryToHexRequest {
    private String binary;

    public String binaryToHexNumber(){
        if (!binary.matches("[01]+")) {
            return "Invalid binary input format.";
        }

        // Handle leading zeros
        binary = binary.replaceAll("^0+", "");

        // Group binary digits into groups of 4
        int length = binary.length();
        int groups = (length + 3) / 4;
        StringBuilder hex = new StringBuilder();

        for (int i = 0; i < groups; i++) {
            int startIndex = i * 4;
            int endIndex = Math.min(startIndex + 4, length);
            StringBuilder group = new StringBuilder(binary.substring(startIndex, endIndex));

            // Pad with leading zeros if necessary
            while (group.length() < 4) {
                group.insert(0, "0");
            }

            // Convert group to hexadecimal digit
            int decimalValue = Integer.parseInt(group.toString(), 2);
            char hexDigit = Character.forDigit(decimalValue, 16);
            hex.append(hexDigit);
        }

        return hex.toString();
    }
}
