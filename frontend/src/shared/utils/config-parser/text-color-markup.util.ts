/**
 * Panel text colour markup: `{white}Femur {#c92a2a}Breaker`.
 *
 * A `{colour}` token recolours everything after it until the next token or the
 * end of the string. Text before the first token keeps the surrounding colour.
 * The panel writes this markup into plain config strings; without parsing it the
 * tokens render literally.
 *
 * Colours are used verbatim, so `{green}` is the CSS keyword (a dark #008000),
 * not the theme accent -- use `{#27c32d}` for that.
 */

export interface ColoredTextSegment {
    /** `undefined` means "inherit whatever colour the surrounding element uses". */
    color: string | undefined
    text: string
}

const TOKEN = /\{([^{}]+)\}/g

// Anything we hand to `style.color` has to be a colour and nothing else, so that
// a stray `red;background:url(...)` in the config cannot smuggle in extra rules.
const HEX = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i
const KEYWORD = /^[a-z]+$/i

const isColor = (value: string): boolean => HEX.test(value) || KEYWORD.test(value)

/**
 * Splits markup into coloured segments. A string with no tokens yields a single
 * segment with no colour, so callers can render the result unconditionally.
 * Tokens that do not name a colour are left in the text untouched.
 */
export function parseTextColorMarkup(input: string): ColoredTextSegment[] {
    if (!input) return []

    const segments: ColoredTextSegment[] = []
    let color: string | undefined
    let cursor = 0

    for (const match of input.matchAll(TOKEN)) {
        const value = match[1].trim()
        if (!isColor(value)) continue

        const text = input.slice(cursor, match.index)
        if (text) segments.push({ color, text })

        color = value
        cursor = match.index + match[0].length
    }

    const tail = input.slice(cursor)
    if (tail) segments.push({ color, text: tail })

    return segments.length ? segments : [{ color: undefined, text: input }]
}

/** The same string with every colour token removed -- for plain-text contexts. */
export function stripTextColorMarkup(input: string): string {
    return parseTextColorMarkup(input)
        .map((segment) => segment.text)
        .join('')
}

/** Whether the string carries any usable colour token. */
export function hasTextColorMarkup(input: string): boolean {
    return parseTextColorMarkup(input).some((segment) => segment.color !== undefined)
}
