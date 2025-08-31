package com.shiliu.pixcloudbackend.common;

import lombok.Data;

import java.io.Serializable;

/**
 * 通用删除请求类
 */
@Data
public class DeleteRequest implements Serializable {

    /**
     * id
     */
    private int id;

    public static final long serialVersionUID = 1L;
}
