import { Page } from 'playwright';
import {expect} from "@playwright/test";
import WorkOutHoliday_content from '../content/workOutHoliday_content';

class WorkOutHoldiay {
    private readonly title : string
    private readonly subTitle : string

    constructor() {
        this.title = '.govuk-caption-l'
        this.subTitle = '.govuk-fieldset__heading'
    }

     async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        // await page.goto('');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(WorkOutHoliday_content.PageTitle),
            expect(page.locator(this.subTitle)).toHaveText(WorkOutHoliday_content.PageSubTitle),
            // Continue checking the elements after adding them to the content file!
        ]);
    }

   async choseOptionFullYear (page: Page): Promise<void> {
        await page.getByLabel('for a full leave year').click(); 
        await page.getByRole('button', {name : "Continue"}).click();

    }

}

export default WorkOutHoldiay

