---
layout: homepage
title: "Home"
permalink: /
---
<div class="container-fluid">
	<div class="row full-height feature d-flex align-items-center">
		<div class="col d-flex justify-content-center">
			{% for nav in site.data.navigation %}
			<li>
				<a href="{{ site.url }}{{ nav.href }}">{{ nav.title }}</a>
			</li>
			{% endfor %}
		</div>

		<a class="feature-arrow-down" href="#twitter">
			<i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
		</a>
	</div>

	<div class="row">
		<div id="twitter-feed-bg" class="col-sm-8 block">
			<h1 style="padding:15px;">WHAT'S THE BUZZ</h1>
			<div id="twitter-feed">
				<a class="twitter-timeline" href="https://twitter.com/BanzoMadison"  data-widget-id="439193312549797888">Tweets by @BanzoMadison</a><br />
				<script>
				!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
				</script>
			</div>
		</div>
		<div class="col block">
			<h2>text</h2>
		</div>
	</div>
</div>