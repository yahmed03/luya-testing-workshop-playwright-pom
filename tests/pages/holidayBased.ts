import { Page } from 'playwright';
import {expect} from "@playwright/test";
import HolidayBased_content from '../content/holidayBased_content';

class HolidayBased {
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
            expect(page.locator(this.title)).toHaveText(HolidayBased_content.PageTitle),
            expect(page.locator(this.subTitle)).toHaveText(HolidayBased_content.PageSubTitle),
            expect(page.locator(this.text)).toHaveText(HolidayBased_content.PageText),
            // Continue checking the elements after adding them to the content file!
        ]);
    }

   async choseOption(page: Page): Promise<void> {
    await page.getByLabel('days worked per week').click();
   }

    async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole('button', {name : "Continue"}).click();

    }

}

export default HolidayBased

