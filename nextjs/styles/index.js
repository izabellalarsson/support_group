import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}
:root {
    --headline-font: #1B224A;
    --font-grey: #343849;
    --main-bg: #F3F5FF;
    --sub-bg: #AEBDEF;
    --detail-red: #EE7171;
    --blue-line: #B9C4EA;
    --facebook-bg: #3B5998;
}
`

export default GlobalStyle