export const fetchQuizQuestions = async () => {
	const file = "../quizes.json";
	const data = await (
		await fetch(file, {
			method: "GET",
		})
	).json();
	return data;
};
