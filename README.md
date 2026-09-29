# Tiled Window Fix

Keeps Spotify's now-playing bar on screen when the window is small, like in Hyprland or another tiling window manager.

Spotify sets a minimum window size of 800x600. If your tiling layout gives it less height than that, Spotify still draws at 600px and the now-playing bar at the bottom gets cut off. This extension removes that minimum, so the main view shrinks and the bar stays visible.

## Before / after

![Before](before.png)

![After](after.png)

## Install

### Spicetify Marketplace

1. Open the Marketplace tab in Spotify.
2. Search for "Tiled Window Fix".
3. Click Install.

### Manual

1. Download `tiled-window-fix.js` from this repo.
2. Copy it into the `Extensions` folder inside the path that `spicetify path userdata` prints.
3. Run `spicetify config extensions tiled-window-fix.js`
4. Run `spicetify apply`
