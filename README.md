# 我为什么要开启这个项目

Angular2是强大的，而且变得更加简单。Angular2最核心的概念只剩下了Component，其它都是辅助。但是，在真正的项目中，只有Angular2内核是不够的，因为Angular2并没有提供开箱即用的组件库。这就导致不同企业的每一个开发团队都需要去积累、维护自己的组件库，从长远来看，这是非常浪费的。

所以，我启动了这个项目，核心目的就是积累、封装、维护一套基于Angular2的开源组件库，把这些组件以一个管理系统雏形的方式展现出来。

# 此项目的具体内容

纵观当前市面上成熟的前端组件库，例如Extjs(Sench)与jQueryUI(包括EasyUI、Kissy等)，它们集成的UI组件数量都非常多。Extjs有250多个，EasyUI也有将近100个。在这些UI组件中，有一些是必备的，例如：Grid/Tree/DateTimePicker/FormUtil/FormValidation/NavBar等。

所以，我打算在这个项目中为大家封装并维护好这些日常开发中必备的组件。

  - 集成Material Design，为每一个UI组件提供外观。

  - 优先封装下列UI组件：Grid/Tree/DateTimePicker/FormUtil/FormValidation/NavBar。

  - 在提供的UI组件基础上，提供两个典型的项目实例：面向大众用户的门户型系统、面向行业应用的后台管理系统。我打算把这两个案例做得尽量完整，而不像很多seed项目或者TodoList那样简单，因为在真实的项目中，这种简单的TodoList压根没有什么参考价值。

## 用法

	git clone https://github.com/damoqiongqiu/angular-material2-demo1.git

	npm install

	npm install -g angular-cli

	cd angular-material2-demo1

	ng serve

打开浏览器访问http://localhost:4200/

如果能看到界面，说明成功，报一些小错误是正常的，因为官方还在开发中。

# 注意

Angular官方核心团队也在跟进Material Design相关的内容，我这里会与他们定期同步，注意，不是实时同步，我可能一个月同步修改一次。


# 开源许可证
该项目，包括后面会陆续做好的实例项目都采用MIT许可证，你可以任意修改、分发、商用，不用预先告知我。但是，请注意，因为个人精力所限，我不会为你们提供具体业务实现。


# Why I started this project

Angular2 is powerful,and becoming much more simple.The core concept of Angular2 is Component,other features are nothing more than utils.But,in the development in real world,core features of Angualr2 are not enough,because Angular2 did NOT provide UI components out of box.So,the dev teams in different companies have to collect and maintain their own components,this will waste a lot of money in a long term.

So,I started this project,the core purpose is collect,encapsulate,and maintain a set of components of Angular2,and all these components are open source.

# The specific content of this project

Throughout the most popular front-end frameworks on the market,such as Extjs(Sencha)and jQueryUI(including EasyUI,Kissy and so on),they integrated a lot of UI components.Extjs has more than 250 components and EasyUI has about 100.Among these components,some of them are necessary during daily work,such as Grid/Tree/DateTimePicker/FormUtil/FormValidation/NavBar and so on.

So, I am going to collect and maintain these components for you in this porject.

  - Integrate BootStrap and Material Design,provide the appearance for each component.

  - These coponents will come first:Grid/Tree/DateTimePicker/FormUtil/FormValidation/NavBar.

  - I will provide two demo projects base on these components,one for the public use and the other for the management system.I will implement these two demo as complete as possible,they will not as simple as those seed projects or TodoList projects.In real world development,these TodoList projects have no reference value at all.

## Usage

	git clone https://github.com/damoqiongqiu/angular-material2-demo1.git

	npm install
	
	npm install -g angular-cli

	cd angular-material2-demo1

	ng serve

Open your browser and navigate to http://localhost:4200/

If you can see the page,that means app works,there might be some errors,it's not a problem.

# Note
The core team of Angular is using Material Design too,I will sync this project with them.Please Note that,I will sync with the core team once a month,but not realtime sync.

# License
This project,include the coming demo projects are under MIT license ,you can modify,distribute,or use them for commercial purpose,you need NOT inform me first.Note that I will NOT provide customized development for your specific business logics,because my energy is limited.
