(function ($) {
	
	$.githubProfile = {
			
		defaults: {
			user:		'TheConnMan',
			fields:		['Repos', 'Gists', 'Followers'],
			perLine:	3,
			width:		400,
			color:		'grey',
			company:	true,
			blog:		true
		},
		
		fieldMap: {'Repos': 'public_repos',
		           'Gists': 'public_gists',
		           'Followers': 'followers',
		           'Following': 'following',
		           'Joined': 'created_at',
		           'Last Active': 'updated_at'},
	
		init: function(me, options) {
			opts = $.extend({}, $.githubProfile.defaults, options);
			opts.perLine = Math.min(opts.perLine, opts.fields.length)
			$.githubProfile.getUser(me, opts);
		},
		
		constructHtml: function(opts, data) {
			var html = '<div class="ghProfile ghProfile-' + opts.color + '" style="width: ' + opts.width + 'px;">';
			html += '<div class="ghProfile-top">';
			html += '<table><tr>';
			html += '<td><a href="' + data.html_url + '"><img src="' + data.avatar_url + '" /></a></td><td>';
			html += (data.name ? '<h1>' + data.name + '</h1>' : '') + '<h2>' + data.login + '</h2>' + (opts.company && data.company ? '<h3>' + data.company + '</h3>' : '');
			html += opts.blog && data.blog ? '<a href="' + data.blog + '">' + data.blog + '</a>' : '';
			html += '</td></tr></table>';
			html += '</div>';
			html += '<div class="ghProfile-bottom">';
			html += '<table class="ghProfile-table">';
			html += opts.fields.map(function(d, i) {
				var val = data[$.githubProfile.fieldMap[d]];
				if (typeof val == 'string' &&new Date(val).getTime()) {
					val = new Date(val).getFullYear() + '-' + new Date(val).getMonth() + '-' + new Date(val).getDay()
				} else if (d[d.length - 1] == 's' && val == 1) {
					d = d.substring(0, d.length - 1);
				}
				var content = '<td style="width: ' + (100 / opts.perLine) + '%;"><div class="ghProfile-metric">' + val + '</div><div>' + d + '</div></td>'
				return (i % opts.perLine == 0 ? '<tr>' : '') + content + ((i + 1) % opts.perLine == 0 ? '</tr>' : '');
			}).join('');
			html += (opts.fields.length % 2 != 0 ? '</tr>' : '') + '</table>';
			html += '</div>'
			return html + '</div>'
		},
		
		getUser: function(me, opts) {
			$.get('https://api.github.com/users/' + opts.user, function(data) {
				$(me).html($.githubProfile.constructHtml(opts, data));
			});
		}
	};

    jQuery.fn.githubProfile = function(options) {
    	$.githubProfile.init(this, options);
    };

}( jQuery ));