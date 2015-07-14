#mongodb介绍
#下载地址
http://mongodb.org
mac 的安装方式
http://brew.sh/
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
homebrew install mongodb
#安装成服务
mongod --dbpath ./data --logpath ./log --serviceName MongoDB --install
net start MongoDB
net stop MongoDB
sc delete MongoDB
#命令行启动
必须先创建文件夹
mkdir data
mongod --dbpath ./data
另开一个命令行窗口
再去执行客户端连接 mongo

