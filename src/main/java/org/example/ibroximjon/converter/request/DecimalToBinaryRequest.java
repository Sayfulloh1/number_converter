package org.example.ibroximjon.converter.request;

import lombok.Data;

@Data
public class DecimalToBinaryRequest {
    private Double decimal;

    public  String doubleToBinary(double num) {
        int integerPart = (int) num;
        double fractionalPart = num - integerPart;

        String integerBinary = Integer.toBinaryString(integerPart);

        StringBuilder fractionalBinary = new StringBuilder();
        while (fractionalPart != 0 && fractionalBinary.length() < 23) {
            fractionalPart *= 2;
            int bit = (int) fractionalPart;
            fractionalBinary.append(bit);
            fractionalPart -= bit;
        }

        String binaryString = integerBinary;
        if (!fractionalBinary.isEmpty()) {
            binaryString += "." + fractionalBinary;
        }

        return binaryString;
    }
}
