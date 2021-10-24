# week 03
這次練習 [The Odin Project 的官網](https://www.theodinproject.com/home)，一樣是底先用 Grid 拉格子，之後內部再用 Flex 排版。
## 參考範例以及練習成果
1. 成品參考：https://www.theodinproject.com/home
2. 參考大神：https://github.com/Zakarya-Mks/sassy-grid

後來仔細看一下大神的 SCSS，發現他有先認真寫基礎設定（比方來說重新設定每個標籤的預設大小及 padding 等等），下次我練習也要逼自己這樣子先設定，因為一直右鍵看 CSS 設定其實也是蠻花時間的，一開始先寫好之後要微調再寫 CSS，這樣子應該會省下一些時間。

## 學到了什麼？
### 1. flex combo 達成版面分割 + `li` 空間平分
一開始還想要自己把 `li` 的 `margin` 寫死，但是後來看官網的 CSS 代碼竟然是用 flex combo 做完的。
- 外層 `display: flex`
- 裡面按照比例分大小 `flex: 比例`
- `ul` 也 `display: flex` 但 + `jutify-content: space-between / space-around` 就可以確保每個 `li` 的間距都相同了。


[範例](https://codepen.io/lun0223/pen/YzxNajW)

### 2. 輕鬆 2 x 2 => 1 x 4 的排法
在視窗比較大的時候希望是橫的，但是在小的時候希望是直的，所以用 `flex-direction: column`, `flex-wrap: nowrap`(確保不換行), `max-width: 看要多少` 及 `margin: 0 auto` 就可以推到置中了。

[範例](https://codepen.io/lun0223/pen/RwZKMvp)

## 時程
2021/10/23 2.5 小時
2021/10/24 2.5 小時
=> 合計 5 小時
