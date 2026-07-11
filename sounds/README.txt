真实 CS:GO 音效放这里，App 通过 HTML5 Audio 直接播放。

触发时机 → 文件名：
  埋雷/开始专注   → planted.mp3          ("The bomb has been planted.")
  专注最后 6 秒    → c4beep.mp3           (真实 C4 加速哔声，一路响到爆炸)
  专注完成起爆     → explosion.mp3        (真实 C4 爆炸声)
  专注完成胜利喊话 → terrorists_win.mp3   ("Terrorists Win!")
  休息结束         → ct_win.mp3           ("Counter-Terrorists Win")

换成你自己的音频只要保持同名覆盖即可，然后重新 `npm run package` 打包。
（UI 提示音——启动/暂停/重置/切换/选时长——是 Web Audio 实时合成的，不走文件。）
