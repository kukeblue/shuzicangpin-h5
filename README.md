# vote_frontend CSS命名规范

项目css命名规范，以及可配置样式清单

## BEN

BEM 的意思是 块(Block)、元素(Element)、修饰符(Modifier)，其基本命名规则就是组件名+元素名+修饰符名

- 块(Block)， 一个块就是一个独立有实际意义的组件或模块，并且每一个块在逻辑和功能上是相互独立的。例如，button,form等。
- 元素(Element)， 它属于块的一部分，没有独立的意义，在语义上要绑定到它的块上。例如，from-item绑定在form块上;form-item-label元素又是绑定在from-item块上的。

- 修饰符(Modifier)，它是块或元素的标志，用来表示它们的外观、行为、或状态。例如button-circle 圆形按钮,button-success成功状态的按钮。

## 在BEN的规范下，本项目会增加以下约束

* BEN的修饰符我们用_下标表示，例如 `block-item_success`、 `block-item_active` 以区分元素和修饰符
* 开头c代表component,表示组件,可能在多个页面用到，所以修改带有c的class，可能会有多个地方组件收到影响
* 开头common表示公用样式，如`common-text`,全局多处会用到该样式

---

## 部署

开发服务器
ssh root@39.108.99.149

线上服务器
主 ：  47.113.95.246         
从  ： 47.115.123.136
要求 ： 安装 nuxt 运行环境
然后下载 代码 到 /alidata1/taopiao 目录下 （下载代码只需在 47.113.95.246 这台进行，已经设置了自动同步。。会自动同步到从服务器）




一 、安装node环境
1.  curl --silent --location https://rpm.nodesource.com/setup_12.x | sudo bash -
2.sudo yum -y install nodejs
3.node -v

二、拷贝代码
git config credential.helper store
1.cd  /alidata1/taopiao;  git clone https://github.com/kukeblue/vote_frontend.git
2.cd vote_frontend; -> npm install yarn -g; -> yarn

三、安装pm2  -> npm install -g pm2

四、启动服务 yarn server








