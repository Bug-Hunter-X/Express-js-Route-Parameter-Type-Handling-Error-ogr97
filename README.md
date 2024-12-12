# Express.js Route Parameter Type Handling Error

This repository demonstrates a common error in Express.js applications related to incorrect type handling of route parameters.  The issue arises when a route parameter is assumed to be of a certain type (e.g., integer) but the actual type received from the request is different (e.g., string). This discrepancy often leads to unexpected errors or database query failures.

## Bug Description

The `bug.js` file contains an Express.js route that expects an integer ID as a route parameter. However, Express.js receives this parameter as a string, which can cause issues when performing database queries or other operations requiring a numerical ID.

## Solution

The `bugSolution.js` file demonstrates a solution to handle this issue by explicitly converting the route parameter from a string to an integer before using it in the database query or any other operations requiring an integer type.

## How to Run

1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to reproduce the bug (or `node bugSolution.js` to observe the fix).