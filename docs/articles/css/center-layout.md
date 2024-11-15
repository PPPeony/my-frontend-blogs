### 居中对齐（3种方法）

#### 1、绝对定位 （absolute）+ transform/margin

```css
position: abosolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

```css
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
```

#### 2、flex布局（justify- content + align-items）

```css
display: flex;
justity-content:center;
align-items: center;
```

#### 3、单行文本（行内元素）line-height+ text-align+vertical-align

```css
height: 30px;
line-height: 30px;
text-align:center;
vertical-align:center;
```

#### 4、translate+js

```css
.parent {
  width:100px;
	height: 100px;
}

.child {
  	width: 40px;
    height: 40px;
    //转换起点是应用转换的点。例如，rotate()函数的转换原点是旋转中心。（这个属性的应用原理是先用这个属性的赋值转换该元素，进行变形，然后再用这个属性的值把元素转换回去）
  	//默认的转换原点是 center
    transform-origin: center;
  	transform: translate('parent.width*0.5-child.width*0.5 parent.height*0.5-child.height*0.5')
}
```

![image-20240724144939179](/Users/yangli/Library/Application Support/typora-user-images/image-20240724144939179.png)