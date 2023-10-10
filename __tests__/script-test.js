// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// 🔥 DO NOT MODIFY THIS FILE!!!!! 🔥
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

const { fireEvent, getByText, queryByText } = require('@testing-library/dom')
require('@testing-library/jest-dom')
const { JSDOM } = require('jsdom')

const fs = require('fs')
const path = require('path')

const htmlFile = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')
const jsFile = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8')


let dom
let container

describe(`Weekend Salary Calculator:`, () => {
  beforeAll(() => {
    // Silence console.log statements while the tests run:
    console.log = () => {}
  })
  
  beforeEach(() => {
    dom = new JSDOM(htmlFile, { runScripts: 'dangerously' })

    // Execute script.js within the context of our jsdom instance:
    dom.window.eval(jsFile)

    container = dom.window.document.body
  })

  it(`Does a thing`, () => {
    expect('thing').toBe('thing')
  })
})
