import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  validPassword(stringToValidate) {
    var regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_.,!\/@#$%^&*=+{}\[\]\(\)\\])(?=.{8,})/
    return regularExpression.test(stringToValidate);
  }
  
  validZipCode(stringToValidate) {
    var regularExpression = /^[0-9]{5}(?:-[0-9]{4})?$/
    return regularExpression.test(stringToValidate);
  }

  isPassport(stringToValidate) {
    var regularExpression = /^[a-zA-Z][0-9]{8}$/;
    return regularExpression.test(stringToValidate);
  }

  isText(stringToValidate, min = 1, max = 30) {
      // var regularExpression = /^[A-Za-z]{1,30}$/;
      var regularExpression = new RegExp(`^[A-Za-z]{${min},${max}}$`);
      return regularExpression.test(stringToValidate);
  }
  
  isDate(stringToValidate) {
      var regularExpression = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
      return regularExpression.test(stringToValidate);
  }
  
  isEmailAddress(stringToValidate) {
      var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regularExpression.test(stringToValidate);
  }
  
  isId(stringToValidate) {
      var regularExpression = /^[0-9]{0,3}$/;
      return regularExpression.test(stringToValidate);
  }
  
  isMoney(stringToValidate) {
      var regularExpression = /\s([|(]?(((\$|(\US\$)|£|JPY|¥)?\s*\d+)([.|,]?\d{2})?)[|)]?\s)/
      return regularExpression.test(stringToValidate);
  }
  
  isPhone(stringToValidate) {
      var regularExpression = /\(([0-9]{3})\)([0-9]{3})\-([0-9]{4})/ //<--USA format||HN format-->/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
      return regularExpression.test(stringToValidate);
  }
}
