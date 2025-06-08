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

## GitHub Pages Setup

1. Push this code to your repository
2. Go to repository Settings → Pages
3. Set source to "Deploy from a branch"
4. Select the branch containing this website
5. Set folder to `/AnchorWebsite` if using a subdirectory
6. Configure your custom domain to point to `dropanchor.app`
