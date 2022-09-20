/*  Wizard which method to send the email */
	jQuery(function ($) {
		"use strict";
		// Chose here which method to send the email, available:
		// Phpmaimer text/html > phpmailer/quotation_phpmailer.php
		// Phpmaimer text/html SMPT > phpmailer/quotation_phpmailer_smtp.php
		// PHPmailer with html template > phpmailer/quotation_phpmailer_template.php
		// PHPmailer with html template SMTP> phpmailer/quotation_phpmailer_template_smtp.php
		$('form#wrapped').attr('action', 'phpmailer/quotation_phpmailer_template.php');
	});
