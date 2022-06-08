---
id: clean-up
title: 清洗过滤
---

---

### 概述

#### 界面简介

![clearup-ui.jpg](/img/pipeline/transform/clearup-ui.jpg)

### 类型转换
点击**字段编辑[...>更改类型>选择类型]**。当类型不能互转时将返回空值,比如'abc'转数字。

### 重命名
点击字段编辑[...>重命名]。当输入的字段名重复添加后缀累加数字。

### 复制字段
点击字段编辑[...>复制字段]。

### 仅保留与删除
点击字段编辑[...>仅保留/删除字段]。仅保留与删除结果相反。

### 字段拆分
点击字段编辑[...>拆分值]。

| 配置名 | 描述 |
|:---:|:---|
|分隔符|拆分值的标识,例如: 'acb',分隔符 'c',结果 ['a','b']|
|拆分多少值|将字符串拆分多少个值,不够时以空填充|

### 展开


### 过滤表达式
通过表达式过滤数据,表达式最终返回值必须是布尔值。参照[表达式](/expression/expression)
![clearup-expr.jpg](/img/pipeline/transform/clearup-expr.jpg)


### 计算字段
通过表达式生成新的字段。参照[表达式](/expression/expression)
![clearup-field.jpg](/img/pipeline/transform/clearup-field.jpg)

### 规则过滤
通过规则过滤数据
![clearup-rule.jpg](/img/pipeline/transform/clearup-rule.jpg)

### 批量删除字段
勾选需要删除的字段,点击**[确定]**
![clearup-removes.jpg](/img/pipeline/transform/clearup-removes.jpg)