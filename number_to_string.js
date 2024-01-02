	function number_to_string(number) {
		try {
			const parts = number.toFixed(2).split('.');
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
			return parts.join(',');
		} catch (e) {
			return e.toString();
		}
	}
