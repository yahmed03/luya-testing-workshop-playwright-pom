import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHours from "./pages/irregularHoursPage"
import LeaveYearDate from "./pages/leaveYearDate";
import HolidayBased from "./pages/holidayBased";
import WorkOutHoldiay from "./pages/workOutHoliday";
import DaysWorked from "./pages/daysWorked";


test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
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
    
});
