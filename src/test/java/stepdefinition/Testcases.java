package stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class Testcases {
	WebDriver driver;
	
	@Given("^I navigate to Github page$")
	public void I_navigate_to_Github_page() throws Throwable {
		WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("https://github.com/login");
	}

	@When("^I enter the \"(.*?)\"$")
	public void I_enter_the_username(String username) throws Throwable {
		driver.findElement(By.id("login_field")).sendKeys(username);
		
	}

	@And("^I type the \"(.*?)\"$")
	public void I_type_the_password(String password) throws Throwable {
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@Then("^I should login successfully$")
	public void I_should_login_successfully() throws Throwable {
		String Expected_error = "Incorrect username or password.";
		driver.findElement(By.xpath("//input[@type='submit']")).click();
		String Actual_error = driver.findElement(By.id("js-flash-container")).getText();
		Assert.assertEquals(Expected_error, Actual_error);
		Assert.assertTrue(Actual_error.contains("Incorrect username or password"));
		driver.quit();
	    
	}


}
