# Getting Started With RestCustomer

### Requirement 
For easy configuration I recommend downloading and installing following.
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Scotch Box](https://box.scotch.io/) 
	1. open command prompt
	2. run this command - `cd Desktop`
	3. run this command - `git devenv https://github.com/scotch-io/scotch-box.git my-project` 
- [Vagrant](https://www.vagrantup.com/downloads.html)
- [Virtual Box](https://www.virtualbox.org/wiki/Downloads)

### Remove the git floder
remove the git folder in devenv so it does not confilct with your project repo

#### For Windows - Run Following commads in you your command prompt 
1. go to your project folder in command prompt -  example `cd C:/Users/wasan/Desktop/devenv`
2. run this command - `del /F /D /Q /A .git`
3. run this command - `rmdir .git`

#### For Mac - Run Following commad in you your command prompt
- run this command - `git rm -rf .git`

### Start Your Virtual Server
1. go to server(devenv) folder in command prompt 
	- Windows : example `cd C:\Users\wasan\Desktop\devenv`
	- MacOS	  : example `cd ~/desktop/devenv`
2. check to see if vagrant is installed - `vagrant -v` or `vagrant -version`
3. to fire up the server - `vagrant up`
4. wait for box to be complete.

### Intial Setup For RestCustomer Inside The Scotchbox
1. go to server(devenv/public) folder in command prompt
	- Windows : example `cd C:\Users\wasan\Desktop\devenv\public`
	- MacOS	  : example `cd ~/desktop/devenv/public`
2. clone to restcustomer to your computer - `git clone https://github.com/devtye/restcustomer.git`
3. go back to root folder - `cd ..`
4. logging into the vagrant virtual server - `vagrant ssh`
5. locating restcusomer in virtual server - `cd /var/www/public/restcustomer`
6. installing dependencies by composer and bower
	1. `composer install`
	2. `bower install`
7. logout from vagrant - `logout`

### Intial Database setup
1. go to server(devenv) folder in command prompt
	- Windows : example `cd C:\Users\wasan\Desktop\devenv\`
	- MacOS	  : example `cd ~/desktop/devenv/public`
2. login to your virtual server - `vagrant ssh`
3. locate sql/customer in virtual server
	- run command - `cd /var/www/public/restcustomer/sql`
4. import your sql statment that this saved on `sql/customer.sql`
	- run command -  `mysql -u root -p scotchbox < customer.sql`
	- password -  `root`
5. verify if the data is loaded go to url
	- [ Data http://192.168.33.10/restcustomer/app/api/customers](http://192.168.33.10/restcustomer/app/api/customers)
	- [ UI http://192.168.33.10/restcustomer/client](http://192.168.33.10/restcustomer/client)

## Basic Vagrant controls
- start sever - `vagrant up`
- reload sever - `vagrant reload`
- login to server - `vagrant ssh`
- logout of vagrant - `logout`
- stop vagrant - `vagrant halt`
- destroy vagrant (kills the instance, will need set up database again) - `vagrant destroy`








