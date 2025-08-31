package com.shiliu.pixcloudbackend.common;

import lombok.Data;

import java.io.Serializable;

/**
 * 通用分页请求类
 */
@Data
public class PageRequest implements Serializable {

    /**
     * 当前页号
     */
    private int current;

    /**
     * 页面大小
     */
    private int pageSize;

    /**
     * 排序字段
     */
    private String softField;

    /**
     * 排序顺序（默认升序）
     */
    private String sortOrder = "descend";
}
