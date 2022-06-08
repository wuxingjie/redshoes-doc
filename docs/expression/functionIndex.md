---
id: functionIndex
title: 函数索引
---

---

| 名称        |  类型        |   描述 |   示例        |
| ------------|------------| ----------- | ----------- |
|weekOfYear|DATE|返回指定时间的本年的第几周|weekOfYear(${field} or toDateTime('2012-12-12 12:12:12'))|
|weekOfYear|DATE|返回指定时间的本年的第几周|weekOfYear(${field} or toDate('2012-12-12'))|
|getMonth|DATE|返回当前日期的月份|getMonth(${field} or toDate('2012-12-12'))|
|getMonth|DATE|返回当前日期的月份|getMonth(${field} or toDateTime('2012-12-12 12:12:12'))|
|toDateTime|DATE|转日期和时间|toDateTime('2021-10-10 11:11:11')|
|weekOfMonth|DATE|返回指定时间的本月的第几周|weekOfMonth(${field} or toDate('2012-12-12'))|
|weekOfMonth|DATE|返回指定时间的本月的第几周|weekOfMonth(${field} or toDateTime('2012-12-12'))|
|getYear|DATE|返回当前日期的年|getYear(${field} or toDateTime('2012-12-12 12:12:12'))|
|getYear|DATE|返回当前日期的年|getYear(${field} or toDate('2012-12-12'))|
|setSRID|DATE|给geo图形设置一个空间参考系统的ID并返回geo图形.|setSRID(geo,2249)|
|dayOfWeek|DATE|返回指定时间的本周的第几天|dayOfWeek(${field} or toDate('2012-12-12'))|
|dayOfWeek|DATE|返回指定时间的本周的第几天|dayOfWeek(${field} or toDateTime('2012-12-12 12:12:12'))|
|getQuarter|DATE|以整数形式返回给定日期的季度|getQuarter(${field} or toDate('2012-12-12'))|
|getQuarter|DATE|以整数形式返回给定日期的季度|getQuarter(${field} or toDateTime('2012-12-12 12:12:12'))|
|now|DATE|返回当前日期和时间|now()|
|isDate|DATE|如果给定字符串为有效日期，则返回true。|isDate('2020-02-12')|
|getDayOfYear|DATE|返回当年第几天|getDayOfYear(${field} or toDateTime('2012-12-12 12:12:12'))|
|getDayOfYear|DATE|返回当年第几天|getDayOfYear(${field} or toDate('2012-12-12'))|
|createDate|DATE|返回日期值|createDate(2020,2,23,1,1,1)|
|toDate|DATE|转日期|toDate('2021-10-10')|
|isDateTime|DATE|如果给定字符串为有效日期，则返回true。|isDate('2020-02-12')|
|getDayOfMonth|DATE|返回当前日期当月第几天|getDayOfMonth(${field} or toDateTime('2012-12-12 12:12:12'))|
|getDayOfMonth|DATE|返回当前日期当月第几天|getDayOfMonth(${field} or toDate('2012-12-12'))|
|upper|STRING|将文本字符串转换为全大写字母|upper('aBc23') = ABC23|
|replace|STRING|匹配string中targetStr并替换成replacementStr。|replace('calculation', 'ion', 'ed') = 'calculated'|
|space|STRING|返回由指定数量的重复空格组成的字符串|space(2) = '  '|
|split|STRING|切割字符串并返回字符串数组|split('a-b-c-d','-')|
|split|STRING|切割字符串并返回第position个字符串|split('a-b-c-d','-',4) = 'd'|
|trim|STRING|去除字符串中左右空格|trim(' abc ') = abc|
|len|STRING|返回给定字符串中的字符数|len('abc') = 3|
|ltrim|STRING|去除字符串中左空格|ltrim(' abc') = abc|
|lower|STRING|将文本字符串转换为全小写字母|lower('ABc23') = abc23|
|regexp_replace|STRING|使用正则替换字符串|regexp_replace('abc  1234','\s','-') = abc--1234|
|capitalize|STRING|将字符串首字母转为大写|capitalize('abc') = Abc|
|contains|STRING|如果string1包含string2，则返回true。|contains('RedShoesExpression','Ex')为true|
|endsWith|STRING|如果string1以suffix结尾(忽略前后空格)，则返回true。|endsWith('RedShoesExpression ','ion')为true|
|removeNumber|STRING|移除字符串中的数字|removeNumber('12abc') = 'abc'|
|substring|STRING|给点起始位置和截取字符串的长度截取字符串|substring('RedShoesExpression ', 7,2) = sE|
|toInteger|STRING|转整数|toInteger('123') = 123|
|toGeometry|STRING|转几何图形|toGeometry('POINT(1 2)')|
|rtrim|STRING|去除字符串中右空格|rtrim('abc ') = abc|
|right|STRING|从给定字符串结尾起返回指定数量的字符。|right('calculation',4) = 'tion'|
|removePunctuation|STRING|移除字符串中的标点符号|removePunctuation('!tony,!.') = 'tony' removePunctuation('shank.?') = 'shank'|
|toString|STRING|转字符串|toString(Object)|
|regexp_match|STRING|如果字符串与正则表达式匹配返回true否则false。or regexp_match('2223a','\w+') = true|
|startsWith|STRING|如果字符串以子字符串开头(忽略前后空格)，则返回true。|startsWith('RedShoesExpression ','RedSh')为true|
|removeCharacter|STRING|移除字符串中的字母|removeCharacter('12abc') = '12'
|nullToEmpty|STRING|如果字符串是NULL,返回空字符'',否则返回原来的字符串|nullToEmpty(null) = ''
|toDecimal|STRING|转小数|toDecimal('123.25') = 123.25|
|byteToBase64|BINARY|byte转base64字符串|byteToBase64(byte[])|
|toByte|BINARY|转byte|toByte(1)|
|base64ToByte|BINARY|base64字符串转byte|base64ToByte(byte[])|
|sqrt|MATH|返回数字的平方根|sqrt(16) = 4.0|
|setScale|MATH|将数字舍入指定小数位数|setScale(23.567,'HALF_UP',2) = 23.57|
|power(arg1: Number,arg2: Number)|MATH|返回数字的给定幂的结果|power(3,2) = 9|
|cbrt|MATH|返回数字的立方根|cbrt(27) = 3.0|
|floor|MATH|移除小数位|floor(223.62) = 223|
|random()|MATH|返回一个随机数|random()|
|abs|MATH|返回给定数字的绝对值|abs(-223.62) = 223.62|
|round|MATH|将数字舍入为最接近的整数或指定小数位数|round(23.567,2) = 23.57|
|PI|MATH|返回PI|PI()|
|geoCrosses|GEOMETRY|返回geo1、geo2是否相交.|geoCrosses(geo1,geo2)|
|geoPolygonArea|GEOMETRY|返回图形面积.|geoPolygonArea(geo)|
|geoContains|GEOMETRY|返回geo1是否包含geo2.|geoContains(geo1,geo2)|
|geoDistance|GEOMETRY|返回点、图、线距离.|geoDistance(geo1,geo2)|
|lineLength|GEOMETRY|返回线的长度.|lineLength(geo)|
|removeCharacter|MISC|移除字符|removeCharacter('1ab1c4') = '114'|
|removeNumber|MISC|移除数字|removeNumber('1ab1c4') = 'abc'|
|group|MISC|没有描述||
|nullToEmpty|MISC|空转换为空字符|nullToEmpty('abc') = 'abc'|
|last|MISC|没有描述||
|overlay|MISC|字符脱敏|overlay('15228125636',3,4) = '152****5636'|
|var|MISC|没有描述||
|count|MISC|没有描述||
|ifNull|MISC|如果string1不为null，则返回它，否则返回string2|ifNull(String),返回类型String|
|zn|MISC|如果值不为null，则返回它，否则返回零|zn(String),返回类型String|
|iif|MISC|如果expr为true，则返回string1，否则返回string2|iif(2 > 1, '正确','错误') = '正确'|
|sum|MISC|没有描述||
|avg|MISC|没有描述||
|min|MISC|没有描述||
|encodeBase64|MISC|字符串Base64加密|encodeBase64('abc') = 'YWJj'|
|max|MISC|没有描述||
|decodeBase64|MISC|Base64解密|decodeBase64('YWJj') = 'abc'|
|stDev|MISC|没有描述||
|first|MISC|没有描述||