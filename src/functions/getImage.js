const images = {
    // ./images
    Weather: require('../assets/images/bg_weather.jpg'),
    Grass: require('../assets/images/agrass.png'),
    Home: require('../assets/images/bg_home.png'),
    ISearch: require('../assets/images/icon-search.png'),
    IGesture: require('../assets/images/icon-gesture.png'),
    IStopWatch: require('../assets/images/icon-stop-watch.png'),
    ISort: require('../assets/images/icon-sort.png'),
    ISwipeMenu: require('../assets/images/icon-swipe-menu.png'),
    ITinder: require('../assets/images/icon-tinder.png'),
    ITweet: require('../assets/images/icon-tweet.png'),
    Twitter2: require('../assets/images/Cook-Food.jpg'),
    Twitter1: require('../assets/images/John-Kasich.jpg'),
    IWeather: require('../assets/images/icon-weather.png'),

    // ./icons
    'icon-add': require('../assets/icons/icon-add.png'),
    'icon-back': require('../assets/icons/icon-back.png'),
    'icon-baseball': require('../assets/icons/icon-baseball.png'),
    'icon-edit': require('../assets/icons/icon-edit.png'),
    'icon-exchange': require('../assets/icons/icon-exchange.png'),
    'icon-heart': require('../assets/icons/icon-heart.png'),
    'icon-search': require('../assets/icons/icon-search.png'),
    'icon-setting': require('../assets/icons/icon-setting.png'),
    'icon-twitter': require('../assets/icons/icon-twitter.png'),
    'icon-user': require('../assets/icons/icon-user.png'),

    // ./logos
    'logo-cnn': require('../assets/logos/cnn-logo.png'),
    'logo-splash': require('../assets/logos/logo-splash.jpg'),
    'logo-twitter': require('../assets/logos/logo-twitter.png'),
    'logo-mirela': require('../assets/logos/mirela-logo.png'),
    'logo-msft': require('../assets/logos/msft-logo.png'),
    'logo-new-york': require('../assets/logos/new-york-logo.png'),
    'logo-remax-first': require('../assets/logos/remax-first-logo.png'),
  };
  
  export default param => images[param];