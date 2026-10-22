# Please Don't Wake the Giant

3D woodland campsite prototype. The giant sleeps on a sleeping bag, reacts slowly to pokes, and carries a flea-sized village directly on his coat. Works on GitHub Pages without a build step or installation.

## Upload to GitHub

1. Open the GitHub repository you want to use for this new game.
2. Choose **Add file → Upload files**.
3. Upload `index.html`, `style.css`, `game.js`, `wardrobe.js`, and `world3d.js` together into the repository's main folder. Include `THREE-LICENSE.txt` too. Upload the extracted files, not the ZIP itself. Replace the existing files when updating. All files sit together; no special folders are needed.
4. Commit the upload.
5. In **Settings → Pages**, choose **Deploy from a branch**, select your branch (usually `main`), select **/ (root)**, and save.
6. Open the website address GitHub shows once deployment finishes.

If Pages is already configured for that branch and folder, uploading the files updates the game automatically. Use a new repository if you want to keep your previous game intact.

## Play

- Drag with a mouse or finger to rotate the giant 360 degrees, including his back, sides, and the back of his head. Drag up/down to look from above or below.
- Use **Rotate / Move** to switch between orbiting and panning. Mouse users can also right-drag or Shift-drag to pan. Two fingers pan and pinch to zoom.
- Scroll or pinch to zoom from the entire giant down to his village. **Village view**, **Giant’s face**, and **Meet crew** move the camera to useful close-ups. The home icon returns to the village.
- Every 6 pokes earns 1 coin. The clothing shop has 48 choices across worker and giant hats, shirts/coats, and pants. Hats have different 3D shapes; shirts include plaid, stripes, rainwear, and winter clothing. Use the Giant / Workers tabs to browse.
- A purchase equips the item immediately; owned items can be worn again for free. Worker clothing applies to the whole crew. Coins, clothing, and partial progress toward the next reward are saved with your village. Previous saves and owned items carry over at the same website address in the same browser.
- Every **2 pokes gives 1 thread, 1 twig, and 1 seed**. The first poke advances the counter; the second awards the supplies. Every **3 pokes adds 1% wake-up**, and every **6 pokes gives 1 coin**. The button and tapping the giant follow the same rules. Dragging and pinching never count as pokes.
- Tap a building or its card to build or upgrade it.
- Thread mills and twig workshops create noise. Hush the village to reduce noise while production slows.
- At maximum noise, wake-ups alternate: first he rolls onto another side and the village restarts with its original cottage and starter supplies; next he sits up, opens his eyes, rubs them, and lies down again without resetting the village. Coins and purchased clothing survive both events. Building and gathering pause during the wake animation.
- Progress saves in this browser on this device. Up to four hours of offline production are awarded on return. Private browsing, clearing browser data, or switching website addresses may remove or separate saves.
- Sound is optional and starts off.

This is a browser prototype, not an Android app package. The giant, workers, clothing, and village are real 3D meshes rendered with bundled Three.js (MIT license included). A browser with WebGL / graphics acceleration is required. No external 3D assets or CDN requests are needed while playing. Google Fonts are optional; built-in fonts are used when unavailable.

