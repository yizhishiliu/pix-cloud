package com.shiliu.pixcloudbackend.controller;

import com.shiliu.pixcloudbackend.common.BaseResponse;
import com.shiliu.pixcloudbackend.common.ResultUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class MainController {

    @RequestMapping("/health")
    public BaseResponse<String> health() {
        return ResultUtils.success( "OK");
    }
}
