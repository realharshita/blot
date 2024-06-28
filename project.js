const max_x = 723;
const max_y = 194;
setDocDimensions(max_x,max_y);



const t = new bt.Turtle()
t.left(90)
t.forward(88)
t.right(90)
t.forward(101)
t.right(180)
t.forward(101)
t.right(90+25)
t.forward(19.313)
t.right(60)
t.forward(146.812)
t.right(5)
t.forward(570)
t.left(165)
t.forward(255.707)
t.left(15)
t.forward(90)
t.left(30)
t.forward(132.938)
t.right(30)
t.forward(45)
t.right(90+65)
t.forward(180)
t.right(25)
t.forward(142)
t.right(21.5)
t.forward(207)
t.right(90+68.5)
t.forward(263)
t.forward(94)
t.right(104)
t.forward(66)
t.right(180)
t.forward(66)
t.left(104)
t.forward(94)
t.left(180)
t.right(90)
t.forward(66)
t.right(180)
t.forward(66+39)
t.left(90)
t.forward(35)
t.right(180)
t.forward(35)
t.forward(192)
t.forward(64)
t.right(180)
t.forward(64)
t.right(180)
t.right(90)
t.forward(38)
t.right(180)
t.forward(38)
t.forward(43)
t.left(90)
t.forward(169)
t.left(62)
t.forward(49)
t.left(28)
t.forward(39)
t.right(90)
t.forward(262)
t.right(90+45)
t.forward(68.095)
t.right(15)
t.forward(88)


t.right(45)
t.forward(61) //centre
let angle = 0
const radius = 61
while(angle!=360){
  angle = angle + 1
  t.right(angle)
  t.forward(radius)
  t.right(180)
  t.forward(radius)
  t.right(180)
}
t.forward(61)




drawLines(t.lines())