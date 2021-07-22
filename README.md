<h1>jwting-frontend</h1>

<b>Components</b>

<li>File grouping, where a component class is defined.
<li>All components have to provide a method to be appended to a parent element.
<li>The creator allosws, for ease of understanding, how to customize the component when creating it.
<li>The model defines all the elements that make up the component.
<li>Should it <i>also</i> dictate its behaviour?

<b>Controller</b>

<li>Should carry out the actual insertion of components, and... behaviour?.

<b>Requests</b>

Should take care of any backend interaction, grouping modules as needed.

<b>Router</b>

Will enable navigating the plain JS app. Let us see how it fairs after a bundler is included.

<b>Service</b>

Has lots of logic in it, it'll grow for sure!
