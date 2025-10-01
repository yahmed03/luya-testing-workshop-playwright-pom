import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHours from "./pages/irregularHoursPage"
import irregularHours_content from "./content/irregularHoursPage_content";
import LeaveYearDate from "./pages/leaveYearDate";

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
});
