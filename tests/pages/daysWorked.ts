import { Page } from 'playwright';
import {expect} from "@playwright/test";
import DaysWorked_content from '../content/daysWorked_content';

class DaysWorked {
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
            expect(page.locator(this.title)).toHaveText(DaysWorked_content.PageTitle),
            expect(page.locator(this.subTitle)).toHaveText(DaysWorked_content.PageSubTitle),
            expect(page.locator(this.text)).toHaveText(DaysWorked_content.PageText),
            // Continue checking the elements after adding them to the content file!
        ]);
    }

   async fillBox(page: Page): Promise<void> {
    await page.getByLabel('').fill('4.5')
   }

    async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole('button', {name : "Continue"}).click();

    }

}

export default DaysWorked

