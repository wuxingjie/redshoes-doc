module.exports = {
  sidebar: [
    {
      type: "doc",
      label: "概述",
      id: "overview",
    },
    {
      type: "doc",
      label: "安装部署",
      id: "install",
    },
    {
      type: "link",
      label: "常见问题",
      href: "http://redshoes-qa.jiuqiangtech.com/",
    },
    {
      type: "doc",
      label: "开始使用",
      id: "getStarted",
    },
    {
      type: "doc",
      label: "文件系统",
      id: "filesystem",
    },
    {
      type: "doc",
      label: "预设数据源",
      id: "datasource/overview",
    },
    {
      type: "category",
      label: "流程设计",
      link: { type: "doc", id: "pipeline/overview" },
      items: [
        "pipeline/source",
        {
          type: "category",
          label: "转换",
          items: [
            "pipeline/transform/clean-up",
            "pipeline/transform/sort",
            "pipeline/transform/groupby",
            "pipeline/transform/route",
            "pipeline/transform/join-merge",
          ],
        },
        "pipeline/sink",
      ],
    },
    {
      type: "doc",
      label: "任务调度",
      id: "schedule",
    },
    {
      type: "doc",
      label: "事件监听",
      id: "event-listener",
    },
    {
      type: "doc",
      label: "执行记录",
      id: "exec-history",
    },
    {
      type: "category",
      label: "表达式",
      link: { type: "doc", id: "expression/expression" },
      items: ["expression/functionIndex"],
    },
  ],
};
