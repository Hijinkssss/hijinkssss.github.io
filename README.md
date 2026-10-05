# Hijinks · Helldivers 2 mod hub

A static, self-contained website for public mods and Steam guides. No build step, package manager, framework, server-side code, tracking, or live GitHub API dependency.

## Deploy in a few minutes

1. Create a public GitHub repository named **`hijinkssss.github.io`** under **Hijinkssss**.
2. Put the **contents of this folder** at the repository root. `index.html` must be at the root, not inside an extra `hijinks-hd2-hub` folder. Include the empty `.nojekyll` file.
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, select **main** and **/(root)**, and save.
4. Open the site URL shown in Pages when deployment finishes: `https://hijinkssss.github.io/`.

For an existing repository with a different name, all site assets and ordinary page links use relative paths and work under `/repository-name/`. Set the return-home link in `404.html` to `/repository-name/` for its error page. Do not replace an existing account homepage without reviewing its contents first.

Alternative: the included `.github/workflows/pages.yml` deploys the site when you choose **GitHub Actions** as the Pages source. Use one publishing method. The workflow explicitly uploads only public website files, excluding this README and maintenance documentation.

GitHub's official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Preview locally

Open `index.html` directly for an offline preview. For a closer match to hosting, run `python -m http.server 8000` in this directory and visit `http://localhost:8000`. Clipboard support may be limited when opened as a local file; the UI provides a manual-copy fallback.

## Edit content

Edit **`assets/js/site-data.js`** to update projects, packaged downloads, release notes, dates, and guide links. These are curated release snapshots; publishing a new mod version does not automatically change the site. The primary download and version label always come from the same project object.

See [CONTENT.md](docs/CONTENT.md) for new projects and screenshots, [DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) for reusable visual rules, and [CREDITS.md](docs/CREDITS.md) for asset provenance. All maintenance docs describe public content only.

Do not put private projects, research reports, draft release notes, credentials, or private source in the website repository. Separate private drafts supplied alongside this folder are deliberately excluded from this site and its ZIP.

## Included

- Responsive home page, mod search, category filters, Steam guide cards, and release summaries.
- Project details at `project.html?id=faa` and `project.html?id=expanded-tips`.
- Installation manual, requirements, FAQs, project media viewer, copyable filenames, changelog filters, and a 404 page.
- Verified public GitHub releases, exact packaged ZIP links, project-specific Nexus listings, and the creator profile.
- Local project artwork and reference-derived background. No external font or media requests.
- Keyboard focus styles, skip links, accessible menu, native media dialog, reduced-motion support, and basic no-JavaScript download links.

Public links and release snapshots were checked on **October 5, 2026**. FAA's GitHub release is v1.1.0; older README/Nexus snapshots may show earlier versions. Compatibility is release-specific, not a promise that every future game build works.
