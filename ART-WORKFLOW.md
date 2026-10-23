# Art and animation update

## Research and selection

Mobile-game engines and art tools solve different problems. Unity's art guidance discusses triangle counts, textures, and asset optimization; changing the engine does not replace an unfinished model. This project keeps its GitHub Pages-compatible Three.js runtime.

- **Blender — used.** Free, open-source modeling and animation software. Blender 4.5.9 LTS was run locally to fuse the giant's blockout into continuous surfaces, relax the joins, reduce the mesh for browser/mobile use, and export skin weights. The source is saved alongside this note as `traveler-sculpt.blend`. The resulting character has 43,490 triangles across clothing, head, hair, boots, and hands. This is an agent-authored stylized model, not a claim of human authorship or photorealism.
- **Poly Haven — used.** The artist-created Forest Floor diffuse and normal textures are CC0. Both are bundled locally at 1024 pixels and compressed for the game. Individual leaf geometry replaces the previous large canopy blobs.
- **Mixamo — reviewed, not used.** Adobe provides free humanoid rigging and royalty-free animation with an Adobe ID. No account or login was created. Its stock motions were not used for the giant's sleep behavior.
- **Quaternius — reviewed, not used.** The Universal Base Characters pack provides CC0 game-ready humanoid models. A new clothed traveler was built for this game instead of importing an unrelated character.

## Motion changes

Most pokes now produce no visible body reaction. An eligible poke has a 12% chance of starting a subtle response, with an 18–30 second cooldown; 70% of those responses are breathing adjustments, 24% are a small foot movement, and only 6% are a face brush. Repeated clicking does not restart the reaction. Material, coin, and wake-meter rules stay intact.

The full roll now takes eight seconds. Knees bend first, arms tuck inward, shoulders lead the pelvis, and the body settles into the new position. Skin deformation blends the joints rather than rotating an entirely rigid figure. The existing alternating roll/reset and startled sit-up behavior is retained.

## Validation and limits

Checked skin weights and geometry indices, roll continuity/endpoints, the shoulder/hip delay, reaction cooldowns, village reset/preservation, clothing ownership, gathering rewards, and worker routes. Browser review is used to check the actual appearance and poses. Phone-sized browser testing is not a substitute for performance testing on physical Android and iPhone devices. This remains stylized game art.

## Primary sources

- Blender: https://www.blender.org/about/
- Blender animation and rigging: https://www.blender.org/features/animation/
- Unity mobile art guidance: https://unity.com/how-to/mobile-game-optimization-tips-part-1
- Poly Haven asset license: https://polyhaven.com/license
- Forest Floor asset: https://polyhaven.com/a/forest_floor
- Adobe Mixamo FAQ: https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html
- Quaternius base characters: https://quaternius.com/packs/universalbasecharacters.html
