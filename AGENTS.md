# AGENTS.md - FlyViaggi 飞扬旅行社官网

## 项目概览

FlyViaggi 飞扬旅行社官网 - 位于意大利普拉托的华人旅行社，提供机票、旅游团、火车票、签证等综合服务。

### 技术栈
- **Framework**: Next.js 14+ (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **Auth**: Supabase Auth

## 目录结构

```
/workspace/projects/
├── public/                 # 静态资源
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── api/            # API 路由
│   │   │   └── supabase-config/  # Supabase 配置接口
│   │   ├── flights/        # 机票服务页
│   │   ├── tours/          # 旅游团页
│   │   ├── trains/         # 火车票页（搜索、班次、选票流程）
│   │   ├── visa/           # 签证服务页
│   │   ├── about/          # 关于我们页
│   │   ├── contact/        # 联系我们页
│   │   ├── login/          # 登录页
│   │   ├── register/       # 注册页
│   │   ├── account/        # 用户中心
│   │   ├── agent/          # 代理模块
│   │   │   ├── register/   # 代理注册页
│   │   │   └── dashboard/  # 代理后台
│   │   ├── admin/          # 管理员后台
│   │   ├── layout.tsx      # 根布局
│   │   ├── page.tsx        # 首页（强调 Prima Flex 40% OFF）
│   │   └── globals.css     # 全局样式
│   ├── components/         # 组件
│   │   ├── ui/             # Shadcn UI 组件库
│   │   ├── header.tsx      # 顶部导航
│   │   ├── footer.tsx      # 底部信息
│   │   └ language-switcher.tsx  # 语言切换
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   ├── i18n.ts         # 多语言配置
│   │   ├── i18n-context.tsx # 语言上下文
│   │   ├── supabase-config-inject.tsx # Supabase 配置注入
│   │   ├── supabase-browser.ts # Supabase 浏览器客户端
│   │   └── utils.ts        # 通用工具函数
│   └── storage/database/   # 数据库相关
│       └── supabase-client.ts # Supabase 客户端
├── DESIGN.md               # 设计规范
├── AGENTS.md               # 项目文档
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖
└── tsconfig.json           # TypeScript 配置
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

### 编码规范
- 默认按 TypeScript `strict` 心智写代码
- 禁止隐式 `any` 和 `as any`
- 函数参数、返回值需有明确类型
- 使用 'use client' 配合 useEffect + useState 处理动态数据

### Next.js 配置规范
- 配置路径使用动态拼接，禁止硬编码
- 图片域名已在 next.config.ts 中配置

### Hydration 问题防范
- 严禁在 JSX 渲染中直接使用 typeof window、Date.now()、Math.random()
- 禁止 `<head>` 标签，使用 metadata API
- 外部 CSS/字体通过 globals.css 或 next/font 引入

## UI 设计规范

### 品牌色
- **主色深海蓝**: #0A2647 - 专业、信赖
- **暖橙**: #F5A623 - 温暖、热情、CTA按钮
- **Italo 红**: #E2001A - 火车票折扣强调色、醒目标签
- **辅色**: 白色 + 浅灰

### 组件规范
- 圆角卡片 (16px)，温暖阴影
- 留白充足，呼吸感强
- shadcn/ui 组件位于 `src/components/ui/`

## 多语言系统

### 支持语言
- 中文 (zh) - 默认
- 意大利语 (it)
- 英文 (en)

### 使用方式
```typescript
import { useI18n } from '@/lib/i18n-context';
const { t } = useI18n();
// 使用：t('nav.home')
```

### 配置文件
- `src/lib/i18n.ts` - 翻译文本
- `src/lib/i18n-context.tsx` - 语言上下文

## 用户认证系统

### 登录方式
- 邮箱密码登录（已开启）
- 手机号登录（未开启）

### 核心文件
- `src/lib/supabase-config-inject.tsx` - 配置注入 Provider
- `src/lib/supabase-browser.ts` - 浏览器端客户端
- `src/storage/database/supabase-client.ts` - 服务端客户端
- `src/app/api/supabase-config/route.ts` - 配置 API

### 登录态验证
- Header 中自动显示登录状态
- x-session Header 用于后端接口认证

## 页面路由

| 路径 | 页面 | 功能 |
|------|------|------|
| `/` | 首页 | Hero（Prima Flex 40% OFF）、四大服务卡片、热门路线、代理入口 |
| `/flights` | 机票 | 查询表单、热门航线 |
| `/trains` | 火车票 | 搜索表单、班次展示、选票流程、支付方式展示 |
| `/tours` | 旅游团 | 团组分类、定制行程 |
| `/visa` | 签证 | 类型说明、材料清单 |
| `/about` | 关于我们 | 公司介绍、团队 |
| `/contact` | 联系我们 | 表单、联系方式 |
| `/login` | 登录 | 邮箱密码登录 |
| `/register` | 注册 | 邮箱密码注册 |
| `/account` | 用户中心 | 个人信息、登出 |
| `/agent/register` | 代理注册 | 公司信息、联系人、审核申请 |
| `/agent/dashboard` | 代理后台 | 批量下单、订单列表、余额、月度账单 |
| `/admin` | 管理员后台 | 代理审核、订单汇总、充值记录、报表 |

## 用户角色体系

- **散客**: 注册即可下单，看到普通价格
- **代理**: 注册后需审核，通过后解锁代理后台，享受额外 5-10% 折扣
- **管理员**: 管理代理审核、全平台订单、充值记录等
| `/login` | 登录 | 邮箱密码登录 |
| `/register` | 注册 | 邮箱密码注册 |
| `/account` | 用户中心 | 个人信息、登出 |

## 注意事项

1. Supabase 服务需在 Coze 平台开通才能正常使用登录功能
2. 登录/注册页面使用应用配置中的图标和名称
3. 移动端优先设计，响应式布局
4. 中意双语优先，支持英文

## 公司信息

- **公司名称**: WINGSUP S.R.L
- **地址**: VIA FABIO FILZI 112, 59100 PRATO (PO), Italia
- **P.IVA**: 02632470973