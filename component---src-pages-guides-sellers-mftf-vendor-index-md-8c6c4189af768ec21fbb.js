(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6398],{26959:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var s,i=n(22122),o=n(19756),a=(n(15007),n(64983)),r=n(99536),d=["components"],l={},u=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),m={_frontmatter:l},c=r.Z;function p(e){var t=e.components,n=(0,o.Z)(e,d);return(0,a.mdx)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"mftf-vendor-supplied-tests"},"MFTF Vendor-supplied tests"),(0,a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"At this stage, the MFTF Vendor-supplied check is not required to pass technical review. The pass/fail status of this check is ignored. We are still observing the behavior of this set of tests and will start requiring these tests at a later time, with sufficient notice."),(0,a.mdx)("p",null,"This check runs the MFTF tests supplied by the vendor as a part of the extension package."),(0,a.mdx)("p",null,"The Magento Functional Testing Framework (MFTF) is a browser-based acceptance testing framework used to validate the functionality of a Magento site. Running vendor-supplied MFTF tests helps to ensure that the extension functionality is operating as expected for the end user."),(0,a.mdx)("p",null,"Vendor supplied MFTF tests are not required to pass for technical review. The outcome of this testing is used to assist with QA efforts and provide feedback on functional quality."),(0,a.mdx)("p",null,"For information on how to setup, create and modify MFTF tests, see ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/mftf/docs/introduction.html"},"Introduction to the Magento Functional Testing Framework"),"."),(0,a.mdx)("h2",{id:"what-testing-is-for"},"What testing is for"),(0,a.mdx)("p",null,"To ensure that extension submissions perform correctly for a user, MFTF tests are used to mimic the functionality expected via browser-based testing against a Magento instance."),(0,a.mdx)("p",null,"MFTF runs tests in a browser, using Selenium and Codeception to emulate the user behavior. MFTF tests are designed to be extensible and used in conjunction with existing MFTF code coverage. This allows vendor-supplied MFTF tests to describe the behavior of the extension and to integrate with the existing suites of MFTF coverage, leveraging reusable tests elements and modifying existing test flows as necessary."),(0,a.mdx)("p",null,"Functional testing in this way ensures that the experience of the end-user is as intended by the extension developer, allowing for the customizability and extensibility of Magento as a platform."),(0,a.mdx)("h2",{id:"when-testing-is-done"},"When testing is done"),(0,a.mdx)("p",null,"MFTF vendor supplied tests are run only where:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"There are MFTF tests included in the submission in the correct directory (",(0,a.mdx)("inlineCode",{parentName:"li"},"Tests/Mftf"),")"),(0,a.mdx)("li",{parentName:"ul"},"Only for MFTF v3.0 or greater"),(0,a.mdx)("li",{parentName:"ul"},"Only for Magento v2.4.0 or greater")),(0,a.mdx)("h2",{id:"what-is-being-checked"},"What is being checked"),(0,a.mdx)("p",null,"MFTF tests verify the proper functioning of the workflows that the extension introduces. They are meant to mimic the same code paths that the end user would take, by automating the clicks and data entry that the user would do. Providing comprehensive MFTF test coverage helps to speed up the EQP QA process."),(0,a.mdx)("h2",{id:"tools-and-environments-used"},"Tools and environments used"),(0,a.mdx)("p",null,"The Magento test infrastructure executes vendor-supplied MFTF tests in the most recent version of Magento in the 2.4.x release line, as well as the most up-to-date software compatible with that release. The test infrastructure uses the recommended setup for Magento installation with the standard MFTF setup and configuration. You can use the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento-cloud-docker"},"Magento Cloud Docker")," image to create a similar environment."),(0,a.mdx)("p",null,"See ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements.html"},"System Requirements")," for more information on supported software."),(0,a.mdx)("h2",{id:"reading-the-error-report"},"Reading the error report"),(0,a.mdx)("p",null,"MFTF returns two types of results, displayed as ",(0,a.mdx)("inlineCode",{parentName:"p"},"MFTF Vendor")," within the developer portal::"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Simplified results showing the status of each test executed"),(0,a.mdx)("li",{parentName:"ul"},"Allure XML results")),(0,a.mdx)("p",null,"See ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/mftf/docs/reporting.html"},"MFTF Reporting")," for further information."),(0,a.mdx)("p",null,"To diagnose a test failure, first ascertain if you can replicate the failure on your local environment. If you cannot, this indicates a configuration and/or environmental difference."),(0,a.mdx)("p",null,"The Allure results returned to Marketplace can be downloaded and displayed as an Allure report for simple consumption and identification of failure points."),(0,a.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Ensure that your tests generate, execute and pass in the specified environment configuration"),(0,a.mdx)("li",{parentName:"ul"},"Tests must be in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Test/Mftf")," directory within the extension"),(0,a.mdx)("li",{parentName:"ul"},"MFTF tests within this directory must follow the standard directory structure, separating ActionGroups, Tests, Pages, Sections, and so on, into their own directories"),(0,a.mdx)("li",{parentName:"ul"},"Ensure that tests names do not clash with existing Magento tests"),(0,a.mdx)("li",{parentName:"ul"},"If you are extending from, or merging into, an existing Magento test (or relying upon its entities), it must be required as a Composer prerequisite"),(0,a.mdx)("li",{parentName:"ul"},"The MFTF tests will be part of the final package that is made available to your customers. Do not include any sensitive or confidential data in test comments or code"),(0,a.mdx)("li",{parentName:"ul"},"If necessary, include a README, or other instructions, within the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Test")," directory, to explain any setup steps or caveats for running your MFTF tests"),(0,a.mdx)("li",{parentName:"ul"},"Ensure that any necessary credentials or user authorization (for example, to communicate via API key to your backend) is explained and supported via credential management in tests"),(0,a.mdx)("li",{parentName:"ul"},"Always follow the ",(0,a.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/mftf/docs/best-practices.html"},"MFTF Best Practices")," and use the ",(0,a.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/mftf/docs/tips-tricks.html"},"MFTF Tips & Tricks"),".")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-sellers-mftf-vendor-index-md-8c6c4189af768ec21fbb.js.map