# 将Vue项目构建并部署到Nginx服务器

## 1. 项目打包

修改两个文件：`vue.config.js`和router`index.js`

```javascript
module.exports = {
  publicPath:'./'
}
```

```javascript
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
```

运行

```shell
npm run build
```



## 2. 部署到nginx服务器

1. 安装nginx

```shell
sudo apt-get install nginx
```



2. 查看nginx运行状态

```shell
sudo systemctl status nginx
```



3. 更改防火墙

```shell
sudo systemctl status nginx
```



4. 将域名指向本机

```shell
sudo vim /etc/hosts
```

> 127.0.0.1 oldyangcloud.cn



5. 重启网络设置（如果本身配有NAT可以忽略）

```shell
sudo /etc/init.d/networking restart
```



6. 创建目录结构

```shell
sudo mkdir -p /var/www/oldyangcloud.cn/public_html
```



7. 将vue打包文件夹`dist`移到/var/www/oldyangcloud.cn/public_html/下

```shell
mv /home/yangjj/dist/ /var/www/oldyangcloud.cn/public_html/
```



8. 创建服务模块

```shell
sudo nano /etc/nginx/sites-available/oldyangcloud.cn
```

> server {
>     listen 80;
>     listen [::]:80;
>     root /var/www/oldyangcloud.cn/public_html/dist/;
>     index index.html;
>     server_name oldyangcloud.cn;
>     access_log /var/log/nginx/oldyangcloud.cn.access.log;
>     error_log /var/log/nginx/oldyangcloud.cn.error.log;
>     location / {
>         try_files $uri $uri/ =404;
>     }
> }

按ctril+X退出，按Y，按ctrl+T，选择文件名，按ENTER



9. 要启用新的服务器块文件，我们需要创建一个从文件到启动站点的符号链接，该目录在启动期间由 nginx 读取

```shell
sudo ln -s /etc/nginx/sites-available/www.namck.com /etc/nginx/sites-enabled/
```



10. 查看nginx 是否正确

```shell
sudo nginx -t
```



11. 重启nginx服务

```shell
sudo systemctl restart nginx
```



