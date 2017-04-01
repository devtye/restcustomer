# restcustomer - 

## Getting Started

### Requirement 
For easy configuration I recommend downloading and installing following.
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
	- Windows : example `cd C:/Users/wasan/Desktop/devenv`
	- MacOS	  : example `cd ~\desktop\devenv`
2. check to see if vagrant is installed - `vagrant -v` or `vagrant -version`
3. to fire up the server - `vagrant up`
4. wait for box to be completed.

### Setting restustomer insdie the scotch box
1. go to server(devenv/public) folder in command prompt
	- Windows : example `cd C:/Users/wasan/Desktop/devenv/public`
	- MacOS	  : example `cd ~\desktop\devenv\public`
2. go to `git clone https://github.com/devtye/restcustomer.git`






