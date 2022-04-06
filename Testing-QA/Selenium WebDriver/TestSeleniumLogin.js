const {Builder, key, By, Capabilities} = require('selenium-webdriver');

let browser = 'chrome'; //Or Chrome
const browserCapabilities = Capabilities.chrome();

browserCapabilities.set(`${browser}Options`, {args: ['--headless']});
let driver = new Builder().forBrowser(browser).withCapabilities(browserCapabilities).build();

let URL = "https://frontend.dvx32y9gwvi8h.amplifyapp.com/login";

driver.get(URL);
setTimeout(() => {console.log('Pagina cargada'); }, 2000);

driver.findElement(By.name("email")).sendKeys('admin@dh.com');
driver.findElement(By.name("password")).sendKeys('admin');
driver.findElement(By.xpath("//button[contains(text(),'Ingresar')]")).click();


if(driver.findElement(By.className("Login_errorm__1i44b")).isDisplayed()){
    setTimeout(() => {console.log('Error en el login'); }, 2000);
    driver.quit
}else{
    setTimeout(() => {console.log('Login exitoso'); }, 2000);
    driver.quit
}

driver.quit
driver.close