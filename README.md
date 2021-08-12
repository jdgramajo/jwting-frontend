<h1>JWTING-FRONTEND</h1>

<i><b>This project's architecture is evolving. Upon reaching a stable enough design, it'll serve as the starting point for future projects.</b></i>

JWTING projects are related to authentication using JWT.

<b>Why not rely on some framework?</b>

I tried playing around with Angular and React and may come back to one of them (more likely React, because of its less opinionated approach) or even Vue (for the same reason).

My time with Angular left me wondering if I could use a similar approach, but with more freedom (and less abstraction).

Then, I thought "is it possible to do <b><i>eveything</i></b> using only JS?"

This made me learn a lot...

<h3>Bootstrap</h3>

Since the dawn of time (by that I mean when I started going on the new JS frontend approach), I never wanted to dive too deep into CSS and UI design. Why? My main motivation is to deliver an MVP as fast as possible and as lean as possible.

This is another reason to avoid using Angular. I am sure it is something I would not deffend too much when scaling, but for small one man army projects, it's not the right fit for me.

<h3>Webpack</h3>

On my learning journey, I was baffled by how complex everything was beginning to look, how long it took for the pages to load even locally, and a bunch of other issues when trying to only use HTML + JS.

This brought despair and tribulation to my heart.

But one day, like the proverbial solution from the heavens, I happened upon a video in which the whole dependency graph stuff was explained by one of the Webpack creators.

Since then I've been advancing on understanding how it works and have been reaping great benefits already, although I am a beginner in its use.

<h2>Let's go back to design talk...</h2>

I am not re-inventing the wheel here. What I <b>am</b> doing is bringing my own approach to existing design patterns and keeping it as lean as possible (for me and my purposes).

What this means is that some similarity to Angular's opinions will be found, but staying away from its heavy abstractions, I can expand my JS knowledge, without going through the learning curve of Vue, React, and others.

Also, I've been getting acquainted with transpilers, bundlers, and other topics, all of which are very interesting and satisfying.

With that said, these are some key parts of the design being followed:

<h3>Enpoint flow management</h3>

The application's workflow is ruled by the enpoints it provides. In that way, a determined enpoint may not even be more than network requests and redirects, without even requiring user interaction.

When the controller does load any number of components, then user interaction is possible and that is where user I/O is handled.

<h3>Components</h3>

Much like the Angular and other frameworks, they consist of tightly coupled files which provide UI elements so that the user may interact with the frontend, and its corresponding functionality scripts.

Some of their main characteristics and building blocks of components are:

<ul>
<li>A directory with a controller and, optionally, a model (template) are their main traits. Models may be shared, so it is possible that an endpoint consists of only a controller file.</li>
<li>The model is the <b>JS class</b> that specifies UI elements that are part of it, its Bootstrap classes, and <i>what</i> the component does, its capabilities. However, invoking such capabilities is a task for the endpoint's controller.</li>
<li>The controller is in charge of instanting, setting up, and reacting to user actions. It is also responsible for all navigation, using a simple, common to all the app, router. Network requests are handled by shared request scripts.</li>
</ul>

<h3>Requests</h3>

Should take care of any backend interaction, grouped in files as best makes sense to ease readability.

<h3>Router</h3>

Will enable navigating within the app (and outside of it, possibly). Since components are accessed when specific enpoints are called, this is basically the hub for the different possible flows, based on responses to user actions in the components, and application logic.

<h3>Service</h3>

Will encapsulate application logic, and will be shared as needed, via the imports allowed by the bundler. Use several files to focus on simplicity and readability.

<br>

<h1>Deploying to Heroku</h1>

The <a href="https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static">heroku-buildpack-static</a> is being used, configure it in the <code>static.json</code> file.

Special things to consider are the following commands:

<div>
<code>
heroku buildpacks:set https://github.com/hone/heroku-buildpack-static -a jwting-frontend
</code>
</div>
<div>
<code>
heroku static:deploy -a jwting-frontend
</code>
</div>

<br>
<p>
The webpack build for production is now sent to a build directory, which is ignored for commits, but has what is used by the buildpack to be able to deploy the app to Heroku.
</p>

<b>Important note:</b> The Heroku deploy currently requires a <b>manually added</b> <code>index.html</code> file that redirects to the entry endpoint for the app. The code that allows this is:

<div>
<code>
&ltscript>
window.location.href = "[entry endpoint]";
&lt/script>
</code>
</div>

<br>
that is all the content of the file, currently.
