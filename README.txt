MAKE SURE YOU HAVE A github.com account before attempting the following
install git bash from https://git-scm.com/downloads for windows
while installing dont change any option, let the defaults stay as they are
create a folder anywhere
open the folder in explorer
right click in the folder anywhere
select 'Git Bash here' from the context menu
once the console opens type the following
git init
after that type this
git clone https://github.com/aritrac/angular-cli-kendo.git
after that type
cd angular-cli-kendo to enter into the directory created by cloning
after that type the following one by one [NOTE: If git bash is slow, then download windows powershell and then cd to the same directory and run the 
following commands. You will get a visual indication of the installation process]
npm install
npm install --save @progress/kendo-ui
npm install --save kendo-ui-core
npm install --save @progress/kendo-angular-dropdowns @progress/kendo-angular-l10n @angular/animations
npm start

Once started, goto http://localhost:4200 to view the app in browser