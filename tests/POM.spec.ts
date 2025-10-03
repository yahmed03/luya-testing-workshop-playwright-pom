import {test} from "@playwright/test";
import { allure } from "allure-playwright";
import LandingPage from "./pages/landingPage";
import IrregularHours from "./pages/irregularHoursPage"
import LeaveYearDate from "./pages/leaveYearDate";
import HolidayBased from "./pages/holidayBased";
import WorkOutHoldiay from "./pages/workOutHoliday";
import DaysWorked from "./pages/daysWorked";
import FinalPageCheck from "./pages/finalPageCheck";


test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    allure.epic('Holiday Entitlement Calculator');
    allure.story('Full Year Calculation');
    allure.description('Tests the happy path for calculating holiday entitlement for a full year');
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHours: IrregularHours = new IrregularHours();
    await irregularHours.checkPageLoads(page);
    await irregularHours.choseOptionYes(page);
    const leaveYearDate: LeaveYearDate = new LeaveYearDate();
    await leaveYearDate.checkPageLoads(page);
    await leaveYearDate.fillBoxes(page);
    await leaveYearDate.continueOn(page);

    const holidayBased: HolidayBased = new HolidayBased();
    await holidayBased.choseOption(page);
    await holidayBased.continueOn(page);
    const workOutHoliday: WorkOutHoldiay = new WorkOutHoldiay
    await workOutHoliday.checkPageLoads(page);
    await workOutHoliday.choseOptionFullYear(page);
    const daysWorked: DaysWorked = new DaysWorked();
    await daysWorked.checkPageLoads(page);
    await daysWorked.fillBox(page);
    await daysWorked.continueOn(page);
    const finalPageCheck: FinalPageCheck = new FinalPageCheck();
    await finalPageCheck.checkPageLoads(page);
    
});
