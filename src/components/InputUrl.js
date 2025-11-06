export default function InputUrl({ url, setUrl, httpRgx }) {
	const handleUrl = e => setUrl(e.target.value),
			handleClearUrl = () => setUrl('');
	
	const handleValidateUrl = () => {
		if(url && !httpRgx.test(url)) {
			setUrl('http://'+url);
		}
	}

	return(
		<div className="relative">
			<label htmlFor="url">Enter your URL</label>
			
			<input
				id="url"
				name="url"
				type="text"
				value={url}
				onChange={handleUrl}
				onBlur={handleValidateUrl}
				placeholder="Add URL for Qr Code generation"
				required
			/>
			
			{url &&
				<button className="clear-btn" onClick={handleClearUrl}>x</button>
			}
		</div>
	);
}