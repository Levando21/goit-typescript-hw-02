/** @format */

import axios from "axios";

const ACCESS_KEY = "fluBw_2FLnShYVPGvaZQIlXP-iK4rxdXZ8RRIxslK9Y";
axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function getImages(searchImage: string, page: number) {
	try {
		const params = {
			client_id: ACCESS_KEY,
			query: searchImage,
			page,
			per_page: 12,
		};

		const response = await axios.get("/search/photos", { params });

		return response.data;
	} catch (error) {
		console.error("Error fetching images from Unsplash:", error);
		throw error;
	}
}
