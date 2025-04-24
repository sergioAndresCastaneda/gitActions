import { expect, Locator, Page } from "@playwright/test";

export class loginPage {
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly loginSucces: Locator
    private readonly UploginButton: Locator
    private readonly UploginMessage: Locator

    constructor(page: Page) {
        this.usernameTextbox = page.getByRole('textbox', {name: 'Username'})
        this.passwordTextbox = page.getByRole('textbox', {name: 'Password'})
        this.loginButton = page.getByRole('button', {name: 'Log In'})
        this.UploginButton = page.getByRole('link', {name: ' Log out'})
        this.loginSucces = page.getByRole('heading', {name: 'AdminConsole'})
        this.UploginMessage = page.getByText('User logout')
    }

    async loginWhitCredentials(username: string, password: string) {
        await this.usernameTextbox.fill(username)
        await this.passwordTextbox.fill(password)
        await this.loginButton.click()
    }

    async Uplogin() {   
        await this.UploginButton.click()
    }

    async checkSuccessFullLogin() {
        await expect(this.loginSucces).toBeVisible()
    }

    async checkSuccessFullClosing(){
        await expect(this.UploginMessage).toBeVisible()
    }
}