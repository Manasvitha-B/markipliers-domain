<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the three fan-site pages as TanStack leaf routes using shared site-shell and video-card components, so navigation and media presentation remain consistent.
- Keep curated video records in a browser-safe data module and form validation in a shared Zod schema; the community form remains demo-only until a persistence service is requested.
- Label AI-edited creator portraits as fan art in accessible descriptions and keep real video thumbnails sourced from their linked videos.
- Render every outbound link with the shared ExternalLink component (real anchor, target="_blank", explicit new-tab request) so external pages such as YouTube are never loaded inside this site.
