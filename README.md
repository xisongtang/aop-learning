# 1.0.4
- A同学每天上下班（A面向过程的代码也需要在很多地方复用）都需要手动换很麻烦，于是他重新设计（**继承和重载**）了一辆车；

# 1.0.3
- A同学也想复用蟋蟀的车，但是他上班的地方中间有一段雪地，普通轮胎无法过去，所以需要在路过的时候动态的换成带有铁链的轮胎。
使用了**setter**函数来动态的注入依赖

# 1.0.2
- 同学知道蟋蟀组装的车之后都希望蟋蟀也能为自己组装一台，不过每个同学都有自己的想法，比如测试同学想要用自己做的活塞组装并且测试一下
1. **依赖倒置原则**，之前蟋蟀自己组装的车直接依赖了自己的轮胎、活塞、引擎的实现。那想要复用车的代码，就需要将依赖的关系反过来，由需要复用的车来声明自己所需要的的部件需要的能力（**interface**）；
2. **注入依赖**，对于使用方，则相当于是将车所需要的依赖动态的注入到类的内部实现中，注入依赖的方式一般有三种，这一步骤中就是constructor这种
    1. constructor;
    2. setter;
    3. 接口动态注册;

# 1.0.1
- 蟋蟀为了自己上班组装了一台自己专用的车

# 1.0.0
- 项目配置