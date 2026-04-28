const getUrlPage = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const p = urlParams.get("page")
	return p ? p : "home"
}

const loadPage = async () => {

	let pageUrl = getUrlPage()
	document.body.className = pageUrl
	document.querySelectorAll("nav div").forEach(div => { div.className = "" })
	document.getElementById("link-" + pageUrl).className = "active"

	pageHtml = await fetch(`./pages/${pageUrl}.html`).then(e => e.text())

	document.getElementById("content").innerHTML = pageHtml
	window.scrollTo(0, 0);

	document.querySelectorAll("#content .pageLink").forEach(a => { a.addEventListener("click", evt => clickLink(evt, a.href)) })
	if (document.getElementById("project-files")) { loadProjectPage() }
}

const loadProjectPage = () => {

	const fileWrap = document.getElementById("project-files")

	const createFiles = file => {
		let wrap = document.createElement("div")
		wrap.className = "file"
		wrap.innerHTML = `<div class="file-icon"><img src="../assets/${file.icon}" alt=""></div><div class="file-name">${file.title}</div>`
		fileWrap.appendChild(wrap)

		wrap.onclick = () => { 

			// Load preview
			loadProjectPreview(file) 

			// Make selected
			if (wrap.classList.contains("file-selected")) {
				window.open(file.link, '_blank').focus();
			} else {
				document.querySelectorAll(".file").forEach(f => f.classList.remove("file-selected"))
				wrap.classList.add("file-selected")
			}
		}
	}

	const createHeader = headerName => {
		let header = document.createElement("div")
		header.className = "file-header"
		header.innerText = headerName
		fileWrap.appendChild(header)
	}

	// Create project files
	createHeader("websites")
	websites.forEach(createFiles)
	createHeader("games")
	games.forEach(createFiles)
	createHeader("web tools")
	webtools.forEach(createFiles)
	createHeader("misc")
	projects.forEach(createFiles)

}

const loadProjectPreview = file => {

	const filePreviewWrap = document.getElementById("project-views")

	// Clear preview
	filePreviewWrap.innerHTML = `
	
		<a href="${file.link}" target="_blank">
			<img src="./assets/${file.icon}" class="project-icon">
		</a>

		<div class="project-text">
			<a href="${file.link}" target="_blank"><h1>${file.title}</h1></a>
			${file.description}
		</div>
	
	`

	

}

const clickLink = (event, link) => {
	console.log(link)
	event.preventDefault()
	history.pushState(null, '', link)
	loadPage()
}

document.querySelectorAll(".pageLink").forEach(a => { a.addEventListener("click", evt => clickLink(evt, a.href)) })

loadPage()