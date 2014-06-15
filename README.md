[GitHub-MiniProfile](https://theconnman.github.io/github-miniprofile)
==================
GitHub Mini-Profile is a small jQuery plugin which creates a mini GitHub profile card on a page. The design was inspired by [GitHub-Card](https://github.com/pazguille/github-card) which was created by [Guille Paz](https://github.com/pazguille). I wanted to make the card easier to install and customize, so I thought I'd try my hand at converting it into a jQuery Plugin.

# Install
Install is as easy as it gets. Download the [zip](https://github.com/TheConnMan/GitHub-MiniProfile/archive/master.zip), unzip the files, and include **github-miniprofile.js** and **github-miniprofile.css** in your web page.

# Use
The short answer:
```javascript
$('#myId').githubProfile();
```

The above code will replace the page element with ID `myId` with a nice looking card with all my info. Seeing as you probably want your own information in the card, you can pass in some options.

## Options
Below are the current options and their defaults. Pass them all in as a single object. There is another example further below.

### Username
The GitHub username to be used in the card.

	username: 'TheConnMan'
### Fields
The fields to be used in the bottom of the card. The current options are below:
- **Repos** - Number of public repositoriess
- **Gists** - Number of public Gists
- **Followers** - Number of users following the current user
- **Following** - Number of users the user is following
- **Joined** - Date account was created
- **Last Active** - Last account activity date

Pass the fields in as an array of strings. The array order is the order they will show up in on the card.

	fields: ['Repos', 'Gists', 'Followers']
### PerLine
PerLine is the number of fields per row at the bottom of the card. This is an option in case you make the card bigger or smaller and want the flexibility. If there are fewer fields than perLine then the fields will be adjusted to fill the row.

	perLine: 3
### Width
Card width in pixels.

	width: 400
### Company
Boolean for if the user's company is displayed. If the user has no company this is ignored.

	company: true
### Blog
Boolean for if the user's blog or website is displayed as a clickable link. If the user has no blog or website this is ignored.

	blog: true

## Example
A more complex example to get a feel for the syntax.
```javascript
$('#myId').githubProfile({
	username: 'TheConnMan',
	fields: ['Repos', 'Joined', 'Following', 'Gists'],
	perLine: 2,
	width: 400,
	company: false,
	blog: true
});
```