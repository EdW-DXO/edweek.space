	<script>
	// Holiday Sprinkler Animation 
	(function () {
	  const logo = document.querySelector('.logo-box');
	  if (!logo) return;
	
	  let hoverLock = false;
	  logo.addEventListener('mouseenter', () => {
		if (hoverLock) return;
		hoverLock = true;
	
		const count = 3 + Math.floor(Math.random() * 2);
		for (let i = 0; i < count; i++) {
		  setTimeout(() => spawnBat(logo), i * 120);
		}
	
		setTimeout(() => { hoverLock = false; }, 800);
	  });
	
	  function spawnBat(target) {
		const b = document.createElement('span');
		b.className = 'bat';
		b.setAttribute('aria-hidden', 'true');
		//b.textContent = '^v^';  // for Halloween
		//b.textContent = '🍁';  // for Thanksgiving
		b.textContent = '🔔';  // for Christmas
		
		const dx = 40 + Math.random() * 30;   // make horizontal drift stronger
		const dy = -40 - Math.random() * 50;  // make upward drift a bit shallower
		const dur = (1.3 + Math.random() * 0.7);
		const size = 16 + Math.round(Math.random() * 6);
	
		b.style.setProperty('--dx', dx + 'px');
		b.style.setProperty('--dy', dy + 'px');
		b.style.setProperty('--dur', dur + 's');
		b.style.fontSize = size + 'px';
		b.style.left = (50 + Math.random() * 10) + '%';
		b.style.top = (15 + Math.random() * 10) + '%';
	
		target.appendChild(b);
		b.addEventListener('animationend', () => b.remove());
	  }
	})();
	</script>
