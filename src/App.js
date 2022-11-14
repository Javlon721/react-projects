import React, { useEffect, useRef, useState } from "react";
import { Block } from "./Block";

function App() {
	const ratesRef = useRef({});
	const [fromCurrency, setFromCurrency] = useState("RUB");
	const [toCurrency, setToCurrency] = useState("USD");
	const [fromPrice, setFromPrice] = useState(0);
	const [toPrice, setToPrice] = useState(1);

	useEffect(() => {
		fetch("https://api.exchangerate.host/latest")
			.then((response) => response.json())
			.then((res) => {
				ratesRef.current = res.rates;
				
				onChangeToPrice(1);
			});
	}, []);

	const onChangeFromPrice = (value) => {
		const price =
			(value / ratesRef.current[fromCurrency]) * ratesRef.current[toCurrency];
		setFromPrice(value);
		setToPrice(Math.round(price));
	};

	const onChangeToPrice = (value) => {
		const price =
			(value / ratesRef.current[toCurrency]) * ratesRef.current[fromCurrency];
		setToPrice(value);
		setFromPrice(Math.round(price));
	};

	useEffect(() => {
		onChangeFromPrice(fromPrice);
	}, [fromCurrency]);

	useEffect(() => {
		onChangeToPrice(toPrice);
	}, [toCurrency]);

	return (
		<div className="wrapper">
			<Block
				value={fromPrice}
				currency={fromCurrency}
				onChangeCurrency={setFromCurrency}
				onChangeValue={onChangeFromPrice}
			/>
			<Block
				value={toPrice}
				currency={toCurrency}
				onChangeCurrency={setToCurrency}
				onChangeValue={onChangeToPrice}
			/>
		</div>
	);
}

export default App;
