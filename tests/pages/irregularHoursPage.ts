import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHours_content from "../content/irregularHoursPage_content"

class IrregularHours {
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
            expect(page.locator(this.title)).toHaveText(irregularHours_content.PageTitle),
            expect(page.locator(this.subTitle)).toHaveText(irregularHours_content.PageSubTitle),
            expect(page.locator(this.text)).toHaveText(irregularHours_content.PageText),
            // Continue checking the elements after adding them to the content file!
        ]);
    }

    async choseOptionYes (page: Page): Promise<void> {
        await page.getByLabel('Yes').click(); 
        await page.getByRole('button', {name : "Continue"}).click();
    }

    async choseOptionNo (page: Page): Promise<void> {
        await page.getByLabel('No').click(); 
        await page.getByRole('button', {name : "Continue"}).click();
    }

}

export default IrregularHours

