module.exports = {
	// the tcp port that the Node-RED web server is listening on
	uiPort: 8000,

	// The file containing the flows. If not set, it defaults to flows_<hostname>.json
	flowFile: 'flows.json',

	credentialSecret: false,

	// By default, all user data is stored in a directory called `.node-red` under
	// the user's home directory. To use a different location, the following
	// property can be used
	userDir: '/data/',

	// Node-RED scans the `nodes` directory in the userDir to find local node files.
	// The following property can be used to specify an additional directory to scan.
	nodesDir: '/data/nodes',

	httpAdminRoot: '/admin',

	httpNodeRoot: '/',

	// When httpAdminRoot is used to move the UI to a different root path, the
	// following property can be used to identify a directory of static content
	// that should be served at http://localhost:1880/.
	httpStatic: '/',

	ui: { path: 'ui' },

	logging: {
		console: {
			// Level of logging to be recorded. Options are:
			// fatal - only those errors which make the application unusable should be recorded
			// error - record errors which are deemed fatal for a particular request + fatal errors
			// warn - record problems which are non fatal + errors + fatal errors
			// info - record information about the general running of the application + warn + error + fatal errors
			// debug - record information which is more verbose than info + info + warn + error + fatal errors
			// trace - record very detailed logging + debug + info + warn + error + fatal errors
			// off - turn off all logging (doesn't affect metrics or audit)
			level: 'trace',
			// Whether or not to include metric events in the log output
			metrics: false,
			// Whether or not to include audit events in the log output
			audit: false,
		},
	},

	editorTheme: {
		projects: {
			// To enable the Projects feature, set this value to true
			enabled: false,
		},
	},
}
