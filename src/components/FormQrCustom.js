import { useEffect, useState } from 'react';
import InputUrl from './InputUrl';
import InputPicker from './InputPicker';
import InputFileImg from './InputFileImg';

export default function FormQrCustom({ qrRef, url, qrColor, qrBgColor, noImg, setUrl, setQrColor, setQrBgColor, setCustomImg, setNoImg, handleQrReset }) {
	const httpRgx = /^https?:\/\//;

	const [downloaded, setDownloaded] = useState(false);
	
	useEffect(() => {
		if(downloaded) {
			const msg = setTimeout(()=>setDownloaded(false), 3500);
			return () => clearTimeout(msg);
		}
	}, [downloaded]);
	
	const handleQrCustom = color => setQrColor(color.hex),
			handleQrBgCustom = color => setQrBgColor(color.hex);

	const downloadQrCode = e => {
		e.preventDefault();

		const qrCanvas = qrRef.current.querySelector('canvas'),
				qrImage = qrCanvas.toDataURL("image/png"),
				qrAnchor = document.createElement('a'),
				fileName = url.replace(httpRgx, '').trim();
		qrAnchor.href = qrImage;
		qrAnchor.download = fileName+'_QrCode.png';
		document.body.appendChild(qrAnchor);
		qrAnchor.click();
		document.body.removeChild(qrAnchor);
	
		handleQrReset();
		setDownloaded(true);
	}

	return(
		<form onSubmit={downloadQrCode}>
			<h1>Generate your Qr Code</h1>
			
			<InputUrl
				url={url}
				setUrl={setUrl}
				httpRgx={httpRgx}
			/>

			<InputPicker
				label={'Qr color'}
				id={'qrColor'}
				customColor={qrColor}
				handleQrCustom={handleQrCustom}
			/>

			<InputPicker
				label={'background'}
				id={'qrBgColor'}
				customColor={qrBgColor}
				handleQrCustom={handleQrBgCustom}
			/>
			
			<InputFileImg
				noImg={noImg}
				setNoImg={setNoImg}
				setCustomImg={setCustomImg}
			/>

			<button type="submit">
				<span>Download now</span>
				<img src="./react-qrcode-generator/logo-apple-icon192.png" alt="Travolgi" />
			</button>
			
			{downloaded &&
				<p className="success-msg">Qr Code downloaded.</p>
			}
		</form>
	);
}