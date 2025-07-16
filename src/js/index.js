const googleServicesArea = document.querySelector('#serviceLinkAreas');

// change "src" from #googleServiceImage
document.querySelector('#googleServiceImage').src = googleServices.image;
document.querySelector('#googleServiceTitle').textContent = googleServices.title;

if (googleServices.groups?.length > 0) {
	googleServices.groups.forEach((group, index) => {
		if (index !== 0) {
			const hr = document.createElement('hr');
			googleServicesArea.appendChild(hr);
		}

		const container = document.createElement('div');
		container.classList.add('serviceLink');

		group.forEach(service => {
			container.innerHTML += `
				<a href="${service.url}" target="_blank">
					<span class="material-icons-round">${service.icon}</span>
					<p>${service.name}</p>
				</a>
			`;
		});

		googleServicesArea.appendChild(container);
	});
}
