module.exports = {
  title: "项目管理工具",
  description: "Project Manager Cli",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/pm-cli/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "huqiliang/pm-cli",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",
    sidebar: [
      "/guide/introduce",
      "/guide/install",
      {
        title: "基础",
        collapsable: false,
        children: [
          "/base/create",
          "/base/list",
          "/base/list",
          "/base/list",
          "/base/list"
        ]
      }

      // {
      //   title: "介绍",
      //   collapsable: false,
      //   link: "/guide/introduce"
      //   // children: ["/guide/introduce"]
      // },
      // {
      //   title: "安装",
      //   collapsable: false
      //   // children: ["/guide/install"]
      // },
      // {
      //   title: "配置",
      //   collapsable: false,
      //   children: [
      //     {
      //       title: "YARN",
      //       collapsable: false,
      //       link: "/guide/install"
      //     }
      //   ]
      // },
      // {
      //   title: "使用",
      //   children: [
      //     /* ... */
      //   ]
      // }
    ],
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated" // 文档更新时间：每个文件git最后提交的时间
  }
};
