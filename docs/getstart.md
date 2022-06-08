---
id: getStarted
title: 开始使用
---

---
#### 创建一个保留下列数据中'Color'等于'red'的流程。

| Category        |   Country         |   Color |
| -------------   | :-----------:     | -----:  |
| Accessories     |   Germany         | red     |
| Bikes           |   France          | purple  |
| Clothing        |   China           | red     |

### 创建流程
进入流程管理界面,在流程列表上右键或者选择工具栏新建流程。

![img](/img/get-started/011.bmp)

### 数据源
之后在右侧的菜单中拖选一个CSV数据源作为输入。双击节点添加配置,上传一个csv数据源。

![img](/img/get-started/01.bmp)

### 数据处理
点击节点的黄色箭头选择数据过滤,然后使用表达式过滤数据。

![img](/img/get-started/02.bmp)


### 输出
添加Mysql输出。

![img](/img/get-started/03.bmp)

下一步点击'生成插入语句'选择目标表将自动生成SQL。

![img](/img/get-started/04.bmp)

### 运行流程
点击测试运行即可完成输出到Mysql

![img](/img/get-started/07.bmp)

---