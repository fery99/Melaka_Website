import { test, expect } from '@playwright/test';

test('Login With Not Using Email', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/login');
  await page.getByTestId('login__field__email').fill('ferysadewagmail.com');
  await page.getByTestId('login__field__password').fill('test1234');
  await page.getByTestId('login__button__login').click();
  await expect(page.getByTestId('login__field__email__error')).
  toContainText('Harap isi dengan format yang benar.');
});

test('Login With Not input Email', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/login');
  await page.getByTestId('login__field__email').fill('');
  await page.getByTestId('login__field__password').fill('Test1234');
  await page.getByTestId('login__button__login').click();
  await expect(page.getByTestId('login__field__email__error')).
  toContainText('Wajib diisi.');
}) 

test('Login with unike symbol email', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/login');
  await page.getByTestId('login__field__email').fill('!@#$%^&*()_+');
  await page.getByTestId('login__field__password').fill('Test1234');
  await page.getByTestId('login__button__login').click();
  await expect(page.getByTestId('login__field__email__error')).
  toContainText('Harap isi dengan format yang benar.');
});

test('Login With Not input password', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/login');
  await page.getByTestId('login__field__email').fill('ferysadewa@gmail.com');
  await page.getByTestId('login__field__password').fill('');
  await page.getByTestId('login__button__login').click();
  await expect(page.getByTestId('login__field__password__error')).
  toContainText('Wajib diisi.');
})  

test('Login With dont Match', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/login');
  await page.getByTestId('login__field__email').fill('ferysadewaa@gmail.com');
  await page.getByTestId('login__field__password').fill('Test12345');
  await page.getByTestId('login__button__login').click();
  await expect(page.getByTestId('login__field__password__error')).
  toContainText('Email atau kata sandi tidak valid.');
}) 

test('Login Success!', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/login');
  await page.getByTestId('login__field__email').fill('ferysadewaa@gmail.com');
  await page.getByTestId('login__field__password').fill('Test1234');
  await page.getByTestId('login__button__login').click();
  await expect(page.getByTestId('home__menu__home').getByRole('button')).
  toContainText('Beranda');
}) 