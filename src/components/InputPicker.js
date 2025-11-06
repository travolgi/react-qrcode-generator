import { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function InputPicker({ id, label, customColor, handleQrCustom }) {
	const [showPicker, setShowPicker] = useState(false),
			handleShowPicker = ()=> setShowPicker(!showPicker);

	return(
		<div>
			<input
				id={id}
				name={id}
				aria-label={id}
				type="button"
				style={{ background: customColor }}
				onClick={handleShowPicker}
			/>
			<label htmlFor={id}>Customize {label}</label>

			{showPicker &&
				<SketchPicker
					presetColors={['#000000', '#FFFFFF']}
					color={customColor}
					onChange={handleQrCustom}
				/>
			}
		</div>
	);
}