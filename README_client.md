(optional) transform jsx to js:
./node_modules/.bin/jsx src build 

(optional) browserify js:
./node_modules/.bin/browserify build/clientrenderer.js -o build/clientrenderer-browser.js 



start client version:

    $ python -m SimpleHTTPServer 3000

Browser: http://localhost:3000/client.html

