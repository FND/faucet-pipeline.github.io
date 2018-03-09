import { assetURI } from "../../views/util";
import { createElement } from "complate-stream";

let stylesheets = [
	assetURI("bundle.css"),
	assetURI("prism.css"),
	"https://fonts.googleapis.com/css?family=Titillium+Web:400,700"
];
let scripts = [assetURI("prism.js")];

let shortName = "faucet";

export default function DefaultLayout({ title, subtitle, docTitle }, ...children) {
	return <html>
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<meta name="description" content={subtitle} />
			<title>{docTitle}</title>

			{renderStyleSheets(stylesheets)}
		</head>

		<body>
			<header class="site-header">
				<p class="tagline">{subtitle}</p>
				<div class="logo">
					<img src={assetURI("faucet-logotype.png")} alt={shortName} />
				</div>
			</header>

			<div class="grid">
				<aside class="aside">
					<nav class="nav-toc">
						<ul class="nav-toc-list">
							<li><a href="/" class="nav-toc-link nav-toc-link--active">Introduction</a></li>
							<li><a href="/cli" class="nav-toc-link">Command Line Interface</a></li>
							<li><a href="/manifest" class="nav-toc-link">Fingerprinting & Manifest</a></li>
							<li><a href="/watching" class="nav-toc-link">File Watching</a></li>

							<li>Pipelines</li>
							<ul class="nav-toc-list">
								<li><a href="/js" class="nav-toc-link">JavaScript</a></li>
								<li><a href="/typescript" class="nav-toc-link">TypeScript</a></li>
								<li><a href="/sass" class="nav-toc-link">Sass</a></li>
								<li><a href="/static" class="nav-toc-link">Static</a></li>
							</ul>

							<li>Integration</li>
							<ul class="nav-toc-list">
								<li><a href="/rails" class="nav-toc-link">Rails</a></li>
								<li><a href="/spring-boot" class="nav-toc-link">Spring Boot</a></li>
							</ul>

							<li>Contributing</li>
							<ul class="nav-toc-list">
								<li><a href="/contributing" class="nav-toc-link">In General</a></li>
								<li><a href="/build-pipeline" class="nav-toc-link">Build a Pipeline</a></li>
								<li><a href="/build-integration" class="nav-toc-link">Build an Integration</a></li>
							</ul>

							<li><a href="/faq" class="nav-toc-link">Troubleshooting / FAQ</a></li>
							<li><a href="/background" class="nav-toc-link">Background & Sponsors</a></li>
						</ul>
					</nav>
				</aside>

				<main id="main">
					{children}

					{renderScripts(scripts)}
				</main>
			</div>

			<Footer />
		</body>
	</html>;
}

function Footer() {
	return <footer class="site-footer">
		<img src={assetURI("faucet-logotype-monochrome.svg")} alt={shortName} />

		<nav>
			<a href="https://www.npmjs.com/package/faucet-pipeline">
				<img src={assetURI("npm.svg")} alt="npm" />
			</a>

			<a href="https://github.com/faucet-pipeline">
				<img src={assetURI("github.svg")} alt="GitHub" />
			</a>

			<a href="https://www.npmjs.com/package/faucet-pipeline">
				<img src={assetURI("twitter.svg")} alt="Twitter" />
			</a>
		</nav>
	</footer>;
}

function renderScripts(items) {
	return items.map(uri => {
		return <script src={uri} />;
	});
}

function renderStyleSheets(items) {
	return items.map(stylesheet => {
		if(stylesheet.hash) {
			var { uri, hash } = stylesheet; // eslint-disable-line no-var
		} else { // string
			uri = stylesheet;
		}

		/* eslint-disable indent */
		return <link rel="stylesheet" href={uri}
				integrity={hash} crossorigin="anonymous" />;
		/* eslint-enable indent */
	});
}
