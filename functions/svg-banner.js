// Source: https://github.com/netlify/builder-functions-test/blob/main/functions/builder.js

const { builder } = require('@netlify/functions')

async function handler(event) {
  const pathParts = event.path.split('/')

  console.log({ pathParts })

  const time = new Date().toString()
  const title = decodeURI(pathParts[2])
  const siteId = process.env.SITE_ID

  console.log(`Time: ${time} - ${siteId}`)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SVG Banners!</title>
            <link rel="stylesheet" href="/css/styles.css" />
          </head>
          <body>
            <p class="current-time">Timestamp: ${time}</p>
            <svg
              viewBox="0 0 1200 630"
              xmlns="http://www.w3.org/2000/svg"
              class="social-image"
            >
              <g>
              <foreignObject x="0" y="0" width="1200" height="630">
                <div class="social-image__html">
                  <div class="social-image__text">
                    <h1
                      xmlns="http://www.w3.org/1999/xhtml"
                      class="social-image__title"
                      contenteditable
                      @input="updateBannerText"
                    >
                      ${title}
                    </h1>
                    <h2
                      xmlns="http://www.w3.org/1999/xhtml"
                      class="social-image__meta"
                      contenteditable
                    >
                      As you type, the background will adapt itself to the text,
                      making sure the shapes never overlap.
                    </h2>
                  </div>
                </div>
              </foreignObject>
            </g>
            <g>
              <g>
                <polygon
                  points="-40.57535934448242,200.7933871964371 221.42112336526702,-323.1995782230618 483.41760607501647,200.7933871964371"
                  fill="hsl(487.5278198713776, 86.1907055817502%, 60%)"
                  class="shape"
                  transform="matrix(0.27854822183928424,0.7765538539664669,-0.7765538539664669,0.27854822183928424,112.21716988400675,-216.10051407502948)"
                  opacity="0.6131140684220447"
                ></polygon>
                <rect
                  width="354.92441129441613"
                  height="354.92441129441613"
                  x="-321.04183587238833"
                  y="365.4021438124215"
                  fill="hsl(397.5278198713776, 86.1907055817502%, 60%)"
                  class="shape"
                  transform="matrix(0.5734383007316256,0.593121838456506,-0.593121838456506,0.5734383007316256,260.7391366278726,316.72536329018897)"
                  opacity="0.7966244141391923"
                ></rect>
                <polygon
                  points="1018.7255249023438,349.901297830043 1082.4208739112946,222.5105998121415 1146.1162229202453,349.901297830043"
                  stroke-width="16"
                  stroke="hsl(307.5278198713776, 86.1907055817502%, 60%)"
                  fill="transparent"
                  class="shape"
                  transform="matrix(0.8076167594283488,0.1684641501639219,-0.1684641501639219,0.8076167594283488,256.4550772988795,-127.28788244279531)"
                  opacity="0.5185304364773208"
                ></polygon>
                <polygon
                  points="607.8196411132812,127.64397392044864 659.2291298422397,24.82499646253183 710.6386185711981,127.64397392044864"
                  fill="hsl(487.5278198713776, 86.1907055817502%, 60%)"
                  class="shape"
                  transform="matrix(0.8235946745572027,0.04813327374088798,-0.04813327374088798,0.8235946745572027,119.96094387440905,-18.282686731738494)"
                  opacity="0.5486093094556036"
                ></polygon>
                <rect
                  width="591.0579081099027"
                  height="591.0579081099027"
                  x="287.5125846270905"
                  y="628.1424138534262"
                  fill="hsl(487.5278198713776, 86.1907055817502%, 60%)"
                  class="shape"
                  transform="matrix(0.8127589823084128,0.14159038341989552,-0.14159038341989552,0.8127589823084128,239.9522803824721,90.39610176716667)"
                  opacity="0.9350707885398609"
                ></rect>
                <rect
                  width="418.67121360329287"
                  height="418.67121360329287"
                  x="1197.9997067978475"
                  y="248.86314410334097"
                  fill="hsl(307.5278198713776, 86.1907055817502%, 60%)"
                  class="shape"
                  transform="matrix(0.6981587659567624,0.439544465916397,-0.439544465916397,0.6981587659567624,626.1905573380492,-480.28319790883813)"
                  opacity="0.5781650981932597"
                ></rect>
              </g>
            </g>
          </svg>
      </body>
      </html>
        `
  }
}

exports.handler = builder(handler)
