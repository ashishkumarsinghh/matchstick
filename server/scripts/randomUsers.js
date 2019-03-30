import fetch from 'node-fetch';
import { writeFile } from 'fs';

fetch('http://randomuser.me/api/?results=2000&gender=female&nat=us')
  .then(res => res.json())
  .then(data => writeFile('./data/females.txt', JSON.stringify(data), (err) => {
    if (err) {
      console.log('error writing female data to file.');
    }

    console.log('Female data written.');
  }));

fetch('http://randomuser.me/api/?results=2000&gender=male&nat=us')
  .then(res => res.json())
  .then(data => writeFile('./data/males.txt', JSON.stringify(data), (err) => {
    if (err) {
      console.log('error writing male data to file.');
    }
    console.log('Male data written.');
  }));

// Mongodb Import Script to import data from json array stored in file
// mongoimport --db test --collection people --file males.txt --jsonArray
