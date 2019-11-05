NPM:
	node package manager，node包的管理工具。
	
初始化
① npm init : 引导式创建package.json文件
② npm init -y : 快速初始化
	
查看全局安装过的模块
npm list -g --depth 0

查看需要更新的全局包
npm outdated -g --depth=0

查看模块全部版本
npm view xxx versions

安装模块
① npm install xxx : 安装xxx模块到当前的命令行所在目录
② npm install -g xxx : 安装全局模块xxx
③ npm install xxx@1.0.0 : 安装模块xxx指定版本
说明：
	1）install 可以简写为 i ?
	2）全局标识 -g 是写在模块前还是后？

本地安装时将模块写入package.json中
① npm install xxx : 安装但不写入package.json
② npm install xxx -save : 安装并写入package.json的 “dependencies”中
③ npm install xxx -save-dev : 安装并写入package.json的“devDependencies”中
说明：
	1） --save 可以简写 -S；
	2） node版本在5.0或者5.0之上，可以不用写 -S，如果低于5.0需要加上 -S 才会保存到package.json中
	
删除模块
① npm uninstall xxx : 删除xxx模块
② npm uninstall -g xxx : 删除全局模块

清空缓存
npm cache clean --force : 清空缓存

获取全局npm安装目录
npm config get prefix

设置代理
npm config set proxy http://server:port
npm config set registry 'http://registry.npmjs.org'

代理用户名和密码
npm config set proxy http://username:password@server:port
npm config set https-proxy http://username:password@server:port

取消代理
① npm config delete proxy
② npm config rm proxy

获取代理

设置registry的几种方法
① 临时使用
npm --registry https://registry.npm.taobao.org install express
② 持久使用
npm config set registry https://registry.npm.taobao.org
备注：
	配置成功后可以通过下面方式来验证是否成功：
	1）npm config get registry 
	2）npm info express
③ 通过cnpm使用
npm install -g cnpm --registry=https://registry.npm.taobao.org	



配置npm的内网代理
npm config rm proxy
npm config rm http-proxy
npm config rm https-proxy
npm config set no-proxy .huawei.com
npm config set registry http://cmc-cd-mirror.rnd.huawei.com/npm
