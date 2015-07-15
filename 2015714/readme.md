#mongodb介绍  
 
#下载地址  

http://mongodb.org  
##mac 的安装方式  
http://brew.sh/  
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  
brew install mongodb  
    
#windows下 安装成服务  


  
#命令行启动
必须先创建文件夹  
mkdir data  
mongod --dbpath ./data  
另开一个命令行窗口 
再去执行客户端连接 mongo 

#mongodb 介绍   
- 分布式的 文件存储 数据库 c++语言编写  
- 开源 稳定 高性能 无模式 文档型(json)  
- 在NOSQL和传统的数据库之间建立一座桥梁 
#mongodb 存储结构 
```
BSON binary json 
{ 
name:'zfpx', 
age:5, 
address:{province:'beijing',city:'beijing'}, 
hobby:['smoking','drinking','eat'] 
} 
```
语法就是javascript语法 
 printjson({name:'zfpx'});

##存储的特点 
- 基本单元是文件(Document)(BSON), 
- 灵活高效，数据以二进制形式保存在硬盘上 
- 支持内嵌的文档对象和数组对象 
- 扩充了大量的JSON不支持的类型 
null  
32位和64位整型  
对象ID 内置 的默认ID对象  
日期 
正则 
javascript代码块  
任意二进制对象 
.....  

##数据库和集合命名规范  
- 不能是空字符串  
- 不能含有\0   
- 最多64个字节  

#mongodb使用  

##创建数据库和文档  
切换到school数据库  
use school;  
插一个文档进去  
db.user.insert({name:'zfpx',age:6});  

##ObjectId
存储在mongodb中的每个document都有一个默认的ID 
名字是固定的就叫_id
可以是任何类型，默认是 ObjectId
55a509f0 3fc942 c8e2 c3b895
4字节的 unix时间戳  
3个字节 的mongodb服务器的机器名  
2个字节 进程ID  
3字节 是随机数开发的计数器生成  

##查看所有的数据库  
show dbs;  

##查看所有的集合  
- db.getCollectionNames()  
- db.collections;  

##查看此库里所有的索引
db.system.indexes.find();

##删除集合中所有的记录
db.user.remove({});

##删除集合
db.user.drop();  

##删除数据库   
db.dropDatabase();  

#如何操作文档
##单条插入
db.school.insert({name:'zfpx',age:6});
##多条插入
 db.school.insert([{name:'zfpx2',age:7},{name:'zfpx3',age:8}]);
##save保存
db.school.save({_id:1,name:'zfpx6',age:66});
如果ID存在，那么更新其它字段，如果ID不存在，那么保存此文档
##删除文档
参数为要删除的文档条件
db.school.remove({name:'zfpx2'});
##根据条件更新整个文档
db.school.update({_id:1},{name:'zfpx7',age:77});
##更新某些字段
 db.school.update({_id:1,name:'zfpx8'},{$set:{age:'99'}});
##删除某些字段
db.school.update({_id:1,name:'zfpx8'},{$unset:{age:'99'}});
##更新或者插入
db.school.update({name:'zfpx8'},{name:'zfpx9',age:6},{upsert:true});
##一次更新多行
db.school.update({age:7},{$set:{age:8}},{multi:true});



