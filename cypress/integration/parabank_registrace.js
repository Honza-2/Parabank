
describe("Parabank - Registrace nového uživatele", () => {

	beforeEach(() => {
		// Jsem na stránce parabank.parasoft.com
		cy.visit("http://parabank.parasoft.com")
		// Kliknu na tlačítko "Register" 
		cy.contains("Register")
			.click();
		})
	
	it("Validní registrace", () => {
		// Když vyplním validně všechny údaje
		cy.get(".form2")
			.find('.input')
			.each(($ele, i) => {
			//if ($ele === )
				cy.wrap($ele)
				//.should("not.contain", 'Zip Code:')
					.type("chleba5", /*{ force: true } */ );
			});
		// A kliknu na tlačítko "REGISTER" pod tabulkou s údaji
		cy.get(".button")
			.contains("Register")
			.click();
		// Pak se zobrazí hláška "Your account was created successfully. 
		// You are now logged in."
		cy.get('p')
			.contains('Your account was created successfully. You are now logged in.')
	})
})






// 	Scénář: 2. Nekompletní údaje pro registraci
// 		Když vyplním jen některé údaje
// 		A kliknu na tlačítko "REGISTER" umístěné pod tabulkou se zadanými údaji
// 		Pak se u chybějícího údaje zobrazí hláška "*chybějící údaj* is required"
	