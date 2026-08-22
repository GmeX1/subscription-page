## Femur Breaker subscription page

A fork of [remnawave/subscription-page](https://github.com/remnawave/subscription-page), tracking
upstream and adding a green theme plus a support block. Upstream's own README follows below.

### Differences from upstream

**Green accent.** The theme is anchored on the logo green **`#27c32d`** -- HSL 122&deg;, 67%, 46%,
a pure green. Upstream ships a blue accent; here the whole palette runs at hue 122 with `#27c32d`
as shade 5 and `#1da524` (shade 6) as the primary. Dark neutrals and the page background are tinted
to the same hue, and the header mark and favicons use the FB monogram.

The palette lives in `frontend/src/shared/constants/theme/theme.ts` under the key **`green`**. It
replaces Mantine's default green rather than sitting beside it, so the theme has exactly one green
and nothing renders two near-identical greens next to each other. Mantine's provider overrides all
17 `--mantine-color-green-*` variables at runtime, including the derived `-filled` / `-light` /
`-outline` ones, so the built-in default never shows through.

Shade lightness is tuned so `autoContrast` keeps white text on filled controls (shade 6 sits below
the 0.3 luminance threshold) and so the QR code stays legible on the dark background.

> Colours in the subscription page config are separate from the theme. Timeline and step icons take
> their colour from `svgIconColor`, which the config schema only accepts as a hex value or one of
> Mantine's 14 built-in names -- a custom palette key is rejected. So the accent hex is duplicated
> there and **the config must be recoloured by hand whenever the accent changes**, otherwise those
> icons keep the old tint while the rest of the page moves.

**Panel colour markup in the brand title.** The panel lets you colour parts of a text field with
`{colour}` tokens -- `{white}Femur {#27c32d}Breaker` gives a white first word and a green second
one. Upstream renders the title as plain text, so those tokens show up literally; here they are
parsed (`shared/utils/config-parser/text-color-markup.util.ts`).

A token recolours everything after it until the next token or the end of the string, and text
before the first token keeps the colour of the heading. A title with no tokens is a single
uncoloured segment, so it still inherits the accent exactly as before. Token values are validated
as colours -- a hex (3/4/6/8 digits) or a single keyword -- so nothing else can reach the inline
`style`. Note that `{green}` is the CSS keyword, a dark `#008000`; use `{#27c32d}` for the accent.

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
