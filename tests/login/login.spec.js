import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'


test('Login with not using email', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.goToLoginPage() 
  await Login.input_username('ferysadewagmail.com')
  await Login.input_password('test1234')
  await Login.click_LoginButton()
  await Login.valid_cons_redaler1('Harap isi dengan format yang benar.')
});

test('Login With Not input Email', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.goToLoginPage() 
  await Login.input_username('')
  await Login.input_password('test1234')
  await Login.click_LoginButton()
  await Login.valid_cons_redaler1('Wajib diisi.')
});

test('Login with unique symbol email', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.goToLoginPage() 
  await Login.input_username('!@#$%^&*()_+.com')
  await Login.input_password('test1234')
  await Login.click_LoginButton()
  await Login.valid_cons_redaler1('Harap isi dengan format yang benar.')
});

test('Login with not input Password', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.goToLoginPage() 
  await Login.input_username('ferysadewaa@gmail.com')
  await Login.input_password('')
  await Login.click_LoginButton()
  await Login.valid_cons_redaler2('Wajib diisi.')
});

test('Login username and password dont match', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.goToLoginPage() 
  await Login.input_username('ferysadewa@gmail.com')
  await Login.input_password('Test1234')
  await Login.click_LoginButton()
  await Login.valid_cons_redaler2('Email atau kata sandi tidak valid.')
});

test('Login Success!', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.goToLoginPage() 
  await Login.input_username('ferysadewaa@gmail.com')
  await Login.input_password('Test1234')
  await Login.click_LoginButton()
  await Login.validationOnBeranda('Beranda')
});