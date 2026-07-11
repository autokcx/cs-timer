# CS Timer 💣

> Kevin's 1st vibe coding app —— 一个 **CS:GO 战术主题**的番茄钟 / 专注计时器,用 [Electron](https://www.electronjs.org/) 打包成 macOS 桌面应用。

把「专注」变成一局 CS:GO:开始专注 = **埋下 C4**,顶部红灯闪烁、引信读条,倒计时归零就是一次**起爆**——火球 + 震屏 + 真实 C4 爆炸声 + "Terrorists Win!"。专注结束进入休息,喝杯咖啡 ☕ 放松一下。专治摸鱼。

当前版本:**v1.5.0**

---

## ✨ 功能

- 🎯 **两种模式**
  - **专注(T · 埋雷)**:可选 `1 / 15 / 25 / 35 / 45` 分钟,恐怖分子(T)主题
  - **休息(CT · 拆弹)**:可选 `1 / 10 / 15` 分钟,反恐精英(CT)主题 + 青色
- 💣 **真实 C4 雷包**:专注时显示 CS 1.6 风格的 C4 雷包图(`assets/c4.png`),布防时红光脉冲,下方引信进度条随剩余时间收缩
- 💥 **起爆特效**:专注归零时白光火球 + 冲击波 + 火星喷溅 + 震屏
- 🔊 **CS:GO 真实原声**(放在 `sounds/`,HTML5 Audio 播放)
  | 时机 | 音效 |
  |---|---|
  | 埋雷 / 开始专注 | `planted.mp3` — "The bomb has been planted." |
  | 专注最后 6 秒 | `c4beep.mp3` — 真实 C4 加速哔声,一路响到爆炸 |
  | 专注完成起爆 | `explosion.mp3` — 真实 C4 爆炸声 |
  | 专注完成胜利 | `terrorists_win.mp3` — "Terrorists Win!" |
  | 开始休息 | `go.mp3` — "Go go go!" |
  | 休息将结束 | `defusing.mp3` — 真实 C4 拆弹器咔哒声 |
  | 休息结束 | `defused.mp3` — "The bomb has been defused." → `ct_win.mp3` |
- ⏱️ **最后 10 秒**:时钟变红抖动(DETONATING);最后 6 秒 C4 加速哔声一路响到爆炸
- 🎖 **CS 段位系统**:累计完成的专注局数决定段位(白银 → 黄金 → 守护者 → 传奇之鹰 → 全球精英,共 18 段),头像旁按大类变色;每次升段弹专属庆祝横幅。生涯战绩本地存档,关闭不丢
- 🧑‍✈️ **操作员卡片**:T 恐怖分子 / CT 特警**真实头像**(绿幕抠图)+ 战术 HUD 状态条(LIVE·REC / Map: De_Focus 2 / 实时时钟)
- 🏆 **战绩统计**:每完成一次专注 +1 分(Rounds Won)
- ⌨️ **空格键**一键启动 / 暂停
- 🔔 完成时弹**系统通知**

---

## 🚀 运行方式

### 方式一:直接用打包好的 app(日常推荐)

不需要终端、不需要 Node。用 `npm run package` 打包后,双击生成的
`dist/CS Timer-darwin-arm64/CS Timer.app` 即可。

> 首次打开若提示「无法验证开发者」:右键图标 → **打开** → 再点一次**打开**(自签名应用,只需操作一次)。

### 方式二:开发模式(改代码时用)

```bash
git clone https://github.com/autokcx/cs-timer.git
cd cs-timer
npm install
npm start
```

---

## 📦 打包成 macOS app

```bash
npm run package
```

产物输出到 `dist/`。(打包产物和 `node_modules` 已通过 `.gitignore` 排除,不进 git。)

---

## 📁 项目结构

```
cs-timer/
├─ index.html      # 全部界面 + 逻辑(单文件)
├─ main.js         # Electron 主进程(建窗口 / 系统通知)
├─ preload.js      # 暴露 notify 给渲染进程
├─ avatars/        # t.png / ct.png(T 恐怖分子 / CT 特警头像,绿幕抠图)
├─ assets/         # c4.png(CS 1.6 风格 C4 雷包图)
├─ sounds/         # 真实 CS:GO 音效 mp3
└─ fonts/          # Rajdhani 字体
```

---

## 🛠 技术栈

- [Electron](https://www.electronjs.org/) 33 —— 桌面应用外壳
- 原生 HTML / CSS / JavaScript —— 界面与逻辑(全在单文件 `index.html`)
- CSS 动画 —— 起爆火球 / 冲击波 / 震屏 / C4 布防脉冲
- AI 生成素材 —— C4 雷包图(nano-banana + 绿幕抠图)
- Web Audio API —— UI 提示音(实时合成);`sounds/` 内真实 CS:GO 音效走 HTML5 Audio
- [Rajdhani](https://fonts.google.com/specimen/Rajdhani) 字体 —— 战术数字风

> 音效版权:`sounds/` 内为 CS:GO / CS2 原声,版权归 Valve,仅作个人学习练手使用。

---

## 📄 许可

代码 MIT © Kevin。CS:GO 音效版权归 Valve。
