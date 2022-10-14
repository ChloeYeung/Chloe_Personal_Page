$('#selfintro').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});


$('#selfintro1').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro1').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});



$('#selfintro2').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro2').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});
$('#selfintro3').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro3').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});


$('#selfintro4').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro4').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});

$('#selfintro5').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro5').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});


$('#selfintrSymbol').jrumble({
	speed: 10,
	x: 1,
	y: 1
});

var emojiStart = function () {
	$('#selfintrSymbol').trigger('startRumble');
	setTimeout(emojiStop, 300);
};

var emojiStop = function () {
	$('#selfintrSymbol').trigger('stopRumble');
	setTimeout(emojiStart, 300);
};


emojiStart();


$('.skillBorderCol').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('.skillBorderCol').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});