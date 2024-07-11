/** @format */

import css from "./LoadMoreButton.module.css";
import { iLoadMoreBtn } from "./LoadMoreButton.types";

export default function LoadMoreBtn({ onClick }: iLoadMoreBtn) {
	return (
		<button
			className={css.loadMore}
			type="button"
			onClick={onClick}>
			More photos...
		</button>
	);
}
