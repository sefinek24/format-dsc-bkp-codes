module.exports = {
	apps: [{
		name            : 'format-dsc-bkp-codes',
		script          : './index.js',

		log_date_format : 'HH:mm:ss, DD.MM.YYYY',
		error_file      : '/home/ubuntu/logs/www/format-dsc-bkp-codes/error.log',
		out_file        : '/home/ubuntu/logs/www/format-dsc-bkp-codes/out.log',

		max_restarts          : 3,
		restart_delay         : 4000,
		shutdown_with_message : true,
		wait_ready            : true,
	}],
};