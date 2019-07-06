#  Coding Exercise

## Introduction
A Project using ​Angular 5.2.0​ with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1. which will interact with a mock API managed 
by ​json-server​. 

Technologies used:

1. [Json-server]​ - (https://www.npmjs.com/package/json-server )
2. [Angular] ​- (https://angular.io/guide/quickstart )
3. [Bootstrap@4.0.0] - (http://getbootstrap.com)

## Installation

### Clone to your local computer using git.
`git clone https://github.com/MarioDH/Coding-Exercise.git`

### Install Node v8.9.4

### Install Globablly for use to JSON SERVER (preferably)
`npm install -g json-server`

### Install Globablly for use to Angular (preferably)
`npm install -g @angular/cli@1.7.1`

### Install Locally
`npm install @angular/cli`

## Development JSON SERVER
Run `json-server index.js` for a dev server. Navigate to `http://localhost:3000/`.

## Development Angular Server 
Run `npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## List of End Points (samples)

Publications Descending order 
http://localhost:3000/posts?_limit=10&_sort=date&_order=DESC

Publications ascending order
http://localhost:3000/posts?_limit=10&_sort=date&_order=ASC

Pagination and Limits
http://localhost:3000/posts?_page=2&_limit=10

list of authors
http://localhost:3000/author/

list of publications by author name
http://localhost:3000/author?name_like=Mario&_embed=posts

## Author
### Mario Dominguez
