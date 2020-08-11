export class COUNTRY {
  name: string;
  flag: string;
  currency_code: string;
  currency_name: string;
  alpha2Code: string;
  constructor(name: string, flag: string, currency_code: string, currency_name: string, alpha2Code: string) {
    this.name = name;
    this.flag = flag;
    this.currency_code = currency_code;
    this.currency_name = currency_name;
    this.alpha2Code = alpha2Code;
  }
}