DCStreetHockey.Next
===================

New version of DCStreetHockey focused on mobile-first and the JavaScript stack.  


<img src="https://raw.github.com/DannyDouglass/DCStreetHockey.Next/master/app/images/preview.png" />

Planned features will be tracked at the DCSH User Voice forum: https://dcstreethockey.uservoice.com/.

Please vote to help prioritize the most important features!

##Development Setup

1. Install Node.js 0.10.*   
   Note: Recommended to use Node Version Manager (nvm) to install Node.js: https://github.com/creationix/nvm

2. Install global dependencies:
  
  ```
  npm install -g grunt-cli
  ```
3. Ins tall local repository dependencies:
 
  ```
  npm install
  ```
4. Start the live reload servers (client: 9000, server api: 9001):
  ```
  grunt server
  ```

##Deploy to Heroku
git subtree push --prefix dist heroku master