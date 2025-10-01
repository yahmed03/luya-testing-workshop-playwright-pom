import { Page } from 'playwright';
import {expect} from "@playwright/test";
import DaysWorked_content from '../content/finalPageCheck_content';
import finalPageCheck_content from '../content/finalPageCheck_content';

class FinalPageCheck {
    private readonly title : string
    private readonly subTitle : string

    constructor() {
        this.title = '.govuk-heading-xl'
        this.subTitle = '.govuk-heading-xl'
      
    }

     async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        // await page.goto('');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(finalPageCheck_content.PageTitle),
            expect(page.locator(this.title)).toContainText(finalPageCheck_content.PageSubTitle),
            // Continue checking the elements after adding them to the content file!
        ]);
    }
    

}

export default FinalPageCheck

