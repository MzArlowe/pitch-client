import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
	const [contentSrc, setContentSrc] = useState('');
	const [contentName, setContentName] = useState('');

	function readURL(input) {
		if (input.files && input.files[0]) {
			const reader = new FileReader();

			reader.onload = function (e) {
				setContentSrc(e.target.result);
				setContentName(input.files[0].name);
			};

			reader.readAsDataURL(input.files[0]);
		} else {
			removeUpload();
		}
	}

	function removeUpload() {
		setContentSrc('');
		setContentName('');
	}

	return (
		<div className='home'>
			<iframe
				id='map'
				title='Inline Frame Example'
				src='https://www.openstreetmap.org/export/embed.html?bbox=-86.62788391113281%2C39.52787769468346%2C-85.80940246582033%2C40.031294855540054&layer=mapnik'
			></iframe>

			<div className='file-upload'>
				<button
					className='file-upload-btn'
					type='button'
					onClick={() => document.querySelector('.file-upload-input').click()}
				>
					Add File
				</button>

				<div className='content-upload-wrap'>
					<input
						className='file-upload-input'
						type='file'
						onChange={(e) => readURL(e.target)}
					/>
					<div className='drag-text'>
						<h3>Drag and drop a file or select add file</h3>
					</div>
				</div>
				<div className='file-upload-content'>
					<img
						className='file-upload-content'
						src={contentSrc}
						alt='your pic'
					/>
					<div className='content-title-wrap'>
						{contentName && (
							<button
								type='button'
								onClick={removeUpload}
								className='remove-content'
							>
								Remove <span className='content-title'>{contentName}</span>
							</button>
						)}
					</div>
				</div>
				<div className='file-upload'>
					<button
						className='file-upload-btn'
						type='button'
						onClick={() => document.querySelector('.file-upload-input').click()}
					>
						Upload
					</button>
				</div>
			</div>
		</div>
	);
}
