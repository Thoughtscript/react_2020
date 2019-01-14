# Styling 

This readme specifies the use and manner of styling used within this repo.

## Overview

1. CSS in JS
1. CXS
1. Flex Container

## UI Components

1. Background - Standard HTML background.

    ```CSS
    html, body {
       position: absolute;
       height: 100%;
       width: 100%;
       margin: 0;
       padding: 0;
    }
    ```

1. Row - Inherited by all 100% width elements.

    ```CSS
    .row {
       flex-direction: row;
    }
    ```

1. Box - Responsive Flex container - *Full Wide*.

    ```CSS
    .box {
       display: -webkit-flex;
       display: flex;
       width: 100%;
    }
    ```

1. Header - Fixed top positioned - *Full Wide*.

    ```CSS
    header {
       position: fixed;
       top: 0;
       width: 100%;
    }
    ```

1. Footer - Absolute bottom positioned - *Full Wide*.

    ```CSS
    footer {
       position: absolute;
       bottom: 0;
       width: 100%;
    }
    ```
