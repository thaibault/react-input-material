import {defineConfig} from '@playwright/test'

const RUN_SERVER = false
const BASE_URL =  'http://localhost:8080/'

export const configuration = defineConfig({
    testDir: './end-to-end-tests',
    outputDir: './end-to-end-tests/results',
    // reporter: [['html', {outputFolder: './end-to-end-tests/report'}]],

    fullyParallel: true,
    /*
        Fail the build on CI if you accidentally left test.only in the source
        code.
    */
    forbidOnly: Boolean(process.env.CI),
    // Retry on CI only
    retries: process.env.CI ? 2 : 0,
    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,

    /*
        Shared settings for all the projects below.
        See https://playwright.dev/docs/api/class-testoptions.
    */
    use: {
        baseURL: BASE_URL,

        /*
            Collect trace when retrying the failed test.
            See https://playwright.dev/docs/trace-viewer
        */
        trace: 'on-first-retry'
    },

    projects: [
        {
            name: 'chromium',
            use: {browserName: 'chromium'}
        }
    ],

    ...(
        RUN_SERVER ?
            {
                webServer: {
                    command: 'yarn serve',
                    ignoreHTTPSErrors: true,
                    reuseExistingServer: false,
                    stdout: 'pipe',
                    stderr: 'pipe',
                    timeout: 5 * 60 * 1000, // Wait up to 5 minutes.
                    url: BASE_URL
                }
            } :
            {}
    )
})

export default configuration
