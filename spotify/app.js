const client = new spotify.Client({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    });
    
    const accessToken = await client.getAccessToken();
    
    const request = new spotify.ShowRequest({
    accessToken,
    id: "YOUR_PODCAST_ID",
    });
    
    const show = await client.getShow(request);
    
    const latestEpisode = show.episodes[0];
    
    const iframeUrl = latestEpisode.uri;
    
    const iframe = document.querySelector("iframe");
    iframe.src = iframeUrl;