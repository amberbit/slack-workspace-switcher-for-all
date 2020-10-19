# Slack Workspace Switcher For All

This is a Chrome extension, which enables workspace switcher for browser app (similar to Chrome OS / desktop apps)

The extension works by spoofing `navigator.userAgent` in a way that Slack thinks we are using ChromeOS. This triggers loading of the workspace switcher to the left sidebar.

Installation:

1. Clone/download contents of this repository and unzip the package if you downloaded zip.

2. Enable developer mode in Chrome. Go to Settings -> Extensions -> toggle Developer mode in right top corner.

3. Click "Load unpacked", find the folder where you unzipped/cloned the extension, click OK.

4. Open new tab with Slack. If you are signed into multiple workspaces, icon for each workspace should be now available in left sidebar. 
