/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import { base } from "./models";

hljs.registerLanguage("json", json);

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		if (
			request.method === "GET" &&
			url.pathname === "/" &&
			request.headers.get("accept")?.includes("text/html")
		) {
			return new Response(
				`<!DOCTYPE html>
						<html lang="en" style="width: 100%; height: 100%; background-color: #0d1117;">
						<head>
							<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css"/>
							<script type="text/javascript">
								window.onload = function(){
									function urlify(text) {
										var urlRegex = RegExp('https?:\/\/[^\\s]+"', 'g');
										return text.replace(urlRegex, function(url) {
											return '<a href="' + url + '">' + url + '</a>';
										})
									}
									document.body.innerHTML = urlify(document.body.innerHTML);
								}
							</script>
						</head>
						<body style="width: 100%; height: 100%;">
						<pre class="theme-github-dark"><span class="hljs"><code class="language-json">
${
	hljs.highlight(JSON.stringify(base, null, 2), { language: "json" }).value
}</code></span></pre>
						</body>
						</html>`,
				{
					headers: {
						"content-type": "text/html",
					},
				},
			);
		}

		if (
			(request.method === "GET" && url.pathname === "/json") ||
			(url.pathname === "/" &&
				request.headers.get("accept")?.includes("application/json"))
		) {
			return new Response(
				JSON.stringify(base, null, 2),
				{
					headers: {
						"content-type": "application/json",
					},
				},
			);
		}

		return new Response("Not Found", {
			status: 404,
			headers: {
				"content-type": "text/plain",
			},
		});
	},
} satisfies ExportedHandler<Env>;
