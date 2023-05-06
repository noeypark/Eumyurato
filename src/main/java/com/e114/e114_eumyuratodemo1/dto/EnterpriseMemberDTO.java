package com.e114.e114_eumyuratodemo1.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class EnterpriseMemberDTO{
    private String id;
    private String pwd;
    private String name;
    private String num;
    private String email;
    private String phone;
    private int adminNum;
    private String image;
}
