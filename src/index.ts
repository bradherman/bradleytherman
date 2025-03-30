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
import {
	type JsonApiResponse,
	base,
	getResourceById,
	getResourcesByType,
} from "./models";

hljs.registerLanguage("json", json);

// Helper function to determine if the request wants HTML
function wantsHtml(request: Request): boolean {
	const accept = request.headers.get("accept");
	return accept?.includes("text/html") || false;
}

// Helper function to render JSON as HTML
function renderJsonAsHtml(jsonData: unknown): string {
	return `<!DOCTYPE html>
<html lang="en" style="width: 100%; height: 100%; background-color: #0d1117;">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Bradley Herman - Resume</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css"/>
	<script type="text/javascript">
		window.onload = function(){
			// Make URLs clickable
			function urlify(text) {
				var urlRegex = RegExp('https?:\/\/[^\\s]+"', 'g');
				return text.replace(urlRegex, function(url) {
					return '<a href="' + url.slice(0, -1) + '" target="_blank" style="color: #58a6ff; text-decoration: none;">' + url.slice(0, -1) + '</a>"';
				});
			}

			// Make internal links clickable
			function linkify(text) {
				var linkRegex = RegExp('"/(\\w+)(?:/(\\w+(?:-\\w+)+))?"', 'g');
				return text.replace(linkRegex, function(match, type, id) {
					const url = id ? "/" + type + "/" + id : "/" + type;
					return '"<a href="' + url + '" style="color: #58a6ff; text-decoration: none;">' + url + '</a>"';
				});
			}

			var content = document.querySelector('code').innerHTML;
			content = urlify(content);
			content = linkify(content);
			document.querySelector('code').innerHTML = content;
		}
	</script>
	<style>
		body {
			margin: 0;
			padding: 20px;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
		}
		pre {
			margin: 0;
			border-radius: 6px;
			overflow: auto;
		}
		a {
			transition: color 0.2s ease;
		}
		a:hover {
			color: #79c0ff !important;
		}
		.container {
			max-width: 1200px;
			margin: 0 auto;
		}
		.header {
			color: #c9d1d9;
			margin-bottom: 20px;
			border-bottom: 1px solid #30363d;
			padding-bottom: 10px;
		}
	</style>
</head>
<body style="width: 100%; height: 100%;">
	<div class="container">
		<div class="header">
			<h1>Bradley Herman - JSON:API Resume</h1>
		</div>
		<pre class="theme-github-dark"><span class="hljs"><code class="language-json">
${hljs.highlight(JSON.stringify(jsonData, null, 2), { language: "json" }).value}
		</code></span></pre>
	</div>
</body>
</html>`;
}

// Helper function to create a response based on content type
function createResponse(data: unknown, wantHtml: boolean): Response {
	if (wantHtml) {
		return new Response(renderJsonAsHtml(data), {
			headers: {
				"content-type": "text/html",
			},
		});
	}

	return new Response(JSON.stringify(data, null, 2), {
		headers: {
			"content-type": "application/json",
		},
	});
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		const wantHtml = wantsHtml(request);
		const today = new Date();

		// Handle root path - return the full resume
		if (request.method === "GET" && url.pathname === "/") {
			return createResponse(base(today), wantHtml);
		}

		// Handle /json path (legacy support)
		if (request.method === "GET" && url.pathname === "/json") {
			return createResponse(base(today), wantHtml);
		}

		// Handle resource type endpoints (e.g., /work, /education, etc.)
		const typeMatch = url.pathname.match(/^\/([a-zA-Z-]+)$/);
		if (request.method === "GET" && typeMatch) {
			const type = typeMatch[1];

			// Special case for personal-info
			if (type === "personal-info") {
				const resource = getResourceById(
					"personal-info",
					"personal-info-1",
					today,
				);
				if (resource) {
					const response: JsonApiResponse = {
						data: resource,
						links: {
							self: url.pathname,
						},
					};
					return createResponse(response, wantHtml);
				}
			}

			// Handle work endpoint
			if (type === "work") {
				const resources = getResourcesByType("work-experience", today);
				if (resources.length > 0) {
					const response: JsonApiResponse = {
						data: resources,
						links: {
							self: url.pathname,
						},
					};
					return createResponse(response, wantHtml);
				}
			}

			// Handle other resource types
			// Convert plural to singular if needed
			const singularType = type.endsWith("s") ? type.slice(0, -1) : type;
			const resources = getResourcesByType(singularType, today);
			if (resources.length > 0) {
				const response: JsonApiResponse = {
					data: resources,
					links: {
						self: url.pathname,
					},
				};
				return createResponse(response, wantHtml);
			}
		}

		// Handle specific resource endpoints (e.g., /work/work-release-0)
		const resourceMatch = url.pathname.match(
			/^\/([a-zA-Z-]+)\/([a-zA-Z0-9-]+)$/,
		);
		if (request.method === "GET" && resourceMatch) {
			const type = resourceMatch[1];
			const id = resourceMatch[2];

			// Special case for work resources
			if (type === "work") {
				const resource = getResourceById("work-experience", id, today);
				if (resource) {
					const response: JsonApiResponse = {
						data: resource,
						links: {
							self: url.pathname,
						},
					};
					return createResponse(response, wantHtml);
				}
			} else {
				// Convert plural to singular if needed
				const singularType = type.endsWith("s") ? type.slice(0, -1) : type;
				const resource = getResourceById(singularType, id, today);
				if (resource) {
					const response: JsonApiResponse = {
						data: resource,
						links: {
							self: url.pathname,
						},
					};
					return createResponse(response, wantHtml);
				}
			}
		}

		// If no route matches, return 404
		return new Response(
			wantHtml
				? `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Not Found</title>
	<style>
		body {
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
			background-color: #0d1117;
			color: #c9d1d9;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			margin: 0;
		}
		.error-container {
			text-align: center;
			padding: 2rem;
			border: 1px solid #30363d;
			border-radius: 6px;
			background-color: #161b22;
		}
		h1 { margin-top: 0; }
		a { color: #58a6ff; text-decoration: none; }
		a:hover { text-decoration: underline; }
	</style>
</head>
<body>
	<div class="error-container">
		<h1>404 - Not Found</h1>
		<p>The requested resource could not be found.</p>
		<p><a href="/">Return to homepage</a></p>
	</div>
</body>
</html>`
				: JSON.stringify(
						{
							errors: [
								{
									status: "404",
									title: "Not Found",
									detail: "The requested resource could not be found.",
								},
							],
						},
						null,
						2,
					),
			{
				status: 404,
				headers: {
					"content-type": wantHtml ? "text/html" : "application/json",
				},
			},
		);
	},
} satisfies ExportedHandler<Env>;
