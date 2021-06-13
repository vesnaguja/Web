class App {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }

  getData() {
    return this.name + ' ' + this.licence + ' ' + this.stars;
  }

  isCCLicence() {
    if (this.licence === 'CC') {
      return 'This licence is ' + this.licence;
    } else {
      return 'This licence is not CC';
    }
  }

  like() {
   this.stars += 1;
  }

  showStars() {
    console.log('The number of stars are ' + this.stars);
  }
}



class WebApp extends App {
  constructor(name, url, technologies, licence, stars) {
    super(name, licence, stars);

    this.url = url;
    this.technologies = technologies;
  }
  getWebData() {
    return this.getData() + ' ' + this.url + ' ' + this.technologies;
  }

  reactBased() {
    if (this.technologies === 'React') {
      return 'One of technologies is ' + this.technologies;
    } else {
      return 'This technology is not React'
    }
  }

}



class MobileApp extends App {
  constructor(name, platforms, licence, stars) {
    super(name, licence, stars);

    this.platforms = platforms;
  }

  getMobileData() {
    return this.getData() + ' ' + this.platforms;
  }

  forAndroid() {
    if (this.platforms === 'Android') {
      return 'The application is developed for ' + this.platforms;
    } else {
      return 'The application is not developed for Android'
    }
  }

}


// testing

var web1 = new WebApp('GitHub', 'https://github.com', 'jQuery', 'CC', 3);
//console.log(web1.isCCLicence());
//console.log(web1.reactBased());
//console.log(web1.stars);
//console.log(web1.like());
web1.showStars();

var mob1 = new MobileApp('PlayStore', 'Android', 'CC', 4);
//console.log(mob1.getMobileData());
// console.log(mob1.forAndroid());
// console.log(mob1.stars);
// console.log(mob1.like());
// console.log(mob1.stars);
mob1.showStars();