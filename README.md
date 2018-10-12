Introduction 
-----------
This is a simple trainer management system that can be used as a reference architecture to build a full-stack application. This system is built with the following technologies:

-   [Spring boot](https://spring.io/projects/spring-boot) for server side web pages and services

-   [ReactJS](https://reactjs.org/) for client side rich user interfaces

-   [MongoDB](https://www.mongodb.com/) for persistant file storage

-   [Docker](https://www.docker.com/) for a standard run-time environment

Prerequisite
-----
Prior to running this application we need to setup our windows environments by following these steps:

Step 1:
Open up a command prompt as an administrator and install the Windows package manager using the following command:
```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```
Step 2:
Using the Windows package manager install virtualbox and docker toolbox using the following commands:
```
choco install -y  virtualbox
choco install -y docker-toolbox -ia /TASKS="desktopicon,modifypath,upgradevm"
```
Step 3:
Close the current command prompt and open the Docker Quickstart Terminal (icon on is on your desktop)


Project Management
---------------
This project used an Agile methodology using the follow example task board: https://trello.com/b/lu4XPoxP/trainer-app

Architecture
---------------
The following diagram shows the high level reference architecture for the application: ![](./cv-back/docs/img/architecture.jpg)

Running the application
-----
Step 1:
Make a directory for your work and clone this project using the following command:
```
mkdir -p ~/projects && cd $_
git clone https://github.com/matt25969/CVProject2 && cd CVProject2
```
Step 2:
Navigate to the root of this project and run the following command.
```
docker-compose up -d --build
```
Step 3:
Access the applicaton by accessing the following URL in the browser
```
http://192.168.99.100:4011/
```
