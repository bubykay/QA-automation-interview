import { getLocator, visitPage } from "../config/utils";

export default class LoanPage {
  newLoanButton = () =>
    getLocator(`[href="#/newclientloanaccount/1/"]`).click();
}
