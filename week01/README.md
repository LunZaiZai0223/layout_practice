# week01
第一次使用 Grid，這次先用 Grid 打底，接下來的容器要修改的話就用 Flex。

## 參考範例以及練習結果

參考範例網址：https://www.newscientist.com/article/2286218-ancient-lake-in-marss-gale-crater-may-have-actually-been-a-small-pond/#top

練習結果網址：https://lunzaizai0223.github.io/layout_practice/week01/

沒有實作 RWD，下一次小細節也要注意 + 先思考 HTML 結構，要不然之後要改很麻煩 QQ

## 學到了什麼？
1. 要實現範例的 hover 到 navbar 中的選單，然後選單底下長出線條，用的是偽元素，如果單純對選單內的元素設定 border-bottom，視覺效果來看元素會突然長高，不好看。
[範例](https://codepen.io/lun0223/pen/YzxPjOX)

![](https://i.imgur.com/OshSWGa.png)
*:hover 生出 border-bottom*
![](https://i.imgur.com/62Sk9rn.png)
*:hover 後偽元素長大，不影響 box model*

2. grid 的使用小知識
如果想要有 sticky 的 header / navbar 的話，記得要把它們寫在「獨立的」grid-column，意即獨立沾滿該 column 的格子，不要在 header 裡面，因為這樣子沒辦法讓 navbar sticky。sticky 會看容器的設定，如果和容器共享 grid-column 它沒有辦法獨立出來 sticky。
Q: 如果在沒設定 grid-template-rows（讓元素自己長出符合內容的高度），不過同一行有另一個元素內容很少，但礙於其他元素內容很多，所以 height 被拉的跟它一樣，要怎麼辦呢？
  ![](https://i.imgur.com/9H6J0cZ.png)
  *如圖，想要讓黃色區域可以擁有自己的高度，不會被藍色帶去*
  ![](https://i.imgur.com/tZUbb8D.png)
  *未解決的樣子，因為沒寫高度的格子，所以同一排的高度是由高的決定*
A: 這個時候就在 `grid` 外層容器寫 `align-items: baseline`。
>our grid item’s “max-content size”, or “the smallest size the box could take in that axis while still fitting around its contents”.
>網頁會計算 `grid-items` 的最大內容的大小以及最小內容的大小，並試著維持每個 `grid-items` 保有最適合的「主線軸」。也就是說每個 `grid-items` 的高度 = 自己內容有多少，而且主線軸還會在中間。*ref: [Sticky CSS Grid Items](https://melanie-richards.com/blog/css-grid-sticky/)*

[範例](https://codepen.io/lun0223/pen/ExvadWm)

3. 不要直接在外層將 padding 一次寫死，這樣子會讓子元素的寬度「統一」受到限制，如我這次的作樣一樣，navbar 沒辦法延展整個頁面。
