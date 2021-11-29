# Week 07

本次練習參考自 [Testimonials grid section](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)

## 練習結果

練習結果網址：https://lunzaizai0223.github.io/layout_practice/week07/

![Screenshot 2021-11-29 at 20-22-58 Frontend Mentor  Challenge Name Here](https://user-images.githubusercontent.com/77038018/143875516-0b492e8d-96d3-4cf7-8ef1-14a6801415d4.png)


## 學到了什麼？

### `display: grid`

順序的排放很靈活，如果想要安排成這樣子的版面：

<img width="1270" alt="螢幕快照 2021-11-29 21 06 42" src="https://user-images.githubusercontent.com/77038018/143873512-2bdea3f5-7306-4c9b-8a0c-b4f5a5e1f4c1.png">

要讓瀏覽器知道那格是佔兩個 rows + 1 個 column（`grid-column: 4/5`, `grid-row: -1/1`）即可。

### `grid-template-rows: repeat(n, min-content)`

會讓每一個 column 按照自己格子內長高度，不會因為該排 rows 有一個 column 有特別多內容而強制讓內容少的格子的高度超高。

沒下 `grid-template-rows: repeat(n, min-content)`

<img width="1280" alt="螢幕快照 2021-11-29 21 20 13" src="https://user-images.githubusercontent.com/77038018/143875247-2a717cc7-c639-4335-b9cc-83eb6c6f1130.png">

有下 

<img width="1280" alt="螢幕快照 2021-11-29 21 21 02" src="https://user-images.githubusercontent.com/77038018/143875358-c7253c7b-b94e-40d9-8659-785123ed7150.png">

可以發現粉紅色及黃色的格子之高度不會因為藍色格子的內容而變成等高。

### `display: grid` 的 RWD 設置

以此例來說要變成這樣子：

![mobile-design](https://user-images.githubusercontent.com/77038018/143874057-cdece56b-c5e2-4b05-9d0c-088b6d219814.jpg)

看起來就要變成 1 x 1 的樣子，這個時候可以在外層容器使用 `grid-template-columns: repeat(auto-fit, minmax(50%, 1fr))` + 每個子元素把 `grid-column: unset` 及 `grid-row: unset`（`unset` 如果父層有對應的屬性就會繼承，如果沒有的話就恢復該屬性的預設值）。`grid-template-columns: repeat(auto-fit, minmax(50%, 1fr))` 會自己計算需要幾格 columns，每個格子不會 < `minmax(最小, 最大)` 也不會 > 最大，藉由這個指令可以讓 grid 變成 1 x 1。

## 參考資料
[Testimonials Grid Section using CSS grid | FrontendMentor challange |](https://www.youtube.com/watch?v=XrcUWxFRUd4)

## 時程

- 2021/11/29 2 小時
- 合計 2 小時
