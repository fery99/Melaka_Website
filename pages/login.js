const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.cons_username = page.getByTestId('login__field__email')
        this.cons_password = page.getByTestId('login__field__password')
        this.cons_buttonLogin = page.getByTestId('login__button__login')
        this.cons_redaler1= page.getByTestId('login__field__email__error')
        this.cons_redalert2= page.getByTestId('login__field__password__error')
        this.cons_homeBeranda= page.getByTestId('home__menu__home')

    }
    async goToLoginPage(){
        await this.page.goto('https://dashboard.melaka.app/login');
    }

    async input_username(username){
        await this.cons_username.fill(username)
    }

    async input_password(password){
        await this.cons_password.fill(password)
    }

    async click_LoginButton(){
        await this.cons_buttonLogin.click()
    }

    async valid_cons_redaler1(Redalert1){
        await expect(this.cons_redaler1).toContainText(Redalert1);
        // console.log("variable nya adalah" + Redalert1)
    }

    async valid_cons_redaler2(Redalert2){
        await expect (this.cons_redalert2).toContainText(Redalert2);
    }

    async validationOnBeranda(beranda){
        await expect(this.cons_homeBeranda).toContainText(beranda);
    }

}