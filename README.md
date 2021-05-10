# SVG Banner Generator

**Deployed Site Link**: https://festive-hawking-3ee26f.netlify.app/

This site uses builder functions to allow dynamically generating a SVG banner based on text that the user updates.

It uses the query parameter to dynamically determine the SVG text at build time and then caches it if anyone tries to visit it again.

## Potential Limitations of this Approach

Query strings and URL lengths are not unlimited, so this is a danger of trying to set things solely with the URL.

Potential best practices that may arise from this is teaching developers how to compose different serverless functions in order to allow for more dynamic integrations of builder function sites.

So in this particular example, if the SVG stored requires a lot of different variables (i.e., shape positions, colors, sizes, etc.), then this may be better accomplished by sending it to a separate endpoint that handles that payload and returns some sort of prettified / unique hash that can then be utilized by the builder function accordingly?
