package org.example.ibroximjon.converter.request;

import lombok.Data;

@Data
public class HexToBinaryRequest {
    private String hex;
    public  String hexToBinary(String hex) {
        int decimal = Integer.parseInt(hex, 16);
        return Integer.toBinaryString(decimal);
    }
}
