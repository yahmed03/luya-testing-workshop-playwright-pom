import { Page } from 'playwright';
import {expect} from "@playwright/test";
import LeaveYearDate_content from '../content/leaveYearDate_content';

class LeaveYearDate {
    private readonly title : string
    private readonly subTitle : string
    private readonly text : string

    constructor() {
        this.title = '.govuk-caption-l'
        this.subTitle = '.govuk-fieldset__heading'
        this.text = '.govuk-hint'
    }

     async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        // await page.goto('');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(LeaveYearDate_content.PageTitle),
            expect(page.locator(this.subTitle)).toHaveText(LeaveYearDate_content.PageSubTitle),
            expect(page.locator(this.text)).toHaveText(LeaveYearDate_content.PageText),
            // Continue checking the elements after adding them to the content file!
        ]);
    }

   async fillBoxes(page: Page): Promise<void> {
    await page.getByLabel('Day').fill('01')
    await page.getByLabel('Month').fill('12')
    await page.getByLabel('Year').fill('01')
   }

    async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole('button', {name : "Continue"}).click();

    }

}

export default LeaveYearDate

