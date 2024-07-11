/** @format */

export interface iImage {
	id: string;
	urls: { regular: string; small: string };
	alt_description: string;
	likes: number;
	user: { name: string };
	followers: string;
}

export interface iImageModal {
	isOpen: boolean;
	url: string;
	description: string;
}
