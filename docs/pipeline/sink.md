---
id: sink
title: 数据输出
---

---

### 概述


### 文件输出

支持将数据输出到csv、xlsx

| 配置         |   描述                                         |
| ------------| :-----------                                  |
| 文件编码| 输出文件的编码                                  |
| 文件路径| 输出文件位置,参照[预设数据源](/filesystem)                                 |
| 是否覆盖| 是否覆盖重名文件                                  |

### 数据库输出

#### 数据库连接配置

参照[预设数据源](/pipeline/source)

#### 输出表字段配置

配置完成数据库后点击**[数据写出SQL]**,用户可以自定义Inset语句或使用**[生成Inset语句>选择表]**。
注意系统是按照[数据库版本](/pipeline/source)生成可能存在版本不兼容。

如下图:
![table.jpg](/img/pipeline/sink/table.jpg)

#### 字段映射
在下拉菜单中选择数据字段与表字段的映射,点击**[确定]**完成SQL生成,如图:
![filed-mapping.jpg](/img/pipeline/sink/filed-mapping.jpg)

#### 新建表

在上图步骤2下来菜单点击**[新建表]**如下图:
![create-table.jpg](/img/pipeline/sink/create-table.jpg)

#### Elasticsearch创建索引
![create-index.jpg](/img/pipeline/sink/create-index.jpg)
#### MongoDb创建集合
集合下拉菜单点击**[新建>输入集合名称>确定]**。

#### Kafka创建Topic
![create-topic.jpg](/img/pipeline/sink/create-topic.jpg)






