package com.shiliu.pixcloudbackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@MapperScan("com.shiliu.pixcloudbackend.mapper")
@EnableAspectJAutoProxy(exposeProxy = true)
public class PixCloudBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PixCloudBackendApplication.class, args);
    }

}
