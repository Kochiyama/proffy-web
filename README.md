<h1 style="text-align: center; font-size: 50px">
  Proffy Web
</h1>

Full stack project with mobile, web and API. A plataform that connects inependent teachers and students.
Project initially developed at **Next Level Week #2** from @Rocketseat.
 
### The complete project is constituted by these three repositories:

- [Web](https://github.com/Kochiyama/proffy-web) 
- [Mobile](https://github.com/Kochiyama/proffy-mobile) 
- [Api](https://github.com/Kochiyama/proffy-api)

### Current Project State: :hammer_and_wrench: Working :hammer_and_wrench: 
---
## Features list (also todo-list)

- [x] Lnading page
- [x] show total connections
- [x] Study Page
- [x] Teacher list Page
- [x] Filter teachers(classes)
- [x] Show filtered teachers(classes)
- [x] Give Classes Page
- [x] Teacher can register a class
- [ ] Show all the classes by pagination
- [ ] Dinamically filter
- [ ] Login
- [ ] Register
- [ ] Favorites Page
- [ ] Show Favorited teachers
- [ ] User can add teachers to favorites
- [ ] User can remove teachers from favorites
- [ ] User profile Page


---
## Preview: web application

<img src="readme-assets/preview.gif" />

---

## Dependencies (Pre-requisites)

Before try :microscope: proffy-api from your own local network you must have installed the following dependencies:

- [NodeJS](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- [git](https://git-scm.com/downloads)

## Test the dependencies
Into your terminal run:  

### Node

```
node --version
```
Output expected:   
`v12.8.3`

### Yarn

```
yarn --version
```
Output expected:  
`v1.22.4`

### Git

```
git --version
```
Output expected:  
`git version 2.25.1`

The versions can vary, if they vary too much and some bug occur, unninstall the current version and install the exact version of outputs above. 

## Set up the API

Clone this repository, into your terminal run: 
```
git clone https://github.com/Kochiyama/proffy-web
```

Then change the actual directory to the proffy-web folder, run: 
```
cd proffy-api
```

Install all the packages automatically, just run: 
```
yarn
```

Set up api address

:warning: before proceding you must set up the [Api](https://github.com/Kochiyama/proffy-api)
follow the instructions into the link above

with your 'api consuming address' in hands, open the `api.ts` file on your text editor (reccomend: vscode). 
It is located at `proffy-web/src/services`  
Then replace the Base_url string to your api address:

<img src="readme-assets/base_url.gif" />

And finally: 
```
yarn start
```
it  will automatically open the proffy on web

<img src="readme-assets/yarn-start-web.gif" />

---

## :black_nib: Feedback
If you found a bug or error feel free to create a **new issue** on this repository  
Any feeedbacks and opinions are welcome, send me a e-mail:
marcelokochiyamadev@gmail.com