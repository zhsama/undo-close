# Undo Close - Chrome Extension

一个用于记录和恢复已关闭标签页的 Chrome 浏览器扩展。

## 功能特性

- 记录浏览器中被关闭的标签页历史
- 快速恢复最近关闭的标签页
- 支持查看和搜索历史关闭记录
- 可自定义保存的历史记录数量
- 支持亮色/暗色主题切换

## 技术栈

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Chrome Extension API
- pnpm (包管理器)
- Turborepo (Monorepo 工具)

## 项目结构
```
├── packages/           # 共享包目录
│ ├── ui/ # UI 组件库
│ ├── shared/ # 共享工具和 hooks
│ └── storage/ # 存储相关逻辑
├── pages/             # 插件页面目录
│ ├── popup/ # 弹出窗口
│ └── options/ # 设置页面
├── scripts/           # 构建脚本
├── .husky/            # Git hooks配置
├── pnpm-workspace.yaml # pnpm工作空间配置
└── package.json       # 项目配置文件
```

## 开发指南

### 环境要求

- Node.js >= 18.19.0
- pnpm >= 9.14.0

### 安装依赖
```shell
bash
pnpm install
```

### 开发模式
```shell
pnpm dev
```

### Firefox 开发模式
```shell
pnpm dev:firefox
```

## 构建

### 构建 Chrome 版本
```shell
pnpm build
```

### 构建 Firefox 版本

```shell
pnpm build:firefox
```

### 构建并打包 zip

```shell
pnpm zip
```

## 使用说明
1. 安装扩展：将构建后的文件夹加载到 Chrome 浏览器的扩展管理页面。
2. 使用扩展：点击浏览器工具栏上的扩展图标，弹出窗口将显示最近关闭的标签页。 选择要恢复的标签页，点击恢复按钮即可重新打开。

## 许可证

本项目采用 MIT 许可证，详情请参见 LICENSE 文件。

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 联系方式

如有问题或建议，欢迎提交 Issue 或 Pull Request。
