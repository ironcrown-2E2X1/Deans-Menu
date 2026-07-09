# Deans-Menu v3
A solution for displaying image files as a slideshow inside a web
browser.  The intended function is to be used as digital display
for restaurant menus, message board, advertisement, etc.


## Usage
This is definitely not ideal from a user perspective.  Because this
code isn't running from an actual webserver, but is instead just
opened in a browser from the filesystem, there are security checks in
place that prevent the use of standard web design practices.

1. Add or update the images in the Content folder

2. The ScheduleBuilder.html should be opened in a browser.  Select
   the path to the image folder you want to use.  Create the needed
   schedule(s).  This will generate the JSON string that must be
   manually pasted into the JavaScript inside the DisplayMenu.html

3. So once you have the JSON string, open DisplayMenu.html in a text
   editor.  Paste the JSON string where it goes.  You'll see it
   from the comments in the code.

4. Save the changes and relaunch the player from the console session.


## Setup
1. Extract the Deans-Menu-main zip to the root of the C drive C:/

2. Follow the steps in the Usage destructions above to setup the
   player with the JSON pointing to the images and their schedules.

3. Run DisplayMenu.html in a browser to preview the results.

4. Create a shortcut with the following target:
   ```
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --app=C:\Deans-Menu-main\DisplayMenu.html
   ```
   and add it to the following directory
   ```
   %appdata%\Microsoft\Windows\Start Menu\Programs\Startup
   ```




