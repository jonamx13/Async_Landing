

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCDe08Fs0s0YKJuk5h45csAQ&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4082c25402mshd2cb83743491d41p134405jsndcb3124a55f0',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async() => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                    <a class="block text-gray-400 xl:inline" href="https://youtu.be/${video.id.videoId}" target="_blank">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </a>
                </div>
            </div>
        `).join('')}
        `;
        content.innerHTML = view;
    } catch(err) {
        console.log(err);
    }
})();