# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js servers: unresponsiveness caused by long-running, synchronous operations blocking the event loop.  The `bug.js` file shows a server that performs a computationally intensive task directly within the request handler. This blocks the event loop, preventing it from processing other requests and causing the server to hang.

The `bugSolution.js` file demonstrates how to solve this problem by using asynchronous operations (in this case, `setTimeout` for illustrative purposes, but generally, you would use worker threads or asynchronous libraries).