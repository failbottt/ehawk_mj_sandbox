### Ehawk React Sandbox
---

_preface: I realize all of these issues could be PEBKAC errors and if they are I apologize. That said, I appreciate your time._

##### The problems:

It seems ehawk has issues running in a React environment.
 
1. Inside of our application we encountered an infinite loop. When I initialized the ehawk code it would the run the function and then never exit. Unfortunately, I'm unable to recreate that problem in this demo due to another issue (see #2).

2. `TypeError: e.toUTCString is not a function`: (I've included an image of the console output for that error). This happens whenever the local dev server starts. I'm confused as to why, because all I do is wrap your code in my own function and then call it (which you can see in the `/src` directory).

###### How to recreate

I tried to create the simplest implementation possible to share with you. 

I realize the words "simple" and "react" don't belong in the same sentence, but with docker it "should just work"(TM).

1. Go to `src/ehawk_6_0_7.js` and follow the instructions there.

2. (build dev server) `docker build -t ehawk_mj_sandbox .`

3. (run dev server) `docker run -it -p 3000:3000 ehawk_mj_sandbox`

4. Open your browser and go to `localhost:3000`

Inspect the page and you should see `TypeError: e.toUTCString is not a function`

---

Again, I apologize I wasn't able to recreate the infinite loop problem. Maybe it will show up for you all, but I wasn't able to get that far due to the `toUTCString is not a function` error.

Any help is greatly appreciated.
