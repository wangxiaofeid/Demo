#!/bin/bash
# 静态变量
host="admin@10.60.17.158"
fileName="bifrost-resource"
folder="/home/admin"
# 服务器文件打包
ssh $host "
    tar -zcvf $fileName.tar $fileName;
"
# 服务器文件下载
scp $host:$folder/$fileName.tar ./files
echo "下载服务器安装包成功"
open ./files
