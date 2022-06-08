---
id: expression
title: 表达式
---

---
### 简介
表达式可用于设置计算字段、过滤记录、数据类型转和函数调用,类似SQL中的Where条件。

### 字面量

| 类型         |   描述                                         |      示例         |
| ------------| :-----------:                                  | -----:           |
| 字符串       |   单引号或双引号                                 |   'abc' "abc"     |
| 整数         |   Java BigInteger                             | 123               |
| 小数         |   Java BigDecimal                             | 123     |
| 日期/时间     |   date 'yyyy-MM-dd' <br/> datetime 'yyyy-MM-dd HH:mm'<br/> time 'HH:mm' <br/> |  date '2012-12-12' <br/> datetime '2012-12-12 12:12:12' <br/> time '12:12:12'<br/>  |
| 布尔值       |   java true, false, yes, or no                 | started == yes,started == false     |
| 空          |   java null                                    | null    |

### 变量
使用表达式过程中可以使用 ${变量名称} 来引用对应数据列的值,**注意如果引用字段存在符号需要使用`''或者""`包裹**。

示例: ${username}、${'user-name'}、${user.name}、${user.'&*^m'}、${users[0]}.

### 算术运算符

| 类型         |   描述                                         |      示例         |
| ------------| :-----------:                                  | -----:           |
|   +         |                                            |      1+1,1+ -1         |
|   -         |                                            |      -1,1- -1         |
|   *         |                                            |      ${a}*2         |
|   /         |                                            |      ${a}/${b}         |
|   **        |   指数                                         |      ${a}**${b}         |
|   %        |   余数                                         |      ${a}%${b}         |

### 关系运算符

| 类型         |   描述                                         |      示例         |
| ------------| :-----------:                                  | -----:           |
|   等于         | ==                                             |1==1         |
|   不等于        | !=                                           | ${a} != true         |
|   大于         |   >                                         | ${a} > ${b}         |
|   大于等于        |  >=                                          | ${a} >= ${b}         |
|   小于        |  <                                          | ${a} < ${b}         |
|   小于等于       |   <=                                         | ${a} <= {b}         |

### 逻辑运算符

| 类型         |   描述                                         |      示例         |
| ------------| :-----------:                                  | -----:           |
|   并且         | &&、and                                      |true && ${a},${a} and ${b}         |
|   或者        | &#124;&#124;、or                              | ${a} == ${b} or (${c} > ${d}) &#124;&#124; 1 == 1         |
|   取反         |   ! 、 not                                         | !false,!(1 > 2)         |

### 方法调用
表达式语言支持用户对已经定义的静态 Java 方法的调用，例如: **1 + ${a} == power(3,2)** 。**[函数索引参照](/expression/functionIndex)**

### 示例
| Category(string)        |   Country(string)        |   Color(string) |   date(string)  |   time(string)  |
| -------------   | :-----------:     | :-----: | :-----: | :-----: |
| Accessories     |   Germany         | red     | 2012-12-03     | 12:06:15|
| Bikes           |   France          | purple  | 2012-12-04     | 12:06:16|
| Clothing        |   China           | red     | 2012-12-05     | 12:06:14|

#### 1:将 **[date,time]** 字符串拼接并转换成日期时间再做日期操作。
    toDateTime(${date}+ ' ' +${time}) + 1 day;
    toDateTime(${date}+ ' ' +${time}) - 1 hour;
    getDayOfYear(
        toDateTime(${date}+ ' ' +${time})
    )
#### 2:按 **[Category]** 分组统计  **[Color、Country]**。
    group(
        [${Category}],
        [count(${Color}),count(${Country})]
    )