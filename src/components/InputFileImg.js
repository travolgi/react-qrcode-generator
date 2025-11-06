export default function InputFileImg({ noImg, setNoImg, setCustomImg }) {
	const handleImage = e => {
		const reader = new FileReader();
		reader.onload = () => {
			if(reader.readyState === 2) {
				setCustomImg(reader.result);
			}
		}
		reader.readAsDataURL(e.target.files[0]);
	}

	return (
		<>
			<label htmlFor="file">Upload custom image</label>		
			<input
				id="file"
				name="file"
				type="file"
				accept="image/png, image/jpeg"
				onChange={handleImage}
				disabled={noImg}
			/>

			<input
				id="noImg"
				name="noImg"
				type="checkbox"
				value={noImg}
				checked={noImg}
				onClick={()=>setNoImg(!noImg)}
			/>
			<label htmlFor="noImg">Without image</label>
		</>
	);
}