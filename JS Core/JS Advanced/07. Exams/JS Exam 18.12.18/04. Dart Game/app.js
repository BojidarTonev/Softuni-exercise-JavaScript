function dart(){
	let shots = -1;
	let homePlayerPoints = 0;
	let awayPlayerPoints = 0;

	let $allPoints = $('#scoreBoard tbody tr td').text().split(/[a-zA-Z]/g).filter(x => x != '').map(x => x.trim());
	let $greenPoints = $allPoints[0];
	let $yellowPoints = $allPoints[1];
	let $orangePoints = $allPoints[2];
	let $redPoints = $allPoints[3];
	let $purplePoints = $allPoints[4];
	let $bluePoints = $allPoints[5];

	let $dartElements = $('#playBoard');
	for(let item of $dartElements){
		item.addEventListener('click', function(e){
			shots++;
			if(shots % 2 == 0){
				$('#turns p')[0].textContent = 'Turn on Away';
				$('#turns p')[1].textContent = 'Next is Home'
			} else {
				$('#turns p')[0].textContent = 'Turn on Home';
				$('#turns p')[1].textContent = 'Next is Away'
			}
			if(e.target.id == 'firstLayer'){
				if(shots % 2 == 0){
					incrementPoints(shots, homePlayerPoints, $greenPoints);
				} else {
					incrementPoints(shots, awayPlayerPoints, $greenPoints);
				}
			} else if(e.target.id == 'secondLayer'){
				if(shots % 2 == 0){
					incrementPoints(shots, homePlayerPoints, $yellowPoints);
				} else {
					incrementPoints(shots, awayPlayerPoints, $yellowPoints);
				}
			}else if(e.target.id == 'thirdLayer'){
				if(shots % 2 == 0){
					incrementPoints(shots, homePlayerPoints, $orangePoints);
				} else {
					incrementPoints(shots, awayPlayerPoints, $orangePoints);
				}
			}else if(e.target.id == 'fourthLayer'){
				if(shots % 2 == 0){
					incrementPoints(shots, homePlayerPoints, $redPoints);
				} else {
					incrementPoints(shots, awayPlayerPoints, $redPoints);
				}
			}else if(e.target.id == 'fifthLayer'){
				if(shots % 2 == 0){
					incrementPoints(shots, homePlayerPoints, $purplePoints);
				} else {
					incrementPoints(shots, awayPlayerPoints, $purplePoints);
				}
			}else if(e.target.id == 'sixthLayer'){
				if(shots % 2 == 0){
					incrementPoints(shots, homePlayerPoints, $bluePoints);
				} else {
					incrementPoints(shots, awayPlayerPoints, $bluePoints);
				}
			}
		})
	}

	function incrementPoints(shots, playerPoints, points){
			playerPoints += +points;
			if(shots % 2 == 0){
				homePlayerPoints = playerPoints;
				$('#Home p')[0].textContent = playerPoints;
			} else {
				awayPlayerPoints = playerPoints;
				$('#Away p')[0].textContent = playerPoints;
			}
			

			if(playerPoints >= 100){
				let oldElement = document.getElementById('playBoard');
				let newElement = oldElement.cloneNode(true);
				oldElement.parentNode.replaceChild(newElement, oldElement);

				if(homePlayerPoints >= 100){
					$('#Home p')[1].style.background = 'green';
					$('#Away p')[1].style.background = 'red';
				} else {
					$('#Home p')[1].style.background = 'red';
					$('#Away p')[1].style.background = 'green';
				}
			}
	}

}