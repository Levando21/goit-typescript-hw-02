/** @format */
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImagesApi, ImageData } from "../../api";
import toast from "react-hot-toast";
function App() {
	const [searchImage, setSearchImage] = useState<string>("");
	const [images, setImages] = useState<iImage[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);

	const handleSearch = (newImage: string) => {
		setSearchImage(newImage);
		setPage(1);
		setImages([]);
	};
	return (
		<>
			<SearchBar onSearch={handleSearch} />
		</>
	);
}
export default App;
