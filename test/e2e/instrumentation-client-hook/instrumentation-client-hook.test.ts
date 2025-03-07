import { nextTestSetup } from 'e2e-utils'
import path from 'path'

describe('Instrumentation Client Hook', () => {
  // Case 1: Test with src folder
  describe('With src folder', () => {
    const { next, skipped } = nextTestSetup({
      files: path.join(__dirname, 'app-with-src'),
      skipDeployment: true,
    })

    if (skipped) {
      return
    }

    it('should execute instrumentation-client from src folder', async () => {
      const browser = await next.browser('/')

      const executed = await browser.eval(
        `window.__INSTRUMENTATION_CLIENT_EXECUTED`
      )

      expect(executed).toBe(true)
    })
  })

  // Case 2: Test with App Router
  describe('App Router', () => {
    const { next, skipped } = nextTestSetup({
      files: path.join(__dirname, 'app-router'),
      skipDeployment: true,
    })

    if (skipped) {
      return
    }

    it('should execute instrumentation-client from app router', async () => {
      const browser = await next.browser('/')

      const executed = await browser.eval(
        `window.__INSTRUMENTATION_CLIENT_EXECUTED`
      )

      expect(executed).toBe(true)
    })
  })

  // Case 3: Test with Pages Router
  describe('Pages Router', () => {
    const { next, skipped } = nextTestSetup({
      files: path.join(__dirname, 'pages-router'),
      skipDeployment: true,
    })

    if (skipped) {
      return
    }

    it('should execute instrumentation-client from pages router', async () => {
      const browser = await next.browser('/')

      const executed = await browser.eval(
        `window.__INSTRUMENTATION_CLIENT_EXECUTED`
      )

      expect(executed).toBe(true)
    })
  })
})
