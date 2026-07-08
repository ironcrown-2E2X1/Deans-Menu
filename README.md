# Deans-Menu

This is definitely not ideal from a user perspective.  Because this
code isn't running from an actual webserver, but is instead just
opened in a browser from the filesystem, there are security checks in
place that prevent the use of standard practices.

1. The ScheduleBuilder.html should be opened in a browser.  Select
   the path to the image folder you want to use.  Create the needed
   schedule(s).  This will generate the JSON string that must be
   manually pasted into the JavaScript inside the DisplayMenu.html

2. So once you have the JSON string, open DisplayMenu.html in a text
   editor.  Paste the JSON string where it goes.  You'll see it
   from the comments in the code.

3. Save the changes and relaunch the player from the console session.

## ToDO List
Needs some CSS or something to have the images fit nicely inside the
browser window.