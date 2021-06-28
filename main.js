canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width =100;
car1_height =90;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width =100;
car2_height =90;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image ="racing.jpg";

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;  

	car1_imgTag = new Image(); 
	car1_imgTag.onload = uploadcar_2; 
	car1_imgTag.src = car1_image;  

	car2_imgTag = new Image(); 
	car2_imgTag.onload = uploadcar_2; 
	car2_imgTag.src = car2_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, 
	canvas.width, canvas.height);
 }
	function uploadcar_2() {
 ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
 }
		 function uploadcar_1() {
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed = e.keyCode;
if ( keypressed== 38){
	car1_up();
}
if (keypressed==40){
	car1_down();
}
if (keypressed==37){
	car1_left();
}
if (keypressed==39){
	car1_right();
}
if ( keypressed==87 ){
	car2_up();
}
if (keypressed==65){
	car2_left();
}
if (keypressed==83){
	car2_down();
}
if (keypressed==68){
	car2_right();
}
}
function car1_up() 
{
	if (car1_y <=0)
	{
		car1_y = car1_y + 10;
		 console.log("When Up Arrow Is Pressed, X = "+ car1_x + ", Y = " + car1_y);
		 uploadBackground();
		 uploadcar_1();
		 uploadcar_2();
	}
}
function car1_down() 
{
	if (car1_y <=500)
	{
		car1_y = car1_y + 10;
		 console.log("When Down Arrow Is Pressed, X = "+ car1_x + ", Y = " + car1_y);
		 uploadBackground();
		 uploadcar_1();
		 uploadcar_2();
	}
}
function car1_left() 
{
	if (car1_x >=0)
	{
		car1_x = car1_x - 10;
		 console.log("When Left Arrow Is Pressed, X = "+ car1_x + ", Y = " + car1_y);
		 uploadBackground();
		 uploadcar_1();
		 uploadcar_2();
	}
}
function car1_right() 
{
	if (car1_x <=700)
	{
		car1_x = car1_x + 10;
		 console.log("When Right Arrow Is Pressed, X = "+ car1_x + ", Y = " + car1_y);
		 uploadBackground();
		 uploadcar_1();
		 uploadcar_2();
	}
}
function car2_up() 
{
	if (car2_y <=0)
	{
		car2_y = car2_y + 10;
		 console.log("When W Key Is Pressed, X = "+ car2_x + ", Y = " + car2_y);
		 uploadBackground();
		 uploadcar_1();
		 uploadcar_2();
	}
}
function car2_down() 
{
	if (car2_y <=500)
	{
		car2_y = car2_y + 10;
		 console.log("When S Key Is Pressed, X = "+ car2_x + ", Y = " + car2_y);
		 uploadBackground();
		 uploadcar_1();
		 uploadcar_2();
	}
}
function car2_left() 
{
	if (car2_x >=0)
	{
		car2_x = car2_x - 10;
		 console.log("When A Key Is Pressed, X = "+ car2_x + ", Y = " + car2_y);
		 uploadBackground();
		 uploadcar_1();
		 uploadcar_2();
	}
}
function car2_right() 
{
	if (car2_x <=700)
	{
		car2_x = car2_x + 10;
		 console.log("When D Key Is Pressed, X = "+ car2_x + ", Y = " + car2_y);
		 uploadBackground();
		 uploadcar_1();
		 uploadcar_2();
	}
}
if (car1_x > 700) {
	console.log("Car1 ! Won")
	document.getElementById("game_status").innerHTML = "Car 1 Won !";
}
if (car2_x > 700) {
	console.log("Car2 ! Won")
	document.getElementById("game_status").innerHTML = "Car 2 Won !";
}