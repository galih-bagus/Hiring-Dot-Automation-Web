# Automation Testing PT. Digdaya Olah Teknologi (DOT) Indonesia.

## Stack

[Selenium v4.23.0](https://www.selenium.dev/).

[Node JS v18.20.3](https://nodejs.org/en).

[Allure Report](https://allurereport.org/).

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

URL Site
`URL`

Username facebook valid
`USERNAME_FACEBOOK_VALID`

Password facebook valid
`PASSWORD_FACEBOOK_VALID`

Name facebook valid
`NAME_FACEBOOK_VALID`

Username facebook invalid
`USERNAME_FACEBOOK_INVALID`

Password facebook invalid
`PASSWORD_FACEBOOK_INVALID`

## Run Locally

Clone the project

```bash
  git clone https://github.com/galih-bagus/Hiring-Dot-Automation-Web
```

Go to the project directory

```bash
  cd Hiring-Dot-Automation-Web
```

Install dependencies

```bash
  npm install
```

Configuration file in .env

```bash
  cp .env.example .env
```

Start automation testing with generate allure report

```bash
  npm run generate /source_file
```

Generate Allure report

```bash
  npm run report
```

Start Allure report

```bash
  npm run start
```
