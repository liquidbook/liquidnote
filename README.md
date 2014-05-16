annotate-plugin
===============

WordPress Plugin that uses a shortcode to create an inline page annotation with a hide/show feature

Works in WordPress 3.9 or greater and assumes your running Jquery. This adds a button to the TinyMCE editor. The button has an annotation builder tool. Work In Process

Shortcode:
[lna_link id="noteid0123456789" type="video" text="This Text appears in link"] 

Generates: 
<a href="#" id="noteid0123456789" class="annotate-button">Your link text <i class="fa fa-video-camera"></i></a>

Shortcode:
[lna_content id="noteid0123456789" type="video"]

	[lna_header title="Your Title"]
	- title : blank is default
	- html : h2 is default - optional attribute
	- css : lna-title - optional attribute

	[lna_embed link="http://youtu.be/BDj1fYlwR00"]
	
	[lna_caption]Caption text here[/lna_caption]

[/lna_content]


Generates:
<div class="noteid0123456789 annotate-box lnvideo" style="">
	<div class="annotate-closebox">
		<a href="#"><i class="fa fa-times-circle fa-2x"></i></a>
	</div>
	<h2 class="lna-title">The Matrix</h2>
	<span class="ln-embed">
		<iframe width="474" height="267" src="http://www.youtube.com/embed/q7-ih0almfo?feature=oembed" frameborder="0" allowfullscreen=""></iframe>
	</span>
	<span class="lna-caption">Your caption text here!</span>	
</div>


