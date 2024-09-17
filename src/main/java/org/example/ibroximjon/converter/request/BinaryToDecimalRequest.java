package org.example.ibroximjon.converter.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class BinaryToDecimalRequest {
    @NotNull
    @Pattern(regexp = "^[01]+$")
    private String binary;
}


