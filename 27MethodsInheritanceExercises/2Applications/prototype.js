function App(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars;
}

App.prototype.printInfo = function () {
  return this.name + ' ' + this.licence + ' ' + this.stars;
}

App.prototype.isCCLicence = function () {
  if (this.licence === 'CC') {
    return 'This licence is ' + this.licence;
  } else {
    return 'This licence is not CC';
  }
}

App.prototype.like = function () {
  this.stars += 1;
}

App.prototype.showStars = function () {
  console.log('This app has ' + this.stars + ' stars');
}


function WebApp(name, url, technologies, licence, stars) {
  App.call(this, name, licence, stars);

  this.url = url;
  this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
  console.log(this.printInfo() + ' ' + this.url + ' ' + this.technologies);
}

WebApp.prototype.reactBased = function () {
  if (this.technologies === 'React') {
    return 'One of the used technologies is ' + this.technologies;
  } else {
    return 'This technology is not React';
  }
}


function MobileApp(name, platforms, licence, stars) {
  App.call(this, name, licence, stars);

  this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
  console.log(this.printInfo() + ' ' + this.platforms);
}

MobileApp.prototype.forAndroid = function () {
  if (this.platforms === 'Android') {
    return 'The application is developed for ' + this.platforms;
  } else {
    return 'The application is not developed for Android'
  }
}

// testing
var web1 = new WebApp('Google', 'https://google.com', 'React', 'CC', 4);
web1.getData();
console.log(web1.reactBased());


var mob1 = new MobileApp('Play Store', ['Android', 'iPhone'], 'CC', 4);
console.log(mob1.forAndroid());
mob1.showStars();