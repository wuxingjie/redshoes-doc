---
id: install
title: 安装部署
---

---
### 下载

### 应用配置
#### 应用目录结构
```
pipeline   
└───config
└───drivers
└───lib
|   pipeline-launcher-1.0.jar
```

#### 仓库配置(必填)[文件:/config/pipeline-prod.properties]
| 配置         |   示例        |   描述        |
| ------------|------------| ----------- |
|redshoes.pipeline.repository|/usr/repository或者F:/repository|应用仓库根地址,必须使用绝对地址|
|redshoes.pipeline.working_directory|${redshoes.pipeline.working_directory}/uploaded/{1}|pipeline工作目录|
|redshoes.pipeline.upload|${redshoes.pipeline.working_directory}/uploaded/{1}|文件上传路径|
|redshoes.pipeline.logging.job|${redshoes.pipeline.repository}/logs/job/history/{0}/{1}_{0}.log|job日志|
|redshoes.pipeline.logging.listener|${redshoes.pipeline.repository}/logs/listener/listener_{0}.log|监听日志|

#### 邮箱配置(非必填)[文件:/config/mail.properties]
| 配置         |   描述        |
| ------------| ----------- |
|mail.smtp.host|邮件服务器的SMTP地址，可选，默认为smtp|
|mail.smtp.port|邮件服务器的SMTP端口，可选，默认25|
|from|发件人（必须正确，否则发送失败）|
|user|用户名|
|pass|密码|


### 启动
    java -jar pipeline-launcher-1.0.jar -Dfile.encoding=UTF8 --spring.profiles.active=prod

