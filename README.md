## Femur Breaker subscription page

A fork of [remnawave/subscription-page](https://github.com/remnawave/subscription-page), tracking
upstream and adding a green theme plus a support block. Upstream's own README follows below.

### Differences from upstream

**Green accent.** The theme is anchored on the logo green **`#27c32d`** (HSL 122&deg;, 67%, 46%) --
a pure green, *not* emerald. Upstream ships a blue accent; an earlier revision of this fork used
Tailwind Emerald (hue 160&deg;), which read as teal, so the whole palette was rebuilt at hue 122
with `#27c32d` as shade 5. The ramp's lightness matches the one it replaced, so Mantine's
`autoContrast` flips text at the same shades and QR-code contrast is unchanged.

The palette lives in `frontend/src/shared/constants/theme/theme.ts` under the key **`green`** --
it replaces Mantine's default green rather than sitting beside it, so the theme has exactly one
green and nothing renders two near-identical greens next to each other. Dark neutrals and the page
background are tinted to the same hue; the header mark and favicons use the FB monogram.

> Colours in the subscription page config are separate from the theme. Timeline and step icons take
> their colour from `svgIconColor`, which the config schema only accepts as a hex value or one of
> Mantine's 14 built-in names -- a custom palette key is rejected. So the accent hex is duplicated
> there and **the config must be recoloured by hand whenever the accent changes**, otherwise those
> icons keep the old tint while the rest of the page moves.

**Support block.** A card between the subscription info and the installation guide, with up to two
buttons: the panel's `supportUrl`, and a backup cabinet from the `SUPPORT_BACKUP_URL` env var (see
`.env.sample`). Each button is hidden when its source is empty, and the whole block is hidden when
both are.

**Build.** Images are published to GHCR only, as `ghcr.io/gmex1/subscription-page`, and only on a
git tag. A scheduled workflow merges `upstream/main` into `dev` every Monday.

---

## Remnawave Subscription Page

Learn more about Remnawave [here](https://docs.rw/).

# Contributors

Check [open issues](https://github.com/remnawave/subscription-page/issues) to help the progress of this project.

<p align="center">
Thanks to the all contributors who have helped improve Remnawave:
</p>
<p align="center">
<a href="https://github.com/remnawave/subscription-page/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=remnawave/subscription-page" />
</a>
</p>
