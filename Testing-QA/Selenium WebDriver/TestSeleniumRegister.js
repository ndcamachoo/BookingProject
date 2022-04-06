const {Builder, key, By, Capabilities} = require('selenium-webdriver');

let browser = 'chrome'; //Or Chrome
const browserCapabilities = Capabilities.chrome();

browserCapabilities.set(`${browser}Options`, {args: ['--headless']});
let driver = new Builder().forBrowser(browser).withCapabilities(browserCapabilities).build();

let URL = "https://frontend.dvx32y9gwvi8h.amplifyapp.com/register";

driver.get(URL);
setTimeout(() => {console.log('Pagina cargada'); }, 2000);


driver.findElement(By.name("nombre")).sendKeys('Daniel');
driver.findElement(By.name("apellido")).sendKeys('Martinez');
driver.findElement(By.name("email")).sendKeys('daniel@dh.com');
driver.findElement(By.name("password")).sendKeys('D123456');
driver.findElement(By.name("repassword")).sendKeys('D123456');
setTimeout(() => { }, 2000);
driver.findElement(By.xpath("//button[contains(text(),'Registrate')]")).click();


driver.quit
driver.close