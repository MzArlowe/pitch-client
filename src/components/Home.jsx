import './Home.css';

export default function Home() {
	return (
		<>
			<div className='home'>
				<iframe
					id='inlineFrameExample'
					title='Inline Frame Example'
					width='300'
					height='200'
					src="https://www.openstreetmap.org/export/embed.html?bbox=-86.62788391113281%2C39.52787769468346%2C-85.80940246582033%2C40.031294855540054&layer=mapnik"
				></iframe>
			</div>

			<div id='media'>
				<h2>Media</h2>
			</div>

			<div id='uploads'>
				<form
					method='post'
					action='/upload'
				>
					{/* <input type="text" value="Click here and press tab to test keyboard interaction."></input> */}
					<label class='file'>
						Drop a file or click to select one
						<input
							type='file'
							multiple
						></input>
						{/* use multiple, even if it’s not allowed, to be able to show an info text */}
					</label>
					<button type='submit'>Upload</button>
				</form>
			</div>
		</>
	);
}
