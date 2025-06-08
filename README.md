# Anchor Website

This folder contains the project website for Anchor, designed to be hosted on GitHub Pages.

## Structure

- `index.html` - Main website page
- `_config.yml` - GitHub Pages configuration
- `.well-known/atproto-lexicons/` - AT Protocol lexicon hosting
- `lexicons/` - Source lexicon files

## AT Protocol Lexicon Hosting

The website hosts AT Protocol lexicons at the standard `.well-known` path:

- `https://dropanchor.app/.well-known/atproto-lexicons/app.dropanchor.checkin.json`

This allows the Anchor app to reference its custom lexicon publicly.
