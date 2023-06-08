const GOOGLE_API_KEY = "AIzaSyACr70Z5LRnQ89YNcfGNPvIEh7XMkhn6SQ"

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" + GOOGLE_API_KEY;

export const YOUTUBE_AUTO_SUGGESTIONS_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}`;
