# AppServer-Dockerfile
🏆   One-key configuration environment of application server based on nodejs and mongodb

> Please download [docker](https://www.docker.com/) first to use this image

## Usage

You can build by yourself like this:
```shell
$ cd AppServer-Dockerfile
$ docker build -t {your images name} -f ./Dockfile .
```
or

Use the Image what author built:

```shell
$ docker run -it --name { your container name } huangwutao/appserver:v1.4
$ docker exec -it { your container name } /bin/bash
```

## Image

This image allows you to easily create an application server environment based on nodejs and mongodb

* Nodejs use v14.18.1
* Mongodb use v5.0.4
* Mongodb follows the container to start automatically
* Mongodb port use 7777
* Preset mongodb users and permissions, refer to /mongodb/user.js for details

## Container

After the container is running, you can use the following command to confirm whether the installation is normal:

```shell
# check the version about node
$ node -v
v14.18.1
# check the version about npm
$ npm -v
6.14.15
# check mongo users and permissions
$ mongo --port=7777
> use myapp
> db.auth('dev', '1q2w3e4r')
1
```