import React, { useEffect, useState } from 'react';

export default function Education({ setHideHeader }) {
	useEffect(() => {
setHideHeader(false);
	}, [setHideHeader]);

	const [contentSrc, setContentSrc] = useState('');
	const [contentName, setContentName]
}