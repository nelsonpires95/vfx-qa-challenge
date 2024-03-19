# VFX QA Challenge

This repository hosts a QA challenge for VFX Financial Plc. The challenge is divided into two parts: an API test ([Challenge Part 1](tests/challenge-part1.spec.ts)) and a UI test ([Challenge Part 2](tests/challenge-part2.spec.ts)). This challenge was built with Playwright, Axios and Typescript.

## Prerequisites

This project requires [Yarn](https://classic.yarnpkg.com/en/) to be installed on your system.

## Installation

To install the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/nelsonpires95/vfx-qa-challenge.git
    ```

2. Navigate into the project directory:

    ```bash
    cd vfx-qa-challenge
    ```

3. Install the dependencies:

    ```bash
    yarn install
    ```

## Usage

To run the tests, use the following command:

```bash
yarn playwright test
```