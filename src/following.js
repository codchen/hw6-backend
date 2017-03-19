// Handles all following-related requests

// Constants
const username = 'Tony'

// Handlers
const getFollowing = (req, res) => {
	return res.send({
		username,
		following: []
	})
}

const putFollowing = (req, res) => {
	return res.send({
		username,
		following: []
	})
}

const deleteFollowing = (req, res) => {
	return res.send({
		username,
		following: []
	})
}

module.exports = app => {
     app.get('/following/:user?', getFollowing)
     app.put('/following/:user', putFollowing)
     app.delete('/following/:user', deleteFollowing)
}