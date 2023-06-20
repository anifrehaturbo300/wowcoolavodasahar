let img;
let imgWidth = 380;
let imgHeight = 380;
let myFont;
let myFont2;
let logo;
let circles = [];
let sound;
let isPlaying = false;
let toggleButton;

function preload() {
  img = loadImage('moonphasehigh.png');
  myFont = loadFont('Leon-ProductBold.otf');
  myFont2 = loadFont('Leon-ProductRegular.otf');
  logo = loadImage('logo.png');
  sound = loadSound('5min Relaxing Water Flowing Sound - River Nature Sounds Short Meditation W O Music - Running Stream.mp3');
}

function setup() {
  createCanvas(600, 840);
  background(31, 54, 103);
  imageMode(CENTER);

  toggleButton = createButton('Play');
  toggleButton.position(0, 0);
  toggleButton.mousePressed(toggleSound);
}

function draw() {
  if (img && logo) {
    background(31, 54, 103);
    image(img, width / 2, height / 2, imgWidth, imgHeight);

    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];
      circle.radius += 2;
      circle.alpha -= 2;

      noFill();
      stroke(255, circle.alpha);
      strokeWeight(2);
      ellipse(circle.x, circle.y, circle.radius);

      if (circle.alpha <= 0) {
        circles.splice(i, 1);
        i--;
      }
    }

    noStroke();

    textAlign(RIGHT);
    fill(250);
    textFont(myFont, 30.5);
    text("אלמ חרי", 560, 810);
    text("דוע", 560, 60);
    textAlign(LEFT);
    text("םימי", 40, 60);
    text(getDaysRemaining(), 110, 60);
    textFont(myFont2, 30.5);

    let logoWidth = 70;
    let logoHeight = (logo.height / logo.width) * logoWidth;
    let logoX = 25 + textWidth("םימי");
    let logoY = 749;
    image(logo, logoX, logoY, logoWidth, logoHeight);

    textAlign(CENTER);
    fill(250);
    textFont(myFont2, 11);
    text("אלמה חריה ךלהמב", 300, 650);
    text("דקמתהל יוצר, רוש לזמב", 300, 665);
    text("רבחתהלו ימינפ ןוזיאב", 300, 680);
    text("חופיט, םלועה לש היגרנאל", 300, 695);
    text("תמשגהו ימצעה ינאה", 300, 710);
    text(".תונווכ תרדגה ידי לע עפש", 300, 725);
  }
}

function getDaysRemaining() {
  let currentDate = new Date();
  let nextFullMoonDate = new Date("June 30, 2023");
  let timeRemaining = nextFullMoonDate - currentDate;
  return Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
}

function mouseClicked() {
  let centerX = mouseX;
  let centerY = mouseY;
  let numCircles = 3;
  let initialRadius = 0;
  let radiusIncrement = 20;

  for (let i = 0; i < numCircles; i++) {
    let radius = initialRadius + i * radiusIncrement;
    circles.push({ x: centerX, y: centerY, radius: radius, alpha: 255 });
  }
}

function toggleSound() {
  if (!isPlaying) {
    sound.loop();
    toggleButton.html('Stop');
    isPlaying = true;
  } else {
    sound.stop();
    toggleButton.html('Play');
    isPlaying = false;
  }
}
